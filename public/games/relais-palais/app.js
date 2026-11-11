/* ==========================================================================
   RELAIS PALAIS — RHODE-STYLE INTERACTIVE STOREFRONT ENGINE
   ========================================================================== */

(function () {
  'use strict';

  const FREE_SHIPPING_THRESHOLD = 100;
  const KARINA_PRICE = 65;
  const SHOPIFY_VARIANT_ID = '48051013910580';

  // --- Announcement Ticker ---
  const announcements = [
    'made to order in small batches · allow 2 weeks for delivery',
    'complimentary us shipping on studio orders over $100',
    "karenina micro skirt · true 00's 6 inch rise · $65.00"
  ];
  let announcementIdx = 0;
  const announcementText = document.getElementById('announcementText');
  const prevAnnouncement = document.getElementById('prevAnnouncement');
  const nextAnnouncement = document.getElementById('nextAnnouncement');

  function setAnnouncement(idx) {
    announcementIdx = (idx + announcements.length) % announcements.length;
    announcementText.style.opacity = '0';
    setTimeout(() => {
      announcementText.textContent = announcements[announcementIdx];
      announcementText.style.opacity = '1';
    }, 160);
  }

  prevAnnouncement?.addEventListener('click', () => setAnnouncement(announcementIdx - 1));
  nextAnnouncement?.addEventListener('click', () => setAnnouncement(announcementIdx + 1));
  setInterval(() => setAnnouncement(announcementIdx + 1), 5500);

  // --- Sticky Header & Floating Sticky Buy Bar ---
  const siteHeader = document.getElementById('siteHeader');
  const stickyBuyBar = document.getElementById('stickyBuyBar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const heroSectionEl = document.querySelector('.hero-card');
  const pdpBuyBtnEl = document.getElementById('mainAddToBagBtn');
  const footerEl = document.querySelector('.footer-wrap');

  let heroVisible = true;
  let pdpBtnVisible = false;
  let footerVisible = false;

  function updateStickyBar() {
    const shouldShow = !heroVisible && !pdpBtnVisible && !footerVisible && window.scrollY > 380;
    stickyBuyBar.classList.toggle('is-visible', shouldShow);
    stickyBuyBar.setAttribute('aria-hidden', String(!shouldShow));
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === heroSectionEl) heroVisible = entry.isIntersecting;
          if (entry.target === pdpBuyBtnEl) pdpBtnVisible = entry.isIntersecting;
          if (entry.target === footerEl) footerVisible = entry.isIntersecting;
        });
        updateStickyBar();
      },
      { threshold: 0.08 }
    );
    if (heroSectionEl) observer.observe(heroSectionEl);
    if (pdpBuyBtnEl) observer.observe(pdpBuyBtnEl);
    if (footerEl) observer.observe(footerEl);
  }

  function handleScroll() {
    const y = window.scrollY;
    if (y > 8) {
      siteHeader.classList.add('is-scrolled');
    } else {
      siteHeader.classList.remove('is-scrolled');
    }
    updateStickyBar();
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  mobileMenuBtn?.addEventListener('click', () => {
    const isHidden = mobileNav.hasAttribute('hidden');
    if (isHidden) {
      mobileNav.removeAttribute('hidden');
      siteHeader.classList.add('menu-open');
    } else {
      mobileNav.setAttribute('hidden', '');
      siteHeader.classList.remove('menu-open');
    }
  });

  document.querySelectorAll('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.setAttribute('hidden', '');
      siteHeader.classList.remove('menu-open');
    });
  });

  // --- Hero Video Controls ---
  const heroVideo = document.getElementById('heroVideo');
  const heroPlayBtn = document.getElementById('heroPlayBtn');
  const heroPlayIcon = document.getElementById('heroPlayIcon');
  const heroMuteBtn = document.getElementById('heroMuteBtn');
  const heroMuteIcon = document.getElementById('heroMuteIcon');

  heroPlayBtn?.addEventListener('click', () => {
    if (heroVideo.paused) {
      heroVideo.play();
      heroPlayIcon.textContent = '❚❚';
    } else {
      heroVideo.pause();
      heroPlayIcon.textContent = '▶';
    }
  });

  heroMuteBtn?.addEventListener('click', () => {
    heroVideo.muted = !heroVideo.muted;
    heroMuteIcon.textContent = heroVideo.muted ? '✕♪' : '♪';
  });

  // --- PDP Gallery & Lightbox ---
  const gallerySlides = [
    { type: 'image', src: 'assets/karina-1.jpg', pos: 'center 38%', alt: 'Karenina micro skirt side profile on chrome chair' },
    { type: 'image', src: 'assets/karina-2.jpg', pos: 'center 55%', alt: 'Karenina micro skirt sheer leopard jacquard detail' },
    { type: 'image', src: 'assets/karina-3.jpg', pos: 'center 34%', alt: 'Karenina micro skirt three-quarter rear silhouette' },
    { type: 'image', src: 'assets/karina-4.jpg', pos: 'center 35%', alt: 'Karenina micro skirt low-hip fit profile' },
    { type: 'video', src: 'assets/hero.mp4' }
  ];

  let activeSlide = 0;
  const pdpMainImg = document.getElementById('pdpMainImg');
  const pdpMainVideo = document.getElementById('pdpMainVideo');
  const stageCounter = document.getElementById('stageCounter');
  const openLightboxBtn = document.getElementById('openLightboxBtn');
  const pdpThumbs = document.querySelectorAll('.pdp-thumb');

  function setSlide(index) {
    activeSlide = (index + gallerySlides.length) % gallerySlides.length;
    const item = gallerySlides[activeSlide];
    stageCounter.textContent = `${activeSlide + 1} / ${gallerySlides.length}`;

    pdpThumbs.forEach((btn, idx) => {
      const isCurrent = idx === activeSlide;
      btn.classList.toggle('active', isCurrent);
      btn.setAttribute('aria-selected', String(isCurrent));
    });

    if (item.type === 'video') {
      pdpMainImg.setAttribute('hidden', '');
      openLightboxBtn.setAttribute('hidden', '');
      pdpMainVideo.removeAttribute('hidden');
      pdpMainVideo.play().catch(() => {});
    } else {
      pdpMainVideo.pause();
      pdpMainVideo.setAttribute('hidden', '');
      openLightboxBtn.removeAttribute('hidden');
      pdpMainImg.removeAttribute('hidden');
      pdpMainImg.style.opacity = '0.35';
      setTimeout(() => {
        pdpMainImg.src = item.src;
        pdpMainImg.alt = item.alt;
        pdpMainImg.style.objectPosition = item.pos;
        pdpMainImg.style.opacity = '1';
      }, 100);
    }
  }

  pdpThumbs.forEach((btn) => {
    btn.addEventListener('click', () => setSlide(Number(btn.dataset.slide)));
  });

  document.getElementById('prevSlideBtn')?.addEventListener('click', () => setSlide(activeSlide - 1));
  document.getElementById('nextSlideBtn')?.addEventListener('click', () => setSlide(activeSlide + 1));

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeLightboxBtn = document.getElementById('closeLightboxBtn');

  function openLightbox() {
    const item = gallerySlides[activeSlide];
    if (item.type !== 'image') return;
    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
    lightbox.removeAttribute('hidden');
  }

  openLightboxBtn?.addEventListener('click', openLightbox);
  pdpMainImg?.addEventListener('click', openLightbox);
  closeLightboxBtn?.addEventListener('click', () => lightbox.setAttribute('hidden', ''));
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.setAttribute('hidden', '');
  });

  // --- Size Selection & Quantity ---
  let selectedSize = 'S (27–28")';
  let pdpQty = 1;

  const selectedSizeLabel = document.getElementById('selectedSizeLabel');
  const stickySizeText = document.getElementById('stickySizeText');
  const customNoteBox = document.getElementById('customNoteBox');
  const customHipInput = document.getElementById('customHipInput');
  const pdpQtyVal = document.getElementById('pdpQtyVal');
  const mainBuyLabel = document.getElementById('mainBuyLabel');
  const sizePills = document.querySelectorAll('.size-pill');

  function updatePdpButtonPrice() {
    const total = (KARINA_PRICE * pdpQty).toFixed(2);
    mainBuyLabel.textContent = `ADD TO BAG — $${total}`;
  }

  function selectSize(sizeValue) {
    selectedSize = sizeValue;
    selectedSizeLabel.textContent = sizeValue;
    stickySizeText.textContent = sizeValue === 'Custom Hip' ? 'Custom Hip' : `Size ${sizeValue}`;

    sizePills.forEach((pill) => {
      pill.classList.toggle('active', pill.dataset.size === sizeValue);
    });

    if (sizeValue === 'Custom Hip') {
      customNoteBox.removeAttribute('hidden');
    } else {
      customNoteBox.setAttribute('hidden', '');
    }
  }

  sizePills.forEach((pill) => {
    pill.addEventListener('click', () => selectSize(pill.dataset.size));
  });

  document.querySelectorAll('[data-select-size]').forEach((el) => {
    el.addEventListener('click', () => selectSize(el.dataset.selectSize));
  });

  document.getElementById('pdpQtyMinus')?.addEventListener('click', () => {
    if (pdpQty > 1) {
      pdpQty -= 1;
      pdpQtyVal.textContent = String(pdpQty);
      updatePdpButtonPrice();
    }
  });

  document.getElementById('pdpQtyPlus')?.addEventListener('click', () => {
    pdpQty += 1;
    pdpQtyVal.textContent = String(pdpQty);
    updatePdpButtonPrice();
  });

  // --- Accordions ---
  document.querySelectorAll('.accordion-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const panel = item.querySelector('.accordion-panel');
      const icon = trigger.querySelector('.acc-icon');
      const isOpen = item.classList.contains('open');

      if (isOpen) {
        item.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        panel.setAttribute('hidden', '');
        icon.textContent = '+';
      } else {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
        panel.removeAttribute('hidden');
        icon.textContent = '−';
      }
    });
  });

  // --- Atelier Philosophy Interactive Chapter Switcher ---
  const atelierChapters = {
    cut: {
      img: 'assets/karina-3.jpg',
      pos: '50% 32%',
      caption: 'STUDY 01 · OVER-THE-SHOULDER SILHOUETTE',
      heading: 'minimal seamwork. maximum line.',
      body: 'Stripped of zippers, belt loops, and heavy linings, Karenina sits flush against skin and lace alike—letting the sheer jacquard pattern do all the talking.',
      note: '“Designed for late nights, flash photography, and effortless 2000s proportion.”'
    },
    craft: {
      img: 'assets/karina-1.jpg',
      pos: '48% 36%',
      caption: 'STUDY 02 · SMALL-BATCH STUDIO PRODUCTION',
      heading: 'cut only when you order.',
      body: 'Rather than sitting in warehouse inventory, every Karenina micro skirt is cut and finished to order within two weeks—eliminating deadstock while allowing custom low-hip sizing.',
      note: '“Zero overproduction. Individually cut and inspected before dispatch.”'
    },
    styling: {
      img: 'assets/karina-4.jpg',
      pos: '49% 34%',
      caption: 'STUDY 03 · BEDROOM & EVENING STYLING',
      heading: 'sheer contrast, day to 2 a.m.',
      body: 'Pair the espresso leopard mesh against structured ivory Chantilly lace, an oversized vintage leather bomber, or bare skin and stiletto mules.',
      note: '“Sits six inches low on the hipbone for an unmistakable turn-of-the-millennium gap.”'
    }
  };

  const atelierImage = document.getElementById('atelierImage');
  const atelierCaption = document.getElementById('atelierCaption');
  const atelierHeading = document.getElementById('atelierHeading');
  const atelierBody = document.getElementById('atelierBody');
  const atelierNote = document.getElementById('atelierNote');

  document.querySelectorAll('.chapter-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      const data = atelierChapters[tab.dataset.tab];
      if (!data) return;

      document.querySelectorAll('.chapter-tab').forEach((t) => {
        const active = t === tab;
        t.classList.toggle('active', active);
        t.setAttribute('aria-selected', String(active));
      });

      atelierImage.style.opacity = '0.35';
      setTimeout(() => {
        atelierImage.src = data.img;
        atelierImage.style.objectPosition = data.pos;
        atelierImage.style.opacity = '1';
      }, 120);

      atelierCaption.textContent = data.caption;
      atelierHeading.textContent = data.heading;
      atelierBody.textContent = data.body;
      atelierNote.textContent = data.note;
    });
  });

  // --- Client Archive / Reviews Filter ---
  document.querySelectorAll('.filter-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      const filter = pill.dataset.filter;
      document.querySelectorAll('.filter-pill').forEach((p) => p.classList.toggle('active', p === pill));

      document.querySelectorAll('.review-item').forEach((card) => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.removeAttribute('hidden');
        } else {
          card.setAttribute('hidden', '');
        }
      });
    });
  });

  // --- Toast Helper ---
  const rhodeToast = document.getElementById('rhodeToast');
  let toastTimer = null;

  function showToast(msg) {
    rhodeToast.textContent = msg;
    rhodeToast.removeAttribute('hidden');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      rhodeToast.setAttribute('hidden', '');
    }, 3200);
  }

  // --- Waitlist & Newsletter ---
  document.querySelectorAll('[data-waitlist]').forEach((btn) => {
    btn.addEventListener('click', () => {
      showToast(`Added to Drop 02 waitlist: ${btn.dataset.waitlist}`);
      btn.textContent = 'ON WAITLIST ✓';
    });
  });

  document.getElementById('newsletterForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('newsletterEmail');
    const feedback = document.getElementById('newsletterFeedback');
    if (emailInput.value.trim()) {
      feedback.textContent = `You're on the Relais Palais studio list (${emailInput.value.trim()}).`;
      feedback.removeAttribute('hidden');
      emailInput.value = '';
    }
  });

  // --- Slide-Over Rhode Shopping Bag ---
  let cart = [];
  try {
    const saved = localStorage.getItem('rp_rhode_bag_v1');
    if (saved) cart = JSON.parse(saved);
  } catch (_) {
    cart = [];
  }

  const cartDrawer = document.getElementById('cartDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const headerBagCount = document.getElementById('headerBagCount');
  const drawerBagCount = document.getElementById('drawerBagCount');
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const shippingMsg = document.getElementById('shippingMsg');
  const shippingFill = document.getElementById('shippingFill');
  const drawerUpsell = document.getElementById('drawerUpsell');

  function saveCart() {
    try {
      localStorage.setItem('rp_rhode_bag_v1', JSON.stringify(cart));
    } catch (_) {}
  }

  function openCart() {
    drawerBackdrop.removeAttribute('hidden');
    cartDrawer.classList.add('is-open');
    cartDrawer.setAttribute('aria-hidden', 'false');
  }

  function closeCart() {
    cartDrawer.classList.remove('is-open');
    cartDrawer.setAttribute('aria-hidden', 'true');
    setTimeout(() => {
      if (!cartDrawer.classList.contains('is-open')) {
        drawerBackdrop.setAttribute('hidden', '');
      }
    }, 320);
  }

  document.getElementById('openCartBtn')?.addEventListener('click', openCart);
  document.getElementById('closeCartBtn')?.addEventListener('click', closeCart);
  drawerBackdrop?.addEventListener('click', closeCart);

  function addToCart(item) {
    const existing = cart.find((x) => x.key === item.key);
    if (existing) {
      existing.qty += item.qty;
    } else {
      cart.push({ ...item });
    }
    saveCart();
    renderCart();
    openCart();
  }

  function renderCart() {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    headerBagCount.textContent = String(totalQty);
    drawerBagCount.textContent = String(totalQty);
    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    checkoutBtn.textContent = subtotal > 0 ? `CHECKOUT — $${subtotal.toFixed(2)}` : 'YOUR BAG IS EMPTY';
    checkoutBtn.disabled = subtotal === 0;

    // Free shipping progress bar
    const pct = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
    shippingFill.style.width = `${pct}%`;
    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
      shippingMsg.innerHTML = 'Complimentary <strong>US studio shipping</strong> unlocked ✓';
    } else {
      const remaining = (FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2);
      shippingMsg.innerHTML = `Add <strong>$${remaining}</strong> more for complimentary US shipping`;
    }

    // Hide wash bag upsell if already in bag
    const hasWashBag = cart.some((x) => x.key === 'wash-bag');
    if (hasWashBag) {
      drawerUpsell.setAttribute('hidden', '');
    } else {
      drawerUpsell.removeAttribute('hidden');
    }

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="empty-bag-state">
          <p>Your Relais Palais bag is currently empty.</p>
          <a href="#shop-karenina" class="btn-pill btn-solid-dark" id="emptyShopBtn">SHOP KARENINA — $65.00</a>
        </div>
      `;
      document.getElementById('emptyShopBtn')?.addEventListener('click', closeCart);
      return;
    }

    cartItemsContainer.innerHTML = cart
      .map(
        (item, idx) => `
        <div class="cart-line-item">
          <img src="${item.img}" alt="${item.title}" class="cart-line-img" />
          <div>
            <div class="cart-line-top">
              <span class="cart-line-title">${item.title}</span>
              <span class="cart-line-price">$${(item.price * item.qty).toFixed(2)}</span>
            </div>
            <div class="cart-line-variant">${item.variant}</div>
            <div class="cart-line-controls">
              <div class="mini-stepper">
                <button type="button" data-cart-dec="${idx}" aria-label="Decrease">−</button>
                <span>${item.qty}</span>
                <button type="button" data-cart-inc="${idx}" aria-label="Increase">+</button>
              </div>
              <button type="button" class="remove-line-btn" data-cart-rem="${idx}">Remove</button>
            </div>
          </div>
        </div>
      `
      )
      .join('');

    cartItemsContainer.querySelectorAll('[data-cart-dec]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const i = Number(btn.dataset.cartDec);
        if (cart[i].qty > 1) cart[i].qty -= 1;
        else cart.splice(i, 1);
        saveCart();
        renderCart();
      });
    });

    cartItemsContainer.querySelectorAll('[data-cart-inc]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const i = Number(btn.dataset.cartInc);
        cart[i].qty += 1;
        saveCart();
        renderCart();
      });
    });

    cartItemsContainer.querySelectorAll('[data-cart-rem]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const i = Number(btn.dataset.cartRem);
        cart.splice(i, 1);
        saveCart();
        renderCart();
      });
    });
  }

  renderCart();

  // Main PDP Add to Bag
  document.getElementById('mainAddToBagBtn')?.addEventListener('click', () => {
    const customText = customHipInput?.value.trim();
    const variantLabel =
      selectedSize === 'Custom Hip' && customText
        ? `Custom Hip (${customText}) · Made to order`
        : `Low-Hip ${selectedSize} · Made to order`;

    addToCart({
      key: `karina-${selectedSize}-${customText || 'std'}`,
      title: 'karenina micro skirt',
      variant: variantLabel,
      price: KARINA_PRICE,
      qty: pdpQty,
      img: 'assets/karina-1.jpg',
      isKarina: true
    });
  });

  // Sticky Bottom Bar Add
  document.getElementById('stickyAddBtn')?.addEventListener('click', () => {
    addToCart({
      key: `karina-${selectedSize}-std`,
      title: 'karenina micro skirt',
      variant: `Low-Hip ${selectedSize} · Made to order`,
      price: KARINA_PRICE,
      qty: 1,
      img: 'assets/karina-1.jpg',
      isKarina: true
    });
  });

  // Quick Add Buttons on Hero & Cards
  document.querySelectorAll('[data-quick-add]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.quickAdd;
      if (mode === 'karina-custom') {
        addToCart({
          key: 'karina-Custom Hip-std',
          title: 'karenina micro skirt',
          variant: 'Bespoke Hip Measurement · Made to order',
          price: KARINA_PRICE,
          qty: 1,
          img: 'assets/karina-2.jpg',
          isKarina: true
        });
      } else if (mode === 'karina-duo') {
        addToCart({
          key: 'karina-S (27–28")-std',
          title: 'karenina micro skirt',
          variant: 'Low-Hip S (27–28") · Made to order',
          price: KARINA_PRICE,
          qty: 2,
          img: 'assets/karina-3.jpg',
          isKarina: true
        });
      } else {
        addToCart({
          key: 'karina-S (27–28")-std',
          title: 'karenina micro skirt',
          variant: 'Low-Hip S (27–28") · Made to order',
          price: KARINA_PRICE,
          qty: 1,
          img: 'assets/karina-1.jpg',
          isKarina: true
        });
      }
    });
  });

  // Upsell Wash Bag
  document.getElementById('addWashBagBtn')?.addEventListener('click', () => {
    addToCart({
      key: 'wash-bag',
      title: 'atelier mesh wash bag',
      variant: 'Delicate garment care',
      price: 18,
      qty: 1,
      img: 'assets/karina-2.jpg',
      isKarina: false
    });
  });

  // --- Modals (Size Guide, Policy, Checkout Handoff) ---
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');
  const closeModalBtn = document.getElementById('closeModalBtn');

  function openModal(title, html) {
    modalTitle.textContent = title;
    modalContent.innerHTML = html;
    modalBackdrop.removeAttribute('hidden');
  }

  function closeModal() {
    modalBackdrop.setAttribute('hidden', '');
  }

  closeModalBtn?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  function showSizeGuide() {
    openModal(
      '6" rise & low-hip size guide',
      `
      <p>The <strong>karenina micro skirt</strong> sits low across the hipbone with a true early-2000s <strong>6-inch rise</strong>. Measure around your low hip (approx. 3.5" below navel) where the top edge of the skirt rests.</p>
      <table class="size-table">
        <thead>
          <tr>
            <th>SIZE</th>
            <th>LOW-HIP</th>
            <th>RISE</th>
            <th>GARMENT LENGTH</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>XS</td><td>25" – 26"</td><td>6.0"</td><td>8.5" micro</td></tr>
          <tr><td>S</td><td>27" – 28"</td><td>6.0"</td><td>8.75" micro</td></tr>
          <tr><td>M</td><td>29" – 30"</td><td>6.0"</td><td>9.0" micro</td></tr>
          <tr><td>L</td><td>31" – 32"</td><td>6.0"</td><td>9.25" micro</td></tr>
          <tr><td>Custom Hip</td><td>Exact inch note</td><td>6.0"</td><td>Cut to frame</td></tr>
        </tbody>
      </table>
      <p style="margin-bottom:0;">Four-way sheer jacquard stretch mesh offers forgiving recovery. Select <strong>Custom Hip</strong> on the product card for bespoke studio cutting at no extra charge.</p>
      `
    );
  }

  function showPolicyModal() {
    openModal(
      'relais palais studio policy',
      `
      <p><strong>Made to Order Lead Time</strong><br/>Every Karenina micro skirt is individually cut and sewn upon order. Please allow up to <strong>2 weeks for delivery</strong>.</p>
      <p><strong>Returns &amp; Exchanges</strong><br/>Per official Relais Palais studio policy: <strong>All sales final, no returns.</strong></p>
      <p style="margin-bottom:0;"><strong>Garment Care</strong><br/>Hand wash cold in a delicate mesh bag and lay flat to dry away from direct heat.</p>
      `
    );
  }

  ['openSizeGuideNav', 'openSizeGuidePdp', 'openSizeGuideEditorial', 'openSizeGuideFooter', 'mobileSizeBtn'].forEach(
    (id) => document.getElementById(id)?.addEventListener('click', showSizeGuide)
  );

  ['openPolicyNav', 'openPolicyFooter', 'mobilePolicyBtn'].forEach((id) =>
    document.getElementById(id)?.addEventListener('click', showPolicyModal)
  );

  // Checkout & Express Pay Proof-of-Concept Handoff
  function handleCheckout(methodName) {
    const karinaQty = Math.max(
      1,
      cart.filter((i) => i.isKarina).reduce((s, i) => s + i.qty, 0)
    );
    const liveShopifyCheckoutUrl = `https://relaispalais.com/cart/${SHOPIFY_VARIANT_ID}:${karinaQty}`;

    closeCart();
    openModal(
      `${methodName.toLowerCase()} · client preview`,
      `
      <p>This Rhode-inspired storefront is wired directly to <strong>Relais Palais</strong>'s product catalog data (<code>karenina micro skirt</code> · Shopify Variant <code>#${SHOPIFY_VARIANT_ID}</code>).</p>
      <p>In production—either as a custom Shopify Online Store 2.0 theme or headless storefront—clicking checkout passes the selected size/custom hip note straight to Shopify Checkout.</p>
      <div style="margin-top:20px; display:flex; flex-wrap:wrap; gap:10px;">
        <a href="${liveShopifyCheckoutUrl}" target="_blank" rel="noopener noreferrer" class="btn-pill btn-solid-dark">
          TEST LIVE SHOPIFY CART (${karinaQty}x) ↗
        </a>
        <button type="button" class="btn-pill btn-outline-dark" id="dismissCheckoutModal">
          CONTINUE EXPLORING
        </button>
      </div>
      `
    );
    document.getElementById('dismissCheckoutModal')?.addEventListener('click', closeModal);
  }

  checkoutBtn?.addEventListener('click', () => handleCheckout('Checkout'));
  document.querySelectorAll('[data-express]').forEach((btn) => {
    btn.addEventListener('click', () => handleCheckout(btn.dataset.express));
  });

  // Escape key closes overlays
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeModal();
      lightbox?.setAttribute('hidden', '');
    }
  });
})();
