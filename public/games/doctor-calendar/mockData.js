// mockData.js — Bilingual (EN / ES) Orthopedic Clinic, Booking & Admin Roster Data for Dr. Luis Montes, MD, FAAOS
window.CLINIC_DATA = {
  doctor: {
    id: "dr-luis-montes",
    name: "Dr. Luis Montes, MD, FAAOS",
    shortName: "Dr. Luis Montes",
    initials: "LM",
    npi: "1487920341",
    experienceYears: 16,
    rating: 4.9,
    reviewCount: 318,
    ratingLabel: {
      en: "4.9★ (310+ patient reviews)",
      es: "4.9★ (310+ reseñas de pacientes)"
    },
    specialty: {
      en: "Board-Certified Orthopedic Surgeon & Sports Medicine",
      es: "Cirujano Ortopédico Certificado y Traumatología Deportiva"
    },
    subspecialties: {
      en: [
        "Arthroscopic Knee & Shoulder Reconstruction",
        "Robotic-Assisted Hip & Knee Replacement",
        "Sports Trauma & Cartilage Preservation",
        "Ultrasound-Guided Joint Injections"
      ],
      es: [
        "Reconstrucción Artroscópica de Rodilla y Hombro",
        "Reemplazo Articular Asistido por Robot (Cadera y Rodilla)",
        "Traumatología Deportiva y Preservación de Cartílago",
        "Infiltraciones Articulares Guiadas por Ultrasonido"
      ]
    },
    education: {
      en: "Fellowship in Sports Medicine • American Academy of Orthopaedic Surgeons (FAAOS)",
      es: "Alta Especialidad en Medicina Deportiva • Miembro Titular FAAOS"
    },
    languagesSpoken: {
      en: "English & Español (Native Bilingual Clinic)",
      es: "Español e Inglés (Clínica 100% Bilingüe)"
    },
    clinic: {
      name: "Montes Orthopedics & Joint Center - Suite 410",
      addressLine1: "2450 Medical Center Pkwy, Suite 410",
      cityStateZip: "Houston, TX 77030",
      phone: "(713) 555-0194",
      whatsapp: "+1 (713) 555-0199",
      parkingNote: {
        en: "Validated ground-floor orthopedic & mobility parking in Garage B (wheelchair & crutch accessible).",
        es: "Estacionamiento validado en Planta Baja (Garage B) con acceso directo para sillas de ruedas y muletas."
      }
    }
  },

  insurances: [
    {
      id: "bcbs",
      code: "BCBS",
      label: { en: "BlueCross BlueShield", es: "BlueCross BlueShield" },
      badge: { en: "In-Network PPO/EPO", es: "Red Preferente PPO/EPO" }
    },
    {
      id: "aetna",
      code: "AETNA",
      label: { en: "Aetna", es: "Aetna" },
      badge: { en: "In-Network", es: "Dentro de Red" }
    },
    {
      id: "uhc",
      code: "UHC",
      label: { en: "UnitedHealthcare", es: "UnitedHealthcare" },
      badge: { en: "In-Network", es: "Dentro de Red" }
    },
    {
      id: "cigna",
      code: "CIGNA",
      label: { en: "Cigna", es: "Cigna" },
      badge: { en: "In-Network", es: "Dentro de Red" }
    },
    {
      id: "medicare",
      code: "MEDICARE",
      label: { en: "Medicare", es: "Medicare" },
      badge: { en: "Participating Provider", es: "Proveedor Participante" }
    },
    {
      id: "workers-comp",
      code: "WORK_COMP",
      label: { en: "Workers' Comp", es: "Compensación Laboral (Workers' Comp)" },
      badge: { en: "Authorized DWC", es: "Autorizado DWC" }
    },
    {
      id: "self-pay",
      code: "SELF_PAY",
      label: { en: "Self-Pay / Cash Package", es: "Pago Particular / Sin Seguro" },
      badge: { en: "Transparent Flat Rates", es: "Tarifa Fija Transparente" }
    }
  ],

  appointmentTypes: [
    {
      id: "new-patient-eval",
      durationMinutes: 45,
      priceDisplay: { en: "$180", es: "$180" },
      priceNote: { en: "Self-pay estimate • Or standard specialist copay", es: "Estimado particular • O copago de especialista" },
      modality: { en: "In-Person", es: "Presencial" },
      modalityType: "in-person",
      accentColor: "sky",
      badge: { en: "Most Popular", es: "Más Solicitada" },
      title: {
        en: "New Patient Joint / Injury Evaluation",
        es: "Valoración de Primera Vez (Lesión o Articulación)"
      },
      summary: {
        en: "Comprehensive orthopedic physical exam, biomechanical assessment, and treatment roadmap for acute or chronic joint pain.",
        es: "Examen físico ortopédico integral, evaluación biomecánica y plan de tratamiento para dolor articular agudo o crónico."
      },
      prepInstructions: {
        en: "Bring any prior X-rays or MRI discs/reports and wear loose clothing around the injured joint.",
        es: "Traiga radiografías o discos/reportes de resonancia magnética previos y use ropa holgada o shorts alrededor de la articulación lesionada."
      },
      prepChecklist: {
        en: [
          "Bring any prior X-rays or MRI discs/reports (or digital portal login)",
          "Wear loose clothing or athletic shorts/tank top around the injured joint",
          "Arrive 15 minutes early for orthopedic intake & on-site digital X-ray if needed"
        ],
        es: [
          "Traer radiografías o discos/reportes de resonancia previos (o acceso digital)",
          "Usar ropa cómoda/holgada (shorts o camiseta sin mangas según la articulación)",
          "Llegar 15 minutos antes para registro y rayos X digitales en clínica si se requieren"
        ]
      }
    },
    {
      id: "post-op-followup",
      durationMinutes: 20,
      priceDisplay: { en: "Included / $0", es: "Incluido / $0" },
      priceNote: { en: "90-day global surgical package", es: "Cubierto en paquete quirúrgico global (90 días)" },
      modality: { en: "In-Person", es: "Presencial" },
      modalityType: "in-person",
      accentColor: "emerald",
      badge: { en: "Global Post-Op", es: "Control Quirúrgico" },
      title: {
        en: "Post-Operative / Surgical Follow-Up",
        es: "Control Postoperatorio / Retiro de Puntos"
      },
      summary: {
        en: "Suture removal, splint/cast check, and physical therapy clearance.",
        es: "Retiro de puntos o grapas, revisión de férula/yeso y autorización para iniciar fisioterapia."
      },
      prepInstructions: {
        en: "Suture removal, splint/cast check, and physical therapy clearance. Keep incision dressing dry until Dr. Montes inspects the wound.",
        es: "Retiro de puntos, revisión de férula/inmovilizador y pase a rehabilitación. Mantenga el vendaje seco hasta que el Dr. Montes revise la herida."
      },
      prepChecklist: {
        en: [
          "Suture/staple removal and incision healing inspection",
          "Splint, brace, or cast adjustment and range-of-motion check",
          "Customized Physical Therapy (PT) protocol & return-to-work clearance"
        ],
        es: [
          "Retiro de suturas y valoración de cicatrización quirúrgica",
          "Ajuste de férula, rodillera/cabestrillo o yeso y medición de movilidad",
          "Entrega de protocolo de Fisioterapia y certificado laboral/deportivo"
        ]
      }
    },
    {
      id: "imaging-review",
      durationMinutes: 20,
      priceDisplay: { en: "$110", es: "$110" },
      priceNote: { en: "Self-pay estimate • Covered by insurance", es: "Estimado particular • Cubierto por seguro" },
      modality: { en: "In-Person or Video", es: "Presencial o Video" },
      modalityType: "hybrid",
      accentColor: "indigo",
      badge: { en: "Imaging Walkthrough", es: "Lectura de Estudios" },
      title: {
        en: "MRI & X-Ray Results Review",
        es: "Revisión de Resonancia Magnética y Radiografías"
      },
      summary: {
        en: "Walkthrough of imaging findings and surgical vs. conservative treatment plan.",
        es: "Explicación detallada en pantalla de sus imágenes y definición de plan conservador vs. quirúrgico."
      },
      prepInstructions: {
        en: "Walkthrough of imaging findings and surgical vs. conservative treatment plan. Have your imaging center name or CD/DICOM link ready.",
        es: "Explicación paso a paso de hallazgos en resonancia/rayos X y plan conservador vs. quirúrgico. Tenga a la mano su CD o enlace DICOM."
      },
      prepChecklist: {
        en: [
          "Side-by-side screen walkthrough of your MRI slices & X-ray films",
          "Clear explanation of meniscus, ligament (ACL/rotator cuff), or cartilage status",
          "Step-by-step comparison of conservative rehab vs. arthroscopic options"
        ],
        es: [
          "Revisión visual corte por corte de su Resonancia Magnética y Radiografías",
          "Explicación clara del estado de meniscos, ligamentos (LCA/manguito rotador) o cartílago",
          "Comparativa honesta entre tratamiento conservador y cirugía artroscópica"
        ]
      }
    },
    {
      id: "joint-injection",
      durationMinutes: 30,
      priceDisplay: { en: "$150", es: "$150" },
      priceNote: { en: "Includes ultrasound guidance", es: "Incluye guía por ultrasonido en consultorio" },
      modality: { en: "In-Person", es: "Presencial" },
      modalityType: "in-person",
      accentColor: "amber",
      badge: { en: "Pain Relief Procedure", es: "Alivio Articular" },
      title: {
        en: "Joint Pain Injection / Infiltration",
        es: "Infiltración Articular (Rodilla / Hombro)"
      },
      summary: {
        en: "Ultrasound-guided cortisone or hyaluronic acid injection for joint relief.",
        es: "Infiltración guiada por ultrasonido con cortisona o ácido hialurónico (viscosuplementación) para alivio del dolor."
      },
      prepInstructions: {
        en: "Ultrasound-guided cortisone or hyaluronic acid injection for joint relief. Notify Dr. Montes if you take blood thinners or have diabetes.",
        es: "Infiltración guiada por ultrasonido con cortisona o ácido hialurónico. Indique si toma anticoagulantes o padece diabetes."
      },
      prepChecklist: {
        en: [
          "Real-time ultrasound guidance for pinpoint intra-articular accuracy",
          "Topical cold spray & local numbing for a gentle, low-pain experience",
          "Avoid strenuous heavy lifting or high-impact running for 48 hours post-injection"
        ],
        es: [
          "Guía ecográfica en tiempo real para máxima precisión intraarticular",
          "Anestesia local tópica para un procedimiento rápido y prácticamente indoloro",
          "Evitar impacto intenso o cargar peso durante las primeras 48 horas"
        ]
      }
    },
    {
      id: "telehealth-second-opinion",
      durationMinutes: 15,
      priceDisplay: { en: "$95", es: "$95" },
      priceNote: { en: "Flat virtual consultation rate", es: "Tarifa fija de videoconsulta" },
      modality: { en: "Virtual Video", es: "Videoconsulta Virtual" },
      modalityType: "virtual",
      accentColor: "violet",
      badge: { en: "Remote Video", es: "100% En Línea" },
      title: {
        en: "Telehealth Orthopedic Second Opinion",
        es: "Videoconsulta / Segunda Opinión Quirúrgica"
      },
      summary: {
        en: "Remote consultation and surgical triage.",
        es: "Consulta remota por videollamada y valoración de segunda opinión antes de decidir operarse."
      },
      prepInstructions: {
        en: "Remote consultation and surgical triage. Upload your MRI report or surgical recommendation prior to joining the secure video link.",
        es: "Consulta remota y triaje quirúrgico. Tenga listo su reporte de resonancia o propuesta quirúrgica previa al conectarse al enlace seguro."
      },
      prepChecklist: {
        en: [
          "Direct HD video link sent via SMS/WhatsApp & Email (no app download required)",
          "Review of outside surgical recommendations and alternative recovery timelines",
          "Prescription refills or imaging orders sent electronically to your local center"
        ],
        es: [
          "Enlace directo de video HD por WhatsApp/SMS y correo (sin descargar apps)",
          "Revisión de propuestas quirúrgicas externas y tiempos reales de recuperación",
          "Envío electrónico de órdenes de estudios o recetas a su farmacia"
        ]
      }
    }
  ],

  injuredJoints: [
    {
      id: "knee",
      icon: "🦵",
      label: { en: "Knee", es: "Rodilla" },
      bilingualTag: "Knee / Rodilla",
      commonIssues: {
        en: "Meniscus tear, ACL/MCL sprain, osteoarthritis, runner's knee",
        es: "Lesión de menisco, ligamento cruzado (LCA), desgaste de cartílago"
      }
    },
    {
      id: "shoulder",
      icon: "💪",
      label: { en: "Shoulder", es: "Hombro" },
      bilingualTag: "Shoulder / Hombro",
      commonIssues: {
        en: "Rotator cuff tear, impingement, labrum instability, frozen shoulder",
        es: "Manguito rotador, pinzamiento, luxación/labrum, hombro congelado"
      }
    },
    {
      id: "hip",
      icon: "🦴",
      label: { en: "Hip", es: "Cadera" },
      bilingualTag: "Hip / Cadera",
      commonIssues: {
        en: "Trochanteric bursitis, labral tear, hip arthritis, groin pain",
        es: "Bursitis trocantérica, choque femoroacetabular, artrosis de cadera"
      }
    },
    {
      id: "spine",
      icon: "🧘",
      label: { en: "Spine", es: "Columna" },
      bilingualTag: "Spine / Columna",
      commonIssues: {
        en: "Sciatica, herniated disc, lumbar strain, cervical radiculopathy",
        es: "Ciática, hernia de disco, lumbalgia mecánica, dolor cervical"
      }
    },
    {
      id: "hand-wrist",
      icon: "✋",
      label: { en: "Hand & Wrist", es: "Mano y Muñeca" },
      bilingualTag: "Hand & Wrist / Mano",
      commonIssues: {
        en: "Carpal tunnel, trigger finger, distal radius fracture, TFCC tear",
        es: "Túnel del carpo, dedo en gatillo, fractura de muñeca, tendinitis"
      }
    },
    {
      id: "ankle",
      icon: "🦶",
      label: { en: "Ankle", es: "Tobillo" },
      bilingualTag: "Ankle / Tobillo",
      commonIssues: {
        en: "Lateral ankle sprain, Achilles tendinitis, plantar fasciitis, fracture",
        es: "Esguince de tobillo, tendón de Aquiles, fascitis plantar, fractura"
      }
    }
  ],

  timeSlots: {
    morning: [
      { id: "08:00", label: "8:00 AM", tag: { en: "Early Bird", es: "Temprano" }, available: true },
      { id: "08:30", label: "8:30 AM", available: true },
      { id: "09:00", label: "9:00 AM", available: true },
      { id: "09:30", label: "9:30 AM", available: false },
      { id: "10:00", label: "10:00 AM", tag: { en: "Popular", es: "Popular" }, available: true },
      { id: "10:30", label: "10:30 AM", available: true },
      { id: "11:00", label: "11:00 AM", available: true },
      { id: "11:30", label: "11:30 AM", available: true }
    ],
    afternoon: [
      { id: "13:30", label: "1:30 PM", available: true },
      { id: "14:00", label: "2:00 PM", tag: { en: "Post-Lunch", es: "Tarde" }, available: true },
      { id: "14:30", label: "2:30 PM", available: true },
      { id: "15:00", label: "3:00 PM", available: false },
      { id: "15:30", label: "3:30 PM", available: true },
      { id: "16:00", label: "4:00 PM", available: true },
      { id: "16:30", label: "4:30 PM", tag: { en: "Last Slot", es: "Último Turno" }, available: true }
    ]
  },

  samplePatients: {
    en: {
      fullName: "Mateo Rivera",
      email: "mateo.rivera@example.com",
      phone: "(713) 555-0148",
      dob: "1986-04-14",
      insuranceId: "bcbs",
      memberId: "BCBS-8849201-TX",
      injuredJoint: "knee",
      injurySide: "Right",
      painLevel: 7,
      hasImaging: true,
      smsOptIn: true,
      clinicalNotes: "Felt a sharp pop in my right knee playing recreational soccer last Thursday. Mild swelling on the inner side and stiffness going down stairs. Urgent Care took an X-ray (no fracture) and recommended an orthopedic evaluation."
    },
    es: {
      fullName: "Mateo Rivera",
      email: "mateo.rivera@example.com",
      phone: "(713) 555-0148",
      dob: "1986-04-14",
      insuranceId: "bcbs",
      memberId: "BCBS-8849201-TX",
      injuredJoint: "knee",
      injurySide: "Right",
      painLevel: 7,
      hasImaging: true,
      smsOptIn: true,
      clinicalNotes: "Sentí un chasquido fuerte en la rodilla derecha jugando fútbol el jueves pasado. Tengo inflamación leve en la parte interna y molestia al bajar escaleras. Cuento con radiografía reciente de urgencias."
    }
  },

  // Admin View Data: KPIs, 6 Realistic Orthopedic Roster Patients & Weekly Schedule Settings
  adminDashboard: {
    kpis: [
      {
        id: "todays-appointments",
        value: 16,
        icon: "🗓️",
        accent: "sky",
        label: {
          en: "Today's Clinic Appointments",
          es: "Citas en Consultorio Hoy"
        },
        subtext: {
          en: "8 Morning • 8 Afternoon (Suite 410)",
          es: "8 Matutinas • 8 Vespertinas (Suite 410)"
        }
      },
      {
        id: "post-op-followups",
        value: 5,
        icon: "🩹",
        accent: "emerald",
        label: {
          en: "Post-Op Follow-Ups",
          es: "Controles Postoperatorios"
        },
        subtext: {
          en: "3 Suture removals • 2 Cast/brace checks",
          es: "3 Retiros de puntos • 2 Revisiones de yeso/férula"
        }
      },
      {
        id: "imaging-ready",
        value: 11,
        icon: "🩻",
        accent: "indigo",
        label: {
          en: "Pre-Visit X-Rays / MRIs Ready",
          es: "Rayos X / Resonancias Listas"
        },
        subtext: {
          en: "DICOM studies pre-loaded to Exam Rooms 1–4",
          es: "Estudios DICOM pre-cargados en Consultorios 1–4"
        }
      },
      {
        id: "whatsapp-confirmed",
        value: 15,
        icon: "💬",
        accent: "amber",
        label: {
          en: "Confirmed via WhatsApp / SMS",
          es: "Confirmados por WhatsApp / SMS"
        },
        subtext: {
          en: "93.8% automated bilingual response rate",
          es: "93.8% tasa de confirmación automática bilingüe"
        }
      }
    ],

    roster: [
      {
        id: "pt-carlos-mendoza",
        time: "8:30 AM",
        patientName: "Carlos Mendoza",
        age: 29,
        phone: "(713) 555-0122",
        langBadge: "ES",
        jointIcon: "🦵",
        room: "Exam Room 1",
        visitType: {
          en: "Post-Op Follow-Up",
          es: "Control Postoperatorio"
        },
        condition: {
          en: "Right Knee ACL Reconstruction",
          es: "Reconstrucción de LCA en Rodilla Derecha"
        },
        imagingStatus: {
          en: "X-Ray on File",
          es: "Rayos X en Expediente"
        },
        imagingTone: "emerald",
        insuranceBadge: {
          en: "Verified ✓",
          es: "Verificado ✓"
        },
        insuranceDetail: "Workers' Comp / Compensación Laboral (Verified ✓)",
        whatsappConfirmed: true,
        painScore: "2/10",
        intakeSummary: {
          en: "Day 14 post-op right arthroscopic ACL reconstruction (bone-patellar tendon-bone autograft). Incisions clean and dry, no erythema. Ready for suture removal, hinged knee brace unlock to 90°, and Phase 1 physical therapy clearance.",
          es: "Día 14 postoperatorio de reconstrucción artroscópica de LCA derecho (injerto hueso-tendón-hueso). Heridas limpias y secas, sin datos de infección. Listo para retiro de puntos, ajuste de rodillera articulada a 90° y pase a fisioterapia Fase 1."
        },
        imagingFindings: {
          en: "Post-Op AP & Lateral Right Knee Radiographs: Interference screws well-seated in femoral and tibial tunnels. Anatomic graft tunnel angle confirmed.",
          es: "Radiografías AP y Lateral Postoperatorias de Rodilla Derecha: Tornillos de interferencia bien posicionados en túneles femoral y tibial. Alineación óptima."
        }
      },
      {
        id: "pt-sarah-jenkins",
        time: "9:15 AM",
        patientName: "Sarah Jenkins",
        age: 44,
        phone: "(713) 555-0167",
        langBadge: "EN",
        jointIcon: "💪",
        room: "Exam Room 2",
        visitType: {
          en: "New Injury Evaluation",
          es: "Valoración de Primera Vez"
        },
        condition: {
          en: "Right Shoulder Rotator Cuff Pain",
          es: "Dolor de Manguito Rotador en Hombro Derecho"
        },
        imagingStatus: {
          en: "Needs Clinic X-Ray",
          es: "Requiere Rayos X en Clínica"
        },
        imagingTone: "amber",
        insuranceBadge: {
          en: "BlueCross ✓",
          es: "BlueCross ✓"
        },
        insuranceDetail: "BlueCross BlueShield PPO (#BCBS-441092)",
        whatsappConfirmed: true,
        painScore: "6/10",
        intakeSummary: {
          en: "3-week history of sharp lateral right shoulder pain reaching overhead and serving in tennis. Night pain when sleeping on the right side. Positive Neer and Hawkins impingement signs noted on pre-triage.",
          es: "Dolor agudo en cara lateral de hombro derecho de 3 semanas de evolución al elevar el brazo jugando tenis y dolor nocturno. Signos de pinzamiento subacromial positivos en pre-valoración."
        },
        imagingFindings: {
          en: "Order Queued for Clinic X-Ray Suite (3-View Right Shoulder: True AP, Axillary, Scapular Y + Supraspinatus Outlet) to evaluate acromial morphology before diagnostic ultrasound.",
          es: "Orden lista para Sala de Rayos X en Clínica (Serie de Hombro Derecho en 3 proyecciones) para valorar morfología del acromion previo a ultrasonido diagnóstico."
        }
      },
      {
        id: "pt-roberto-silva",
        time: "10:00 AM",
        patientName: "Roberto Silva",
        age: 68,
        phone: "(713) 555-0185",
        langBadge: "ES",
        jointIcon: "🦵",
        room: "Procedure Suite A",
        visitType: {
          en: "Joint Injection",
          es: "Infiltración Articular"
        },
        condition: {
          en: "Left Knee Osteoarthritis Cortisone",
          es: "Cortisona por Artrosis de Rodilla Izquierda"
        },
        imagingStatus: {
          en: "MRI Reviewed",
          es: "RM Revisada"
        },
        imagingTone: "sky",
        insuranceBadge: {
          en: "Medicare ✓",
          es: "Medicare ✓"
        },
        insuranceDetail: "Medicare Part B Participating (#MED-90231-A)",
        whatsappConfirmed: true,
        painScore: "7/10",
        intakeSummary: {
          en: "Bilateral knee osteoarthritis (Left > Right) with morning stiffness and medial joint line tenderness. No blood thinners; blood glucose well-controlled (A1c 6.1%). Tray prepped for ultrasound-guided left knee triamcinolone + lidocaine infiltration.",
          es: "Gonartrosis bilateral (predominio izquierdo) con rigidez matutina y dolor en interlínea medial. Sin anticoagulantes; glucosa controlada (HbA1c 6.1%). Charola lista para infiltración ecoguiada con triamcinolona + lidocaína."
        },
        imagingFindings: {
          en: "Left Knee MRI & Weight-Bearing X-Ray Reviewed: Kellgren-Lawrence Grade III medial compartment narrowing, intact collateral ligaments, small suprapatellar effusion.",
          es: "RM y Rayos X con Apoyo de Rodilla Izquierda Revisados: Pinzamiento medial grado III Kellgren-Lawrence, ligamentos colaterales íntegros, derrame articular leve."
        }
      },
      {
        id: "pt-emily-vance",
        time: "11:00 AM",
        patientName: "Emily Vance",
        age: 33,
        phone: "(713) 555-0191",
        langBadge: "EN",
        jointIcon: "🦵",
        room: "Exam Room 3",
        visitType: {
          en: "MRI & X-Ray Review",
          es: "Revisión de RM y Rayos X"
        },
        condition: {
          en: "Suspected Meniscus Tear",
          es: "Sospecha de Ruptura de Menisco"
        },
        imagingStatus: {
          en: "MRI Uploaded",
          es: "RM Cargada en Sistema"
        },
        imagingTone: "indigo",
        insuranceBadge: {
          en: "Aetna ✓",
          es: "Aetna ✓"
        },
        insuranceDetail: "Aetna Choice POS II (#AET-773819)",
        whatsappConfirmed: true,
        painScore: "5/10",
        intakeSummary: {
          en: "Twisted right knee during trail half-marathon 2 weeks ago. Experiencing mechanical catching/locking when squatting and localized medial joint line tenderness.",
          es: "Torsión de rodilla derecha durante medio maratón hace 2 semanas. Presenta bloqueo mecánico ocasional al ponerse en cuclillas y dolor en interlínea medial."
        },
        imagingFindings: {
          en: "3T Right Knee MRI Uploaded (DICOM Series 4): Vertical longitudinal tear in the red-white zone of the posterior horn of the medial meniscus; ACL and PCL intact. Candidate for arthroscopic all-inside meniscal repair.",
          es: "RM 3T de Rodilla Derecha Cargada (Serie DICOM 4): Trazo longitudinal vertical en zona roja-blanca del cuerno posterior del menisco medial; LCA y LCP íntegros. Candidata a sutura meniscal artroscópica."
        }
      },
      {
        id: "pt-sofia-delgado",
        time: "1:30 PM",
        patientName: "Sofia Delgado",
        age: 52,
        phone: "(713) 555-0144",
        langBadge: "ES",
        jointIcon: "✋",
        room: "Cast & Splint Bay",
        visitType: {
          en: "Post-Op Follow-Up",
          es: "Control Postoperatorio"
        },
        condition: {
          en: "Distal Radius Wrist Fracture Cast Check",
          es: "Revisión de Yeso por Fractura Distal de Radio"
        },
        imagingStatus: {
          en: "X-Ray on File",
          es: "Rayos X en Expediente"
        },
        imagingTone: "emerald",
        insuranceBadge: {
          en: "Self-Pay",
          es: "Pago Particular"
        },
        insuranceDetail: "Self-Pay Global Fracture Package ($0 Follow-Up)",
        whatsappConfirmed: true,
        painScore: "1/10",
        intakeSummary: {
          en: "Week 4 check after closed reduction and short-arm fiberglass cast immobilization of left distal radius fracture. Full finger range of motion, brisk capillary refill, zero paresthesias. Transitioning to removable volar wrist splint today.",
          es: "Control de 4ª semana tras reducción cerrada y yeso corto de fibra de vidrio por fractura distal de radio izquierdo. Movilidad completa de dedos, llenado capilar inmediato. Transición hoy a férula volar removible."
        },
        imagingFindings: {
          en: "3-View Left Wrist Radiographs on File: Bridging callus across dorsal and volar cortices with preserved radial inclination (21°) and volar tilt (10°).",
          es: "Radiografías de Muñeca Izquierda en 3 Proyecciones: Callo óseo consolidando en corticales dorsal y volar con inclinación radial (21°) y angulación volar (10°) conservadas."
        }
      },
      {
        id: "pt-marcus-thorne",
        time: "2:15 PM",
        patientName: "Marcus Thorne",
        age: 47,
        phone: "(713) 555-0179",
        langBadge: "EN",
        jointIcon: "🧘",
        room: "Telehealth Video HD",
        visitType: {
          en: "Telehealth Second Opinion",
          es: "Videoconsulta Segunda Opinión"
        },
        condition: {
          en: "Lumbar Spine Disc Herniation",
          es: "Hernia de Disco en Columna Lumbar"
        },
        imagingStatus: {
          en: "External MRI Link",
          es: "Enlace RM Externa"
        },
        imagingTone: "violet",
        insuranceBadge: {
          en: "UnitedHealthcare ✓",
          es: "UnitedHealthcare ✓"
        },
        insuranceDetail: "UnitedHealthcare Options PPO (#UHC-559104)",
        whatsappConfirmed: false,
        painScore: "6/10",
        intakeSummary: {
          en: "Seeking orthopedic second opinion regarding L4-L5 paracentral disc extrusion with left L5 radiculopathy. Wants to compare targeted transforaminal epidural steroid injection + McKenzie physical therapy vs. microdiscectomy.",
          es: "Solicita segunda opinión ortopédica por extrusión discal paracentral L4-L5 con radiculopatía L5 izquierda. Desea comparar bloqueo epidural transforaminal + fisioterapia McKenzie vs. microdiscectomía."
        },
        imagingFindings: {
          en: "External Cloud PACS Link Connected: Sagittal & Axial T2 Lumbar MRI shows left paracentral L4-L5 disc protrusion contacting the traversing left L5 nerve root; no central canal stenosis or spondylolisthesis.",
          es: "Enlace PACS Externo Conectado: RM Lumbar T2 Sagital y Axial muestra protrusión paracentral izquierda L4-L5 en contacto con raíz L5 izquierda; sin listesis ni estenosis severa del canal."
        }
      }
    ],

    weeklyScheduleDefault: [
      {
        dayCode: "mon",
        dayLabel: { en: "Monday", es: "Lunes" },
        shortLabel: { en: "Mon", es: "Lun" },
        inClinic: true,
        hours: "8:00 AM – 4:30 PM",
        locationTag: {
          clinic: { en: "Clinic • Suite 410", es: "Consultorio • Suite 410" },
          or: { en: "Operating Room / Quirófano", es: "Quirófano / Cirugía (OR)" }
        }
      },
      {
        dayCode: "tue",
        dayLabel: { en: "Tuesday", es: "Martes" },
        shortLabel: { en: "Tue", es: "Mar" },
        inClinic: false,
        hours: "7:00 AM – 3:30 PM",
        locationTag: {
          clinic: { en: "Clinic • Suite 410", es: "Consultorio • Suite 410" },
          or: { en: "Operating Room / Quirófano", es: "Quirófano / Cirugía (OR)" }
        }
      },
      {
        dayCode: "wed",
        dayLabel: { en: "Wednesday", es: "Miércoles" },
        shortLabel: { en: "Wed", es: "Mié" },
        inClinic: true,
        hours: "8:00 AM – 4:30 PM",
        locationTag: {
          clinic: { en: "Clinic • Suite 410", es: "Consultorio • Suite 410" },
          or: { en: "Operating Room / Quirófano", es: "Quirófano / Cirugía (OR)" }
        }
      },
      {
        dayCode: "thu",
        dayLabel: { en: "Thursday", es: "Jueves" },
        shortLabel: { en: "Thu", es: "Jue" },
        inClinic: false,
        hours: "7:00 AM – 3:30 PM",
        locationTag: {
          clinic: { en: "Clinic • Suite 410", es: "Consultorio • Suite 410" },
          or: { en: "Operating Room / Quirófano", es: "Quirófano / Cirugía (OR)" }
        }
      },
      {
        dayCode: "fri",
        dayLabel: { en: "Friday", es: "Viernes" },
        shortLabel: { en: "Fri", es: "Vie" },
        inClinic: true,
        hours: "8:00 AM – 3:00 PM",
        locationTag: {
          clinic: { en: "Clinic • Suite 410", es: "Consultorio • Suite 410" },
          or: { en: "Operating Room / Quirófano", es: "Quirófano / Cirugía (OR)" }
        }
      }
    ]
  },

  translations: {
    en: {
      pageTitle: "Book Orthopedic Appointment | Dr. Luis Montes, MD, FAAOS",
      demoBar: {
        badge: "Interactive Bilingual Prototype",
        langLabel: "Language",
        patientView: "Patient Booking View",
        adminView: "Dr. Montes Admin View"
      },
      leftPanel: {
        verifiedBadge: "FAAOS Board-Certified",
        acceptingNew: "Accepting New & Post-Op Patients",
        clinicHeading: "Clinic Location & Access",
        insurancesHeading: "Accepted Insurances & Coverage",
        liveSummaryHeading: "Live Booking Summary",
        visitTypeLabel: "Visit Type",
        notSelectedYet: "Select a visit type to begin",
        dateAndTimeLabel: "Date & Time",
        chooseDatePrompt: "Select date & time slot",
        patientDetailsLabel: "Patient & Joint",
        patientNotEntered: "Pending intake form",
        prepNoteLabel: "Orthopedic Prep Note",
        estimatedCostLabel: "Estimated Cost / Copay",
        bilingualAssurance: "Full consultation, imaging walkthrough, and surgical paperwork available in English & Español."
      },
      wizard: {
        step1Short: "1. Visit Type",
        step2Short: "2. Date & Time",
        step3Short: "3. Intake Form",
        step4Short: "4. Confirmed",
        step1Title: "Select Orthopedic Visit Type",
        step1Subtitle: "Choose the appointment that best matches your joint injury, imaging review, or follow-up need.",
        prepToggleShow: "View Orthopedic Prep Instructions",
        prepToggleHide: "Hide Prep Instructions",
        prepHeader: "How to prepare for this visit:",
        selectVisitBtn: "Select & Choose Time",
        selectedVisitBtn: "Selected • Continue to Calendar",
        step2Title: "Choose Date & Appointment Slot",
        step2Subtitle: "All times shown in Central Time (CT • Houston). Morning and afternoon orthopedic blocks available.",
        backToStep1: "Change Visit Type",
        calendarHint: "Select an available clinic day (Mon–Fri & select Saturday sports injury clinics)",
        morningHeader: "Morning Clinic (8:00 AM – 11:30 AM)",
        afternoonHeader: "Afternoon Clinic (1:30 PM – 4:30 PM)",
        bookedLabel: "Booked",
        selectedSlotBanner: "Selected slot:",
        continueToIntakeBtn: "Continue to Patient Intake",
        step3Title: "Orthopedic Patient Intake",
        step3Subtitle: "Help Dr. Luis Montes prepare your chart and pre-load any imaging studies before you arrive.",
        backToStep2: "Back to Calendar",
        autoFillBtn: "✨ Auto-Fill Sample Patient",
        autoFillToast: "Sample orthopedic patient profile loaded!",
        contactLegend: "Patient Contact & Insurance",
        fullNameLabel: "Patient Full Name",
        fullNameHint: "Legal name as shown on your ID or insurance card",
        emailLabel: "Email Address",
        emailHint: "Format: name@domain.com (for calendar invite & clinical summary)",
        emailError: "Please enter a valid email address.",
        phoneLabel: "Mobile Phone (WhatsApp / SMS)",
        phoneHint: "10-digit mobile number for appointment alerts",
        phoneError: "Please enter a valid phone number.",
        insuranceLabel: "Insurance Carrier / Payment Plan",
        memberIdLabel: "Member ID / Claim # (Optional)",
        memberIdPlaceholder: "e.g. BCBS-8849201 or WC Claim #",
        orthoLegend: "Orthopedic Injury & Imaging Details",
        injuredJointLabel: "Injured Area / Joint (Select primary area)",
        sideLabel: "Affected Side",
        sideLeft: "Left",
        sideRight: "Right",
        sideBilateral: "Both / Center",
        notesLabel: "Briefly describe your symptoms, injury mechanism, or surgery date",
        notesPlaceholder: "Example: Twisted right knee playing soccer 5 days ago, mild swelling...",
        hasImagingCheckbox: "I have recent X-Rays or MRIs to bring (CD, film, or patient portal link)",
        hasImagingSubtext: "Our medical assistant will pre-load your DICOM images onto Dr. Montes's exam room screen.",
        smsCheckbox: "Send WhatsApp/SMS reminders & digital check-in link",
        smsSubtext: "Instant bilingual confirmation + 24hr reminder with parking validation code.",
        confirmBookingBtn: "Confirm Orthopedic Appointment",
        step4Badge: "Appointment Confirmed",
        step4Title: "You're Scheduled with Dr. Luis Montes!",
        step4Subtitle: "Your orthopedic chart and exam room slot have been reserved at Montes Orthopedics & Joint Center.",
        bookingRefLabel: "Booking Reference",
        addToGoogleCal: "Add to Google Calendar",
        downloadIcs: "Apple / Outlook (.ics)",
        printSummary: "Print Prep Sheet",
        bookAnotherBtn: "Book Another Appointment",
        calendarAddedToast: "Calendar event generated for Dr. Luis Montes!",
        iphonePreviewTitle: "Live iPhone SMS / WhatsApp Reminder Preview",
        iphonePreviewSubtitle: "Automatically formatted in the patient's active language:",
        iphoneHeaderStatus: "WhatsApp • Montes Orthopedics Verified",
        iphoneMessageBody: (data) =>
          `👋 Hi ${data.patientName}! Your orthopedic appointment with Dr. Luis Montes, MD, FAAOS is confirmed.\n\n🗓 ${data.dateStr} at ${data.timeStr}\n🏥 Montes Orthopedics & Joint Center (Suite 410)\n🦴 Visit: ${data.visitTitle} (${data.jointLabel})\n🔖 Ref: #MON-4092\n\n📋 Prep: ${data.prepText}\n\nReply 1 to confirm, 2 to reschedule, or send a photo of your insurance card.`,
        iphonePatientReply: "1 — Confirmed! Bringing my knee MRI disc."
      },
      adminView: {
        headerBadge: "Orthopedic Command Center • Suite 410",
        title: "Dr. Luis Montes — Orthopedic Schedule & Admin View",
        subtitle: "Live bilingual daily patient roster, PACS/DICOM imaging readiness, and clinic vs. operating room block settings.",
        switchToBookingBtn: "Open Patient Booking Wizard",
        rosterTitle: "Daily Orthopedic Patient Roster",
        rosterSubtitle: "Showing 6 key orthopedic & sports medicine cases • Click any patient to inspect intake & DICOM notes",
        filterAll: "All Patients (6)",
        filterPostOp: "Post-Op Follow-Ups (2)",
        filterSpanish: "Español ES (3)",
        colTimePatient: "Time & Patient",
        colVisitCondition: "Visit Type & Orthopedic Condition",
        colLang: "Lang",
        colImaging: "Imaging Status",
        colInsurance: "Coverage / Status",
        colActions: "Clinical & SMS Actions",
        viewIntakeBtn: "View Intake & Imaging",
        sendWhatsappBtn: "Send WhatsApp Reminder",
        sentWhatsappBadge: "WhatsApp Sent ✓",
        whatsappToast: (name, langCode) =>
          `WhatsApp reminder dispatched to ${name} in ${langCode === "ES" ? "Español (ES)" : "English (EN)"}!`,
        settingsTitle: "Clinic & Surgery Day Schedule Settings",
        settingsSubtitle: "Configure Dr. Montes's weekly Clinic vs. Operating Room (Quirófano) blocks and X-ray/cast turnover buffers.",
        weeklyToggleLegend: "Weekly Block Allocation (Toggle Clinic vs. OR)",
        clinicBadge: "In Clinic (Suite 410)",
        orBadge: "Operating Room / Quirófano",
        bufferLabel: "Appointment Slot Buffer (X-Ray / Cast Room Turnover)",
        bufferHint: "Extra minutes padded between orthopedic evaluations for digital X-rays or splint checks",
        bufferOptions: [
          { value: 0, label: "0 min (Back-to-Back)" },
          { value: 5, label: "5 min (Standard Turnover)" },
          { value: 10, label: "10 min (X-Ray & Ultrasound Buffer)" },
          { value: 15, label: "15 min (Extended Cast / Post-Op Buffer)" }
        ],
        urgentSlotsLabel: "Auto-reserve 2 daily acute sports fracture / add-on slots (11:30 AM & 4:00 PM)",
        autoSmsToggleLabel: "Automated bilingual WhatsApp/SMS reminders (24h & 2h prior)",
        saveSettingsBtn: "Save Schedule Rules",
        settingsSavedToast: "Dr. Montes's clinic & operating room schedule settings updated!",
        modalBadge: "Orthopedic Chart & DICOM Summary",
        modalCloseBtn: "Close Window",
        modalClinicalNotesTitle: "Pre-Visit Orthopedic Intake & Physical Exam Triage",
        modalImagingTitle: "PACS / DICOM Imaging & Radiograph Status",
        modalPainLabel: "Reported Pain Score",
        modalRoomLabel: "Assigned Suite / Room",
        modalInsuranceLabel: "Verified Coverage"
      },
      weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ]
    },

    es: {
      pageTitle: "Agendar Cita Ortopédica | Dr. Luis Montes, MD, FAAOS",
      demoBar: {
        badge: "Prototipo Bilingüe Interactivo",
        langLabel: "Idioma",
        patientView: "Vista de Paciente (Citas)",
        adminView: "Vista Admin (Dr. Montes)"
      },
      leftPanel: {
        verifiedBadge: "Certificado FAAOS",
        acceptingNew: "Aceptando Pacientes de 1ª Vez y Postoperatorios",
        clinicHeading: "Ubicación del Consultorio y Acceso",
        insurancesHeading: "Seguros Médicos Aceptados",
        liveSummaryHeading: "Resumen de su Cita en Vivo",
        visitTypeLabel: "Tipo de Consulta",
        notSelectedYet: "Seleccione un motivo de consulta",
        dateAndTimeLabel: "Fecha y Horario",
        chooseDatePrompt: "Seleccione día y turno",
        patientDetailsLabel: "Paciente y Articulación",
        patientNotEntered: "Pendiente de datos del paciente",
        prepNoteLabel: "Preparación Ortopédica",
        estimatedCostLabel: "Costo Estimado / Copago",
        bilingualAssurance: "Consulta médica, lectura de resonancias y trámites de seguro 100% en Español e Inglés."
      },
      wizard: {
        step1Short: "1. Tipo de Cita",
        step2Short: "2. Fecha y Hora",
        step3Short: "3. Ficha Médica",
        step4Short: "4. Confirmación",
        step1Title: "Seleccione el Tipo de Consulta Ortopédica",
        step1Subtitle: "Elija la opción que mejor describa su lesión articular, revisión de estudios o control postoperatorio.",
        prepToggleShow: "Ver Instrucciones de Preparación",
        prepToggleHide: "Ocultar Instrucciones",
        prepHeader: "Cómo prepararse para su visita:",
        selectVisitBtn: "Elegir y Ver Horarios",
        selectedVisitBtn: "Seleccionada • Continuar al Calendario",
        step2Title: "Seleccione Fecha y Horario Disponible",
        step2Subtitle: "Horarios en Hora Central (CT • Houston). Bloques matutinos y vespertinos disponibles.",
        backToStep1: "Cambiar Tipo de Consulta",
        calendarHint: "Seleccione un día hábil en el calendario (Lun–Vie y sábados selectos de trauma deportivo)",
        morningHeader: "Turno Matutino (8:00 AM – 11:30 AM)",
        afternoonHeader: "Turno Vespertino (1:30 PM – 4:30 PM)",
        bookedLabel: "Ocupado",
        selectedSlotBanner: "Horario elegido:",
        continueToIntakeBtn: "Continuar al Registro del Paciente",
        step3Title: "Ficha de Ingreso Ortopédico",
        step3Subtitle: "Ayude al Dr. Luis Montes a preparar su expediente y cargar sus radiografías o resonancias antes de su llegada.",
        backToStep2: "Volver al Calendario",
        autoFillBtn: "✨ Autocompletar Paciente de Prueba",
        autoFillToast: "¡Datos de paciente ortopédico de prueba cargados!",
        contactLegend: "Datos de Contacto y Seguro Médico",
        fullNameLabel: "Nombre Completo del Paciente",
        fullNameHint: "Tal como aparece en su identificación oficial o póliza de seguro",
        emailLabel: "Correo Electrónico",
        emailHint: "Formato: nombre@correo.com (para confirmación y resumen médico)",
        emailError: "Por favor ingrese un correo electrónico válido.",
        phoneLabel: "Teléfono Celular (WhatsApp / SMS)",
        phoneHint: "Número de 10 dígitos para recordatorios y pase de estacionamiento",
        phoneError: "Por favor ingrese un número telefónico válido.",
        insuranceLabel: "Aseguradora / Modalidad de Pago",
        memberIdLabel: "Número de Póliza / Siniestro (Opcional)",
        memberIdPlaceholder: "Ej. BCBS-8849201 o Caso Workers' Comp",
        orthoLegend: "Detalles de la Lesión y Estudios de Imagen",
        injuredJointLabel: "Área o Articulación Lesionada (Seleccione la principal)",
        sideLabel: "Lado Afectado",
        sideLeft: "Izquierdo",
        sideRight: "Derecho",
        sideBilateral: "Ambos / Central",
        notesLabel: "Describa brevemente sus síntomas, cómo ocurrió la lesión o fecha de cirugía",
        notesPlaceholder: "Ejemplo: Sentí un chasquido en la rodilla derecha jugando fútbol hace 5 días...",
        hasImagingCheckbox: "Tengo Radiografías o Resonancia Magnética (MRI) recientes para llevar",
        hasImagingSubtext: "Nuestra asistente cargará sus imágenes digitales en la pantalla del consultorio del Dr. Montes.",
        smsCheckbox: "Enviar recordatorios por WhatsApp/SMS y enlace de pre-registro",
        smsSubtext: "Confirmación instantánea en español + recordatorio 24h antes con código de estacionamiento.",
        confirmBookingBtn: "Confirmar Cita con el Dr. Montes",
        step4Badge: "Cita Confirmada",
        step4Title: "¡Su Cita con el Dr. Luis Montes está Confirmada!",
        step4Subtitle: "Su expediente ortopédico y horario han quedado reservados en Montes Orthopedics & Joint Center.",
        bookingRefLabel: "Código de Reserva",
        addToGoogleCal: "Agregar a Google Calendar",
        downloadIcs: "Apple / Outlook (.ics)",
        printSummary: "Imprimir Hoja de Preparación",
        bookAnotherBtn: "Agendar Otra Cita",
        calendarAddedToast: "¡Evento de calendario generado para su cita con el Dr. Luis Montes!",
        iphonePreviewTitle: "Vista Previa del Recordatorio en iPhone (SMS / WhatsApp)",
        iphonePreviewSubtitle: "Mensaje automático generado en el idioma activo del paciente:",
        iphoneHeaderStatus: "WhatsApp • Montes Orthopedics Verificado",
        iphoneMessageBody: (data) =>
          `👋 ¡Hola ${data.patientName}! Su cita ortopédica con el Dr. Luis Montes, MD, FAAOS está confirmada.\n\n🗓 ${data.dateStr} a las ${data.timeStr}\n🏥 Montes Orthopedics & Joint Center (Suite 410)\n🦴 Consulta: ${data.visitTitle} (${data.jointLabel})\n🔖 Ref: #MON-4092\n\n📋 Preparación: ${data.prepText}\n\nResponda 1 para confirmar asistencia, 2 para reprogramar o envíe foto de su credencial de seguro.`,
        iphonePatientReply: "1 — ¡Confirmado! Llevaré el disco de mi resonancia de rodilla."
      },
      adminView: {
        headerBadge: "Centro de Control Ortopédico • Suite 410",
        title: "Dr. Luis Montes — Agenda Ortopédica y Panel Administrativo",
        subtitle: "Lista diaria de pacientes bilingüe en tiempo real, estado de radiografías/RM (DICOM) y configuración de días de Consultorio vs. Quirófano.",
        switchToBookingBtn: "Ver Portal de Citas (Paciente)",
        rosterTitle: "Lista Diaria de Pacientes Ortopédicos",
        rosterSubtitle: "Mostrando 6 casos clave de ortopedia y traumatología • Haga clic en cualquier fila para ver ficha e imágenes",
        filterAll: "Todos los Pacientes (6)",
        filterPostOp: "Postoperatorios (2)",
        filterSpanish: "Español ES (3)",
        colTimePatient: "Hora y Paciente",
        colVisitCondition: "Tipo de Consulta y Diagnóstico",
        colLang: "Idioma",
        colImaging: "Estado de Estudios",
        colInsurance: "Cobertura / Estatus",
        colActions: "Acciones Clínicas y WhatsApp",
        viewIntakeBtn: "Ver Ficha e Imágenes",
        sendWhatsappBtn: "Enviar Recordatorio WhatsApp",
        sentWhatsappBadge: "WhatsApp Enviado ✓",
        whatsappToast: (name, langCode) =>
          `¡Recordatorio de WhatsApp enviado a ${name} en ${langCode === "ES" ? "Español (ES)" : "Inglés (EN)"}!`,
        settingsTitle: "Configuración de Consultorio y Quirófano",
        settingsSubtitle: "Alterne los días de Consulta Externa vs. Quirófano (OR) del Dr. Montes y ajuste el tiempo de margen entre citas.",
        weeklyToggleLegend: "Asignación Semanal (Consultorio vs. Quirófano)",
        clinicBadge: "Consultorio (Suite 410)",
        orBadge: "Quirófano / Cirugía (OR)",
        bufferLabel: "Tiempo de Margen entre Citas (Sala de Rayos X / Yesos)",
        bufferHint: "Minutos adicionales entre consultas para toma de radiografías digitales o retiro de puntos",
        bufferOptions: [
          { value: 0, label: "0 min (Continuo)" },
          { value: 5, label: "5 min (Margen Estándar)" },
          { value: 10, label: "10 min (Margen para Rayos X / Ultrasonido)" },
          { value: 15, label: "15 min (Margen Amplio para Yesos / Post-Op)" }
        ],
        urgentSlotsLabel: "Reservar 2 espacios diarios para fracturas agudas / urgencias deportivas (11:30 AM y 4:00 PM)",
        autoSmsToggleLabel: "Recordatorios automáticos bilingües por WhatsApp/SMS (24h y 2h antes)",
        saveSettingsBtn: "Guardar Configuración de Agenda",
        settingsSavedToast: "¡Configuración de días de consultorio y quirófano del Dr. Montes actualizada!",
        modalBadge: "Expediente Ortopédico y Resumen DICOM",
        modalCloseBtn: "Cerrar Ventana",
        modalClinicalNotesTitle: "Nota de Ingreso Ortopédico y Triaje Físico",
        modalImagingTitle: "Estado de Radiografías y Resonancia Magnética (PACS / DICOM)",
        modalPainLabel: "Escala de Dolor (EVA)",
        modalRoomLabel: "Consultorio / Sala Asignada",
        modalInsuranceLabel: "Cobertura Verificada"
      },
      weekdaysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
      months: [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
      ]
    }
  }
};
