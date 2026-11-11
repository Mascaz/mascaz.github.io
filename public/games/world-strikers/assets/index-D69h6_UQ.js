function Hl(s,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in s)){const r=Object.getOwnPropertyDescriptor(n,i);r&&Object.defineProperty(s,i,r.get?r:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Mt={waka_synth:{id:"waka_synth",title:"Waka-Synth '10 (Afro-House Festival Drop)",shortTitle:"Waka-Synth '10",inspiration:"2010 Afro-Festival Supersaw & Pluck Drop",bpm:128},wavin_synth:{id:"wavin_synth",title:"Wavin' Neon Flag '10 (Progressive House Anthem)",shortTitle:"Wavin' Neon Flag",inspiration:"2010 Mainstage Progressive House Unison Lead",bpm:126},cup_of_life:{id:"cup_of_life",title:"Cyber Cup of Life '98 (Big Room Brass Drop)",shortTitle:"Cup of Life '98",inspiration:"1998 Big-Room Electro Brass & Festival Sub Drop",bpm:132},samba_janeiro:{id:"samba_janeiro",title:"Samba de Janeiro '14 (Mainstage Carnival EDM)",shortTitle:"Samba de Janeiro",inspiration:"Brazilian Mainstage Carnival Lead & Batucada Bass",bpm:130},spain_fiesta:{id:"spain_fiesta",title:"🇪🇸 Fiesta Roja '10 (Ibiza Flamenco Big-Room)",shortTitle:"🇪🇸 Fiesta Roja '10",inspiration:"Spain 2010 Champions Andalusian Phrygian EDM Drop",bpm:130},france_allez:{id:"france_allez",title:"🇫🇷 Allez Les Bleus '98 (Parisian French-Touch EDM)",shortTitle:"🇫🇷 Allez Les Bleus",inspiration:"France 1998/2018 Victory Chant & French-Touch Electro",bpm:128},germany_zeit:{id:"germany_zeit",title:"🇩🇪 Berlin Kraft-Rave '14 (Stadium Trance-Techno)",shortTitle:"🇩🇪 Berlin Kraft-Rave",inspiration:"Germany 2006/2014 Festival Trance & Techno Rave",bpm:136},brazil_hexa:{id:"brazil_hexa",title:"🇧🇷 Aquarela do Hexa '14 (Rio Baile-House Drop)",shortTitle:"🇧🇷 Aquarela do Hexa",inspiration:"Brazil World Cup Olê-Olê Supersaw & Baile Bass",bpm:129},climax_overdrive:{id:"climax_overdrive",title:"Carnaval de Overdrive (FINAL MINUTE / MATCH POINT)",shortTitle:"OVERDRIVE 🔥",inspiration:"148 BPM High-Octane Festival Rave Overdrive",bpm:148,lockedClimax:!0}},Ar=[Mt.waka_synth,Mt.wavin_synth,Mt.cup_of_life,Mt.samba_janeiro,Mt.spain_fiesta,Mt.france_allez,Mt.germany_zeit,Mt.brazil_hexa],Ja={waka_synth:{bpm:128,leadFilterCutoff:4800,leadUnisonSpreadCents:22,reverbSendLevel:.34,delaySendLevel:.24,sidechainDepth:.16,bassRoots:[38,33,35,43],chords:[[50,57,62,66,69],[49,57,61,64,69],[47,54,59,62,66],[43,55,59,62,69]],bassGroove:[0,-1,0,12,-1,0,7,12,0,-1,0,12,-1,7,12,0],style:"afro_house",melody64:[{step:0,midi:78,durSteps:2,harmonyOffset:-4},{step:2,midi:78,durSteps:2,harmonyOffset:-4},{step:4,midi:76,durSteps:2,harmonyOffset:-3},{step:6,midi:74,durSteps:2,harmonyOffset:-4},{step:8,midi:78,durSteps:3,harmonyOffset:-4},{step:11,midi:81,durSteps:3,harmonyOffset:-3,glideFromMidi:78},{step:14,midi:78,durSteps:2,harmonyOffset:-4},{step:16,midi:76,durSteps:2,harmonyOffset:-3},{step:18,midi:76,durSteps:2,harmonyOffset:-3},{step:20,midi:74,durSteps:2,harmonyOffset:-3},{step:22,midi:73,durSteps:2,harmonyOffset:-4},{step:24,midi:76,durSteps:3,harmonyOffset:-3},{step:27,midi:81,durSteps:3,harmonyOffset:-4,glideFromMidi:76},{step:30,midi:76,durSteps:2,harmonyOffset:-3},{step:32,midi:78,durSteps:2,harmonyOffset:-4},{step:34,midi:78,durSteps:2,harmonyOffset:-4},{step:36,midi:76,durSteps:2,harmonyOffset:-4},{step:38,midi:74,durSteps:2,harmonyOffset:-3},{step:40,midi:71,durSteps:2,harmonyOffset:-5},{step:42,midi:74,durSteps:2,harmonyOffset:-3},{step:44,midi:78,durSteps:2,harmonyOffset:-4},{step:46,midi:76,durSteps:2,harmonyOffset:-4},{step:48,midi:74,durSteps:3,harmonyOffset:-3},{step:51,midi:76,durSteps:3,harmonyOffset:-4},{step:54,midi:78,durSteps:2,harmonyOffset:-4},{step:56,midi:79,durSteps:3,harmonyOffset:-5,glideFromMidi:78},{step:59,midi:78,durSteps:2,harmonyOffset:-4},{step:61,midi:74,durSteps:3,harmonyOffset:-3}]},wavin_synth:{bpm:126,leadFilterCutoff:5200,leadUnisonSpreadCents:26,reverbSendLevel:.42,delaySendLevel:.28,sidechainDepth:.14,bassRoots:[36,41,45,43],chords:[[48,55,60,64,67],[41,53,57,60,65],[45,52,57,60,64],[43,50,55,59,67]],bassGroove:[0,-1,12,0,-1,12,0,-1,0,12,7,0,-1,12,7,12],style:"prog_house",melody64:[{step:0,midi:76,durSteps:3,harmonyOffset:-4},{step:3,midi:76,durSteps:1,harmonyOffset:-4},{step:4,midi:79,durSteps:4,harmonyOffset:-3,glideFromMidi:76},{step:8,midi:76,durSteps:5,harmonyOffset:-4},{step:13,midi:74,durSteps:3,harmonyOffset:-3},{step:16,midi:72,durSteps:4,harmonyOffset:-3},{step:20,midi:77,durSteps:4,harmonyOffset:-4,glideFromMidi:72},{step:24,midi:76,durSteps:4,harmonyOffset:-4},{step:28,midi:74,durSteps:4,harmonyOffset:-3},{step:32,midi:72,durSteps:3,harmonyOffset:-3},{step:35,midi:74,durSteps:3,harmonyOffset:-3},{step:38,midi:76,durSteps:4,harmonyOffset:-4,glideFromMidi:74},{step:42,midi:72,durSteps:3,harmonyOffset:-3},{step:45,midi:69,durSteps:3,harmonyOffset:-5},{step:48,midi:71,durSteps:3,harmonyOffset:-4},{step:51,midi:74,durSteps:3,harmonyOffset:-3},{step:54,midi:79,durSteps:4,harmonyOffset:-5,glideFromMidi:74},{step:58,midi:76,durSteps:3,harmonyOffset:-4},{step:61,midi:74,durSteps:3,harmonyOffset:-3}]},cup_of_life:{bpm:132,leadFilterCutoff:4900,leadUnisonSpreadCents:24,reverbSendLevel:.36,delaySendLevel:.22,sidechainDepth:.14,bassRoots:[36,44,41,43],chords:[[48,55,60,63,67],[44,51,56,60,63],[41,48,53,56,60],[43,50,55,59,62]],bassGroove:[0,12,0,12,0,12,7,12,0,12,0,12,7,12,0,7],style:"big_room",melody64:[{step:0,midi:72,durSteps:2,harmonyOffset:-5},{step:2,midi:72,durSteps:2,harmonyOffset:-5},{step:4,midi:74,durSteps:2,harmonyOffset:-5},{step:6,midi:75,durSteps:4,harmonyOffset:-3,glideFromMidi:74},{step:10,midi:79,durSteps:2,harmonyOffset:-4},{step:12,midi:77,durSteps:2,harmonyOffset:-4},{step:14,midi:75,durSteps:2,harmonyOffset:-3},{step:16,midi:74,durSteps:2,harmonyOffset:-3},{step:18,midi:75,durSteps:2,harmonyOffset:-3},{step:20,midi:77,durSteps:2,harmonyOffset:-4},{step:22,midi:75,durSteps:4,harmonyOffset:-3},{step:26,midi:72,durSteps:3,harmonyOffset:-5},{step:29,midi:75,durSteps:3,harmonyOffset:-3},{step:32,midi:77,durSteps:3,harmonyOffset:-4},{step:35,midi:79,durSteps:3,harmonyOffset:-4},{step:38,midi:80,durSteps:4,harmonyOffset:-4,glideFromMidi:79},{step:42,midi:79,durSteps:2,harmonyOffset:-4},{step:44,midi:77,durSteps:2,harmonyOffset:-4},{step:46,midi:75,durSteps:2,harmonyOffset:-3},{step:48,midi:74,durSteps:4,harmonyOffset:-3},{step:52,midi:79,durSteps:4,harmonyOffset:-5,glideFromMidi:74},{step:56,midi:78,durSteps:2,harmonyOffset:-5},{step:58,midi:79,durSteps:6,harmonyOffset:-5}]},samba_janeiro:{bpm:130,leadFilterCutoff:5100,leadUnisonSpreadCents:25,reverbSendLevel:.38,delaySendLevel:.25,sidechainDepth:.15,bassRoots:[33,38,43,36],chords:[[45,52,57,60,64],[50,57,60,62,65],[43,50,55,59,62],[48,55,59,60,64]],bassGroove:[0,-1,12,7,-1,0,12,7,0,-1,12,7,-1,7,12,0],style:"carnival_edm",melody64:[{step:0,midi:69,durSteps:2,harmonyOffset:-5},{step:2,midi:71,durSteps:2,harmonyOffset:-4},{step:4,midi:72,durSteps:3,harmonyOffset:-3},{step:7,midi:76,durSteps:3,harmonyOffset:-4,glideFromMidi:72},{step:10,midi:74,durSteps:2,harmonyOffset:-3},{step:12,midi:72,durSteps:2,harmonyOffset:-3},{step:14,midi:71,durSteps:2,harmonyOffset:-4},{step:16,midi:69,durSteps:3,harmonyOffset:-4},{step:19,midi:74,durSteps:3,harmonyOffset:-4,glideFromMidi:69},{step:22,midi:77,durSteps:4,harmonyOffset:-3},{step:26,midi:76,durSteps:2,harmonyOffset:-4},{step:28,midi:74,durSteps:2,harmonyOffset:-3},{step:30,midi:72,durSteps:2,harmonyOffset:-3},{step:32,midi:71,durSteps:2,harmonyOffset:-4},{step:34,midi:72,durSteps:2,harmonyOffset:-3},{step:36,midi:74,durSteps:3,harmonyOffset:-3},{step:39,midi:79,durSteps:3,harmonyOffset:-5,glideFromMidi:74},{step:42,midi:77,durSteps:2,harmonyOffset:-4},{step:44,midi:76,durSteps:2,harmonyOffset:-4},{step:46,midi:74,durSteps:2,harmonyOffset:-3},{step:48,midi:76,durSteps:4,harmonyOffset:-4},{step:52,midi:72,durSteps:3,harmonyOffset:-3},{step:55,midi:69,durSteps:3,harmonyOffset:-5},{step:58,midi:76,durSteps:3,harmonyOffset:-4},{step:61,midi:81,durSteps:3,harmonyOffset:-5,glideFromMidi:76}]},spain_fiesta:{bpm:130,leadFilterCutoff:5300,leadUnisonSpreadCents:25,reverbSendLevel:.38,delaySendLevel:.25,sidechainDepth:.14,bassRoots:[33,43,41,40],chords:[[45,52,57,60,64],[43,50,55,59,62],[41,48,53,57,60],[40,47,52,56,59]],bassGroove:[0,12,-1,0,12,7,0,12,0,12,-1,7,12,0,7,12],style:"big_room",melody64:[{step:0,midi:76,durSteps:2,harmonyOffset:-4},{step:2,midi:77,durSteps:2,harmonyOffset:-4},{step:4,midi:80,durSteps:2,harmonyOffset:-4},{step:6,midi:81,durSteps:4,harmonyOffset:-5,glideFromMidi:80},{step:10,midi:84,durSteps:2,harmonyOffset:-3},{step:12,midi:83,durSteps:2,harmonyOffset:-4},{step:14,midi:81,durSteps:2,harmonyOffset:-5},{step:16,midi:79,durSteps:3,harmonyOffset:-4},{step:19,midi:81,durSteps:3,harmonyOffset:-5,glideFromMidi:79},{step:22,midi:83,durSteps:4,harmonyOffset:-4},{step:26,midi:79,durSteps:2,harmonyOffset:-4},{step:28,midi:77,durSteps:2,harmonyOffset:-3},{step:30,midi:76,durSteps:2,harmonyOffset:-4},{step:32,midi:77,durSteps:3,harmonyOffset:-4},{step:35,midi:79,durSteps:3,harmonyOffset:-4},{step:38,midi:81,durSteps:4,harmonyOffset:-4,glideFromMidi:79},{step:42,midi:77,durSteps:2,harmonyOffset:-4},{step:44,midi:76,durSteps:2,harmonyOffset:-4},{step:46,midi:74,durSteps:2,harmonyOffset:-3},{step:48,midi:76,durSteps:3,harmonyOffset:-4},{step:51,midi:80,durSteps:3,harmonyOffset:-4,glideFromMidi:76},{step:54,midi:83,durSteps:4,harmonyOffset:-4},{step:58,midi:81,durSteps:2,harmonyOffset:-5},{step:60,midi:80,durSteps:4,harmonyOffset:-4}]},france_allez:{bpm:128,leadFilterCutoff:5e3,leadUnisonSpreadCents:24,reverbSendLevel:.4,delaySendLevel:.27,sidechainDepth:.13,bassRoots:[33,38,43,36],chords:[[45,52,57,60,64],[38,50,57,62,65],[43,50,55,59,65],[48,55,59,64,67]],bassGroove:[0,12,0,-1,0,12,7,12,0,12,0,-1,7,12,0,12],style:"prog_house",melody64:[{step:0,midi:76,durSteps:3,harmonyOffset:-4},{step:3,midi:76,durSteps:3,harmonyOffset:-4},{step:6,midi:74,durSteps:2,harmonyOffset:-3},{step:8,midi:72,durSteps:3,harmonyOffset:-3},{step:11,midi:71,durSteps:2,harmonyOffset:-4},{step:13,midi:69,durSteps:3,harmonyOffset:-5},{step:16,midi:69,durSteps:2,harmonyOffset:-4},{step:18,midi:71,durSteps:2,harmonyOffset:-3},{step:20,midi:72,durSteps:2,harmonyOffset:-3},{step:22,midi:74,durSteps:2,harmonyOffset:-4},{step:24,midi:77,durSteps:3,harmonyOffset:-3,glideFromMidi:74},{step:27,midi:76,durSteps:3,harmonyOffset:-4},{step:30,midi:74,durSteps:2,harmonyOffset:-3},{step:32,midi:71,durSteps:2,harmonyOffset:-4},{step:34,midi:72,durSteps:2,harmonyOffset:-3},{step:36,midi:74,durSteps:2,harmonyOffset:-3},{step:38,midi:79,durSteps:4,harmonyOffset:-5,glideFromMidi:74},{step:42,midi:77,durSteps:2,harmonyOffset:-3},{step:44,midi:76,durSteps:2,harmonyOffset:-4},{step:46,midi:74,durSteps:2,harmonyOffset:-3},{step:48,midi:76,durSteps:4,harmonyOffset:-4,glideFromMidi:74},{step:52,midi:79,durSteps:3,harmonyOffset:-4},{step:55,midi:80,durSteps:3,harmonyOffset:-4},{step:58,midi:81,durSteps:3,harmonyOffset:-5},{step:61,midi:76,durSteps:3,harmonyOffset:-4}]},germany_zeit:{bpm:136,leadFilterCutoff:5600,leadUnisonSpreadCents:28,reverbSendLevel:.38,delaySendLevel:.28,sidechainDepth:.13,bassRoots:[42,38,33,40],chords:[[42,54,57,61,66],[38,50,57,62,66],[33,49,57,61,64],[40,52,56,59,64]],bassGroove:[0,12,0,12,0,12,7,12,0,12,0,12,7,12,10,12],style:"big_room",melody64:[{step:0,midi:78,durSteps:3,harmonyOffset:-4},{step:3,midi:78,durSteps:1,harmonyOffset:-4},{step:4,midi:81,durSteps:3,harmonyOffset:-3,glideFromMidi:78},{step:7,midi:78,durSteps:3,harmonyOffset:-4},{step:10,midi:76,durSteps:2,harmonyOffset:-3},{step:12,midi:74,durSteps:2,harmonyOffset:-4},{step:14,midi:73,durSteps:2,harmonyOffset:-4},{step:16,midi:74,durSteps:3,harmonyOffset:-4},{step:19,midi:76,durSteps:3,harmonyOffset:-4},{step:22,midi:78,durSteps:4,harmonyOffset:-4,glideFromMidi:76},{step:26,midi:81,durSteps:3,harmonyOffset:-3},{step:29,midi:78,durSteps:3,harmonyOffset:-4},{step:32,midi:81,durSteps:3,harmonyOffset:-4},{step:35,midi:83,durSteps:3,harmonyOffset:-4},{step:38,midi:85,durSteps:4,harmonyOffset:-4,glideFromMidi:83},{step:42,midi:81,durSteps:2,harmonyOffset:-4},{step:44,midi:78,durSteps:2,harmonyOffset:-4},{step:46,midi:76,durSteps:2,harmonyOffset:-3},{step:48,midi:80,durSteps:3,harmonyOffset:-4},{step:51,midi:81,durSteps:3,harmonyOffset:-4},{step:54,midi:83,durSteps:4,harmonyOffset:-4,glideFromMidi:80},{step:58,midi:80,durSteps:3,harmonyOffset:-4},{step:61,midi:76,durSteps:3,harmonyOffset:-4}]},brazil_hexa:{bpm:129,leadFilterCutoff:5100,leadUnisonSpreadCents:24,reverbSendLevel:.36,delaySendLevel:.25,sidechainDepth:.15,bassRoots:[43,36,41,46],chords:[[43,50,55,58,62],[36,48,55,60,63],[41,48,53,57,63],[46,53,58,62,65]],bassGroove:[0,-1,12,0,-1,7,12,-1,0,-1,12,7,-1,0,7,12],style:"carnival_edm",melody64:[{step:0,midi:74,durSteps:2,harmonyOffset:-4},{step:2,midi:79,durSteps:3,harmonyOffset:-5,glideFromMidi:74},{step:5,midi:81,durSteps:3,harmonyOffset:-3},{step:8,midi:82,durSteps:3,harmonyOffset:-4},{step:11,midi:81,durSteps:2,harmonyOffset:-3},{step:13,midi:79,durSteps:3,harmonyOffset:-5},{step:16,midi:75,durSteps:2,harmonyOffset:-3},{step:18,midi:79,durSteps:3,harmonyOffset:-4,glideFromMidi:75},{step:21,midi:84,durSteps:3,harmonyOffset:-4},{step:24,midi:82,durSteps:3,harmonyOffset:-3},{step:27,midi:81,durSteps:2,harmonyOffset:-3},{step:29,midi:79,durSteps:3,harmonyOffset:-4},{step:32,midi:77,durSteps:2,harmonyOffset:-4},{step:34,midi:81,durSteps:3,harmonyOffset:-4,glideFromMidi:77},{step:37,midi:84,durSteps:3,harmonyOffset:-3},{step:40,midi:82,durSteps:3,harmonyOffset:-4},{step:43,midi:81,durSteps:2,harmonyOffset:-4},{step:45,midi:77,durSteps:3,harmonyOffset:-5},{step:48,midi:74,durSteps:3,harmonyOffset:-4},{step:51,midi:78,durSteps:3,harmonyOffset:-4},{step:54,midi:81,durSteps:3,harmonyOffset:-3,glideFromMidi:78},{step:57,midi:86,durSteps:4,harmonyOffset:-4,glideFromMidi:81},{step:61,midi:82,durSteps:3,harmonyOffset:-4}]},climax_overdrive:{bpm:148,leadFilterCutoff:6200,leadUnisonSpreadCents:30,reverbSendLevel:.4,delaySendLevel:.28,sidechainDepth:.12,bassRoots:[40,36,38,35],chords:[[40,52,59,64,67],[36,48,55,60,64],[38,50,57,62,66],[35,47,54,59,63]],bassGroove:[0,12,7,12,0,12,7,12,0,12,7,12,0,7,12,19],style:"hard_overdrive",melody64:[{step:0,midi:76,durSteps:2,harmonyOffset:-5},{step:2,midi:79,durSteps:2,harmonyOffset:-4},{step:4,midi:83,durSteps:3,harmonyOffset:-4,glideFromMidi:79},{step:7,midi:88,durSteps:3,harmonyOffset:-5,glideFromMidi:83},{step:10,midi:86,durSteps:2,harmonyOffset:-4},{step:12,midi:83,durSteps:2,harmonyOffset:-4},{step:14,midi:79,durSteps:2,harmonyOffset:-3},{step:16,midi:84,durSteps:3,harmonyOffset:-4,glideFromMidi:79},{step:19,midi:83,durSteps:3,harmonyOffset:-4},{step:22,midi:81,durSteps:2,harmonyOffset:-4},{step:24,midi:79,durSteps:3,harmonyOffset:-3},{step:27,midi:76,durSteps:3,harmonyOffset:-4},{step:30,midi:79,durSteps:2,harmonyOffset:-3},{step:32,midi:78,durSteps:2,harmonyOffset:-4},{step:34,midi:81,durSteps:2,harmonyOffset:-3},{step:36,midi:86,durSteps:3,harmonyOffset:-4,glideFromMidi:81},{step:39,midi:81,durSteps:3,harmonyOffset:-3},{step:42,midi:83,durSteps:2,harmonyOffset:-4},{step:44,midi:81,durSteps:2,harmonyOffset:-3},{step:46,midi:79,durSteps:2,harmonyOffset:-3},{step:48,midi:78,durSteps:2,harmonyOffset:-3},{step:50,midi:79,durSteps:2,harmonyOffset:-4},{step:52,midi:81,durSteps:2,harmonyOffset:-3},{step:54,midi:83,durSteps:2,harmonyOffset:-4},{step:56,midi:87,durSteps:4,harmonyOffset:-4,glideFromMidi:83},{step:60,midi:88,durSteps:4,harmonyOffset:-5}]}};function Fn(s){return 440*Math.pow(2,(s-69)/12)}class Vl{ctx=null;masterMusicGain=null;reverbConvolver=null;delayEntryNode=null;noiseBuffer=null;enabled=!0;musicEnabled=!0;selectedOstId="waka_synth";climaxLocked=!1;activeStream=null;fadingStreams=[];schedulerTimer=null;unlockBound=!1;onOstStateChange;onTrackAutoAdvance;CROSSFADE_SEC=.38;MUSIC_MASTER_VOL=.34;SONG_DURATION_STEPS=256;constructor(){if(typeof window<"u"){try{const e=window.localStorage.getItem("ws_selected_ost");e&&e in Mt&&e!=="climax_overdrive"&&(this.selectedOstId=e);const t=window.localStorage.getItem("ws_music_enabled");t!==null&&(this.musicEnabled=t==="1")}catch{}this.installInteractionUnlock()}}installInteractionUnlock(){if(this.unlockBound||typeof window>"u")return;this.unlockBound=!0;const e=()=>{this.musicEnabled&&this.startMusicIfReady()};window.addEventListener("pointerdown",e,{passive:!0}),window.addEventListener("keydown",e,{passive:!0}),window.addEventListener("touchstart",e,{passive:!0})}ensureRawContext(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;if(e){const t=new e;this.ctx=t;const n=t.createDynamicsCompressor();n.threshold.setValueAtTime(-15,t.currentTime),n.knee.setValueAtTime(10,t.currentTime),n.ratio.setValueAtTime(4.5,t.currentTime),n.attack.setValueAtTime(.003,t.currentTime),n.release.setValueAtTime(.16,t.currentTime),n.connect(t.destination);const i=t.createWaveShaper();i.curve=this.createSoftClipCurve(1.45),i.oversample="2x",i.connect(n);const r=t.createGain();r.gain.setValueAtTime(this.musicEnabled?this.MUSIC_MASTER_VOL:1e-4,t.currentTime),r.connect(i),this.masterMusicGain=r;const a=t.createConvolver();a.buffer=this.createStereoHallImpulse(t,1.85,2.9);const o=t.createGain();o.gain.setValueAtTime(.48,t.currentTime),a.connect(o),o.connect(r),this.reverbConvolver=a,this.delayEntryNode=this.createPingPongDelayNetwork(t,r),this.noiseBuffer=this.createNoiseBuffer(t,1.5)}}return this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx}ensureContext(){return this.enabled?this.ensureRawContext():null}createSoftClipCurve(e){const n=new Float32Array(4096),i=Math.tanh(e);for(let r=0;r<4096;r++){const a=r*2/4096-1;n[r]=Math.tanh(a*e)/i}return n}createStereoHallImpulse(e,t,n){const i=Math.floor(e.sampleRate*t),r=e.createBuffer(2,i,e.sampleRate);for(let a=0;a<2;a++){const o=r.getChannelData(a);let c=0;for(let l=0;l<i;l++){const d=l/i,h=Math.pow(1-d,n),u=Math.random()*2-1;c=c*.62+u*.38,o[l]=c*h*.55}}return r}createPingPongDelayNetwork(e,t){const n=e.createGain(),i=e.createBiquadFilter();i.type="bandpass",i.frequency.setValueAtTime(1450,e.currentTime),i.Q.setValueAtTime(.85,e.currentTime);const r=e.createDelay(1),a=e.createDelay(1);r.delayTime.setValueAtTime(.23,e.currentTime),a.delayTime.setValueAtTime(.345,e.currentTime);const o=e.createGain(),c=e.createGain();o.gain.setValueAtTime(.32,e.currentTime),c.gain.setValueAtTime(.32,e.currentTime);const l=e.createStereoPanner?e.createStereoPanner():null,d=e.createStereoPanner?e.createStereoPanner():null;return l&&d&&(l.pan.setValueAtTime(-.72,e.currentTime),d.pan.setValueAtTime(.72,e.currentTime)),n.connect(i),i.connect(r),i.connect(a),r.connect(o),o.connect(a),a.connect(c),c.connect(r),l&&d?(r.connect(l),a.connect(d),l.connect(t),d.connect(t)):(r.connect(t),a.connect(t)),n}createNoiseBuffer(e,t){const n=Math.floor(e.sampleRate*t),i=e.createBuffer(1,n,e.sampleRate),r=i.getChannelData(0);for(let a=0;a<n;a++)r[a]=Math.random()*2-1;return i}getSelectedOst(){return this.selectedOstId}getEffectiveTrackId(){return this.climaxLocked?"climax_overdrive":this.selectedOstId}getEffectiveTrackMeta(){return Mt[this.getEffectiveTrackId()]}isClimaxOverdriveLocked(){return this.climaxLocked}setMusicEnabled(e){this.musicEnabled=e;try{window.localStorage.setItem("ws_music_enabled",e?"1":"0")}catch{}const t=this.ensureRawContext();if(t&&this.masterMusicGain){const n=t.currentTime;this.masterMusicGain.gain.cancelScheduledValues(n),this.masterMusicGain.gain.setValueAtTime(Math.max(1e-4,this.masterMusicGain.gain.value),n),this.masterMusicGain.gain.linearRampToValueAtTime(e?this.MUSIC_MASTER_VOL:1e-4,n+.24)}e&&this.startMusicIfReady(),this.onOstStateChange?.()}toggleMusic(){return this.setMusicEnabled(!this.musicEnabled),this.musicEnabled}setSelectedOst(e){if(this.climaxLocked)return this.onOstStateChange?.(),!1;this.selectedOstId=e;try{window.localStorage.setItem("ws_selected_ost",e)}catch{}return this.crossfadeToTrack(this.getEffectiveTrackId()),this.onOstStateChange?.(),!0}setClimaxOverride(e){return this.climaxLocked===e?!1:(this.climaxLocked=e,this.crossfadeToTrack(this.getEffectiveTrackId()),this.onOstStateChange?.(),!0)}startMusicIfReady(){!this.ensureRawContext()||!this.masterMusicGain||(this.activeStream||this.crossfadeToTrack(this.getEffectiveTrackId()),this.schedulerTimer===null&&typeof window<"u"&&(this.schedulerTimer=window.setInterval(()=>this.schedulerTick(),25)))}crossfadeToTrack(e){const t=this.ensureRawContext();if(!t||!this.masterMusicGain||!this.reverbConvolver||!this.delayEntryNode||this.activeStream&&this.activeStream.trackId===e)return;const n=t.currentTime;if(this.activeStream){const h=this.activeStream;h.busGain.gain.cancelScheduledValues(n),h.busGain.gain.setValueAtTime(Math.max(1e-4,h.busGain.gain.value),n),h.busGain.gain.linearRampToValueAtTime(1e-4,n+this.CROSSFADE_SEC),h.stopAfterTime=n+this.CROSSFADE_SEC+.05,this.fadingStreams.push(h)}const i=Ja[e],r=t.createGain();r.gain.setValueAtTime(1e-4,n),r.gain.linearRampToValueAtTime(1,n+this.CROSSFADE_SEC),r.connect(this.masterMusicGain);const a=t.createGain();a.gain.setValueAtTime(1,n),a.connect(r);const o=t.createGain();o.gain.setValueAtTime(1,n),o.connect(r);const c=t.createGain();c.gain.setValueAtTime(i.reverbSendLevel,n),c.connect(this.reverbConvolver);const l=t.createGain();l.gain.setValueAtTime(i.delaySendLevel,n),l.connect(this.delayEntryNode);const d=new Map;for(const h of i.melody64)d.set(h.step,h);this.activeStream={trackId:e,busGain:r,drumBus:a,sidechainBus:o,reverbSend:c,delaySend:l,step128:0,totalStepsPlayed:0,nextNoteTime:n+.02,stopAfterTime:null,melodyByStep64:d},this.schedulerTimer===null&&typeof window<"u"&&(this.schedulerTimer=window.setInterval(()=>this.schedulerTick(),25))}schedulerTick(){if(!this.ctx||!this.musicEnabled||this.ctx.state!=="running")return;const e=this.ctx.currentTime,t=.1;this.activeStream&&this.advanceStream(this.activeStream,e,t);for(let n=this.fadingStreams.length-1;n>=0;n--){const i=this.fadingStreams[n];if(i.stopAfterTime!==null&&e>=i.stopAfterTime){try{i.busGain.disconnect(),i.reverbSend.disconnect(),i.delaySend.disconnect()}catch{}this.fadingStreams.splice(n,1)}else this.advanceStream(i,e,t)}}advanceStream(e,t,n){if(!this.ctx)return;const i=Ja[e.trackId],r=60/i.bpm/4;for(e.nextNoteTime<t-.16&&(e.nextNoteTime=t+.015);e.nextNoteTime<t+n&&!(e.stopAfterTime!==null&&e.nextNoteTime>e.stopAfterTime);){if(e===this.activeStream&&!this.climaxLocked&&e.totalStepsPlayed>=this.SONG_DURATION_STEPS){this.advanceToRandomOstTrack();break}this.scheduleEdmStep(this.ctx,e,i,e.step128,e.nextNoteTime,r),e.step128=(e.step128+1)%128,e.totalStepsPlayed++,e.nextNoteTime+=r}}advanceToRandomOstTrack(){if(this.climaxLocked)return;const e=Ar.filter(n=>n.id!==this.selectedOstId);if(e.length===0)return;const t=e[Math.floor(Math.random()*e.length)];this.selectedOstId=t.id;try{window.localStorage.setItem("ws_selected_ost",this.selectedOstId)}catch{}this.crossfadeToTrack(this.selectedOstId),this.onOstStateChange?.(),this.onTrackAutoAdvance?.(t)}scheduleEdmStep(e,t,n,i,r,a){const o=i%64,c=i>=64,l=Math.floor(o/16)%4,d=o%16,h=c&&l===3&&d>=8;if(d%4===0&&!h?(this.synthFestivalKick(e,t.drumBus,r,n.style==="hard_overdrive"),this.triggerSidechainPump(t.sidechainBus,r,a*4,n.sidechainDepth)):n.style==="carnival_edm"&&(d===3||d===11)&&this.synthFestivalKick(e,t.drumBus,r,!1,.58),o===0&&this.synthStadiumCrash(e,t.drumBus,t.reverbSend,r),i===112&&this.synthFestivalRiser(e,t.sidechainBus,t.reverbSend,r,a*16),d===4||d===12)this.synthFestivalClapSnare(e,t.drumBus,t.reverbSend,r,.28);else if(h){const m=.14+(d-8)/8*.18;this.synthFestivalClapSnare(e,t.drumBus,t.reverbSend,r,m)}d%4===2?this.synthOpenHouseHat(e,t.drumBus,r,.11,a*1.65):this.synthClosedShakerHat(e,t.drumBus,r,d%2===0?.042:.026);const f=n.chords[l];if((d===0||d===8)&&this.synthSupersawChordPad(e,t.sidechainBus,t.reverbSend,f,r,a*7.9,.055),d===2||d===6||d===10||d===14){const m=f[f.length-1]+(c?12:0);this.synthEdmPluck(e,t.sidechainBus,t.delaySend,Fn(m),r,a*1.4)}const g=n.bassGroove[d];if(g>=0){const m=n.bassRoots[l],p=m+g;this.synthEdmBass(e,t.sidechainBus,Fn(m),Fn(p),r,a*.92,n.style==="hard_overdrive"||n.style==="big_room")}const _=t.melodyByStep64.get(o);if(_){const m=_.midi,p=_.durSteps*a*.94;this.synthSupersawLead(e,t.sidechainBus,t.reverbSend,t.delaySend,Fn(m),r,p,n,_.harmonyOffset!==void 0?Fn(m+_.harmonyOffset):void 0,_.glideFromMidi!==void 0?Fn(_.glideFromMidi):void 0,c)}}triggerSidechainPump(e,t,n,i){const r=e.gain;r.cancelScheduledValues(t),r.setValueAtTime(.95,t),r.linearRampToValueAtTime(i,t+.012),r.exponentialRampToValueAtTime(1,t+n*.88)}synthSupersawLead(e,t,n,i,r,a,o,c,l,d,h=!1){const u=e.createBiquadFilter();u.type="lowpass",u.Q.setValueAtTime(2.6,a),u.frequency.setValueAtTime(c.leadFilterCutoff*1.35,a),u.frequency.exponentialRampToValueAtTime(c.leadFilterCutoff*.72,a+.08),u.frequency.exponentialRampToValueAtTime(c.leadFilterCutoff*.55,a+o);const f=e.createGain();f.gain.setValueAtTime(1e-4,a),f.gain.linearRampToValueAtTime(.22,a+.009),f.gain.exponentialRampToValueAtTime(.16,a+o*.65),f.gain.exponentialRampToValueAtTime(1e-4,a+o+.04);const g=[-c.leadUnisonSpreadCents,-c.leadUnisonSpreadCents*.48,0,c.leadUnisonSpreadCents*.48,c.leadUnisonSpreadCents],_=[-.68,-.34,0,.34,.68];for(let b=0;b<g.length;b++){const T=e.createOscillator();T.type="sawtooth",d?(T.frequency.setValueAtTime(d,a),T.frequency.exponentialRampToValueAtTime(r,a+.042)):T.frequency.setValueAtTime(r,a),T.detune.setValueAtTime(g[b],a);const x=e.createGain();if(x.gain.setValueAtTime(b===2?.34:.22,a),e.createStereoPanner&&_[b]!==0){const U=e.createStereoPanner();U.pan.setValueAtTime(_[b],a),T.connect(x),x.connect(U),U.connect(u)}else T.connect(x),x.connect(u);T.start(a),T.stop(a+o+.05)}const m=e.createOscillator(),p=e.createGain();if(m.type="square",m.frequency.setValueAtTime(r*.5,a),p.gain.setValueAtTime(.14,a),m.connect(p),p.connect(u),m.start(a),m.stop(a+o+.05),l){const b=e.createOscillator(),T=e.createGain();b.type="sawtooth",b.frequency.setValueAtTime(l,a),b.detune.setValueAtTime(8,a),T.gain.setValueAtTime(.18,a),b.connect(T),T.connect(u),b.start(a),b.stop(a+o+.05)}if(h){const b=e.createOscillator(),T=e.createGain();b.type="sawtooth",b.frequency.setValueAtTime(r*2,a),b.detune.setValueAtTime(11,a),T.gain.setValueAtTime(.1,a),b.connect(T),T.connect(u),b.start(a),b.stop(a+o+.05)}u.connect(f),f.connect(t),f.connect(n),f.connect(i)}synthSupersawChordPad(e,t,n,i,r,a,o){const c=e.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(2600,r),c.Q.setValueAtTime(1.1,r);const l=e.createGain();l.gain.setValueAtTime(1e-4,r),l.gain.linearRampToValueAtTime(o,r+.03),l.gain.setValueAtTime(o*.9,r+a*.85),l.gain.linearRampToValueAtTime(1e-4,r+a),c.connect(l),l.connect(t),l.connect(n);for(let d=0;d<i.length;d++){const h=Fn(i[d]);for(const u of[-11,11]){const f=e.createOscillator();f.type="sawtooth",f.frequency.setValueAtTime(h,r),f.detune.setValueAtTime(u+(d-2)*3,r),f.connect(c),f.start(r),f.stop(r+a+.02)}}}synthEdmPluck(e,t,n,i,r,a){const o=e.createBiquadFilter();o.type="lowpass",o.Q.setValueAtTime(3,r),o.frequency.setValueAtTime(4200,r),o.frequency.exponentialRampToValueAtTime(380,r+a*.85);const c=e.createGain();c.gain.setValueAtTime(.11,r),c.gain.exponentialRampToValueAtTime(1e-4,r+a);const l=e.createOscillator(),d=e.createOscillator();l.type="sawtooth",d.type="square",l.frequency.setValueAtTime(i,r),d.frequency.setValueAtTime(i,r),d.detune.setValueAtTime(14,r),l.connect(o),d.connect(o),o.connect(c),c.connect(t),c.connect(n),l.start(r),d.start(r),l.stop(r+a+.02),d.stop(r+a+.02)}synthEdmBass(e,t,n,i,r,a,o){const c=e.createOscillator(),l=e.createGain();c.type="sine",c.frequency.setValueAtTime(n,r),l.gain.setValueAtTime(.32,r),l.gain.exponentialRampToValueAtTime(.001,r+a),c.connect(l),l.connect(t),c.start(r),c.stop(r+a+.015);const d=e.createOscillator(),h=e.createOscillator(),u=e.createBiquadFilter(),f=e.createGain();d.type="sawtooth",h.type="square",d.frequency.setValueAtTime(i,r),h.frequency.setValueAtTime(i,r),h.detune.setValueAtTime(o?16:9,r),u.type="lowpass",u.Q.setValueAtTime(o?4.2:2.5,r),u.frequency.setValueAtTime(o?1350:820,r),u.frequency.exponentialRampToValueAtTime(140,r+a),f.gain.setValueAtTime(.2,r),f.gain.exponentialRampToValueAtTime(.001,r+a),d.connect(u),h.connect(u),u.connect(f),f.connect(t),d.start(r),h.start(r),d.stop(r+a+.015),h.stop(r+a+.015)}synthFestivalKick(e,t,n,i=!1,r=1){const a=e.createOscillator(),o=e.createGain();a.type="sine",a.frequency.setValueAtTime(i?175:155,n),a.frequency.exponentialRampToValueAtTime(52,n+.032),a.frequency.exponentialRampToValueAtTime(36,n+.17),o.gain.setValueAtTime(.46*r,n),o.gain.setValueAtTime(.42*r,n+.035),o.gain.exponentialRampToValueAtTime(.001,n+.18),a.connect(o),o.connect(t),a.start(n),a.stop(n+.19);const c=e.createOscillator(),l=e.createGain();if(c.type="triangle",c.frequency.setValueAtTime(310,n),c.frequency.exponentialRampToValueAtTime(64,n+.042),l.gain.setValueAtTime(.24*r,n),l.gain.exponentialRampToValueAtTime(.001,n+.048),c.connect(l),l.connect(t),c.start(n),c.stop(n+.052),this.noiseBuffer){const d=e.createBufferSource();d.buffer=this.noiseBuffer;const h=e.createBiquadFilter();h.type="bandpass",h.frequency.setValueAtTime(3600,n);const u=e.createGain();u.gain.setValueAtTime(.18*r,n),u.gain.exponentialRampToValueAtTime(.001,n+.012),d.connect(h),h.connect(u),u.connect(t),d.start(n),d.stop(n+.015)}}synthFestivalClapSnare(e,t,n,i,r){const a=e.createOscillator(),o=e.createGain();if(a.type="triangle",a.frequency.setValueAtTime(210,i),a.frequency.exponentialRampToValueAtTime(115,i+.065),o.gain.setValueAtTime(r*.65,i),o.gain.exponentialRampToValueAtTime(.001,i+.075),a.connect(o),o.connect(t),a.start(i),a.stop(i+.08),!this.noiseBuffer)return;const c=[0,.011,.023];for(let l=0;l<c.length;l++){const d=i+c[l],h=e.createBufferSource();h.buffer=this.noiseBuffer;const u=e.createBiquadFilter();u.type="bandpass",u.frequency.setValueAtTime(1650,d),u.Q.setValueAtTime(.95,d);const f=e.createGain(),g=l===2?.16:.035;f.gain.setValueAtTime(r*(l===2?.85:.55),d),f.gain.exponentialRampToValueAtTime(.001,d+g),h.connect(u),u.connect(f),f.connect(t),l===2&&f.connect(n),h.start(d),h.stop(d+g+.01)}}synthOpenHouseHat(e,t,n,i,r){if(!this.noiseBuffer)return;const a=e.createBufferSource();a.buffer=this.noiseBuffer;const o=e.createBiquadFilter();o.type="highpass",o.frequency.setValueAtTime(7200,n);const c=e.createGain();c.gain.setValueAtTime(.001,n),c.gain.linearRampToValueAtTime(i,n+.006),c.gain.exponentialRampToValueAtTime(.001,n+r),a.connect(o),o.connect(c),c.connect(t),a.start(n),a.stop(n+r+.015)}synthClosedShakerHat(e,t,n,i){if(!this.noiseBuffer)return;const r=e.createBufferSource();r.buffer=this.noiseBuffer;const a=e.createBiquadFilter();a.type="highpass",a.frequency.setValueAtTime(8500,n);const o=e.createGain();o.gain.setValueAtTime(i,n),o.gain.exponentialRampToValueAtTime(.001,n+.032),r.connect(a),a.connect(o),o.connect(t),r.start(n),r.stop(n+.038)}synthStadiumCrash(e,t,n,i){if(!this.noiseBuffer)return;const r=e.createBufferSource();r.buffer=this.noiseBuffer;const a=e.createBiquadFilter();a.type="highpass",a.frequency.setValueAtTime(5200,i);const o=e.createGain();o.gain.setValueAtTime(.14,i),o.gain.exponentialRampToValueAtTime(.001,i+.85),r.connect(a),a.connect(o),o.connect(t),o.connect(n),r.start(i),r.stop(i+.9)}synthFestivalRiser(e,t,n,i,r){if(!this.noiseBuffer)return;const a=e.createBufferSource();a.buffer=this.noiseBuffer,a.loop=!0;const o=e.createBiquadFilter();o.type="bandpass",o.Q.setValueAtTime(3.2,i),o.frequency.setValueAtTime(450,i),o.frequency.exponentialRampToValueAtTime(6400,i+r);const c=e.createGain();c.gain.setValueAtTime(.001,i),c.gain.exponentialRampToValueAtTime(.16,i+r*.92),c.gain.linearRampToValueAtTime(1e-4,i+r),a.connect(o),o.connect(c),c.connect(t),c.connect(n),a.start(i),a.stop(i+r+.02)}playKick(e=!1){const t=this.ensureContext();if(!t)return;const n=t.currentTime,i=t.createOscillator(),r=t.createGain();i.type=e?"sawtooth":"triangle",i.frequency.setValueAtTime(e?210:150,n),i.frequency.exponentialRampToValueAtTime(38,n+(e?.24:.12)),r.gain.setValueAtTime(e?.35:.22,n),r.gain.exponentialRampToValueAtTime(.001,n+(e?.24:.12)),i.connect(r),r.connect(t.destination),i.start(n),i.stop(n+(e?.25:.13))}playFullChargeShot(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,n=e.createOscillator(),i=e.createGain();n.type="sawtooth",n.frequency.setValueAtTime(280,t),n.frequency.exponentialRampToValueAtTime(32,t+.42),i.gain.setValueAtTime(.42,t),i.gain.exponentialRampToValueAtTime(.001,t+.44),n.connect(i),i.connect(e.destination),n.start(t),n.stop(t+.45);const r=e.createOscillator(),a=e.createGain();r.type="square",r.frequency.setValueAtTime(320,t),r.frequency.exponentialRampToValueAtTime(980,t+.28),a.gain.setValueAtTime(.18,t),a.gain.exponentialRampToValueAtTime(.001,t+.32),r.connect(a),a.connect(e.destination),r.start(t),r.stop(t+.33)}playTackle(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,n=e.createOscillator(),i=e.createGain();n.type="square",n.frequency.setValueAtTime(125,t),n.frequency.exponentialRampToValueAtTime(42,t+.16),i.gain.setValueAtTime(.28,t),i.gain.exponentialRampToValueAtTime(.001,t+.17),n.connect(i),i.connect(e.destination),n.start(t),n.stop(t+.18)}playFenceShock(){const e=this.ensureContext();if(!e)return;const t=e.currentTime;for(let n=0;n<5;n++){const i=e.createOscillator(),r=e.createGain();i.type="sawtooth";const a=t+n*.055;i.frequency.setValueAtTime(n%2===0?540:190,a),i.frequency.linearRampToValueAtTime(n%2===0?880:120,a+.05),r.gain.setValueAtTime(.22,a),r.gain.exponentialRampToValueAtTime(.01,a+.052),i.connect(r),r.connect(e.destination),i.start(a),i.stop(a+.054)}}playItemGrant(){const e=this.ensureContext();if(!e)return;const t=e.currentTime;[523.25,659.25,783.99,1046.5].forEach((i,r)=>{const a=e.createOscillator(),o=e.createGain();a.type="triangle";const c=t+r*.055;a.frequency.setValueAtTime(i,c),o.gain.setValueAtTime(.18,c),o.gain.exponentialRampToValueAtTime(.001,c+.12),a.connect(o),o.connect(e.destination),a.start(c),a.stop(c+.13)})}playGoalHorn(){const e=this.ensureContext();if(!e)return;const t=e.currentTime;[196,246.94,293.66,392].forEach(i=>{const r=e.createOscillator(),a=e.createGain();r.type="sawtooth",r.frequency.setValueAtTime(i,t),a.gain.setValueAtTime(.14,t),a.gain.setValueAtTime(.14,t+.55),a.gain.exponentialRampToValueAtTime(.001,t+.95),r.connect(a),a.connect(e.destination),r.start(t),r.stop(t+.96)})}playWhistle(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.setValueAtTime(2650,t),n.frequency.setValueAtTime(2820,t+.08),n.frequency.setValueAtTime(2650,t+.16),i.gain.setValueAtTime(.2,t),i.gain.exponentialRampToValueAtTime(.001,t+.34),n.connect(i),i.connect(e.destination),n.start(t),n.stop(t+.35)}}const et=new Vl,Xs=!0,Rr={item_baguette:{id:"item_baguette",name:"Day-Old French Baguette",iconUrl:"assets/sprites/items/item_baguette.png",color:"#e39b3b",description:"Fires a rock-hard artisanal baguette missile that knocks opposing outfielders flat for 1.8s!"},item_pillow:{id:"item_pillow",name:"Spanish Siesta Pillow",iconUrl:"assets/sprites/items/item_pillow.png",color:"#c60b1e",description:"Drops a plush crimson & gold nap zone on the turf. Any opposing outfielder who touches it snoozes for 2.0s!"},item_bratwurst:{id:"item_bratwurst",name:"Bratwurst & Pretzel Bomb",iconUrl:"assets/sprites/items/item_bratwurst.png",color:"#ffcc00",description:"Lobs a sizzling sausage & pretzel explosive that detonates in a mustard blast wave, stunning nearby outfielders!"},item_espresso:{id:"item_espresso",name:"Steaming Triple Espresso",iconUrl:"assets/sprites/items/item_espresso.png",color:"#00f0ff",description:"Jolts the active player with 1.55x hyper-caffeine sprint speed for 4.5s and +35% Team Charge Meter!"}},Hi=[{id:"spain_tamale",name:"#10 Lamino Tamale",shortName:"Tamale",teamId:"spain",role:"Outfielder",number:10,spriteSheetUrl:"assets/sprites/processed/spain_tamale.png",skinColor:"#6b4226",kitPrimary:"#c60b1e",kitSecondary:"#ffc400",auraColor:"#ff2a00",stats:{speed:10,shotPower:9,passing:9,tackling:6,agility:10},traitName:"Homework-After-Halftime Fire Shot",traitDesc:"Blistering wing cuts and fiery crimson curl shots.",bio:"Still has geometry homework due on Monday, yet casually dribbles past three veteran defenders before unleashing a scorched-earth top-bin screamer."},{id:"spain_siesta",name:"#6 Andrés Siesta",shortName:"Siesta",teamId:"spain",role:"Outfielder",number:6,spriteSheetUrl:"assets/sprites/processed/spain_siesta.png",skinColor:"#f3cfb3",kitPrimary:"#c60b1e",kitSecondary:"#ffc400",auraColor:"#ffd700",stats:{speed:7,shotPower:8,passing:10,tackling:7,agility:9},traitName:"Solar-Dome Tiki-Taka",traitDesc:"Laser-guided one-touch passes that supercharge the Team Meter.",bio:"His aerodynamically polished cranium reflects stadium floodlights directly into defenders’ eyes while he threads impossible 4D geometry passes."},{id:"spain_poodle",name:"#5 Carles Poodle",shortName:"Poodle",teamId:"spain",role:"Outfielder",number:5,spriteSheetUrl:"assets/sprites/processed/spain_poodle.png",skinColor:"#d9a17c",kitPrimary:"#c60b1e",kitSecondary:"#ffc400",auraColor:"#ff5500",stats:{speed:7,shotPower:8,passing:7,tackling:10,agility:7},traitName:"Lion-Mane Wrecking Ball",traitDesc:"Bone-rattling shoulder checks that send strikers flying into the electric fence.",bio:"Ninety percent untamed curly mane, ten percent pure volcanic grit. Once headed a steel cannonball in training and apologized to the cannonball."},{id:"spain_castillas",name:"#1 Iker Castillas",shortName:"Castillas",teamId:"spain",role:"Goalkeeper",number:1,spriteSheetUrl:"assets/sprites/processed/spain_castillas.png",skinColor:"#e0ac8b",kitPrimary:"#d4af37",kitSecondary:"#1c1c1c",auraColor:"#ffd700",stats:{speed:8,shotPower:7,passing:8,tackling:10,agility:10},traitName:"Sanctified Gold Gauntlets",traitDesc:"Full-stretch horizontal diving saves and 100% immunity to all arena items.",bio:"Equipped with液压-assisted golden keeper gauntlets that swat away midfield blasts like mosquitoes. Completely unfazed by flying baguettes or bratwurst bombs."},{id:"france_mcfrappe",name:"#10 Kylian McFrappé",shortName:"McFrappé",teamId:"france",role:"Outfielder",number:10,spriteSheetUrl:"assets/sprites/processed/france_mcfrappe.png",skinColor:"#7a4b2a",kitPrimary:"#002395",kitSecondary:"#ed2939",auraColor:"#00e5ff",stats:{speed:10,shotPower:9,passing:8,tackling:6,agility:10},traitName:"Mach-3 Ninja Headband",traitDesc:"Leaves sonic-boom blue lightning trails on every sprint and dodge.",bio:"Clocked by radar cameras on the Paris périphérique at 88 mph in cleats. When he hits full stride, the broadcast cameraman needs a neck brace."},{id:"france_zizou",name:"#5 Zizou Headbutt",shortName:"Zizou",teamId:"france",role:"Outfielder",number:5,spriteSheetUrl:"assets/sprites/processed/france_zizou.png",skinColor:"#e5b899",kitPrimary:"#002395",kitSecondary:"#ffffff",auraColor:"#4488ff",stats:{speed:8,shotPower:10,passing:10,tackling:9,agility:9},traitName:"Tectonic Cranium Chest-Check",traitDesc:"Supreme ball control combined with devastating forward lunging tackles.",bio:"Pirouettes through midfield like a ballet master until someone insults his mother’s croissant recipe—then delivers a tackle measured on the Richter scale."},{id:"france_greaseman",name:"#7 Antoine Greaseman",shortName:"Greaseman",teamId:"france",role:"Outfielder",number:7,spriteSheetUrl:"assets/sprites/processed/france_greaseman.png",skinColor:"#f5ccb0",kitPrimary:"#002395",kitSecondary:"#ed2939",auraColor:"#ff4477",stats:{speed:9,shotPower:8,passing:9,tackling:8,agility:9},traitName:"Shampoo-Commercial Volley",traitDesc:"Silky one-touch link-up play and acrobatic box finishes.",bio:"Never loses his headband even during a 20,000-volt electric fence shock. Equally dangerous threading a through-ball or celebrating with a cheeky grin."},{id:"france_baldtez",name:"#1 Fabien Baldtez",shortName:"Baldtez",teamId:"france",role:"Goalkeeper",number:1,spriteSheetUrl:"assets/sprites/processed/france_baldtez.png",skinColor:"#f3cfb3",kitPrimary:"#ccff00",kitSecondary:"#002395",auraColor:"#ccff00",stats:{speed:8,shotPower:7,passing:8,tackling:10,agility:10},traitName:"Lucky Cue-Ball Reflexes",traitDesc:"Acrobatic two-handed saves and total immunity to all arena items.",bio:"Teammates kiss his mirror-polished bald head before kickoff for +100% luck. Patrols the crease in blinding neon yellow armor."},{id:"germany_rudigear",name:"#2 Antonio Rudigear",shortName:"Rudigear",teamId:"germany",role:"Outfielder",number:2,spriteSheetUrl:"assets/sprites/processed/germany_rudigear.png",skinColor:"#4a2c18",kitPrimary:"#ffffff",kitSecondary:"#111111",auraColor:"#ffcc00",stats:{speed:9,shotPower:8,passing:7,tackling:10,agility:8},traitName:"Carbon-Fiber High-Knees Enforcer",traitDesc:"Terrifying protective face-mask and maximum-knockback tackles.",bio:"Wears a battle-grade carbon-fiber mask not to protect his face, but to protect the ball from his cheekbones. Sprints with menacing high-knee gallops."},{id:"germany_cruise",name:"#8 Toni Cruise-Control",shortName:"Cruise",teamId:"germany",role:"Outfielder",number:8,spriteSheetUrl:"assets/sprites/processed/germany_cruise.png",skinColor:"#f7d7c4",kitPrimary:"#ffffff",kitSecondary:"#111111",auraColor:"#e5c158",stats:{speed:7,shotPower:9,passing:10,tackling:8,agility:8},traitName:"Autobahn Laser Geometry",traitDesc:"99.9% pass precision with gold HUD visor targeting.",bio:"His gold visor computes wind resistance, turf friction, and goalkeeper anxiety to three decimal places before slotting a low side-foot rocket."},{id:"germany_schwein",name:"#7 Bastian Schwein-Stomper",shortName:"Schwein",teamId:"germany",role:"Outfielder",number:7,spriteSheetUrl:"assets/sprites/processed/germany_schwein.png",skinColor:"#f2c8b0",kitPrimary:"#ffffff",kitSecondary:"#dd0000",auraColor:"#ff3300",stats:{speed:8,shotPower:10,passing:8,tackling:9,agility:8},traitName:"Bandaged Box-to-Box Howitzer",traitDesc:"Relentless engine and thunderous long-range power drives.",bio:"Earned his permanent forehead bandage in the first 12 seconds of warmup and hasn’t stopped sliding through tackles or blasting 40-yard thunderbolts since."},{id:"germany_kannon",name:"#1 Oliver Kannon",shortName:"Kannon",teamId:"germany",role:"Goalkeeper",number:1,spriteSheetUrl:"assets/sprites/processed/germany_kannon.png",skinColor:"#f0c4a8",kitPrimary:"#3a3f44",kitSecondary:"#dd0000",auraColor:"#ffaa00",stats:{speed:8,shotPower:8,passing:7,tackling:10,agility:10},traitName:"Der Titan Mechanized Gauntlets",traitDesc:"Roaring intimidation, explosive diving saves, and 100% item immunity.",bio:"Fuels himself solely on decibels and rage. His mechanized gauntlets emit steam when he punches away shots, and no item in existence dares scratch his armor."},{id:"brazil_gaucho",name:"#9 Ronal-Dinho Gaucho-Grin",shortName:"Gaucho",teamId:"brazil",role:"Outfielder",number:9,spriteSheetUrl:"assets/sprites/processed/brazil_gaucho.png",skinColor:"#6e4225",kitPrimary:"#ffdf00",kitSecondary:"#009c3b",auraColor:"#00ff66",stats:{speed:9,shotPower:9,passing:10,tackling:6,agility:10},traitName:"No-Look Samba Bicycle Aura",traitDesc:"Hypnotic elastico dodges and emerald-gold acrobatic strikes.",bio:"Beams a 64-tooth mega-watt grin while breaking ankles in three postcodes simultaneously. Even the electric fence sparks in samba rhythm when he passes by."},{id:"brazil_fenomeno",name:"#10 R9 El Fenomeno-Cut",shortName:"Fenomeno",teamId:"brazil",role:"Outfielder",number:10,spriteSheetUrl:"assets/sprites/processed/brazil_fenomeno.png",skinColor:"#8c5838",kitPrimary:"#ffdf00",kitSecondary:"#002776",auraColor:"#ffee00",stats:{speed:9,shotPower:10,passing:8,tackling:7,agility:9},traitName:"Aerodynamic Forehead Triangle",traitDesc:"Unstoppable clinical finishing and explosive Full-Charge cannon shots.",bio:"That iconic crescent triangle patch of hair on an otherwise cue-ball dome acts as a front downforce wing, channeling pure striker instinct into every shot."},{id:"brazil_vini",name:"#7 Vini Samba-Jr",shortName:"Vini Jr",teamId:"brazil",role:"Outfielder",number:7,spriteSheetUrl:"assets/sprites/processed/brazil_vini.png",skinColor:"#4f2f1a",kitPrimary:"#ffdf00",kitSecondary:"#009c3b",auraColor:"#00ff88",stats:{speed:10,shotPower:8,passing:8,tackling:6,agility:10},traitName:"Carnival Stepover Dash",traitDesc:"Lightning wing acceleration and rapid meter-building dodges.",bio:"Dances past sliding defenders so fast they end up tackling the perimeter fence by mistake. Loves turning counter-attacks into highlight reels."},{id:"brazil_alisson",name:"#1 Alisson Mustache",shortName:"Alisson",teamId:"brazil",role:"Goalkeeper",number:1,spriteSheetUrl:"assets/sprites/processed/brazil_alisson.png",skinColor:"#d9a17c",kitPrimary:"#007a33",kitSecondary:"#181818",auraColor:"#00ff66",stats:{speed:8,shotPower:7,passing:9,tackling:10,agility:10},traitName:"Lumberjack Wall & Mustache Shield",traitDesc:"Commanding one-on-one blocks and 100% immunity to all arena items.",bio:"His rugged mustache alone has blocked twelve penalty kicks. Clad in emerald keeper armor, he laughs off flying baguettes and commands the box with icy calm."}],mt={spain:{id:"spain",name:"SPAIN",nickname:"La Furia Siesta",flagEmoji:"🇪🇸",primaryColor:"#c60b1e",secondaryColor:"#ffc400",accentColor:"#ff3b00",styleTagline:"Blistering Tiki-Taka Passes & Fiery Wing Strikes",players:Hi.filter(s=>s.teamId==="spain")},france:{id:"france",name:"FRANCE",nickname:"Les Supersonic Bleus",flagEmoji:"🇫🇷",primaryColor:"#002395",secondaryColor:"#ed2939",accentColor:"#00e5ff",styleTagline:"Mach-3 Counter-Attacks & Tectonic Midfield Power",players:Hi.filter(s=>s.teamId==="france")},germany:{id:"germany",name:"GERMANY",nickname:"Die Panzer-Maschine",flagEmoji:"🇩🇪",primaryColor:"#ffffff",secondaryColor:"#111111",accentColor:"#ffcc00",styleTagline:"Heavy Enforcer Tackles & Industrial Long-Range Rockets",players:Hi.filter(s=>s.teamId==="germany")},brazil:{id:"brazil",name:"BRAZIL",nickname:"Samba Joga Bonito",flagEmoji:"🇧🇷",primaryColor:"#ffdf00",secondaryColor:"#009c3b",accentColor:"#00ff66",styleTagline:"Acrobatic Samba Flair & Explosive Striker Firepower",players:Hi.filter(s=>s.teamId==="brazil")}},Ns=Object.fromEntries(Hi.map(s=>[s.id,s])),Ue=36,pt=22,bt=4.6,Rn=3.6,Qa=3,eo=["item_baguette","item_pillow","item_bratwurst","item_espresso"];function un(){return{moveX:0,moveZ:0,passPressed:!1,passReleased:!1,passHoldDuration:0,shootPressed:!1,shootReleased:!1,shootHeld:!1,shootHoldDuration:0,dodgePressed:!1,itemPressed:!1}}class to{config;players=[];ball;fieldItems=[];homeScore=0;awayScore=0;homeCharge=0;awayCharge=0;homeHeldItem=null;awayHeldItem=null;activeHomePlayerId="";activeAwayPlayerId="";timeRemaining=180;isSuddenDeath=!1;isMatchOver=!1;winnerSide=null;hitStopTimer=0;goalCelebrationTimer=0;lastScorerName=null;stats={};pendingEvents=[];itemUidCounter=1;aiSwitchCooldownHome=0;aiSwitchCooldownAway=0;aiActionCooldownAway=0;facingLockTimers=new Map;stateHoldTimers=new Map;constructor(e){this.config={...e},this.timeRemaining=e.mode==="timed"?e.durationSeconds:0,this.ball={x:0,y:.45,z:0,vx:0,vy:0,vz:0,ownerId:null,lastTouchPlayerId:null,lastTouchSide:null,isFullChargeShot:!1,shotTeamSide:null,pickupCooldown:0,passSourceId:null,passTimer:0},this.initRoster(),this.resetPositionsForKickoff("home")}initRoster(){this.players=[],this.stats={};const e=(t,n)=>{const i=mt[t],r=n==="home"?1:-1,a=[{x:-6*r,z:0},{x:-15*r,z:-9.5},{x:-15*r,z:9.5},{x:-34*r,z:0}],o=i.players.filter(d=>d.role==="Outfielder"),c=i.players.find(d=>d.role==="Goalkeeper")||i.players[3];[...o.slice(0,3),c].forEach((d,h)=>{const u=`${n}_${h}`,f=a[h],g={id:u,characterId:d.id,name:d.name,shortName:d.shortName,number:d.number,teamSide:n,teamId:t,role:d.role,homeX:f.x,homeZ:f.z,x:f.x,y:0,z:f.z,vx:0,vz:0,facingRight:n==="home",animState:"IDLE",actionTimer:0,stunTimer:0,invincibleTimer:0,turboTimer:0,tackleCooldown:0,speedStat:d.stats.speed,shotStat:d.stats.shotPower,passStat:d.stats.passing,tackleStat:d.stats.tackling};this.players.push(g),this.stats[u]={playerId:u,characterId:d.id,name:d.name,shortName:d.shortName,number:d.number,role:d.role,teamSide:n,teamId:t,goals:0,shots:0,tackles:0,passes:0}})};e(this.config.homeTeamId,"home"),e(this.config.awayTeamId,"away"),this.activeHomePlayerId="home_0",this.activeAwayPlayerId="away_0"}resetPositionsForKickoff(e){this.fieldItems=[];for(const i of this.players)i.x=i.homeX,i.y=0,i.z=i.homeZ,i.vx=0,i.vz=0,i.facingRight=i.teamSide==="home",i.animState="IDLE",i.actionTimer=0,i.stunTimer=0,i.invincibleTimer=0,i.turboTimer=0,i.tackleCooldown=0;const t=`${e}_0`,n=this.getPlayerById(t);n&&(n.x=e==="home"?-1.2:1.2,n.z=0),this.ball.x=0,this.ball.y=.45,this.ball.z=0,this.ball.vx=0,this.ball.vy=0,this.ball.vz=0,this.ball.ownerId=null,this.ball.isFullChargeShot=!1,this.ball.shotTeamSide=null,this.ball.pickupCooldown=.15,this.ball.passSourceId=null,this.ball.passTimer=0,this.activeHomePlayerId="home_0",this.activeAwayPlayerId="away_0"}getPlayerById(e){if(e)return this.players.find(t=>t.id===e)}addTeamCharge(e,t){e==="home"?this.homeCharge=Math.max(0,Math.min(100,this.homeCharge+t)):this.awayCharge=Math.max(0,Math.min(100,this.awayCharge+t))}step(e,t,n){if(this.pendingEvents=[],this.isMatchOver)return this.pendingEvents;if(this.hitStopTimer>0)return this.hitStopTimer=Math.max(0,this.hitStopTimer-e),this.pendingEvents;if(this.goalCelebrationTimer>0){if(this.goalCelebrationTimer-=e,this.goalCelebrationTimer<=0){this.goalCelebrationTimer=0;const a=this.ball.lastTouchSide==="home"?"away":"home";this.resetPositionsForKickoff(a)}return this.pendingEvents}if(this.config.mode==="timed"&&!this.isSuddenDeath&&(this.timeRemaining=Math.max(0,this.timeRemaining-e),this.timeRemaining<=0)){if(this.homeScore!==this.awayScore)return this.isMatchOver=!0,this.winnerSide=this.homeScore>this.awayScore?"home":"away",this.pendingEvents.push({type:"MATCH_OVER",teamSide:this.winnerSide,message:`${mt[this.winnerSide==="home"?this.config.homeTeamId:this.config.awayTeamId].name} WINS!`}),this.pendingEvents;this.isSuddenDeath=!0,this.pendingEvents.push({type:"SUDDEN_DEATH",message:"SUDDEN DEATH GOLDEN GOAL! NEXT GOAL WINS!"})}this.aiSwitchCooldownHome=Math.max(0,this.aiSwitchCooldownHome-e),this.aiSwitchCooldownAway=Math.max(0,this.aiSwitchCooldownAway-e),this.aiActionCooldownAway=Math.max(0,this.aiActionCooldownAway-e);for(const[a,o]of this.facingLockTimers.entries())o>0&&this.facingLockTimers.set(a,Math.max(0,o-e));for(const[a,o]of this.stateHoldTimers.entries())o>0&&this.stateHoldTimers.set(a,Math.max(0,o-e));const i=t??this.computeTeamAIInput("home",e);if(this.updateTeamControls("home",i,e),!!(n&&(this.config.isMultiplayer||this.config.awayInputSource!=="cpu"))&&n)this.updateTeamControls("away",n,e);else{const a=this.computeTeamAIInput("away",e);this.updateTeamControls("away",a,e)}for(const a of this.players)this.stepPlayerPhysicsAndAI(a,e);return this.stepFieldItems(e),this.stepBall(e),this.pendingEvents}getControlledPlayer(e){const t=e==="home"?this.activeHomePlayerId:this.activeAwayPlayerId;let n=this.getPlayerById(t);return(!n||n.role==="Goalkeeper")&&(n=this.players.find(i=>i.teamSide===e&&i.role==="Outfielder"),e==="home"?this.activeHomePlayerId=n.id:this.activeAwayPlayerId=n.id),n}updatePlayerFacing(e,t,n=!1){if(e.facingRight===t)return;const i=this.facingLockTimers.get(e.id)||0;!n&&i>0||(e.facingRight=t,this.facingLockTimers.set(e.id,.24))}switchToClosestOutfielder(e,t){const n=this.players.filter(c=>c.teamSide===e&&c.role==="Outfielder"&&c.stunTimer<=0),i=n.length>0?n:this.players.filter(c=>c.teamSide===e&&c.role==="Outfielder"),r=e==="home"?this.activeHomePlayerId:this.activeAwayPlayerId;let a=i[0],o=1/0;for(const c of i){const l=c.x-this.ball.x,d=c.z-this.ball.z;let h=Math.hypot(l,d);t&&c.id===t&&i.length>1?h+=2.5:!t&&c.id===r&&(h-=2.2),h<o&&(o=h,a=c)}return e==="home"?this.activeHomePlayerId=a.id:this.activeAwayPlayerId=a.id,a}updateTeamControls(e,t,n){const i=this.getPlayerById(this.ball.ownerId);i&&i.teamSide===e&&i.role==="Outfielder"&&(e==="home"?this.activeHomePlayerId=i.id:this.activeAwayPlayerId=i.id);const r=this.getControlledPlayer(e);if(r.stunTimer>0)return;const a=i?.teamSide===e,o=this.ball.ownerId===r.id,c=Math.hypot(t.moveX,t.moveZ),l=c>.08?t.moveX/Math.max(1,c):0,d=c>.08?t.moveZ/Math.max(1,c):0,h=7.4+r.speedStat*.34,u=r.turboTimer>0?1.55:1,f=o?.93:1,g=h*u*f;if(r.actionTimer<=.08){const _=Math.min(1,n*14);r.vx+=(l*g-r.vx)*_,r.vz+=(d*g-r.vz)*_,Math.abs(l)>.22&&this.updatePlayerFacing(r,l>0)}if(t.itemPressed&&this.tryUseHeldItem(e,r,l,d),t.dodgePressed&&r.invincibleTimer<=0&&r.actionTimer<=0){const _=Math.abs(l)>.05||Math.abs(d)>.05?l:r.facingRight?1:-1,m=Math.abs(l)>.05||Math.abs(d)>.05?d:0;r.vx=_*15.8,r.vz=m*15.8,r.invincibleTimer=.36,r.actionTimer=.26,r.animState="ACTION",this.players.some(b=>b.teamSide!==e&&b.stunTimer<=0&&Math.hypot(b.x-r.x,b.z-r.z)<3.4)&&this.addTeamCharge(e,15)}if(a&&o){if((t.passReleased||t.passPressed&&t.passHoldDuration===0)&&t.passReleased){const _=t.passHoldDuration>=.22;this.executePass(r,l,d,_)}}else t.passPressed&&!a&&this.switchToClosestOutfielder(e,r.id);if(o){const _=e==="home"?this.homeCharge:this.awayCharge;t.shootPressed&&_>=100?(e==="home"?this.homeCharge=0:this.awayCharge=0,this.executeShot(r,l,d,!0)):t.shootHeld&&t.shootHoldDuration>=1.5?this.executeShot(r,l,d,!0):t.shootReleased&&t.shootHoldDuration<1.5&&this.executeShot(r,l,d,!1)}else!a&&t.shootPressed&&r.tackleCooldown<=0&&this.executeTackle(r,l,d)}executePass(e,t,n,i){const r=this.players.filter(f=>f.teamSide===e.teamSide&&f.id!==e.id&&f.role==="Outfielder"&&f.stunTimer<=0);if(r.length===0)return;const a=Math.hypot(t,n)>.15;let o=r[0],c=-1/0;for(const f of r){const g=f.x-e.x,_=f.z-e.z,m=Math.max(.1,Math.hypot(g,_)),b=(a?g/m*t+_/m*n:e.teamSide==="home"?g/m:-g/m)*3-m*.08;b>c&&(c=b,o=f)}const l=o.x+o.vx*.22-e.x,d=o.z+o.vz*.22-e.z,h=Math.max(1,Math.hypot(l,d)),u=i?Math.min(26,Math.max(14,h*1.15)):22.5+e.passStat*.45;this.ball.ownerId=null,this.ball.pickupCooldown=.16,this.ball.isFullChargeShot=!1,this.ball.shotTeamSide=null,this.ball.vx=l/h*u,this.ball.vz=d/h*u,this.ball.vy=i?7.8:1.1,this.ball.passSourceId=e.id,this.ball.passTimer=1.25,e.actionTimer=.28,e.animState="ACTION",e.facingRight=l>=0,e.teamSide==="home"?this.activeHomePlayerId=o.id:this.activeAwayPlayerId=o.id,this.stats[e.id]&&this.stats[e.id].passes++,this.pendingEvents.push({type:"KICK",teamSide:e.teamSide,playerId:e.id,x:e.x,z:e.z})}executeShot(e,t,n,i){const r=e.teamSide==="home"?Ue:-Ue,a=Math.max(-bt*.78,Math.min(bt*.78,n*bt*.85)),o=r-e.x,c=a-e.z,l=Math.max(1,Math.hypot(o,c)),d=20+e.shotStat*.45,h=i?d*1.8:d;this.ball.ownerId=null,this.ball.pickupCooldown=.22,this.ball.isFullChargeShot=i,this.ball.shotTeamSide=e.teamSide,this.ball.lastTouchPlayerId=e.id,this.ball.lastTouchSide=e.teamSide,this.ball.passSourceId=null,this.ball.vx=o/l*h,this.ball.vz=c/l*h,this.ball.vy=i?3.2:2.1+Math.abs(t)*.5,e.actionTimer=.36,e.animState="ACTION",e.facingRight=o>=0,this.stats[e.id]&&this.stats[e.id].shots++,i?(this.hitStopTimer=.06,this.pendingEvents.push({type:"FULL_CHARGE_SHOT",teamSide:e.teamSide,playerId:e.id,playerName:e.shortName,x:e.x,z:e.z,dirX:o/l,dirZ:c/l,message:`${e.shortName.toUpperCase()} UNLEASHES A FULL-CHARGE SHOT!`})):this.pendingEvents.push({type:"KICK",teamSide:e.teamSide,playerId:e.id,x:e.x,z:e.z})}executeTackle(e,t,n){e.tackleCooldown=.65,e.actionTimer=.34,e.animState="ACTION";let i=t,r=n;if(Math.hypot(i,r)<.15){const o=this.findNearestOpponentOutfielder(e);if(o){const c=Math.max(.1,Math.hypot(o.x-e.x,o.z-e.z));i=(o.x-e.x)/c,r=(o.z-e.z)/c}else i=e.facingRight?1:-1,r=0}const a=Math.max(.1,Math.hypot(i,r));i/=a,r/=a,e.facingRight=i>=0,e.vx=i*(14.5+e.tackleStat*.25),e.vz=r*(14.5+e.tackleStat*.25);for(const o of this.players){if(o.teamSide===e.teamSide||o.role==="Goalkeeper"||o.invincibleTimer>0||o.stunTimer>0)continue;if(Math.hypot(o.x-e.x,o.z-e.z)<=2.35){this.resolveTackleImpact(e,o,i,r);break}}}resolveTackleImpact(e,t,n,i){const r=this.ball.ownerId===t.id;if(this.stats[e.id]&&this.stats[e.id].tackles++,this.addTeamCharge(e.teamSide,20),this.hitStopTimer=.06,t.vx=n*15,t.vz=i*15,t.stunTimer=1.05,t.animState="STUNNED",r)this.ball.ownerId=e.id,this.ball.lastTouchPlayerId=e.id,this.ball.lastTouchSide=e.teamSide,this.ball.isFullChargeShot=!1;else{const a=eo[Math.floor(Math.random()*eo.length)];t.teamSide==="home"?this.homeHeldItem=a:this.awayHeldItem=a,this.pendingEvents.push({type:"FOUL_ITEM_AWARDED",teamSide:t.teamSide,playerId:t.id,playerName:t.shortName,itemId:a,x:t.x,z:t.z,message:`OFF-BALL FOUL ON ${t.shortName.toUpperCase()}! ITEM GRANTED!`})}this.pendingEvents.push({type:"TACKLE_HIT",teamSide:e.teamSide,playerId:e.id,x:t.x,z:t.z,dirX:n,dirZ:i})}tryUseHeldItem(e,t,n,i){const r=e==="home"?this.homeHeldItem:this.awayHeldItem;if(!r)return;if(e==="home"?this.homeHeldItem=null:this.awayHeldItem=null,r==="item_espresso"){t.turboTimer=4.5,this.addTeamCharge(e,35),this.pendingEvents.push({type:"ITEM_USED",teamSide:e,playerId:t.id,itemId:r,x:t.x,z:t.z,message:`${t.shortName.toUpperCase()} DOWNED TRIPLE ESPRESSO! TURBO SURGE!`});return}if(r==="item_pillow"){this.fieldItems.push({uid:`item_${this.itemUidCounter++}`,itemId:"item_pillow",ownerSide:e,x:t.x,y:.25,z:t.z,vx:0,vy:0,vz:0,radius:3.1,timer:6.5,detonated:!1}),this.pendingEvents.push({type:"ITEM_USED",teamSide:e,playerId:t.id,itemId:r,x:t.x,z:t.z,message:`${t.shortName.toUpperCase()} DROPPED A SIESTA PILLOW TRAP!`});return}const a=this.findNearestOpponentOutfielder(t);let o=n,c=i;if(a){const l=Math.max(.1,Math.hypot(a.x-t.x,a.z-t.z));o=(a.x-t.x)/l,c=(a.z-t.z)/l}else Math.hypot(o,c)<.1&&(o=t.facingRight?1:-1,c=0);r==="item_baguette"?this.fieldItems.push({uid:`item_${this.itemUidCounter++}`,itemId:"item_baguette",ownerSide:e,x:t.x+o*.9,y:1,z:t.z+c*.9,vx:o*23,vy:0,vz:c*23,radius:1.45,timer:2.2,detonated:!1}):r==="item_bratwurst"&&this.fieldItems.push({uid:`item_${this.itemUidCounter++}`,itemId:"item_bratwurst",ownerSide:e,x:t.x+o*1,y:1.1,z:t.z+c*1,vx:o*11.5,vy:5.5,vz:c*11.5,radius:4.1,timer:.75,detonated:!1}),this.pendingEvents.push({type:"ITEM_USED",teamSide:e,playerId:t.id,itemId:r,x:t.x,z:t.z,message:`${t.shortName.toUpperCase()} DEPLOYED ${r.replace("item_","").toUpperCase()}!`})}stepFieldItems(e){const t=[];for(const n of this.fieldItems)if(n.timer-=e,n.x+=n.vx*e,n.z+=n.vz*e,n.itemId==="item_bratwurst"&&!n.detonated&&(n.y=Math.max(.3,n.y+n.vy*e),n.vy-=14*e,n.y<=.35&&(n.vx*=.85,n.vz*=.85)),n.itemId==="item_baguette"){let i=!1;for(const r of this.players)if(!(r.teamSide===n.ownerSide||r.role==="Goalkeeper")&&!(r.invincibleTimer>0||r.stunTimer>0)&&Math.hypot(r.x-n.x,r.z-n.z)<=n.radius){r.stunTimer=1.85,r.animState="STUNNED",r.vx=n.vx*.45,r.vz=n.vz*.45,this.ball.ownerId===r.id&&(this.ball.ownerId=null,this.ball.pickupCooldown=.35,this.ball.vx=n.vx*.35,this.ball.vz=n.vz*.35,this.ball.vy=3.5),this.hitStopTimer=.06,this.pendingEvents.push({type:"ITEM_HIT",teamSide:n.ownerSide,playerId:r.id,itemId:"item_baguette",x:r.x,z:r.z,message:`${r.shortName.toUpperCase()} CRUMPLED BY A DAY-OLD BAGUETTE!`}),i=!0;break}!i&&n.timer>0&&Math.abs(n.x)<Ue&&Math.abs(n.z)<pt&&t.push(n)}else if(n.itemId==="item_pillow"){for(const i of this.players)i.teamSide===n.ownerSide||i.role==="Goalkeeper"||i.invincibleTimer>0||i.stunTimer>0||Math.hypot(i.x-n.x,i.z-n.z)<=n.radius&&(i.stunTimer=2,i.animState="STUNNED",i.vx=0,i.vz=0,this.ball.ownerId===i.id&&(this.ball.ownerId=null,this.ball.pickupCooldown=.35),this.pendingEvents.push({type:"ITEM_HIT",teamSide:n.ownerSide,playerId:i.id,itemId:"item_pillow",x:i.x,z:i.z,message:`${i.shortName.toUpperCase()} FELL ASLEEP ON THE SIESTA PILLOW!`}));n.timer>0&&t.push(n)}else if(n.itemId==="item_bratwurst"){if(!n.detonated&&n.timer<=0){n.detonated=!0,n.timer=.35,this.hitStopTimer=.06;for(const i of this.players){if(i.teamSide===n.ownerSide||i.role==="Goalkeeper"||i.invincibleTimer>0)continue;const r=i.x-n.x,a=i.z-n.z,o=Math.hypot(r,a);if(o<=n.radius){const c=Math.max(.2,o);i.stunTimer=1.9,i.animState="STUNNED",i.vx=r/c*14,i.vz=a/c*14,this.ball.ownerId===i.id&&(this.ball.ownerId=null,this.ball.pickupCooldown=.35,this.ball.vx=r/c*9,this.ball.vz=a/c*9,this.ball.vy=4.5)}}this.pendingEvents.push({type:"ITEM_HIT",teamSide:n.ownerSide,itemId:"item_bratwurst",x:n.x,z:n.z,message:"BRATWURST & PRETZEL MUSTARD DETONATION!"})}n.timer>0&&t.push(n)}this.fieldItems=t}stepPlayerPhysicsAndAI(e,t){if(e.actionTimer=Math.max(0,e.actionTimer-t),e.invincibleTimer=Math.max(0,e.invincibleTimer-t),e.turboTimer=Math.max(0,e.turboTimer-t),e.tackleCooldown=Math.max(0,e.tackleCooldown-t),e.stunTimer>0){e.stunTimer=Math.max(0,e.stunTimer-t),e.vx*=Math.pow(.06,t),e.vz*=Math.pow(.06,t),e.x+=e.vx*t,e.z+=e.vz*t,this.checkPlayerWallCollision(e),e.animState="STUNNED";return}const n=e.id===this.activeHomePlayerId,i=e.id===this.activeAwayPlayerId;if(e.role==="Goalkeeper"?this.stepGoalkeeperAI(e,t):!n&&!i&&this.stepSupportOutfielderAI(e,t),e.x+=e.vx*t,e.z+=e.vz*t,e.actionTimer>.1&&e.role==="Outfielder"&&this.ball.ownerId!==e.id){const r=Math.hypot(e.vx,e.vz);if(r>11){for(const a of this.players)if(!(a.teamSide===e.teamSide||a.role==="Goalkeeper")&&!(a.invincibleTimer>0||a.stunTimer>0)&&Math.hypot(a.x-e.x,a.z-e.z)<=1.55){this.resolveTackleImpact(e,a,e.vx/r,e.vz/r),e.actionTimer=.08;break}}}if(this.checkPlayerWallCollision(e),e.stunTimer>0)e.animState="STUNNED";else if(e.actionTimer>0)e.animState="ACTION";else{const r=Math.hypot(e.vx,e.vz),a=this.stateHoldTimers.get(e.id)||0;e.animState==="SPRINT"?r<.75&&a<=0&&(e.animState="IDLE",this.stateHoldTimers.set(e.id,.16)):r>1.55&&a<=0?(e.animState="SPRINT",this.stateHoldTimers.set(e.id,.16)):e.animState="IDLE"}}checkPlayerWallCollision(e){const t=Ue-.85,n=pt-.85,i=Math.hypot(e.vx,e.vz);let r=!1;e.x<-t?(e.x=-t,e.vx=Math.abs(e.vx)*.5,r=!0):e.x>t&&(e.x=t,e.vx=-Math.abs(e.vx)*.5,r=!0),e.z<-n?(e.z=-n,e.vz=Math.abs(e.vz)*.5,r=!0):e.z>n&&(e.z=n,e.vz=-Math.abs(e.vz)*.5,r=!0),r&&e.role==="Outfielder"&&(e.stunTimer>.25||i>12.2)&&e.stunTimer<1.95&&(e.stunTimer=2,e.animState="STUNNED",this.hitStopTimer=.06,this.ball.ownerId===e.id&&(this.ball.ownerId=null,this.ball.pickupCooldown=.35),this.pendingEvents.push({type:"FENCE_SHOCK",teamSide:e.teamSide,playerId:e.id,playerName:e.shortName,x:e.x,z:e.z,message:`${e.shortName.toUpperCase()} ZAPPED BY THE ELECTRIC FENCE!`}))}stepGoalkeeperAI(e,t){const n=e.teamSide==="home"?-Ue+1.55:Ue-1.55,i=Math.max(-bt*.84,Math.min(bt*.84,this.ball.z*.72)),a=(e.teamSide==="home"?Math.min(-Ue+3.1,n+Math.max(0,(10-Math.abs(this.ball.x-n))*.14)):Math.max(Ue-3.1,n-Math.max(0,(10-Math.abs(this.ball.x-n))*.14)))-e.x,o=i-e.z,c=Math.hypot(a,o);if(c>.12?(e.vx=a/c*Math.min(9.2,c*9),e.vz=o/c*Math.min(9.2,c*9)):(e.vx=0,e.vz=0),e.facingRight=e.teamSide==="home",this.ball.ownerId===e.id){const l=e.teamSide==="home"?1:-1;this.executePass(e,l,0,!1)}}stepSupportOutfielderAI(e,t){const n=this.getPlayerById(this.ball.ownerId),i=n?.teamSide===e.teamSide,r=e.teamSide==="home"?1:-1;let a=e.homeX,o=e.homeZ;i&&n?(a=Math.max(-Ue+4.5,Math.min(Ue-4.5,e.homeX*.45+this.ball.x*.65+r*10.5)),o=e.homeZ*.75+this.ball.z*.25+Math.sin(this.timeRemaining*1.5+e.number)*2.5):(a=e.homeX*.45+this.ball.x*.55,o=e.homeZ*.55+this.ball.z*.45);const c=a-e.x,l=o-e.z,d=Math.hypot(c,l),h=6.8+e.speedStat*.28,u=.85,f=3.2;let g=0,_=0;if(d>u){const p=Math.min(1,(d-u)/(f-u)),b=h*(.25+.75*p);g=c/d*b,_=l/d*b}const m=Math.min(1,t*8.5);e.vx+=(g-e.vx)*m,e.vz+=(_-e.vz)*m,Math.abs(e.vx)>1.1?this.updatePlayerFacing(e,e.vx>0):Math.hypot(e.vx,e.vz)<.4&&Math.abs(this.ball.x-e.x)>1.8&&this.updatePlayerFacing(e,this.ball.x>e.x)}computeTeamAIInput(e,t){const n=un(),i=this.getControlledPlayer(e),r=this.getPlayerById(this.ball.ownerId),a=e==="home"?Ue:-Ue;if((e==="home"?this.homeHeldItem:this.awayHeldItem)&&Math.random()<t*1.8&&(n.itemPressed=!0),this.ball.ownerId===i.id){const c=a-i.x,l=-i.z*.45,d=Math.hypot(c,l);if(n.moveX=c/Math.max(.1,d),n.moveZ=l/Math.max(.1,d),(e==="home"?this.homeCharge:this.awayCharge)>=100&&d<34)return n.shootPressed=!0,n;if(d<20&&Math.random()<t*2.8)return n.shootReleased=!0,n.shootHoldDuration=.2,n;const u=this.findNearestOpponentOutfielder(i);return this.aiActionCooldownAway<=0&&u&&Math.hypot(u.x-i.x,u.z-i.z)<3.1&&(this.aiActionCooldownAway=.55,Math.random()<.45?n.dodgePressed=!0:(n.passReleased=!0,n.passHoldDuration=.1)),n}if(!r||r.teamSide!==e){(e==="home"?this.aiSwitchCooldownHome:this.aiSwitchCooldownAway)<=0&&(this.switchToClosestOutfielder(e),e==="home"?this.aiSwitchCooldownHome=.75:this.aiSwitchCooldownAway=.75);const l=this.getControlledPlayer(e),d=r?r.x:this.ball.x,h=r?r.z:this.ball.z,u=d-l.x,f=h-l.z,g=Math.max(.1,Math.hypot(u,f));n.moveX=u/g,n.moveZ=f/g,r&&g<2.25&&l.tackleCooldown<=0&&Math.random()<t*5&&(n.shootPressed=!0)}return n}stepBall(e){this.ball.pickupCooldown>0&&(this.ball.pickupCooldown=Math.max(0,this.ball.pickupCooldown-e)),this.ball.passTimer>0&&(this.ball.passTimer=Math.max(0,this.ball.passTimer-e),this.ball.passTimer<=0&&(this.ball.passSourceId=null));const t=this.getPlayerById(this.ball.ownerId);if(t)if(t.stunTimer>0)this.ball.ownerId=null;else{const r=t.facingRight?.78:-.78;this.ball.x=t.x+r,this.ball.z=t.z+t.vz*.03,this.ball.y=.45,this.ball.vx=t.vx,this.ball.vz=t.vz,this.ball.vy=0;return}if(this.ball.x+=this.ball.vx*e,this.ball.z+=this.ball.vz*e,this.ball.y+=this.ball.vy*e,this.ball.y>.45)this.ball.vy-=18.5*e;else{this.ball.y=.45,this.ball.vy<-2?this.ball.vy=-this.ball.vy*.55:this.ball.vy=0;const r=this.ball.isFullChargeShot?.992:.965;this.ball.vx*=Math.pow(r,e*60),this.ball.vz*=Math.pow(r,e*60)}if(Math.hypot(this.ball.vx,this.ball.vz)<12&&(this.ball.isFullChargeShot=!1),Math.abs(this.ball.z)<=bt&&this.ball.y<=Rn){if(this.ball.x<=-Ue-.35){this.handleGoalScored("away");return}if(this.ball.x>=Ue+.35){this.handleGoalScored("home");return}}const n=Ue-.45,i=pt-.45;if(this.ball.z<-i?(this.ball.z=-i,this.ball.vz=Math.abs(this.ball.vz)*.82):this.ball.z>i&&(this.ball.z=i,this.ball.vz=-Math.abs(this.ball.vz)*.82),(Math.abs(this.ball.z)>bt||this.ball.y>Rn)&&(this.ball.x<-n?(this.ball.x=-n,this.ball.vx=Math.abs(this.ball.vx)*.82,this.ball.isFullChargeShot=!1):this.ball.x>n&&(this.ball.x=n,this.ball.vx=-Math.abs(this.ball.vx)*.82,this.ball.isFullChargeShot=!1)),!(this.ball.pickupCooldown>0))for(const r of this.players){if(r.stunTimer>0)continue;const a=Math.hypot(r.x-this.ball.x,r.z-this.ball.z);if(r.role==="Goalkeeper"){if(a<=2.05&&this.ball.y<=2.9){if(this.ball.shotTeamSide&&this.ball.shotTeamSide!==r.teamSide&&this.ball.isFullChargeShot){r.stunTimer=1.75,r.animState="STUNNED",this.hitStopTimer=.06;const l=r.teamSide==="home"?1:-1,d=(Math.random()-.5)*1.4;this.ball.vx=l*13.5,this.ball.vz=d*10.5,this.ball.vy=4.2,this.ball.isFullChargeShot=!1,this.ball.shotTeamSide=null,this.ball.pickupCooldown=.24,this.pendingEvents.push({type:"GOALIE_STUN_REBOUND",teamSide:r.teamSide,playerId:r.id,playerName:r.shortName,x:r.x,z:r.z,message:`${r.shortName.toUpperCase()} STUNNED BY FULL-CHARGE BLAST! LIVE REBOUND!`});return}r.actionTimer=.42,r.animState="ACTION",this.ball.isFullChargeShot=!1,this.ball.shotTeamSide=null,this.ball.ownerId=r.id,this.ball.lastTouchPlayerId=r.id,this.ball.lastTouchSide=r.teamSide,this.pendingEvents.push({type:"GOALIE_SAVE",teamSide:r.teamSide,playerId:r.id,playerName:r.shortName,x:r.x,z:r.z});return}continue}if(a<=1.25&&this.ball.y<=1.95){if(this.ball.isFullChargeShot&&this.ball.shotTeamSide&&this.ball.shotTeamSide!==r.teamSide){r.stunTimer=1.5,r.animState="STUNNED",r.vx=this.ball.vx*.35,r.vz=this.ball.vz*.35,this.hitStopTimer=.06;continue}this.ball.passSourceId&&this.ball.passSourceId!==r.id&&this.ball.lastTouchSide===r.teamSide&&this.ball.passTimer>0&&(this.addTeamCharge(r.teamSide,15),this.ball.passSourceId=null,this.ball.passTimer=0),this.ball.ownerId=r.id,this.ball.lastTouchPlayerId=r.id,this.ball.lastTouchSide=r.teamSide,this.ball.isFullChargeShot=!1,this.ball.shotTeamSide=null,r.teamSide==="home"?this.activeHomePlayerId=r.id:this.activeAwayPlayerId=r.id;return}}}handleGoalScored(e){e==="home"?this.homeScore++:this.awayScore++;let t=this.getPlayerById(this.ball.lastTouchPlayerId);(!t||t.teamSide!==e)&&(t=this.players.find(n=>n.teamSide===e&&n.role==="Outfielder")),t&&this.stats[t.id]&&this.stats[t.id].goals++,this.lastScorerName=t?t.name:mt[e==="home"?this.config.homeTeamId:this.config.awayTeamId].name,this.ball.vx*=.25,this.ball.vz*=.25,this.ball.isFullChargeShot=!1,this.ball.ownerId=null,this.ball.lastTouchSide=e,this.hitStopTimer=.06,this.goalCelebrationTimer=2.4,this.pendingEvents.push({type:"GOAL_SCORED",teamSide:e,playerId:t?.id,playerName:this.lastScorerName,x:this.ball.x,z:this.ball.z,message:`GOAL! ${this.lastScorerName.toUpperCase()} SCORES!`}),this.config.mode==="target_score"?(e==="home"?this.homeScore:this.awayScore)>=this.config.targetScore&&(this.isMatchOver=!0,this.winnerSide=e,this.pendingEvents.push({type:"MATCH_OVER",teamSide:e,message:`TARGET REACHED! ${mt[e==="home"?this.config.homeTeamId:this.config.awayTeamId].name} WINS!`})):this.isSuddenDeath&&(this.isMatchOver=!0,this.winnerSide=e,this.pendingEvents.push({type:"MATCH_OVER",teamSide:e,message:`GOLDEN GOAL! ${mt[e==="home"?this.config.homeTeamId:this.config.awayTeamId].name} WINS IN SUDDEN DEATH!`}))}findNearestOpponentOutfielder(e){let t,n=1/0;for(const i of this.players){if(i.teamSide===e.teamSide||i.role==="Goalkeeper")continue;const r=Math.hypot(i.x-e.x,i.z-e.z);r<n&&(n=r,t=i)}return t}computeMVP(){const e=Object.values(this.stats);let t=e[0],n=-1;for(const i of e){const r=this.winnerSide&&i.teamSide===this.winnerSide?3:0,a=i.goals*10+i.shots*2+i.tackles*2.5+i.passes*1.5+r;a>n&&(n=a,t=i)}return t}getSnapshot(){return{players:this.players.map(e=>({...e})),ball:{...this.ball},fieldItems:this.fieldItems.map(e=>({...e})),homeScore:this.homeScore,awayScore:this.awayScore,homeCharge:this.homeCharge,awayCharge:this.awayCharge,homeHeldItem:this.homeHeldItem,awayHeldItem:this.awayHeldItem,activeHomePlayerId:this.activeHomePlayerId,activeAwayPlayerId:this.activeAwayPlayerId,timeRemaining:this.timeRemaining,isSuddenDeath:this.isSuddenDeath,isMatchOver:this.isMatchOver,winnerSide:this.winnerSide,goalCelebrationTimer:this.goalCelebrationTimer,lastScorerName:this.lastScorerName,stats:JSON.parse(JSON.stringify(this.stats))}}applySnapshot(e){this.players=e.players.map(t=>({...t})),this.ball={...e.ball},this.fieldItems=e.fieldItems.map(t=>({...t})),this.homeScore=e.homeScore,this.awayScore=e.awayScore,this.homeCharge=e.homeCharge,this.awayCharge=e.awayCharge,this.homeHeldItem=e.homeHeldItem,this.awayHeldItem=e.awayHeldItem,this.activeHomePlayerId=e.activeHomePlayerId,this.activeAwayPlayerId=e.activeAwayPlayerId,this.timeRemaining=e.timeRemaining,this.isSuddenDeath=e.isSuddenDeath,this.isMatchOver=e.isMatchOver,this.winnerSide=e.winnerSide,this.goalCelebrationTimer=e.goalCelebrationTimer,this.lastScorerName=e.lastScorerName,this.stats=e.stats}getCharacterInfo(e){return Ns[e]}}function kn(){return{passDown:!1,passJustPressed:!1,passJustReleased:!1,passHoldTime:0,lastPassHoldDuration:0,shootDown:!1,shootJustPressed:!1,shootJustReleased:!1,shootHoldTime:0,lastShootHoldDuration:0,dodgeJustPressed:!1,itemJustPressed:!1,prevGpPass:!1,prevGpShoot:!1,prevGpDodge:!1,prevGpItem:!1,prevMenuNudgeDir:0}}class Gl{keysDown=new Set;channels={touch:kn(),kb_wasd:kn(),kb_arrows:kn(),gamepad_0:kn(),gamepad_1:kn(),gamepad_2:kn(),gamepad_3:kn()};isMobileTouchDevice;keyboardDetected;lastGamepadSignature="";onDevicesChanged;onSideSelectNudge;joyTouchId=null;joyMouseDown=!1;joyVecX=0;joyVecZ=0;touchHudVisible=!1;touchRootEl=null;btnPassEl=null;btnShootEl=null;btnItemEl=null;constructor(){const e=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent),t=navigator.maxTouchPoints>0&&window.matchMedia("(pointer: coarse)").matches;this.isMobileTouchDevice=e||t,this.keyboardDetected=!this.isMobileTouchDevice&&window.matchMedia("(pointer: fine)").matches,this.touchHudVisible=this.isMobileTouchDevice,window.addEventListener("keydown",n=>this.onKeyDown(n)),window.addEventListener("keyup",n=>this.onKeyUp(n)),window.addEventListener("gamepadconnected",()=>this.checkGamepadChanges()),window.addEventListener("gamepaddisconnected",()=>this.checkGamepadChanges())}getAvailableInputDevices(){const e=[];this.isMobileTouchDevice&&e.push({id:"touch",label:"Touch Controls (On-Screen)",shortLabel:"Touch",icon:"📱",controlsHint:"Virtual Joystick + 4-Button Arcade Diamond"}),this.keyboardDetected&&(e.push({id:"kb_wasd",label:"Keyboard (WASD)",shortLabel:"KB WASD",icon:"⌨️",controlsHint:"WASD Move • J/Space Pass • K Shoot • L Dodge • I/E Item"}),e.push({id:"kb_arrows",label:"Keyboard (Arrows)",shortLabel:"KB Arrows",icon:"⌨️",controlsHint:"Arrows Move • N/Slash Pass • M/Enter Shoot • R-Shift/. Dodge • , Item"}));const t=navigator.getGamepads?navigator.getGamepads():[];for(let n=0;n<4;n++){const i=t[n];if(i&&i.connected){const r=this.formatGamepadName(i.id,n+1);e.push({id:`gamepad_${n}`,label:r,shortLabel:`Controller ${n+1}`,icon:"🎮",controlsHint:"L-Stick/D-Pad Move • A Pass • B/X Shoot • RB/RT Dodge • Y Item"})}}return e}isInputSourceAvailable(e){return e==="cpu"?!0:this.getAvailableInputDevices().some(t=>t.id===e)}getDefaultInputSourceForHome(){const e=this.getAvailableInputDevices();if(e.length===0)return"cpu";const t=e.find(n=>n.id.startsWith("gamepad_"));return t?t.id:e[0].id}formatGamepadName(e,t){const n=e.toLowerCase();return n.includes("xbox")?`Controller ${t} (Xbox)`:n.includes("dualsense")||n.includes("dualshock")||n.includes("054c")?`Controller ${t} (PlayStation)`:n.includes("nintendo")||n.includes("pro controller")?`Controller ${t} (Switch)`:`Controller ${t} (Gamepad)`}checkGamepadChanges(){const e=navigator.getGamepads?navigator.getGamepads():[],t=[0,1,2,3].map(n=>{const i=e[n];return i&&i.connected?`${n}:${i.id}`:""}).join("|");t!==this.lastGamepadSignature&&(this.lastGamepadSignature=t,this.onDevicesChanged?.());for(let n=0;n<4;n++){const i=e[n],r=`gamepad_${n}`,a=this.channels[r];if(!i||!i.connected){a.prevMenuNudgeDir=0;continue}const o=i.axes[0]||0,c=!!i.buttons[14]?.pressed,l=!!i.buttons[15]?.pressed,d=c||o<-.55?-1:l||o>.55?1:0;d!==0&&a.prevMenuNudgeDir!==d&&this.onSideSelectNudge?.(r,d),a.prevMenuNudgeDir=d}}mountTouchControls(e,t,n,i,r,a,o){this.touchRootEl=e,this.btnPassEl=i,this.btnShootEl=r,this.btnItemEl=o,this.applyTouchHudVisibility(),this.bindJoystickEvents(t,n),this.bindArcadeButtons(i,r,a,o)}syncTouchHudForAssignments(e,t){const n=this.isMobileTouchDevice&&(e==="touch"||t==="touch");return this.touchHudVisible=n,this.applyTouchHudVisibility(),n}applyTouchHudVisibility(){this.touchRootEl&&this.touchRootEl.classList.toggle("touch-hud-hidden",!this.touchHudVisible)}updateContextLabels(e,t,n){if(this.btnPassEl){const i=this.btnPassEl.querySelector(".btn-main-label"),r=this.btnPassEl.querySelector(".btn-sub-label");i&&(i.textContent=e?"PASS":"SWITCH"),r&&(r.textContent=e?"HOLD: LOB":"NEAREST DEF")}if(this.btnShootEl){const i=this.btnShootEl.querySelector(".btn-main-label"),r=this.btnShootEl.querySelector(".btn-sub-label"),a=e&&t>=100;this.btnShootEl.classList.toggle("super-shot-ready",a),i&&(i.textContent=a?"SUPER SHOT!":e?"SHOOT":"TACKLE"),r&&(r.textContent=a?"100% METER!":e?"HOLD: CHARGE":"HIT / FOUL")}if(this.btnItemEl){this.btnItemEl.classList.toggle("item-available",!!n);const i=this.btnItemEl.querySelector(".btn-sub-label");i&&(i.textContent=n?n.replace("item_","").toUpperCase():"EMPTY")}}bindJoystickEvents(e,t){const n=(a,o)=>{const c=e.getBoundingClientRect(),l=c.left+c.width/2,d=c.top+c.height/2,h=c.width*.38,u=a-l,f=o-d,g=Math.hypot(u,f),_=Math.min(h,g),m=Math.atan2(f,u),p=Math.cos(m)*_,b=Math.sin(m)*_;t.style.transform=`translate(calc(-50% + ${p.toFixed(1)}px), calc(-50% + ${b.toFixed(1)}px))`,this.joyVecX=h>0?p/h:0,this.joyVecZ=h>0?b/h:0},i=()=>{this.joyTouchId=null,this.joyMouseDown=!1,this.joyVecX=0,this.joyVecZ=0,t.style.transform="translate(-50%, -50%)"};e.addEventListener("touchstart",a=>{a.preventDefault();const o=a.changedTouches[0];this.joyTouchId=o.identifier,n(o.clientX,o.clientY)},{passive:!1}),window.addEventListener("touchmove",a=>{if(this.joyTouchId!==null)for(let o=0;o<a.changedTouches.length;o++){const c=a.changedTouches[o];if(c.identifier===this.joyTouchId){n(c.clientX,c.clientY);break}}},{passive:!1});const r=a=>{if(this.joyTouchId!==null){for(let o=0;o<a.changedTouches.length;o++)if(a.changedTouches[o].identifier===this.joyTouchId){i();break}}};window.addEventListener("touchend",r),window.addEventListener("touchcancel",r),e.addEventListener("mousedown",a=>{a.preventDefault(),this.joyMouseDown=!0,n(a.clientX,a.clientY)}),window.addEventListener("mousemove",a=>{this.joyMouseDown&&n(a.clientX,a.clientY)}),window.addEventListener("mouseup",()=>{this.joyMouseDown&&i()})}bindArcadeButtons(e,t,n,i){const r=this.channels.touch,a=(o,c,l)=>{o.addEventListener("pointerdown",h=>{h.preventDefault(),o.classList.add("active-press"),c()});const d=h=>{h.preventDefault(),o.classList.contains("active-press")&&(o.classList.remove("active-press"),l())};o.addEventListener("pointerup",d),o.addEventListener("pointercancel",d),o.addEventListener("pointerleave",d)};a(e,()=>this.triggerPassDown(r),()=>this.triggerPassUp(r)),a(t,()=>this.triggerShootDown(r),()=>this.triggerShootUp(r)),a(n,()=>{r.dodgeJustPressed=!0},()=>{}),a(i,()=>{r.itemJustPressed=!0},()=>{})}triggerPassDown(e){e.passDown||(e.passDown=!0,e.passJustPressed=!0,e.passHoldTime=0)}triggerPassUp(e){e.passDown&&(e.passDown=!1,e.passJustReleased=!0,e.lastPassHoldDuration=e.passHoldTime)}triggerShootDown(e){e.shootDown||(e.shootDown=!0,e.shootJustPressed=!0,e.shootHoldTime=0)}triggerShootUp(e){e.shootDown&&(e.shootDown=!1,e.shootJustReleased=!0,e.lastShootHoldDuration=e.shootHoldTime)}onKeyDown(e){if(this.keyboardDetected||(this.keyboardDetected=!0,this.onDevicesChanged?.()),e.target instanceof HTMLInputElement||e.target instanceof HTMLSelectElement)return;const t=e.code;this.keysDown.add(t),e.repeat||(t==="KeyA"?this.onSideSelectNudge?.("kb_wasd",-1):t==="KeyD"?this.onSideSelectNudge?.("kb_wasd",1):t==="ArrowLeft"?this.onSideSelectNudge?.("kb_arrows",-1):t==="ArrowRight"&&this.onSideSelectNudge?.("kb_arrows",1));const n=this.channels.kb_wasd;t==="KeyJ"||t==="Space"||t==="KeyZ"?(e.preventDefault(),this.triggerPassDown(n)):t==="KeyK"||t==="KeyX"?(e.preventDefault(),this.triggerShootDown(n)):t==="KeyL"||t==="KeyC"||t==="ShiftLeft"?e.repeat||(n.dodgeJustPressed=!0):(t==="KeyI"||t==="KeyE"||t==="KeyQ")&&(e.repeat||(n.itemJustPressed=!0));const i=this.channels.kb_arrows;t==="KeyN"||t==="Slash"||t==="Numpad1"?(e.preventDefault(),this.triggerPassDown(i)):t==="KeyM"||t==="Enter"||t==="Numpad2"?(e.preventDefault(),this.triggerShootDown(i)):t==="Period"||t==="ShiftRight"||t==="Numpad3"?e.repeat||(i.dodgeJustPressed=!0):(t==="Comma"||t==="Quote"||t==="Numpad0")&&(e.repeat||(i.itemJustPressed=!0))}onKeyUp(e){const t=e.code;this.keysDown.delete(t);const n=this.channels.kb_wasd;t==="KeyJ"||t==="Space"||t==="KeyZ"?this.triggerPassUp(n):(t==="KeyK"||t==="KeyX")&&this.triggerShootUp(n);const i=this.channels.kb_arrows;t==="KeyN"||t==="Slash"||t==="Numpad1"?this.triggerPassUp(i):(t==="KeyM"||t==="Enter"||t==="Numpad2")&&this.triggerShootUp(i)}sampleSourceInput(e,t,n=!1){if(this.checkGamepadChanges(),e==="cpu")return un();if(e==="touch")return this.consumeChannelFrame(this.channels.touch,this.joyVecX,this.joyVecZ,t);if(e==="kb_wasd"){let d=0,h=0;(this.keysDown.has("KeyA")||n&&this.keysDown.has("ArrowLeft"))&&(d-=1),(this.keysDown.has("KeyD")||n&&this.keysDown.has("ArrowRight"))&&(d+=1),(this.keysDown.has("KeyW")||n&&this.keysDown.has("ArrowUp"))&&(h-=1),(this.keysDown.has("KeyS")||n&&this.keysDown.has("ArrowDown"))&&(h+=1);const u=this.consumeChannelFrame(this.channels.kb_wasd,d,h,t);if(n){const f=this.consumeChannelFrame(this.channels.kb_arrows,0,0,t);u.passPressed=u.passPressed||f.passPressed,u.passReleased=u.passReleased||f.passReleased,u.passHoldDuration=Math.max(u.passHoldDuration,f.passHoldDuration),u.shootPressed=u.shootPressed||f.shootPressed,u.shootReleased=u.shootReleased||f.shootReleased,u.shootHeld=u.shootHeld||f.shootHeld,u.shootHoldDuration=Math.max(u.shootHoldDuration,f.shootHoldDuration),u.dodgePressed=u.dodgePressed||f.dodgePressed,u.itemPressed=u.itemPressed||f.itemPressed}return u}if(e==="kb_arrows"){let d=0,h=0;return this.keysDown.has("ArrowLeft")&&(d-=1),this.keysDown.has("ArrowRight")&&(d+=1),this.keysDown.has("ArrowUp")&&(h-=1),this.keysDown.has("ArrowDown")&&(h+=1),this.consumeChannelFrame(this.channels.kb_arrows,d,h,t)}const i=Number(e.replace("gamepad_","")),a=(navigator.getGamepads?navigator.getGamepads():[])[i],o=this.channels[e];let c=0,l=0;if(a&&a.connected){Math.abs(a.axes[0]||0)>.18&&(c=a.axes[0]),Math.abs(a.axes[1]||0)>.18&&(l=a.axes[1]),a.buttons[14]?.pressed&&(c=-1),a.buttons[15]?.pressed&&(c=1),a.buttons[12]?.pressed&&(l=-1),a.buttons[13]?.pressed&&(l=1);const d=!!a.buttons[0]?.pressed;d&&!o.prevGpPass?this.triggerPassDown(o):!d&&o.prevGpPass&&this.triggerPassUp(o),o.prevGpPass=d;const h=!!(a.buttons[1]?.pressed||a.buttons[2]?.pressed);h&&!o.prevGpShoot?this.triggerShootDown(o):!h&&o.prevGpShoot&&this.triggerShootUp(o),o.prevGpShoot=h;const u=!!(a.buttons[4]?.pressed||a.buttons[5]?.pressed||a.buttons[6]?.pressed||a.buttons[7]?.pressed);u&&!o.prevGpDodge&&(o.dodgeJustPressed=!0),o.prevGpDodge=u;const f=!!a.buttons[3]?.pressed;f&&!o.prevGpItem&&(o.itemJustPressed=!0),o.prevGpItem=f}return this.consumeChannelFrame(o,c,l,t)}consumeChannelFrame(e,t,n,i){e.passDown&&(e.passHoldTime+=i),e.shootDown&&(e.shootHoldTime+=i);const r=un();return r.moveX=Math.max(-1,Math.min(1,t)),r.moveZ=Math.max(-1,Math.min(1,n)),r.passPressed=e.passJustPressed,r.passReleased=e.passJustReleased,r.passHoldDuration=e.passJustReleased?e.lastPassHoldDuration:e.passHoldTime,r.shootPressed=e.shootJustPressed,r.shootReleased=e.shootJustReleased,r.shootHeld=e.shootDown,r.shootHoldDuration=e.shootJustReleased?e.lastShootHoldDuration:e.shootHoldTime,r.dodgePressed=e.dodgeJustPressed,r.itemPressed=e.itemJustPressed,e.passJustPressed=!1,e.passJustReleased=!1,e.shootJustPressed=!1,e.shootJustReleased=!1,e.dodgeJustPressed=!1,e.itemJustPressed=!1,r}}class Wl{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return $l(e).buffer}}function $l(s){let e=0;for(const i of s)e+=i.byteLength;const t=new Uint8Array(e);let n=0;for(const i of s){const r=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);t.set(r,n),n+=i.byteLength}return t}function _c(s){return new Xl(s).unpack()}function vc(s){const e=new ql,t=e.pack(s);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class Xl{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let n=0,i="",r,a;for(;n<e;)r=t[n],r<160?(a=r,n++):(r^192)<32?(a=(r&31)<<6|t[n+1]&63,n+=2):(r^224)<16?(a=(r&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(a=(r&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),i+=String.fromCodePoint(a);return this.index+=e,i}unpack_array(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){const t={};for(let n=0;n<e;n++){const i=this.unpack();t[i]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,i=e&8388607|8388608;return(t===0?1:-1)*i*2**(n-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,i=(e>>20&2047)-1023,a=(e&1048575|1048576)*2**(i-20)+t*2**(i-52);return(n===0?1:-1)*a}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class ql{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const n=i=>{if(i<t){const r=this.pack(e[i]);return r instanceof Promise?r.then(()=>n(i+1)):n(i+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const n=Math.floor(Math.log(e)/Math.LN2),i=e/2**n-1,r=Math.floor(i*2**52),a=2**32,o=t<<31|n+1023<<20|r/a&1048575,c=r%a;this._bufferBuilder.append(203),this.pack_int32(o),this.pack_int32(c)}pack_object(e){const t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");const i=r=>{if(r<t.length){const a=t[r];if(e.hasOwnProperty(a)){this.pack(a);const o=this.pack(e[a]);if(o instanceof Promise)return o.then(()=>i(r+1))}return i(r+1)}};return i(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new Wl,this._textEncoder=new TextEncoder}}let Sc=!0,yc=!0;function Vi(s,e,t){const n=s.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function Jn(s,e,t){if(!s.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){Ma("Unable to polyfill events");return}const i=s.RTCPeerConnection.prototype,r=i.addEventListener;i.addEventListener=function(o,c){if(o!==e)return r.apply(this,arguments);const l=d=>{const h=t(d);h&&(c.handleEvent?c.handleEvent(h):c(h))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(c,l),r.apply(this,[o,l])};const a=i.removeEventListener;i.removeEventListener=function(o,c){if(o!==e||!this._eventMap||!this._eventMap[e])return a.apply(this,arguments);if(!this._eventMap[e].has(c))return a.apply(this,arguments);const l=this._eventMap[e].get(c);return this._eventMap[e].delete(c),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,a.apply(this,[o,l])},Object.defineProperty(i,"on"+e,{get(){return this["_on"+e]},set(o){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),o&&this.addEventListener(e,this["_on"+e]=o)},enumerable:!0,configurable:!0})}function Yl(s){return typeof s!="boolean"?new Error("Argument type: "+typeof s+". Please use a boolean."):(Sc=s,s?"adapter.js logging disabled":"adapter.js logging enabled")}function jl(s){return typeof s!="boolean"?new Error("Argument type: "+typeof s+". Please use a boolean."):(yc=!s,"adapter.js deprecation warnings "+(s?"disabled":"enabled"))}function Ma(){if(typeof window=="object"){if(Sc)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function Ta(s,e){yc&&console.warn(s+" is deprecated, please use "+e+" instead.")}function Kl(s){const e={browser:null,version:null};if(typeof s>"u"||!s.navigator||!s.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=s;if(t.userAgentData&&t.userAgentData.brands){const n=t.userAgentData.brands.find(i=>i.brand==="Chromium");if(n){const i=parseInt(n.version,10);if(i>=90)return{browser:"chrome",version:i}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(Vi(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||s.isSecureContext===!1&&s.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(Vi(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(s.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(Vi(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=s.RTCRtpTransceiver&&"currentDirection"in s.RTCRtpTransceiver.prototype,e._safariVersion=Vi(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function no(s){return Object.prototype.toString.call(s)==="[object Object]"}function xc(s){return no(s)?Object.keys(s).reduce(function(e,t){const n=no(s[t]),i=n?xc(s[t]):s[t],r=n&&!Object.keys(i).length;return i===void 0||r?e:Object.assign(e,{[t]:i})},{}):s}function wr(s,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?wr(s,s.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(i=>{wr(s,s.get(i),t)})}))}function io(s,e,t){const n=t?"outbound-rtp":"inbound-rtp",i=new Map;if(e===null)return i;const r=[];return s.forEach(a=>{a.type==="track"&&a.trackIdentifier===e.id&&r.push(a)}),r.forEach(a=>{s.forEach(o=>{o.type===n&&o.trackId===a.id&&wr(s,o,i)})}),i}const so=Ma;function bc(s,e){if(e.version>=64)return;const t=s&&s.navigator;if(!t.mediaDevices)return;const n=function(o){if(typeof o!="object"||o.mandatory||o.optional)return o;const c={};return Object.keys(o).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const d=typeof o[l]=="object"?o[l]:{ideal:o[l]};d.exact!==void 0&&typeof d.exact=="number"&&(d.min=d.max=d.exact);const h=function(u,f){return u?u+f.charAt(0).toUpperCase()+f.slice(1):f==="deviceId"?"sourceId":f};if(d.ideal!==void 0){c.optional=c.optional||[];let u={};typeof d.ideal=="number"?(u[h("min",l)]=d.ideal,c.optional.push(u),u={},u[h("max",l)]=d.ideal,c.optional.push(u)):(u[h("",l)]=d.ideal,c.optional.push(u))}d.exact!==void 0&&typeof d.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[h("",l)]=d.exact):["min","max"].forEach(u=>{d[u]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[h(u,l)]=d[u])})}),o.advanced&&(c.optional=(c.optional||[]).concat(o.advanced)),c},i=function(o,c){if(e.version>=61)return c(o);if(o=JSON.parse(JSON.stringify(o)),o&&typeof o.audio=="object"){const l=function(d,h,u){h in d&&!(u in d)&&(d[u]=d[h],delete d[h])};o=JSON.parse(JSON.stringify(o)),l(o.audio,"autoGainControl","googAutoGainControl"),l(o.audio,"noiseSuppression","googNoiseSuppression"),o.audio=n(o.audio)}if(o&&typeof o.video=="object"){let l=o.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const d=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!d)){delete o.video.facingMode;let h;if(l.exact==="environment"||l.ideal==="environment"?h=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(h=["front"]),h)return t.mediaDevices.enumerateDevices().then(u=>{u=u.filter(g=>g.kind==="videoinput");let f=u.find(g=>h.some(_=>g.label.toLowerCase().includes(_)));return!f&&u.length&&h.includes("back")&&(f=u[u.length-1]),f&&(o.video.deviceId=l.exact?{exact:f.deviceId}:{ideal:f.deviceId}),o.video=n(o.video),so("chrome: "+JSON.stringify(o)),c(o)})}o.video=n(o.video)}return so("chrome: "+JSON.stringify(o)),c(o)},r=function(o){return e.version>=64?o:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[o.name]||o.name,message:o.message,constraint:o.constraint||o.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},a=function(o,c,l){i(o,d=>{t.webkitGetUserMedia(d,c,h=>{l&&l(r(h))})})};if(t.getUserMedia=a.bind(t),t.mediaDevices.getUserMedia){const o=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return i(c,l=>o(l).then(d=>{if(l.audio&&!d.getAudioTracks().length||l.video&&!d.getVideoTracks().length)throw d.getTracks().forEach(h=>{h.stop()}),new DOMException("","NotFoundError");return d},d=>Promise.reject(r(d))))}}}function Mc(s){s.MediaStream=s.MediaStream||s.webkitMediaStream}function Tc(s,e){if(!(e.version>102))if(typeof s=="object"&&s.RTCPeerConnection&&!("ontrack"in s.RTCPeerConnection.prototype)){Object.defineProperty(s.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(n){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=n)},enumerable:!0,configurable:!0});const t=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=i=>{i.stream.addEventListener("addtrack",r=>{let a;s.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(c=>c.track&&c.track.id===r.track.id):a={track:r.track};const o=new Event("track");o.track=r.track,o.receiver=a,o.transceiver={receiver:a},o.streams=[i.stream],this.dispatchEvent(o)}),i.stream.getTracks().forEach(r=>{let a;s.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(c=>c.track&&c.track.id===r.id):a={track:r};const o=new Event("track");o.track=r,o.receiver=a,o.transceiver={receiver:a},o.streams=[i.stream],this.dispatchEvent(o)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else Jn(s,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function Ec(s){if(typeof s=="object"&&s.RTCPeerConnection&&!("getSenders"in s.RTCPeerConnection.prototype)&&"createDTMFSender"in s.RTCPeerConnection.prototype){const e=function(i,r){return{track:r,get dtmf(){return this._dtmf===void 0&&(r.kind==="audio"?this._dtmf=i.createDTMFSender(r):this._dtmf=null),this._dtmf},_pc:i}};if(!s.RTCPeerConnection.prototype.getSenders){s.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const i=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addTrack=function(o,c){let l=i.apply(this,arguments);return l||(l=e(this,o),this._senders.push(l)),l};const r=s.RTCPeerConnection.prototype.removeTrack;s.RTCPeerConnection.prototype.removeTrack=function(o){r.apply(this,arguments);const c=this._senders.indexOf(o);c!==-1&&this._senders.splice(c,1)}}const t=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(r){this._senders=this._senders||[],t.apply(this,[r]),r.getTracks().forEach(a=>{this._senders.push(e(this,a))})};const n=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(r){this._senders=this._senders||[],n.apply(this,[r]),r.getTracks().forEach(a=>{const o=this._senders.find(c=>c.track===a);o&&this._senders.splice(this._senders.indexOf(o),1)})}}else if(typeof s=="object"&&s.RTCPeerConnection&&"getSenders"in s.RTCPeerConnection.prototype&&"createDTMFSender"in s.RTCPeerConnection.prototype&&s.RTCRtpSender&&!("dtmf"in s.RTCRtpSender.prototype)){const e=s.RTCPeerConnection.prototype.getSenders;s.RTCPeerConnection.prototype.getSenders=function(){const n=e.apply(this,[]);return n.forEach(i=>i._pc=this),n},Object.defineProperty(s.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function Cc(s,e){if(e.version>=67||!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender&&s.RTCRtpReceiver))return;if(!("getStats"in s.RTCRtpSender.prototype)){const n=s.RTCPeerConnection.prototype.getSenders;n&&(s.RTCPeerConnection.prototype.getSenders=function(){const a=n.apply(this,[]);return a.forEach(o=>o._pc=this),a});const i=s.RTCPeerConnection.prototype.addTrack;i&&(s.RTCPeerConnection.prototype.addTrack=function(){const a=i.apply(this,arguments);return a._pc=this,a}),s.RTCRtpSender.prototype.getStats=function(){const a=this;return this._pc.getStats().then(o=>io(o,a.track,!0))}}if(!("getStats"in s.RTCRtpReceiver.prototype)){const n=s.RTCPeerConnection.prototype.getReceivers;n&&(s.RTCPeerConnection.prototype.getReceivers=function(){const r=n.apply(this,[]);return r.forEach(a=>a._pc=this),r}),Jn(s,"track",i=>(i.receiver._pc=i.srcElement,i)),s.RTCRtpReceiver.prototype.getStats=function(){const r=this;return this._pc.getStats().then(a=>io(a,r.track,!1))}}if(!("getStats"in s.RTCRtpSender.prototype&&"getStats"in s.RTCRtpReceiver.prototype))return;const t=s.RTCPeerConnection.prototype.getStats;s.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof s.MediaStreamTrack){const i=arguments[0];let r,a,o;return this.getSenders().forEach(c=>{c.track===i&&(r?o=!0:r=c)}),this.getReceivers().forEach(c=>(c.track===i&&(a?o=!0:a=c),c.track===i)),o||r&&a?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):r?r.getStats():a?a.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function Ac(s){s.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(a=>this._shimmedLocalStreams[a][0])};const e=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addTrack=function(a,o){if(!o)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[o.id]?this._shimmedLocalStreams[o.id].indexOf(c)===-1&&this._shimmedLocalStreams[o.id].push(c):this._shimmedLocalStreams[o.id]=[o,c],c};const t=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(a){this._shimmedLocalStreams=this._shimmedLocalStreams||{},a.getTracks().forEach(l=>{if(this.getSenders().find(h=>h.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const o=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(l=>o.indexOf(l)===-1);this._shimmedLocalStreams[a.id]=[a].concat(c)};const n=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[a.id],n.apply(this,arguments)};const i=s.RTCPeerConnection.prototype.removeTrack;s.RTCPeerConnection.prototype.removeTrack=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},a&&Object.keys(this._shimmedLocalStreams).forEach(o=>{const c=this._shimmedLocalStreams[o].indexOf(a);c!==-1&&this._shimmedLocalStreams[o].splice(c,1),this._shimmedLocalStreams[o].length===1&&delete this._shimmedLocalStreams[o]}),i.apply(this,arguments)}}function Rc(s,e){if(!s.RTCPeerConnection)return;if(s.RTCPeerConnection.prototype.addTrack&&e.version>=65)return Ac(s);const t=s.RTCPeerConnection.prototype.getLocalStreams;s.RTCPeerConnection.prototype.getLocalStreams=function(){const d=t.apply(this);return this._reverseStreams=this._reverseStreams||{},d.map(h=>this._reverseStreams[h.id])};const n=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(d){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},d.getTracks().forEach(h=>{if(this.getSenders().find(f=>f.track===h))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[d.id]){const h=new s.MediaStream(d.getTracks());this._streams[d.id]=h,this._reverseStreams[h.id]=d,d=h}n.apply(this,[d])};const i=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(d){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},i.apply(this,[this._streams[d.id]||d]),delete this._reverseStreams[this._streams[d.id]?this._streams[d.id].id:d.id],delete this._streams[d.id]},s.RTCPeerConnection.prototype.addTrack=function(d,h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const u=[].slice.call(arguments,1);if(u.length!==1||!u[0].getTracks().find(_=>_===d))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(_=>_.track===d))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const g=this._streams[h.id];if(g)g.addTrack(d),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const _=new s.MediaStream([d]);this._streams[h.id]=_,this._reverseStreams[_.id]=h,this.addStream(_)}return this.getSenders().find(_=>_.track===d)};function r(l,d){let h=d.sdp;return Object.keys(l._reverseStreams||[]).forEach(u=>{const f=l._reverseStreams[u],g=l._streams[f.id];h=h.replace(new RegExp(g.id,"g"),f.id)}),new RTCSessionDescription({type:d.type,sdp:h})}function a(l,d){let h=d.sdp;return Object.keys(l._reverseStreams||[]).forEach(u=>{const f=l._reverseStreams[u],g=l._streams[f.id];h=h.replace(new RegExp(f.id,"g"),g.id)}),new RTCSessionDescription({type:d.type,sdp:h})}["createOffer","createAnswer"].forEach(function(l){const d=s.RTCPeerConnection.prototype[l],h={[l](){const u=arguments;return arguments.length&&typeof arguments[0]=="function"?d.apply(this,[g=>{const _=r(this,g);u[0].apply(null,[_])},g=>{u[1]&&u[1].apply(null,g)},arguments[2]]):d.apply(this,arguments).then(g=>r(this,g))}};s.RTCPeerConnection.prototype[l]=h[l]});const o=s.RTCPeerConnection.prototype.setLocalDescription;s.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?o.apply(this,arguments):(arguments[0]=a(this,arguments[0]),o.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(s.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(s.RTCPeerConnection.prototype,"localDescription",{get(){const l=c.get.apply(this);return l.type===""?l:r(this,l)}}),s.RTCPeerConnection.prototype.removeTrack=function(d){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!d._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(d._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let u;Object.keys(this._streams).forEach(f=>{this._streams[f].getTracks().find(_=>d.track===_)&&(u=this._streams[f])}),u&&(u.getTracks().length===1?this.removeStream(this._reverseStreams[u.id]):u.removeTrack(d.track),this.dispatchEvent(new Event("negotiationneeded")))}}function Pr(s,e){!s.RTCPeerConnection&&s.webkitRTCPeerConnection&&(s.RTCPeerConnection=s.webkitRTCPeerConnection),s.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=s.RTCPeerConnection.prototype[t],i={[t](){return arguments[0]=new(t==="addIceCandidate"?s.RTCIceCandidate:s.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};s.RTCPeerConnection.prototype[t]=i[t]})}function wc(s,e){e.version>102||Jn(s,"negotiationneeded",t=>{const n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}const ro=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:wc,shimAddTrackRemoveTrack:Rc,shimAddTrackRemoveTrackWithNative:Ac,shimGetSendersWithDtmf:Ec,shimGetUserMedia:bc,shimMediaStream:Mc,shimOnTrack:Tc,shimPeerConnection:Pr,shimSenderReceiverGetStats:Cc},Symbol.toStringTag,{value:"Module"}));function Pc(s,e){const t=s&&s.navigator;if(!t.mediaDevices)return;const n=s&&s.MediaStreamTrack;if(t.getUserMedia=function(i,r,a){Ta("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(i).then(r,a)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const i=function(a,o,c){o in a&&!(c in a)&&(a[c]=a[o],delete a[o])},r=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(a){return typeof a=="object"&&typeof a.audio=="object"&&(a=JSON.parse(JSON.stringify(a)),i(a.audio,"autoGainControl","mozAutoGainControl"),i(a.audio,"noiseSuppression","mozNoiseSuppression")),r(a)},n&&n.prototype.getSettings){const a=n.prototype.getSettings;n.prototype.getSettings=function(){const o=a.apply(this,arguments);return i(o,"mozAutoGainControl","autoGainControl"),i(o,"mozNoiseSuppression","noiseSuppression"),o}}if(n&&n.prototype.applyConstraints){const a=n.prototype.applyConstraints;n.prototype.applyConstraints=function(o){return this.kind==="audio"&&typeof o=="object"&&(o=JSON.parse(JSON.stringify(o)),i(o,"autoGainControl","mozAutoGainControl"),i(o,"noiseSuppression","mozNoiseSuppression")),a.apply(this,[o])}}}}function Zl(s,e){s.navigator.mediaDevices&&(s.navigator.mediaDevices&&"getDisplayMedia"in s.navigator.mediaDevices||(s.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const i=new DOMException("getDisplayMedia without video constraints is undefined");return i.name="NotFoundError",i.code=8,Promise.reject(i)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,s.navigator.mediaDevices.getUserMedia(n)}))}function Ic(s){typeof s=="object"&&s.RTCTrackEvent&&"receiver"in s.RTCTrackEvent.prototype&&!("transceiver"in s.RTCTrackEvent.prototype)&&Object.defineProperty(s.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Ir(s,e){typeof s!="object"||!(s.RTCPeerConnection||s.mozRTCPeerConnection)||(!s.RTCPeerConnection&&s.mozRTCPeerConnection&&(s.RTCPeerConnection=s.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=s.RTCPeerConnection.prototype[t],i={[t](){return arguments[0]=new(t==="addIceCandidate"?s.RTCIceCandidate:s.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};s.RTCPeerConnection.prototype[t]=i[t]}))}function Dc(s,e){if(typeof s!="object"||!(s.RTCPeerConnection||s.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=s.RTCPeerConnection.prototype.getStats;s.RTCPeerConnection.prototype.getStats=function(){const[r,a,o]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):n.apply(this,[r||null]).then(c=>{if(e.version<53&&!a)try{c.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((d,h)=>{c.set(h,Object.assign({},d,{type:t[d.type]||d.type}))})}return c}).then(a,o)}}function Lc(s){if(!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender)||s.RTCRtpSender&&"getStats"in s.RTCRtpSender.prototype)return;const e=s.RTCPeerConnection.prototype.getSenders;e&&(s.RTCPeerConnection.prototype.getSenders=function(){const i=e.apply(this,[]);return i.forEach(r=>r._pc=this),i});const t=s.RTCPeerConnection.prototype.addTrack;t&&(s.RTCPeerConnection.prototype.addTrack=function(){const i=t.apply(this,arguments);return i._pc=this,i}),s.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function Oc(s){if(!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender)||s.RTCRtpSender&&"getStats"in s.RTCRtpReceiver.prototype)return;const e=s.RTCPeerConnection.prototype.getReceivers;e&&(s.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(i=>i._pc=this),n}),Jn(s,"track",t=>(t.receiver._pc=t.srcElement,t)),s.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function Uc(s){!s.RTCPeerConnection||"removeStream"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.removeStream=function(t){Ta("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function Nc(s){s.DataChannel&&!s.RTCDataChannel&&(s.RTCDataChannel=s.DataChannel)}function Fc(s,e){if(!(typeof s=="object"&&s.RTCPeerConnection)||e.version>=110)return;const t=s.RTCPeerConnection.prototype.addTransceiver;t&&(s.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let i=arguments[1]&&arguments[1].sendEncodings;i===void 0&&(i=[]),i=[...i];const r=i.length>0;r&&i.forEach(o=>{if("rid"in o&&!/^[a-z0-9]{0,16}$/i.test(o.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in o&&!(parseFloat(o.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in o&&!(parseFloat(o.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const a=t.apply(this,arguments);if(r){const{sender:o}=a,c=o.getParameters();(!("encodings"in c)||c.encodings.length===1&&Object.keys(c.encodings[0]).length===0)&&(c.encodings=i,o.sendEncodings=i,this.setParametersPromises.push(o.setParameters(c).then(()=>{delete o.sendEncodings}).catch(()=>{delete o.sendEncodings})))}return a})}function kc(s,e){if(!(typeof s=="object"&&s.RTCRtpSender)||e.version>=110)return;const t=s.RTCRtpSender.prototype.getParameters;t&&(s.RTCRtpSender.prototype.getParameters=function(){const i=t.apply(this,arguments);return"encodings"in i||(i.encodings=[].concat(this.sendEncodings||[{}])),i})}function Bc(s,e){if(!(typeof s=="object"&&s.RTCPeerConnection)||e.version>=110)return;const t=s.RTCPeerConnection.prototype.createOffer;s.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function zc(s,e){if(!(typeof s=="object"&&s.RTCPeerConnection)||e.version>=110)return;const t=s.RTCPeerConnection.prototype.createAnswer;s.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const ao=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:Fc,shimCreateAnswer:zc,shimCreateOffer:Bc,shimGetDisplayMedia:Zl,shimGetParameters:kc,shimGetStats:Dc,shimGetUserMedia:Pc,shimOnTrack:Ic,shimPeerConnection:Ir,shimRTCDataChannel:Nc,shimReceiverGetStats:Oc,shimRemoveStream:Uc,shimSenderGetStats:Lc},Symbol.toStringTag,{value:"Module"}));function Hc(s){if(!(typeof s!="object"||!s.RTCPeerConnection)){if("getLocalStreams"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in s.RTCPeerConnection.prototype)){const e=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(i=>e.call(this,i,n)),n.getVideoTracks().forEach(i=>e.call(this,i,n))},s.RTCPeerConnection.prototype.addTrack=function(n,...i){return i&&i.forEach(r=>{this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]}),e.apply(this,arguments)}}"removeStream"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);const i=t.getTracks();this.getSenders().forEach(r=>{i.includes(r.track)&&this.removeTrack(r)})})}}function Vc(s){if(!(typeof s!="object"||!s.RTCPeerConnection)&&("getRemoteStreams"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in s.RTCPeerConnection.prototype))){Object.defineProperty(s.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(i=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(i))return;this._remoteStreams.push(i);const r=new Event("addstream");r.stream=i,this.dispatchEvent(r)})})}});const e=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(i){i.streams.forEach(r=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(r)>=0)return;n._remoteStreams.push(r);const a=new Event("addstream");a.stream=r,n.dispatchEvent(a)})}),e.apply(n,arguments)}}}function Gc(s){if(typeof s!="object"||!s.RTCPeerConnection)return;const e=s.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,i=e.setLocalDescription,r=e.setRemoteDescription,a=e.addIceCandidate;e.createOffer=function(l,d){const h=arguments.length>=2?arguments[2]:arguments[0],u=t.apply(this,[h]);return d?(u.then(l,d),Promise.resolve()):u},e.createAnswer=function(l,d){const h=arguments.length>=2?arguments[2]:arguments[0],u=n.apply(this,[h]);return d?(u.then(l,d),Promise.resolve()):u};let o=function(c,l,d){const h=i.apply(this,[c]);return d?(h.then(l,d),Promise.resolve()):h};e.setLocalDescription=o,o=function(c,l,d){const h=r.apply(this,[c]);return d?(h.then(l,d),Promise.resolve()):h},e.setRemoteDescription=o,o=function(c,l,d){const h=a.apply(this,[c]);return d?(h.then(l,d),Promise.resolve()):h},e.addIceCandidate=o}function Wc(s){const e=s&&s.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=i=>n($c(i))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=function(n,i,r){e.mediaDevices.getUserMedia(n).then(i,r)}.bind(e))}function $c(s){return s&&s.video!==void 0?Object.assign({},s,{video:xc(s.video)}):s}function Xc(s){if(!s.RTCPeerConnection)return;const e=s.RTCPeerConnection;s.RTCPeerConnection=function(n,i){if(n&&n.iceServers){const r=[];for(let a=0;a<n.iceServers.length;a++){let o=n.iceServers[a];o.urls===void 0&&o.url?(Ta("RTCIceServer.url","RTCIceServer.urls"),o=JSON.parse(JSON.stringify(o)),o.urls=o.url,delete o.url,r.push(o)):r.push(n.iceServers[a])}n.iceServers=r}return new e(n,i)},s.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(s.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function qc(s){typeof s=="object"&&s.RTCTrackEvent&&"receiver"in s.RTCTrackEvent.prototype&&!("transceiver"in s.RTCTrackEvent.prototype)&&Object.defineProperty(s.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Yc(s){const e=s.RTCPeerConnection.prototype.createOffer;s.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const i=this.getTransceivers().find(a=>a.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&i?i.direction==="sendrecv"?i.setDirection?i.setDirection("sendonly"):i.direction="sendonly":i.direction==="recvonly"&&(i.setDirection?i.setDirection("inactive"):i.direction="inactive"):n.offerToReceiveAudio===!0&&!i&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const r=this.getTransceivers().find(a=>a.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveVideo===!0&&!r&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function jc(s){typeof s!="object"||s.AudioContext||(s.AudioContext=s.webkitAudioContext)}const oo=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:jc,shimCallbacksAPI:Gc,shimConstraints:$c,shimCreateOfferLegacy:Yc,shimGetUserMedia:Wc,shimLocalStreamsAPI:Hc,shimRTCIceServerUrls:Xc,shimRemoteStreamsAPI:Vc,shimTrackEventTransceiver:qc},Symbol.toStringTag,{value:"Module"}));function Jl(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Kc={exports:{}};(function(s){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(n=>n.trim())},e.splitSections=function(t){return t.split(`
m=`).map((i,r)=>(r>0?"m="+i:i).trim()+`\r
`)},e.getDescription=function(t){const n=e.splitSections(t);return n&&n[0]},e.getMediaSections=function(t){const n=e.splitSections(t);return n.shift(),n},e.matchPrefix=function(t,n){return e.splitLines(t).filter(i=>i.indexOf(n)===0)},e.parseCandidate=function(t){let n;t.indexOf("a=candidate:")===0?n=t.substring(12).split(" "):n=t.substring(10).split(" ");const i={foundation:n[0],component:{1:"rtp",2:"rtcp"}[n[1]]||n[1],protocol:n[2].toLowerCase(),priority:parseInt(n[3],10),ip:n[4],address:n[4],port:parseInt(n[5],10),type:n[7]};for(let r=8;r<n.length;r+=2)switch(n[r]){case"raddr":i.relatedAddress=n[r+1];break;case"rport":i.relatedPort=parseInt(n[r+1],10);break;case"tcptype":i.tcpType=n[r+1];break;case"ufrag":i.ufrag=n[r+1],i.usernameFragment=n[r+1];break;default:i[n[r]]===void 0&&(i[n[r]]=n[r+1]);break}return i},e.writeCandidate=function(t){const n=[];n.push(t.foundation);const i=t.component;i==="rtp"?n.push(1):i==="rtcp"?n.push(2):n.push(i),n.push(t.protocol.toUpperCase()),n.push(t.priority),n.push(t.address||t.ip),n.push(t.port);const r=t.type;return n.push("typ"),n.push(r),r!=="host"&&t.relatedAddress&&t.relatedPort!==void 0&&(n.push("raddr"),n.push(t.relatedAddress),n.push("rport"),n.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(n.push("tcptype"),n.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(n.push("ufrag"),n.push(t.usernameFragment||t.ufrag)),"candidate:"+n.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let n=t.substring(9).split(" ");const i={payloadType:parseInt(n.shift(),10)};return n=n[0].split("/"),i.name=n[0],i.clockRate=parseInt(n[1],10),i.channels=n.length===3?parseInt(n[2],10):1,i.numChannels=i.channels,i},e.writeRtpMap=function(t){let n=t.payloadType;t.preferredPayloadType!==void 0&&(n=t.preferredPayloadType);const i=t.channels||t.numChannels||1;return"a=rtpmap:"+n+" "+t.name+"/"+t.clockRate+(i!==1?"/"+i:"")+`\r
`},e.parseExtmap=function(t){const n=t.substring(9).split(" ");return{id:parseInt(n[0],10),direction:n[0].indexOf("/")>0?n[0].split("/")[1]:"sendrecv",uri:n[1],attributes:n.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const n={};let i;const r=t.substring(t.indexOf(" ")+1).split(";");for(let a=0;a<r.length;a++)i=r[a].trim().split("="),n[i[0].trim()]=i[1];return n},e.writeFmtp=function(t){let n="",i=t.payloadType;if(t.preferredPayloadType!==void 0&&(i=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const r=[];Object.keys(t.parameters).forEach(a=>{t.parameters[a]!==void 0?r.push(a+"="+t.parameters[a]):r.push(a)}),n+="a=fmtp:"+i+" "+r.join(";")+`\r
`}return n},e.parseRtcpFb=function(t){const n=t.substring(t.indexOf(" ")+1).split(" ");return{type:n.shift(),parameter:n.join(" ")}},e.writeRtcpFb=function(t){let n="",i=t.payloadType;return t.preferredPayloadType!==void 0&&(i=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(r=>{n+="a=rtcp-fb:"+i+" "+r.type+(r.parameter&&r.parameter.length?" "+r.parameter:"")+`\r
`}),n},e.parseSsrcMedia=function(t){const n=t.indexOf(" "),i={ssrc:parseInt(t.substring(7,n),10)},r=t.indexOf(":",n);return r>-1?(i.attribute=t.substring(n+1,r),i.value=t.substring(r+1)):i.attribute=t.substring(n+1),i},e.parseSsrcGroup=function(t){const n=t.substring(13).split(" ");return{semantics:n.shift(),ssrcs:n.map(i=>parseInt(i,10))}},e.getMid=function(t){const n=e.matchPrefix(t,"a=mid:")[0];if(n)return n.substring(6)},e.parseFingerprint=function(t){const n=t.substring(14).split(" ");return{algorithm:n[0].toLowerCase(),value:n[1].toUpperCase()}},e.getDtlsParameters=function(t,n){return{role:"auto",fingerprints:e.matchPrefix(t+n,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,n){let i="a=setup:"+n+`\r
`;return t.fingerprints.forEach(r=>{i+="a=fingerprint:"+r.algorithm+" "+r.value+`\r
`}),i},e.parseCryptoLine=function(t){const n=t.substring(9).split(" ");return{tag:parseInt(n[0],10),cryptoSuite:n[1],keyParams:n[2],sessionParams:n.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const n=t.substring(7).split("|");return{keyMethod:"inline",keySalt:n[0],lifeTime:n[1],mkiValue:n[2]?n[2].split(":")[0]:void 0,mkiLength:n[2]?n[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,n){return e.matchPrefix(t+n,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,n){const i=e.matchPrefix(t+n,"a=ice-ufrag:")[0],r=e.matchPrefix(t+n,"a=ice-pwd:")[0];return i&&r?{usernameFragment:i.substring(12),password:r.substring(10)}:null},e.writeIceParameters=function(t){let n="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(n+=`a=ice-lite\r
`),n},e.parseRtpParameters=function(t){const n={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},r=e.splitLines(t)[0].split(" ");n.profile=r[2];for(let o=3;o<r.length;o++){const c=r[o],l=e.matchPrefix(t,"a=rtpmap:"+c+" ")[0];if(l){const d=e.parseRtpMap(l),h=e.matchPrefix(t,"a=fmtp:"+c+" ");switch(d.parameters=h.length?e.parseFmtp(h[0]):{},d.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+c+" ").map(e.parseRtcpFb),n.codecs.push(d),d.name.toUpperCase()){case"RED":case"ULPFEC":n.fecMechanisms.push(d.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(o=>{n.headerExtensions.push(e.parseExtmap(o))});const a=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return n.codecs.forEach(o=>{a.forEach(c=>{o.rtcpFeedback.find(d=>d.type===c.type&&d.parameter===c.parameter)||o.rtcpFeedback.push(c)})}),n},e.writeRtpDescription=function(t,n){let i="";i+="m="+t+" ",i+=n.codecs.length>0?"9":"0",i+=" "+(n.profile||"UDP/TLS/RTP/SAVPF")+" ",i+=n.codecs.map(a=>a.preferredPayloadType!==void 0?a.preferredPayloadType:a.payloadType).join(" ")+`\r
`,i+=`c=IN IP4 0.0.0.0\r
`,i+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,n.codecs.forEach(a=>{i+=e.writeRtpMap(a),i+=e.writeFmtp(a),i+=e.writeRtcpFb(a)});let r=0;return n.codecs.forEach(a=>{a.maxptime>r&&(r=a.maxptime)}),r>0&&(i+="a=maxptime:"+r+`\r
`),n.headerExtensions&&n.headerExtensions.forEach(a=>{i+=e.writeExtmap(a)}),i},e.parseRtpEncodingParameters=function(t){const n=[],i=e.parseRtpParameters(t),r=i.fecMechanisms.indexOf("RED")!==-1,a=i.fecMechanisms.indexOf("ULPFEC")!==-1,o=e.matchPrefix(t,"a=ssrc:").map(u=>e.parseSsrcMedia(u)).filter(u=>u.attribute==="cname"),c=o.length>0&&o[0].ssrc;let l;const d=e.matchPrefix(t,"a=ssrc-group:FID").map(u=>u.substring(17).split(" ").map(g=>parseInt(g,10)));d.length>0&&d[0].length>1&&d[0][0]===c&&(l=d[0][1]),i.codecs.forEach(u=>{if(u.name.toUpperCase()==="RTX"&&u.parameters.apt){let f={ssrc:c,codecPayloadType:parseInt(u.parameters.apt,10)};c&&l&&(f.rtx={ssrc:l}),n.push(f),r&&(f=JSON.parse(JSON.stringify(f)),f.fec={ssrc:c,mechanism:a?"red+ulpfec":"red"},n.push(f))}}),n.length===0&&c&&n.push({ssrc:c});let h=e.matchPrefix(t,"b=");return h.length&&(h[0].indexOf("b=TIAS:")===0?h=parseInt(h[0].substring(7),10):h[0].indexOf("b=AS:")===0?h=parseInt(h[0].substring(5),10)*1e3*.95-50*40*8:h=void 0,n.forEach(u=>{u.maxBitrate=h})),n},e.parseRtcpParameters=function(t){const n={},i=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="cname")[0];i&&(n.cname=i.value,n.ssrc=i.ssrc);const r=e.matchPrefix(t,"a=rtcp-rsize");n.reducedSize=r.length>0,n.compound=r.length===0;const a=e.matchPrefix(t,"a=rtcp-mux");return n.mux=a.length>0,n},e.writeRtcpParameters=function(t){let n="";return t.reducedSize&&(n+=`a=rtcp-rsize\r
`),t.mux&&(n+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(n+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),n},e.parseMsid=function(t){let n;const i=e.matchPrefix(t,"a=msid:");if(i.length===1)return n=i[0].substring(7).split(" "),{stream:n[0],track:n[1]};const r=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="msid");if(r.length>0)return n=r[0].value.split(" "),{stream:n[0],track:n[1]}},e.parseSctpDescription=function(t){const n=e.parseMLine(t),i=e.matchPrefix(t,"a=max-message-size:");let r;i.length>0&&(r=parseInt(i[0].substring(19),10)),isNaN(r)&&(r=65536);const a=e.matchPrefix(t,"a=sctp-port:");if(a.length>0)return{port:parseInt(a[0].substring(12),10),protocol:n.fmt,maxMessageSize:r};const o=e.matchPrefix(t,"a=sctpmap:");if(o.length>0){const c=o[0].substring(10).split(" ");return{port:parseInt(c[0],10),protocol:c[1],maxMessageSize:r}}},e.writeSctpDescription=function(t,n){let i=[];return t.protocol!=="DTLS/SCTP"?i=["m="+t.kind+" 9 "+t.protocol+" "+n.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+n.port+`\r
`]:i=["m="+t.kind+" 9 "+t.protocol+" "+n.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+n.port+" "+n.protocol+` 65535\r
`],n.maxMessageSize!==void 0&&i.push("a=max-message-size:"+n.maxMessageSize+`\r
`),i.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,n,i){let r;const a=n!==void 0?n:2;return t?r=t:r=e.generateSessionId(),`v=0\r
o=`+(i||"thisisadapterortc")+" "+r+" "+a+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,n){const i=e.splitLines(t);for(let r=0;r<i.length;r++)switch(i[r]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return i[r].substring(2)}return n?e.getDirection(n):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const i=e.splitLines(t)[0].substring(2).split(" ");return{kind:i[0],port:parseInt(i[1],10),protocol:i[2],fmt:i.slice(3).join(" ")}},e.parseOLine=function(t){const i=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:i[0],sessionId:i[1],sessionVersion:parseInt(i[2],10),netType:i[3],addressType:i[4],address:i[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const n=e.splitLines(t);for(let i=0;i<n.length;i++)if(n[i].length<2||n[i].charAt(1)!=="=")return!1;return!0},s.exports=e})(Kc);var Zc=Kc.exports;const vi=Jl(Zc),Ql=Hl({__proto__:null,default:vi},[Zc]);function Ts(s){if(!s.RTCIceCandidate||s.RTCIceCandidate&&"foundation"in s.RTCIceCandidate.prototype)return;const e=s.RTCIceCandidate;s.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const i=new e(n),r=vi.parseCandidate(n.candidate);for(const a in r)a in i||Object.defineProperty(i,a,{value:r[a]});return i.toJSON=function(){return{candidate:i.candidate,sdpMid:i.sdpMid,sdpMLineIndex:i.sdpMLineIndex,usernameFragment:i.usernameFragment}},i}return new e(n)},s.RTCIceCandidate.prototype=e.prototype,Jn(s,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new s.RTCIceCandidate(t.candidate),writable:"false"}),t))}function Dr(s){!s.RTCIceCandidate||s.RTCIceCandidate&&"relayProtocol"in s.RTCIceCandidate.prototype||Jn(s,"icecandidate",e=>{if(e.candidate){const t=vi.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function Es(s,e){if(!s.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in s.RTCPeerConnection.prototype||Object.defineProperty(s.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(o){if(!o||!o.sdp)return!1;const c=vi.splitSections(o.sdp);return c.shift(),c.some(l=>{const d=vi.parseMLine(l);return d&&d.kind==="application"&&d.protocol.indexOf("SCTP")!==-1})},n=function(o){const c=o.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const l=parseInt(c[1],10);return l!==l?-1:l},i=function(o){let c=65536;return e.browser==="firefox"&&(e.version<57?o===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},r=function(o,c){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const d=vi.matchPrefix(o.sdp,"a=max-message-size:");return d.length>0?l=parseInt(d[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(l=2147483637),l},a=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=n(arguments[0]),l=i(c),d=r(arguments[0],c);let h;l===0&&d===0?h=Number.POSITIVE_INFINITY:l===0||d===0?h=Math.max(l,d):h=Math.min(l,d);const u={};Object.defineProperty(u,"maxMessageSize",{get(){return h}}),this._sctp=u}return a.apply(this,arguments)}}function Cs(s,e){if(!(s.RTCPeerConnection&&"createDataChannel"in s.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(i,r){const a=i.send;i.send=function(){const c=arguments[0],l=c.length||c.size||c.byteLength;if(i.readyState==="open"&&r.sctp&&l>r.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+r.sctp.maxMessageSize+" bytes)");return a.apply(i,arguments)}}const n=s.RTCPeerConnection.prototype.createDataChannel;s.RTCPeerConnection.prototype.createDataChannel=function(){const r=n.apply(this,arguments);return t(r,this),r},Jn(s,"datachannel",i=>(t(i.channel,i.target),i))}function Lr(s){if(!s.RTCPeerConnection||"connectionState"in s.RTCPeerConnection.prototype)return;const e=s.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=i=>{const r=i.target;if(r._lastConnectionState!==r.connectionState){r._lastConnectionState=r.connectionState;const a=new Event("connectionstatechange",i);r.dispatchEvent(a)}return i},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function Or(s,e){if(!s.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(i){if(i&&i.sdp&&i.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const r=i.sdp.split(`
`).filter(a=>a.trim()!=="a=extmap-allow-mixed").join(`
`);s.RTCSessionDescription&&i instanceof s.RTCSessionDescription?arguments[0]=new s.RTCSessionDescription({type:i.type,sdp:r}):i.sdp=r}return t.apply(this,arguments)}}function As(s,e){if(!(s.RTCPeerConnection&&s.RTCPeerConnection.prototype))return;const t=s.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(s.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function Rs(s,e){if(!(s.RTCPeerConnection&&s.RTCPeerConnection.prototype))return;const t=s.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(s.RTCPeerConnection.prototype.setLocalDescription=function(){let i=arguments[0]||{};if(typeof i!="object"||i.type&&i.sdp)return t.apply(this,arguments);if(i={type:i.type,sdp:i.sdp},!i.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":i.type="offer";break;default:i.type="answer";break}return i.sdp||i.type!=="offer"&&i.type!=="answer"?t.apply(this,[i]):(i.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(a=>t.apply(this,[a]))})}const ed=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:Or,shimAddIceCandidateNullOrEmpty:As,shimConnectionState:Lr,shimMaxMessageSize:Es,shimParameterlessSetLocalDescription:Rs,shimRTCIceCandidate:Ts,shimRTCIceCandidateRelayProtocol:Dr,shimSendThrowTypeError:Cs},Symbol.toStringTag,{value:"Module"}));function td({window:s}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=Ma,n=Kl(s),i={browserDetails:n,commonShim:ed,extractVersion:Vi,disableLog:Yl,disableWarnings:jl,sdp:Ql};switch(n.browser){case"chrome":if(!ro||!Pr||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),i;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),i;t("adapter.js shimming chrome."),i.browserShim=ro,As(s,n),Rs(s),bc(s,n),Mc(s),Pr(s,n),Tc(s,n),Rc(s,n),Ec(s),Cc(s,n),wc(s,n),Ts(s),Dr(s),Lr(s),Es(s,n),Cs(s,n),Or(s,n);break;case"firefox":if(!ao||!Ir||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),i;t("adapter.js shimming firefox."),i.browserShim=ao,As(s,n),Rs(s),Pc(s,n),Ir(s,n),Dc(s,n),Ic(s),Uc(s),Lc(s),Oc(s),Nc(s),Fc(s,n),kc(s,n),Bc(s,n),zc(s,n),Ts(s),Lr(s),Es(s,n),Cs(s,n);break;case"safari":if(!oo||!e.shimSafari)return t("Safari shim is not included in this adapter release."),i;t("adapter.js shimming safari."),i.browserShim=oo,As(s,n),Rs(s),Xc(s),Yc(s),Gc(s),Hc(s),Vc(s),qc(s),Wc(s),jc(s),Ts(s),Dr(s),Es(s,n),Cs(s,n),Or(s,n);break;default:t("Unsupported browser!");break}return i}const co=td({window:typeof window>"u"?void 0:window});function Qn(s,e,t,n){Object.defineProperty(s,e,{get:t,set:n,enumerable:!0,configurable:!0})}class Jc{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],n=e.byteLength,i=Math.ceil(n/this.chunkedMTU);let r=0,a=0;for(;a<n;){const o=Math.min(n,a+this.chunkedMTU),c=e.slice(a,o),l={__peerData:this._dataCount,n:r,data:c,total:i};t.push(l),a=o,r++}return this._dataCount++,t}}}function nd(s){let e=0;for(const i of s)e+=i.byteLength;const t=new Uint8Array(e);let n=0;for(const i of s)t.set(i,n),n+=i.byteLength;return t}const qs=co.default||co,Li=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const s=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(s)?s==="chrome"?e>=this.minChromeVersion:s==="firefox"?e>=this.minFirefoxVersion:s==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return qs.browserDetails.browser}getVersion(){return qs.browserDetails.version||0}isUnifiedPlanSupported(){const s=this.getBrowser(),e=qs.browserDetails.version||0;if(s==="chrome"&&e<this.minChromeVersion)return!1;if(s==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},id=s=>!s||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(s),Qc=()=>Math.random().toString(36).slice(2),lo={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class sd extends Jc{noop(){}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(i){i.target&&t(i.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=lo,this.browser=Li.getBrowser(),this.browserVersion=Li.getVersion(),this.pack=vc,this.unpack=_c,this.supports=function(){const t={browser:Li.isBrowserSupported(),webRTC:Li.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(lo),t.audioVideo=!0;let i;try{i=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!i.ordered;try{i.binaryType="blob",t.binaryBlob=!Li.isIOS}catch{}}catch{}finally{i&&i.close()}}catch{}finally{n&&n.close()}return t}(),this.validateId=id,this.randomToken=Qc}}const Dt=new sd,rd="PeerJS: ";class ad{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=[rd,...t];for(const i in n)n[i]instanceof Error&&(n[i]="("+n[i].name+") "+n[i].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}}var fe=new ad,Ea={},od=Object.prototype.hasOwnProperty,wt="~";function qi(){}Object.create&&(qi.prototype=Object.create(null),new qi().__proto__||(wt=!1));function cd(s,e,t){this.fn=s,this.context=e,this.once=t||!1}function el(s,e,t,n,i){if(typeof t!="function")throw new TypeError("The listener must be a function");var r=new cd(t,n||s,i),a=wt?wt+e:e;return s._events[a]?s._events[a].fn?s._events[a]=[s._events[a],r]:s._events[a].push(r):(s._events[a]=r,s._eventsCount++),s}function ws(s,e){--s._eventsCount===0?s._events=new qi:delete s._events[e]}function At(){this._events=new qi,this._eventsCount=0}At.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)od.call(t,n)&&e.push(wt?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};At.prototype.listeners=function(e){var t=wt?wt+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,r=n.length,a=new Array(r);i<r;i++)a[i]=n[i].fn;return a};At.prototype.listenerCount=function(e){var t=wt?wt+e:e,n=this._events[t];return n?n.fn?1:n.length:0};At.prototype.emit=function(e,t,n,i,r,a){var o=wt?wt+e:e;if(!this._events[o])return!1;var c=this._events[o],l=arguments.length,d,h;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,i),!0;case 5:return c.fn.call(c.context,t,n,i,r),!0;case 6:return c.fn.call(c.context,t,n,i,r,a),!0}for(h=1,d=new Array(l-1);h<l;h++)d[h-1]=arguments[h];c.fn.apply(c.context,d)}else{var u=c.length,f;for(h=0;h<u;h++)switch(c[h].once&&this.removeListener(e,c[h].fn,void 0,!0),l){case 1:c[h].fn.call(c[h].context);break;case 2:c[h].fn.call(c[h].context,t);break;case 3:c[h].fn.call(c[h].context,t,n);break;case 4:c[h].fn.call(c[h].context,t,n,i);break;default:if(!d)for(f=1,d=new Array(l-1);f<l;f++)d[f-1]=arguments[f];c[h].fn.apply(c[h].context,d)}}return!0};At.prototype.on=function(e,t,n){return el(this,e,t,n,!1)};At.prototype.once=function(e,t,n){return el(this,e,t,n,!0)};At.prototype.removeListener=function(e,t,n,i){var r=wt?wt+e:e;if(!this._events[r])return this;if(!t)return ws(this,r),this;var a=this._events[r];if(a.fn)a.fn===t&&(!i||a.once)&&(!n||a.context===n)&&ws(this,r);else{for(var o=0,c=[],l=a.length;o<l;o++)(a[o].fn!==t||i&&!a[o].once||n&&a[o].context!==n)&&c.push(a[o]);c.length?this._events[r]=c.length===1?c[0]:c:ws(this,r)}return this};At.prototype.removeAllListeners=function(e){var t;return e?(t=wt?wt+e:e,this._events[t]&&ws(this,t)):(this._events=new qi,this._eventsCount=0),this};At.prototype.off=At.prototype.removeListener;At.prototype.addListener=At.prototype.on;At.prefixed=wt;At.EventEmitter=At;Ea=At;var ei={};Qn(ei,"ConnectionType",()=>In);Qn(ei,"PeerErrorType",()=>lt);Qn(ei,"BaseConnectionErrorType",()=>Ur);Qn(ei,"DataConnectionErrorType",()=>Ca);Qn(ei,"SerializationType",()=>Hs);Qn(ei,"SocketEventType",()=>Pn);Qn(ei,"ServerMessageType",()=>Tt);var In=function(s){return s.Data="data",s.Media="media",s}({}),lt=function(s){return s.BrowserIncompatible="browser-incompatible",s.Disconnected="disconnected",s.InvalidID="invalid-id",s.InvalidKey="invalid-key",s.Network="network",s.PeerUnavailable="peer-unavailable",s.SslUnavailable="ssl-unavailable",s.ServerError="server-error",s.SocketError="socket-error",s.SocketClosed="socket-closed",s.UnavailableID="unavailable-id",s.WebRTC="webrtc",s}({}),Ur=function(s){return s.NegotiationFailed="negotiation-failed",s.ConnectionClosed="connection-closed",s}({}),Ca=function(s){return s.NotOpenYet="not-open-yet",s.MessageToBig="message-too-big",s}({}),Hs=function(s){return s.Binary="binary",s.BinaryUTF8="binary-utf8",s.JSON="json",s.None="raw",s}({}),Pn=function(s){return s.Message="message",s.Disconnected="disconnected",s.Error="error",s.Close="close",s}({}),Tt=function(s){return s.Heartbeat="HEARTBEAT",s.Candidate="CANDIDATE",s.Offer="OFFER",s.Answer="ANSWER",s.Open="OPEN",s.Error="ERROR",s.IdTaken="ID-TAKEN",s.InvalidKey="INVALID-KEY",s.Leave="LEAVE",s.Expire="EXPIRE",s}({});const tl="1.5.5";class ld extends Ea.EventEmitter{constructor(e,t,n,i,r,a=5e3){super(),this.pingInterval=a,this._disconnected=!0,this._messagesQueue=[];const o=e?"wss://":"ws://";this._baseUrl=o+t+":"+n+i+"peerjs?key="+r}start(e,t){this._id=e;const n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+tl),this._disconnected=!1,this._socket.onmessage=i=>{let r;try{r=JSON.parse(i.data),fe.log("Server message received:",r)}catch{fe.log("Invalid server message",i.data);return}this.emit(Pn.Message,r)},this._socket.onclose=i=>{this._disconnected||(fe.log("Socket closed.",i),this._cleanup(),this._disconnected=!0,this.emit(Pn.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),fe.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){fe.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:Tt.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(Pn.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class nl{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===In.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const n=this.connection,i={ordered:!!e.reliable},r=t.createDataChannel(n.label,i);n._initializeDataChannel(r),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){fe.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,i=this.connection.type,r=this.connection.provider;fe.log("Listening for ICE candidates."),e.onicecandidate=a=>{!a.candidate||!a.candidate.candidate||(fe.log(`Received ICE candidates for ${t}:`,a.candidate),r.socket.send({type:Tt.Candidate,payload:{candidate:a.candidate,type:i,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":fe.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(Ur.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":fe.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(Ur.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":fe.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},fe.log("Listening for data channel"),e.ondatachannel=a=>{fe.log("Received data channel");const o=a.channel;r.getConnection(t,n)._initializeDataChannel(o)},fe.log("Listening for remote stream"),e.ontrack=a=>{fe.log("Received remote stream");const o=a.streams[0],c=r.getConnection(t,n);if(c.type===In.Media){const l=c;this._addStreamToMediaConnection(o,l)}}}cleanup(){fe.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let n=!1;const i=this.connection.dataChannel;i&&(n=!!i.readyState&&i.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);fe.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),fe.log("Set localDescription:",n,`for:${this.connection.peer}`);let i={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===In.Data){const r=this.connection;i={...i,label:r.label,reliable:r.reliable,serialization:r.serialization}}t.socket.send({type:Tt.Offer,payload:i,dst:this.connection.peer})}catch(i){i!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(lt.WebRTC,i),fe.log("Failed to setLocalDescription, ",i))}}catch(n){t.emitError(lt.WebRTC,n),fe.log("Failed to createOffer, ",n)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();fe.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),fe.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:Tt.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(i){t.emitError(lt.WebRTC,i),fe.log("Failed to setLocalDescription, ",i)}}catch(n){t.emitError(lt.WebRTC,n),fe.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,i=this.connection.provider;fe.log("Setting remote description",t);const r=this;try{await n.setRemoteDescription(t),fe.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await r._makeAnswer()}catch(a){i.emitError(lt.WebRTC,a),fe.log("Failed to setRemoteDescription, ",a)}}async handleCandidate(e){fe.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),fe.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(lt.WebRTC,t),fe.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(fe.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return fe.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){fe.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class il extends Ea.EventEmitter{emitError(e,t){fe.error("Error:",t),this.emit("error",new dd(`${e}`,t))}}class dd extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class sl extends il{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}class Fs extends sl{static#e=this.ID_PREFIX="mc_";get type(){return In.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||Fs.ID_PREFIX+Dt.randomToken(),this._negotiator=new nl(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{fe.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{fe.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){fe.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case Tt.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case Tt.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:fe.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){fe.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const n=this.provider._getMessages(this.connectionId);for(const i of n)this.handleMessage(i);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}}class hd{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:n,port:i,path:r,key:a}=this._options,o=new URL(`${t}://${n}:${i}${r}${a}/${e}`);return o.searchParams.set("ts",`${Date.now()}${Math.random()}`),o.searchParams.set("version",tl),fetch(o.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){fe.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==Dt.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===Dt.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw fe.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}class ks extends sl{static#e=this.ID_PREFIX="dc_";static#t=this.MAX_BUFFERED_AMOUNT=8388608;get type(){return In.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||ks.ID_PREFIX+Qc(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new nl(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{fe.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{fe.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{fe.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(Ca.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case Tt.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case Tt.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:fe.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}}class Aa extends ks{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>ks.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return fe.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class Ys extends Aa{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new Jc,this.serialization=Hs.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=_c(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const i=nd(n.data);this._handleDataMessage({data:i})}}_send(e,t){const n=vc(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);fe.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const n of t)this.send(n,!0)}}class ud extends Aa{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=Hs.None}}class fd extends Aa{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const n=this.encoder.encode(this.stringify(e));if(n.byteLength>=Dt.chunkedMTU){this.emitError(Ca.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=Hs.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}class Ra extends il{static#e=this.DEFAULT_KEY="peerjs";get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:ud,json:fd,binary:Ys,"binary-utf8":Ys,default:Ys},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:Dt.CLOUD_HOST,port:Dt.CLOUD_PORT,path:"/",key:Ra.DEFAULT_KEY,token:Dt.randomToken(),config:Dt.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==Dt.CLOUD_HOST?this._options.secure=Dt.isSecure():this._options.host==Dt.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&fe.setLogFunction(this._options.logFunction),fe.logLevel=this._options.debug||0,this._api=new hd(t),this._socket=this._createServerConnection(),!Dt.supports.audioVideo&&!Dt.supports.data){this._delayedAbort(lt.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!Dt.validateId(n)){this._delayedAbort(lt.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(i=>this._initialize(i)).catch(i=>this._abort(lt.ServerError,i))}_createServerConnection(){const e=new ld(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(Pn.Message,t=>{this._handleMessage(t)}),e.on(Pn.Error,t=>{this._abort(lt.SocketError,t)}),e.on(Pn.Disconnected,()=>{this.disconnected||(this.emitError(lt.Network,"Lost connection to server."),this.disconnect())}),e.on(Pn.Close,()=>{this.disconnected||this._abort(lt.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,i=e.src;switch(t){case Tt.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case Tt.Error:this._abort(lt.ServerError,n.msg);break;case Tt.IdTaken:this._abort(lt.UnavailableID,`ID "${this.id}" is taken`);break;case Tt.InvalidKey:this._abort(lt.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case Tt.Leave:fe.log(`Received leave message from ${i}`),this._cleanupPeer(i),this._connections.delete(i);break;case Tt.Expire:this.emitError(lt.PeerUnavailable,`Could not connect to peer ${i}`);break;case Tt.Offer:{const r=n.connectionId;let a=this.getConnection(i,r);if(a&&(a.close(),fe.warn(`Offer received for existing Connection ID:${r}`)),n.type===In.Media){const c=new Fs(i,this,{connectionId:r,_payload:n,metadata:n.metadata});a=c,this._addConnection(i,a),this.emit("call",c)}else if(n.type===In.Data){const c=new this._serializers[n.serialization](i,this,{connectionId:r,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});a=c,this._addConnection(i,a),this.emit("connection",c)}else{fe.warn(`Received malformed connection type:${n.type}`);return}const o=this._getMessages(r);for(const c of o)a.handleMessage(c);break}default:{if(!n){fe.warn(`You received a malformed message from ${i} of type ${t}`);return}const r=n.connectionId,a=this.getConnection(i,r);a&&a.peerConnection?a.handleMessage(e):r?this._storeMessage(r,e):fe.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){fe.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(lt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){fe.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(lt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){fe.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const i=new Fs(e,this,{...n,_stream:t});return this._addConnection(e,i),i}_addConnection(e,t){fe.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(const i of n)if(i.connectionId===t)return i;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){fe.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(fe.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const n of t)n.close()}disconnect(){if(this.disconnected)return;const e=this.id;fe.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)fe.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)fe.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(lt.ServerError,t))}}var ho=Ra;const uo="com-maxwell-worldstrikers-room-",pd=[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"stun:stun2.l.google.com:19302"},{urls:"stun:stun.cloudflare.com:3478"},{urls:["turn:openrelay.metered.ca:80","turn:openrelay.metered.ca:443","turn:openrelay.metered.ca:443?transport=tcp","turns:openrelay.metered.ca:443?transport=tcp"],username:"openrelayproject",credential:"openrelayproject"}];class md{role="offline";roomCode="";isConnected=!1;pingMs=0;statusText="Offline (Local Mode)";peer=null;peerConn=null;ws=null;pingTimer=null;joinTimeoutTimer=null;hostRetryCount=0;snapshotTickCounter=0;latestRemoteInput=un();onStatusChange;onRoomCodeChanged;onMatchStartReceived;onSnapshotReceived;buildPeerOptions(){return{debug:1,config:{iceServers:pd,iceCandidatePoolSize:10}}}disconnect(){if(this.clearTimers(),this.peerConn){try{this.peerConn.close()}catch{}this.peerConn=null}if(this.peer){try{this.peer.destroy()}catch{}this.peer=null}if(this.ws){try{this.ws.close()}catch{}this.ws=null}this.role="offline",this.isConnected=!1,this.pingMs=0,this.roomCode="",this.hostRetryCount=0,this.updateStatus("Offline (Local Mode — Single Player or Local 2P)",!1)}clearTimers(){this.pingTimer!==null&&(window.clearInterval(this.pingTimer),this.pingTimer=null),this.joinTimeoutTimer!==null&&(window.clearTimeout(this.joinTimeoutTimer),this.joinTimeoutTimer=null)}hostPeerRoom(){return this.disconnect(),this.role="host",this.hostRetryCount=0,this.attemptHostRoom()}attemptHostRoom(){this.roomCode=String(Math.floor(1e3+Math.random()*9e3)),this.onRoomCodeChanged?.(this.roomCode);const e=`${uo}${this.roomCode}`;return this.updateStatus(`Creating Online/LAN Room ${this.roomCode}...`,!1),this.peer=new ho(e,this.buildPeerOptions()),this.peer.on("open",()=>{this.updateStatus(`Room ${this.roomCode} Ready (Same Wi-Fi or Cross-Network) — Waiting for Player 2...`,!1)}),this.peer.on("connection",t=>{this.peerConn&&this.peerConn.open&&this.peerConn.close(),this.peerConn=t,this.setupPeerConnection(t)}),this.peer.on("disconnected",()=>{this.peer&&!this.peer.destroyed&&!this.isConnected&&this.peer.reconnect()}),this.peer.on("error",t=>{const n=t.type||"";if(n==="unavailable-id"&&this.hostRetryCount<5){this.hostRetryCount++;try{this.peer?.destroy()}catch{}this.attemptHostRoom();return}this.updateStatus(`Network Error (${n||"peer"}): ${t.message}`,!1)}),this.roomCode}joinPeerRoom(e){const t=e.trim().replace(/\D/g,"").slice(0,4);if(t.length!==4){this.updateStatus("Please enter a valid 4-digit room code.",!1);return}this.disconnect(),this.role="client",this.roomCode=t,this.updateStatus(`Connecting to Room ${t} (STUN/TURN NAT Traversal)...`,!1),this.peer=new ho(this.buildPeerOptions()),this.joinTimeoutTimer=window.setTimeout(()=>{this.isConnected||this.updateStatus(`Timed out connecting to Room ${t}. Verify the host's 4-digit code is active.`,!1)},14e3),this.peer.on("open",()=>{if(!this.peer)return;const n=this.peer.connect(`${uo}${t}`,{serialization:"json",reliable:!0});this.peerConn=n,this.setupPeerConnection(n)}),this.peer.on("error",n=>{this.clearTimers();const i=n.type||"";i==="peer-unavailable"?this.updateStatus(`Room ${t} not found. Make sure Host clicked "HOST 4-DIGIT ROOM" first.`,!1):this.updateStatus(`Connection Error: ${i||n.message}`,!1)})}connectWebSocket(e,t){const n=e.trim();if(!n.startsWith("ws://")&&!n.startsWith("wss://")){this.updateStatus("WebSocket URL must start with ws:// or wss://",!1);return}if(typeof window<"u"&&window.location.protocol==="https:"&&n.startsWith("ws://")&&!n.startsWith("ws://localhost")&&!n.startsWith("ws://127.0.0.1")){this.updateStatus("HTTPS pages (like itch.io) require wss:// for WebSockets, or use Option A (4-Digit Room Code) which works over HTTPS automatically!",!1);return}this.disconnect(),this.role=t?"host":"client",this.updateStatus(`Connecting to ${n}...`,!1);try{this.ws=new WebSocket(n),this.ws.onopen=()=>{this.isConnected=!0,this.startHeartbeat(),this.updateStatus(`Connected via WebSocket (${this.role.toUpperCase()})`,!0)},this.ws.onmessage=i=>{try{const r=JSON.parse(String(i.data));this.handleMessage(r)}catch{}},this.ws.onerror=()=>{this.updateStatus(`WebSocket error on ${n}`,!1)},this.ws.onclose=()=>{this.clearTimers(),this.isConnected=!1,this.updateStatus("WebSocket Disconnected",!1)}}catch(i){this.updateStatus(`Failed to open WebSocket: ${i.message}`,!1)}}setupPeerConnection(e){e.on("open",()=>{this.joinTimeoutTimer!==null&&(window.clearTimeout(this.joinTimeoutTimer),this.joinTimeoutTimer=null),this.isConnected=!0,this.startHeartbeat(),this.updateStatus(`Connected! Room ${this.roomCode} (${this.role==="host"?"Host P1":"Client P2"})`,!0)}),e.on("data",t=>{const n=typeof t=="string"?JSON.parse(t):t;this.handleMessage(n)}),e.on("close",()=>{this.clearTimers(),this.isConnected=!1,this.updateStatus("Peer Disconnected",!1)}),e.on("error",t=>{this.updateStatus(`DataChannel Error: ${t.message}`,this.isConnected)})}startHeartbeat(){this.pingTimer!==null&&window.clearInterval(this.pingTimer),this.pingTimer=window.setInterval(()=>{this.isConnected&&this.sendMessage({type:"PING",ts:performance.now()})},1500)}handleMessage(e){if(!(!e||typeof e!="object")){if(e.type==="PING"){this.sendMessage({type:"PONG",ts:e.ts});return}if(e.type==="PONG"&&typeof e.ts=="number"){this.pingMs=Math.max(1,Math.round(performance.now()-e.ts));const t=this.roomCode?`Room ${this.roomCode}`:"WebSocket",n=this.role==="host"?"Host P1":"Client P2";this.updateStatus(`Connected! ${t} (${n}) • Ping: ${this.pingMs}ms`,!0);return}e.type==="START_MATCH"&&e.config?this.onMatchStartReceived?.(e.config):e.type==="INPUT_FRAME"&&e.input?this.latestRemoteInput=e.input:e.type==="STATE_SNAPSHOT"&&e.snapshot&&this.onSnapshotReceived?.(e.snapshot,e.events||[])}}sendStartMatch(e){this.sendMessage({type:"START_MATCH",config:e})}sendInputFrame(e){this.sendMessage({type:"INPUT_FRAME",input:e})}sendStateSnapshot(e,t){this.snapshotTickCounter++,!(t.length===0&&this.snapshotTickCounter%2!==0)&&this.sendMessage({type:"STATE_SNAPSHOT",snapshot:e,events:t})}sendMessage(e){this.peerConn&&this.peerConn.open?this.peerConn.send(e):this.ws&&this.ws.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(e))}updateStatus(e,t){this.statusText=e,this.isConnected=t,this.onStatusChange?.(e,t)}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wa="170",gd=0,fo=1,_d=2,rl=1,vd=2,hn=3,On=0,Ut=1,gt=2,Dn=0,Si=1,po=2,mo=3,go=4,Sd=5,qn=100,yd=101,xd=102,bd=103,Md=104,Td=200,Ed=201,Cd=202,Ad=203,Nr=204,Fr=205,Rd=206,wd=207,Pd=208,Id=209,Dd=210,Ld=211,Od=212,Ud=213,Nd=214,kr=0,Br=1,zr=2,bi=3,Hr=4,Vr=5,Gr=6,Wr=7,al=0,Fd=1,kd=2,Ln=0,Bd=1,zd=2,Hd=3,Vd=4,Gd=5,Wd=6,$d=7,ol=300,Mi=301,Ti=302,$r=303,Xr=304,Vs=306,qr=1e3,pn=1001,Yr=1002,Zt=1003,Xd=1004,is=1005,Ot=1006,js=1007,jn=1008,Sn=1009,cl=1010,ll=1011,Yi=1012,Pa=1013,Kn=1014,mn=1015,Ki=1016,Ia=1017,Da=1018,Ei=1020,dl=35902,hl=1021,ul=1022,Kt=1023,fl=1024,pl=1025,yi=1026,Ci=1027,ml=1028,La=1029,gl=1030,Oa=1031,Ua=1033,Ps=33776,Is=33777,Ds=33778,Ls=33779,jr=35840,Kr=35841,Zr=35842,Jr=35843,Qr=36196,ea=37492,ta=37496,na=37808,ia=37809,sa=37810,ra=37811,aa=37812,oa=37813,ca=37814,la=37815,da=37816,ha=37817,ua=37818,fa=37819,pa=37820,ma=37821,Os=36492,ga=36494,_a=36495,_l=36283,va=36284,Sa=36285,ya=36286,qd=3200,Yd=3201,vl=0,jd=1,wn="",_t="srgb",Ri="srgb-linear",Gs="linear",je="srgb",ni=7680,_o=519,Kd=512,Zd=513,Jd=514,Sl=515,Qd=516,eh=517,th=518,nh=519,vo=35044,So="300 es",gn=2e3,Bs=2001;class wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ks=Math.PI/180,xa=180/Math.PI;function Zi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[s&255]+St[s>>8&255]+St[s>>16&255]+St[s>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function Lt(s,e,t){return Math.max(e,Math.min(t,s))}function ih(s,e){return(s%e+e)%e}function Zs(s,e,t){return(1-t)*s+t*e}function Oi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function It(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(e,t,n,i,r,a,o,c,l){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],h=n[7],u=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],b=i[1],T=i[4],x=i[7],U=i[2],C=i[5],A=i[8];return r[0]=a*_+o*b+c*U,r[3]=a*m+o*T+c*C,r[6]=a*p+o*x+c*A,r[1]=l*_+d*b+h*U,r[4]=l*m+d*T+h*C,r[7]=l*p+d*x+h*A,r[2]=u*_+f*b+g*U,r[5]=u*m+f*T+g*C,r[8]=u*p+f*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*r*d+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=d*a-o*l,u=o*c-d*r,f=l*r-a*c,g=t*h+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*l-d*n)*_,e[2]=(o*n-i*a)*_,e[3]=u*_,e[4]=(d*t-i*c)*_,e[5]=(i*r-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Js.makeScale(e,t)),this}rotate(e){return this.premultiply(Js.makeRotation(-e)),this}translate(e,t){return this.premultiply(Js.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Js=new Pe;function yl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ji(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function sh(){const s=ji("canvas");return s.style.display="block",s}const yo={};function Gi(s){s in yo||(yo[s]=!0,console.warn(s))}function rh(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function ah(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function oh(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ve={enabled:!0,workingColorSpace:Ri,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===je&&(s.r=vn(s.r),s.g=vn(s.g),s.b=vn(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===je&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wn?Gs:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function vn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function xi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const xo=[.64,.33,.3,.6,.15,.06],bo=[.2126,.7152,.0722],Mo=[.3127,.329],To=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eo=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ve.define({[Ri]:{primaries:xo,whitePoint:Mo,transfer:Gs,toXYZ:To,fromXYZ:Eo,luminanceCoefficients:bo,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:xo,whitePoint:Mo,transfer:je,toXYZ:To,fromXYZ:Eo,luminanceCoefficients:bo,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}});let ii;class ch{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ii===void 0&&(ii=ji("canvas")),ii.width=e.width,ii.height=e.height;const n=ii.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ji("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=vn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vn(t[n]/255)*255):t[n]=vn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lh=0;class xl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=Zi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Qs(i[a].image)):r.push(Qs(i[a]))}else r=Qs(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Qs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ch.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dh=0;class Et extends wi{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=pn,i=pn,r=Ot,a=jn,o=Kt,c=Sn,l=Et.DEFAULT_ANISOTROPY,d=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=Zi(),this.name="",this.source=new xl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ol)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qr:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case Yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qr:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case Yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=ol;Et.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,t=0,n=0,i=1){Ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],d=c[4],h=c[8],u=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(d-u)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,x=(f+1)/2,U=(p+1)/2,C=(d+u)/4,A=(h+_)/4,w=(g+m)/4;return T>x&&T>U?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=C/n,r=A/n):x>U?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=C/i,r=w/i):U<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(U),n=A/r,i=w/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(u-d)*(u-d));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-_)/b,this.z=(u-d)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hh extends wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Et(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends hh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bl extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uh extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ji{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],d=n[i+2],h=n[i+3];const u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==u||l!==f||d!==g){let m=1-o;const p=c*u+l*f+d*g+h*_,b=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const U=Math.sqrt(T),C=Math.atan2(U,p*b);m=Math.sin(m*C)/U,o=Math.sin(o*C)/U}const x=o*b;if(c=c*m+u*x,l=l*m+f*x,d=d*m+g*x,h=h*m+_*x,m===1-o){const U=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=U,l*=U,d*=U,h*=U}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],d=n[i+3],h=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+d*h+c*f-l*u,e[t+1]=c*g+d*u+l*h-o*f,e[t+2]=l*g+d*f+o*u-c*h,e[t+3]=d*g-o*h-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(i/2),h=o(r/2),u=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=u*d*h+l*f*g,this._y=l*f*h-u*d*g,this._z=l*d*g+u*f*h,this._w=l*d*h-u*f*g;break;case"YXZ":this._x=u*d*h+l*f*g,this._y=l*f*h-u*d*g,this._z=l*d*g-u*f*h,this._w=l*d*h+u*f*g;break;case"ZXY":this._x=u*d*h-l*f*g,this._y=l*f*h+u*d*g,this._z=l*d*g+u*f*h,this._w=l*d*h-u*f*g;break;case"ZYX":this._x=u*d*h-l*f*g,this._y=l*f*h+u*d*g,this._z=l*d*g-u*f*h,this._w=l*d*h+u*f*g;break;case"YZX":this._x=u*d*h+l*f*g,this._y=l*f*h+u*d*g,this._z=l*d*g-u*f*h,this._w=l*d*h-u*f*g;break;case"XZY":this._x=u*d*h-l*f*g,this._y=l*f*h-u*d*g,this._z=l*d*g+u*f*h,this._w=l*d*h+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(d-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+d)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+i*l-r*c,this._y=i*d+a*c+r*o-n*l,this._z=r*d+a*l+n*c-i*o,this._w=a*d-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,o),h=Math.sin((1-t)*d)/l,u=Math.sin(t*d)/l;return this._w=a*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Co.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Co.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),d=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*d,this.y=n+c*d+o*l-r*h,this.z=i+c*h+r*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return er.copy(this).projectOnVector(e),this.sub(er)}reflect(e){return this.sub(er.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const er=new O,Co=new Ji;class Qi{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xt):Xt.fromBufferAttribute(r,a),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ss.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ss.copy(n.boundingBox)),ss.applyMatrix4(e.matrixWorld),this.union(ss)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ui),rs.subVectors(this.max,Ui),si.subVectors(e.a,Ui),ri.subVectors(e.b,Ui),ai.subVectors(e.c,Ui),bn.subVectors(ri,si),Mn.subVectors(ai,ri),Bn.subVectors(si,ai);let t=[0,-bn.z,bn.y,0,-Mn.z,Mn.y,0,-Bn.z,Bn.y,bn.z,0,-bn.x,Mn.z,0,-Mn.x,Bn.z,0,-Bn.x,-bn.y,bn.x,0,-Mn.y,Mn.x,0,-Bn.y,Bn.x,0];return!tr(t,si,ri,ai,rs)||(t=[1,0,0,0,1,0,0,0,1],!tr(t,si,ri,ai,rs))?!1:(as.crossVectors(bn,Mn),t=[as.x,as.y,as.z],tr(t,si,ri,ai,rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(an),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const an=[new O,new O,new O,new O,new O,new O,new O,new O],Xt=new O,ss=new Qi,si=new O,ri=new O,ai=new O,bn=new O,Mn=new O,Bn=new O,Ui=new O,rs=new O,as=new O,zn=new O;function tr(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){zn.fromArray(s,r);const o=i.x*Math.abs(zn.x)+i.y*Math.abs(zn.y)+i.z*Math.abs(zn.z),c=e.dot(zn),l=t.dot(zn),d=n.dot(zn);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const fh=new Qi,Ni=new O,nr=new O;class Na{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):fh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ni.subVectors(e,this.center);const t=Ni.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ni,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ni.copy(e.center).add(nr)),this.expandByPoint(Ni.copy(e.center).sub(nr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new O,ir=new O,os=new O,Tn=new O,sr=new O,cs=new O,rr=new O;class ph{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ir.copy(e).add(t).multiplyScalar(.5),os.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(ir);const r=e.distanceTo(t)*.5,a=-this.direction.dot(os),o=Tn.dot(this.direction),c=-Tn.dot(os),l=Tn.lengthSq(),d=Math.abs(1-a*a);let h,u,f,g;if(d>0)if(h=a*c-o,u=a*o-c,g=r*d,h>=0)if(u>=-g)if(u<=g){const _=1/d;h*=_,u*=_,f=h*(h+a*u+2*o)+u*(a*h+u+2*c)+l}else u=r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*c)+l;else u=-r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*c)+l;else u<=-g?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+u*(u+2*c)+l):u<=g?(h=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+u*(u+2*c)+l);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ir).addScaledVector(os,u),f}intersectSphere(e,t){on.subVectors(e.center,this.origin);const n=on.dot(this.direction),i=on.dot(on)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),d>=0?(r=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-u.z)*h,c=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,c=(e.min.z-u.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,n,i,r){sr.subVectors(t,e),cs.subVectors(n,e),rr.crossVectors(sr,cs);let a=this.direction.dot(rr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tn.subVectors(this.origin,e);const c=o*this.direction.dot(cs.crossVectors(Tn,cs));if(c<0)return null;const l=o*this.direction.dot(sr.cross(Tn));if(l<0||c+l>a)return null;const d=-o*Tn.dot(rr);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,i,r,a,o,c,l,d,h,u,f,g,_,m){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,d,h,u,f,g,_,m)}set(e,t,n,i,r,a,o,c,l,d,h,u,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=d,p[10]=h,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/oi.setFromMatrixColumn(e,0).length(),r=1/oi.setFromMatrixColumn(e,1).length(),a=1/oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=a*d,f=a*h,g=o*d,_=o*h;t[0]=c*d,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=u-_*l,t[9]=-o*c,t[2]=_-u*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*d,f=c*h,g=l*d,_=l*h;t[0]=u+_*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=f*o-g,t[6]=_+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*d,f=c*h,g=l*d,_=l*h;t[0]=u-_*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*d,t[9]=_-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*d,f=a*h,g=o*d,_=o*h;t[0]=c*d,t[4]=g*l-f,t[8]=u*l+_,t[1]=c*h,t[5]=_*l+u,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*d,t[4]=_-u*h,t[8]=g*h+f,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=f*h+g,t[10]=u-_*h}else if(e.order==="XZY"){const u=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*d,t[4]=-h,t[8]=l*d,t[1]=u*h+_,t[5]=a*d,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*d,t[10]=_*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mh,e,gh)}lookAt(e,t,n){const i=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),En.crossVectors(n,Ft),En.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),En.crossVectors(n,Ft)),En.normalize(),ls.crossVectors(Ft,En),i[0]=En.x,i[4]=ls.x,i[8]=Ft.x,i[1]=En.y,i[5]=ls.y,i[9]=Ft.y,i[2]=En.z,i[6]=ls.z,i[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],h=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],T=n[7],x=n[11],U=n[15],C=i[0],A=i[4],w=i[8],M=i[12],S=i[1],R=i[5],z=i[9],B=i[13],G=i[2],j=i[6],W=i[10],Q=i[14],V=i[3],ie=i[7],le=i[11],ye=i[15];return r[0]=a*C+o*S+c*G+l*V,r[4]=a*A+o*R+c*j+l*ie,r[8]=a*w+o*z+c*W+l*le,r[12]=a*M+o*B+c*Q+l*ye,r[1]=d*C+h*S+u*G+f*V,r[5]=d*A+h*R+u*j+f*ie,r[9]=d*w+h*z+u*W+f*le,r[13]=d*M+h*B+u*Q+f*ye,r[2]=g*C+_*S+m*G+p*V,r[6]=g*A+_*R+m*j+p*ie,r[10]=g*w+_*z+m*W+p*le,r[14]=g*M+_*B+m*Q+p*ye,r[3]=b*C+T*S+x*G+U*V,r[7]=b*A+T*R+x*j+U*ie,r[11]=b*w+T*z+x*W+U*le,r[15]=b*M+T*B+x*Q+U*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],h=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*h-i*l*h-r*o*u+n*l*u+i*o*f-n*c*f)+_*(+t*c*f-t*l*u+r*a*u-i*a*f+i*l*d-r*c*d)+m*(+t*l*h-t*o*f-r*a*h+n*a*f+r*o*d-n*l*d)+p*(-i*o*d-t*c*h+t*o*u+i*a*h-n*a*u+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],b=h*m*l-_*u*l+_*c*f-o*m*f-h*c*p+o*u*p,T=g*u*l-d*m*l-g*c*f+a*m*f+d*c*p-a*u*p,x=d*_*l-g*h*l+g*o*f-a*_*f-d*o*p+a*h*p,U=g*h*c-d*_*c-g*o*u+a*_*u+d*o*m-a*h*m,C=t*b+n*T+i*x+r*U;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=b*A,e[1]=(_*u*r-h*m*r-_*i*f+n*m*f+h*i*p-n*u*p)*A,e[2]=(o*m*r-_*c*r+_*i*l-n*m*l-o*i*p+n*c*p)*A,e[3]=(h*c*r-o*u*r-h*i*l+n*u*l+o*i*f-n*c*f)*A,e[4]=T*A,e[5]=(d*m*r-g*u*r+g*i*f-t*m*f-d*i*p+t*u*p)*A,e[6]=(g*c*r-a*m*r-g*i*l+t*m*l+a*i*p-t*c*p)*A,e[7]=(a*u*r-d*c*r+d*i*l-t*u*l-a*i*f+t*c*f)*A,e[8]=x*A,e[9]=(g*h*r-d*_*r-g*n*f+t*_*f+d*n*p-t*h*p)*A,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*p+t*o*p)*A,e[11]=(d*o*r-a*h*r-d*n*l+t*h*l+a*n*f-t*o*f)*A,e[12]=U*A,e[13]=(d*_*i-g*h*i+g*n*u-t*_*u-d*n*m+t*h*m)*A,e[14]=(g*o*i-a*_*i-g*n*c+t*_*c+a*n*m-t*o*m)*A,e[15]=(a*h*i-d*o*i+d*n*c-t*h*c-a*n*u+t*o*u)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,d=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,d*o+n,d*c-i*a,0,l*c-i*o,d*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,d=a+a,h=o+o,u=r*l,f=r*d,g=r*h,_=a*d,m=a*h,p=o*h,b=c*l,T=c*d,x=c*h,U=n.x,C=n.y,A=n.z;return i[0]=(1-(_+p))*U,i[1]=(f+x)*U,i[2]=(g-T)*U,i[3]=0,i[4]=(f-x)*C,i[5]=(1-(u+p))*C,i[6]=(m+b)*C,i[7]=0,i[8]=(g+T)*A,i[9]=(m-b)*A,i[10]=(1-(u+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=oi.set(i[0],i[1],i[2]).length();const a=oi.set(i[4],i[5],i[6]).length(),o=oi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],qt.copy(this);const l=1/r,d=1/a,h=1/o;return qt.elements[0]*=l,qt.elements[1]*=l,qt.elements[2]*=l,qt.elements[4]*=d,qt.elements[5]*=d,qt.elements[6]*=d,qt.elements[8]*=h,qt.elements[9]*=h,qt.elements[10]*=h,t.setFromRotationMatrix(qt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=gn){const c=this.elements,l=2*r/(t-e),d=2*r/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i);let f,g;if(o===gn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Bs)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=gn){const c=this.elements,l=1/(t-e),d=1/(n-i),h=1/(a-r),u=(t+e)*l,f=(n+i)*d;let g,_;if(o===gn)g=(a+r)*h,_=-2*h;else if(o===Bs)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const oi=new O,qt=new rt,mh=new O(0,0,0),gh=new O(1,1,1),En=new O,ls=new O,Ft=new O,Ao=new rt,Ro=new Ji;class nn{constructor(e=0,t=0,n=0,i=nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],d=i[9],h=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ao.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ao,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ro.setFromEuler(this),this.setFromQuaternion(Ro,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nn.DEFAULT_ORDER="XYZ";class Ml{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _h=0;const wo=new O,ci=new Ji,cn=new rt,ds=new O,Fi=new O,vh=new O,Sh=new Ji,Po=new O(1,0,0),Io=new O(0,1,0),Do=new O(0,0,1),Lo={type:"added"},yh={type:"removed"},li={type:"childadded",child:null},ar={type:"childremoved",child:null};class Ct extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new O,t=new nn,n=new Ji,i=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rt},normalMatrix:{value:new Pe}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.multiply(ci),this}rotateOnWorldAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.premultiply(ci),this}rotateX(e){return this.rotateOnAxis(Po,e)}rotateY(e){return this.rotateOnAxis(Io,e)}rotateZ(e){return this.rotateOnAxis(Do,e)}translateOnAxis(e,t){return wo.copy(e).applyQuaternion(this.quaternion),this.position.add(wo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Po,e)}translateY(e){return this.translateOnAxis(Io,e)}translateZ(e){return this.translateOnAxis(Do,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ds.copy(e):ds.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Fi,ds,this.up):cn.lookAt(ds,Fi,this.up),this.quaternion.setFromRotationMatrix(cn),i&&(cn.extractRotation(i.matrixWorld),ci.setFromRotationMatrix(cn),this.quaternion.premultiply(ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lo),li.child=e,this.dispatchEvent(li),li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yh),ar.child=e,this.dispatchEvent(ar),ar.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lo),li.child=e,this.dispatchEvent(li),li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,e,vh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,Sh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ct.DEFAULT_UP=new O(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new O,ln=new O,or=new O,dn=new O,di=new O,hi=new O,Oo=new O,cr=new O,lr=new O,dr=new O,hr=new Ke,ur=new Ke,fr=new Ke;class jt{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yt.subVectors(e,t),i.cross(Yt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Yt.subVectors(i,t),ln.subVectors(n,t),or.subVectors(e,t);const a=Yt.dot(Yt),o=Yt.dot(ln),c=Yt.dot(or),l=ln.dot(ln),d=ln.dot(or),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const u=1/h,f=(l*c-o*d)*u,g=(a*d-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,dn.x),c.addScaledVector(a,dn.y),c.addScaledVector(o,dn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return hr.setScalar(0),ur.setScalar(0),fr.setScalar(0),hr.fromBufferAttribute(e,t),ur.fromBufferAttribute(e,n),fr.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(hr,r.x),a.addScaledVector(ur,r.y),a.addScaledVector(fr,r.z),a}static isFrontFacing(e,t,n,i){return Yt.subVectors(n,t),ln.subVectors(e,t),Yt.cross(ln).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Yt.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return jt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;di.subVectors(i,n),hi.subVectors(r,n),cr.subVectors(e,n);const c=di.dot(cr),l=hi.dot(cr);if(c<=0&&l<=0)return t.copy(n);lr.subVectors(e,i);const d=di.dot(lr),h=hi.dot(lr);if(d>=0&&h<=d)return t.copy(i);const u=c*h-d*l;if(u<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(di,a);dr.subVectors(e,r);const f=di.dot(dr),g=hi.dot(dr);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(hi,o);const m=d*g-f*h;if(m<=0&&h-d>=0&&f-g>=0)return Oo.subVectors(r,i),o=(h-d)/(h-d+(f-g)),t.copy(i).addScaledVector(Oo,o);const p=1/(m+_+u);return a=_*p,o=u*p,t.copy(n).addScaledVector(di,a).addScaledVector(hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Tl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},hs={h:0,s:0,l:0};function pr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ve.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ve.workingColorSpace){if(e=ih(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=pr(a,r,e+1/3),this.g=pr(a,r,e),this.b=pr(a,r,e-1/3)}return Ve.toWorkingColorSpace(this,i),this}setStyle(e,t=_t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const n=Tl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vn(e.r),this.g=vn(e.g),this.b=vn(e.b),this}copyLinearToSRGB(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return Ve.fromWorkingColorSpace(yt.copy(this),e),Math.round(Lt(yt.r*255,0,255))*65536+Math.round(Lt(yt.g*255,0,255))*256+Math.round(Lt(yt.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.fromWorkingColorSpace(yt.copy(this),t);const n=yt.r,i=yt.g,r=yt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=d<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=_t){Ve.fromWorkingColorSpace(yt.copy(this),e);const t=yt.r,n=yt.g,i=yt.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(hs);const n=Zs(Cn.h,hs.h,t),i=Zs(Cn.s,hs.s,t),r=Zs(Cn.l,hs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new Ge;Ge.NAMES=Tl;let xh=0;class es extends wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=Zi(),this.name="",this.blending=Si,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nr,this.blendDst=Fr,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_o,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nr&&(n.blendSrc=this.blendSrc),this.blendDst!==Fr&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_o&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xt extends es{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new O,us=new Ne;class Jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vo,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)us.fromBufferAttribute(this,t),us.applyMatrix3(e),this.setXY(t,us.x,us.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vo&&(e.usage=this.usage),e}}class El extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Cl extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let bh=0;const Vt=new rt,mr=new Ct,ui=new O,kt=new Qi,ki=new Qi,ft=new O;class Gt extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yl(e)?Cl:El)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Pe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,n){return Vt.makeTranslation(e,t,n),this.applyMatrix4(Vt),this}scale(e,t,n){return Vt.makeScale(e,t,n),this.applyMatrix4(Vt),this}lookAt(e){return mr.lookAt(e),mr.updateMatrix(),this.applyMatrix4(mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];kt.setFromBufferAttribute(r),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Na);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ki.setFromBufferAttribute(o),this.morphTargetsRelative?(ft.addVectors(kt.min,ki.min),kt.expandByPoint(ft),ft.addVectors(kt.max,ki.max),kt.expandByPoint(ft)):(kt.expandByPoint(ki.min),kt.expandByPoint(ki.max))}kt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)ft.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ft));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)ft.fromBufferAttribute(o,l),c&&(ui.fromBufferAttribute(e,l),ft.add(ui)),i=Math.max(i,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let w=0;w<n.count;w++)o[w]=new O,c[w]=new O;const l=new O,d=new O,h=new O,u=new Ne,f=new Ne,g=new Ne,_=new O,m=new O;function p(w,M,S){l.fromBufferAttribute(n,w),d.fromBufferAttribute(n,M),h.fromBufferAttribute(n,S),u.fromBufferAttribute(r,w),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),d.sub(l),h.sub(l),f.sub(u),g.sub(u);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(R),m.copy(h).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(R),o[w].add(_),o[M].add(_),o[S].add(_),c[w].add(m),c[M].add(m),c[S].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let w=0,M=b.length;w<M;++w){const S=b[w],R=S.start,z=S.count;for(let B=R,G=R+z;B<G;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const T=new O,x=new O,U=new O,C=new O;function A(w){U.fromBufferAttribute(i,w),C.copy(U);const M=o[w];T.copy(M),T.sub(U.multiplyScalar(U.dot(M))).normalize(),x.crossVectors(C,M);const R=x.dot(c[w])<0?-1:1;a.setXYZW(w,T.x,T.y,T.z,R)}for(let w=0,M=b.length;w<M;++w){const S=b[w],R=S.start,z=S.count;for(let B=R,G=R+z;B<G;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new O,r=new O,a=new O,o=new O,c=new O,l=new O,d=new O,h=new O;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),d.subVectors(a,r),h.subVectors(i,r),d.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(d),c.add(d),l.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,r),h.subVectors(i,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,h=o.normalized,u=new l.constructor(c.length*d);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*d;for(let p=0;p<d;p++)u[g++]=l[f++]}return new Jt(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let d=0,h=l.length;d<h;d++){const u=l[d],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,u=l.length;h<u;h++){const f=l[h];d.push(f.toJSON(e.data))}d.length>0&&(i[c]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const d=i[l];this.setAttribute(l,d.clone(t))}const r=e.morphAttributes;for(const l in r){const d=[],h=r[l];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uo=new rt,Hn=new ph,fs=new Na,No=new O,ps=new O,ms=new O,gs=new O,gr=new O,_s=new O,Fo=new O,vs=new O;class qe extends Ct{constructor(e=new Gt,t=new xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){_s.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=o[c],h=r[c];d!==0&&(gr.fromBufferAttribute(h,e),a?_s.addScaledVector(gr,d):_s.addScaledVector(gr.sub(t),d))}t.add(_s)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(r),Hn.copy(e.ray).recast(e.near),!(fs.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(fs,No)===null||Hn.origin.distanceToSquared(No)>(e.far-e.near)**2))&&(Uo.copy(r).invert(),Hn.copy(e.ray).applyMatrix4(Uo),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,U=T;x<U;x+=3){const C=o.getX(x),A=o.getX(x+1),w=o.getX(x+2);i=Ss(this,p,e,n,l,d,h,C,A,w),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=o.getX(m),T=o.getX(m+1),x=o.getX(m+2);i=Ss(this,a,e,n,l,d,h,b,T,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),T=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,U=T;x<U;x+=3){const C=x,A=x+1,w=x+2;i=Ss(this,p,e,n,l,d,h,C,A,w),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=m,T=m+1,x=m+2;i=Ss(this,a,e,n,l,d,h,b,T,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Mh(s,e,t,n,i,r,a,o){let c;if(e.side===Ut?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===On,o),c===null)return null;vs.copy(o),vs.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(vs);return l<t.near||l>t.far?null:{distance:l,point:vs.clone(),object:s}}function Ss(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,ps),s.getVertexPosition(c,ms),s.getVertexPosition(l,gs);const d=Mh(s,e,t,n,ps,ms,gs,Fo);if(d){const h=new O;jt.getBarycoord(Fo,ps,ms,gs,h),i&&(d.uv=jt.getInterpolatedAttribute(i,o,c,l,h,new Ne)),r&&(d.uv1=jt.getInterpolatedAttribute(r,o,c,l,h,new Ne)),a&&(d.normal=jt.getInterpolatedAttribute(a,o,c,l,h,new O),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new O,materialIndex:0};jt.getNormal(ps,ms,gs,u.normal),d.face=u,d.barycoord=h}return d}class _n extends Gt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],d=[],h=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(h,2));function g(_,m,p,b,T,x,U,C,A,w,M){const S=x/A,R=U/w,z=x/2,B=U/2,G=C/2,j=A+1,W=w+1;let Q=0,V=0;const ie=new O;for(let le=0;le<W;le++){const ye=le*R-B;for(let Le=0;Le<j;Le++){const Ze=Le*S-z;ie[_]=Ze*b,ie[m]=ye*T,ie[p]=G,l.push(ie.x,ie.y,ie.z),ie[_]=0,ie[m]=0,ie[p]=C>0?1:-1,d.push(ie.x,ie.y,ie.z),h.push(Le/A),h.push(1-le/w),Q+=1}}for(let le=0;le<w;le++)for(let ye=0;ye<A;ye++){const Le=u+ye+j*le,Ze=u+ye+j*(le+1),X=u+(ye+1)+j*(le+1),ee=u+(ye+1)+j*le;c.push(Le,Ze,ee),c.push(Ze,X,ee),V+=6}o.addGroup(f,V,M),f+=V,u+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ai(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Rt(s){const e={};for(let t=0;t<s.length;t++){const n=Ai(s[t]);for(const i in n)e[i]=n[i]}return e}function Th(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Al(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}const Eh={clone:Ai,merge:Rt};var Ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ah=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends es{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ch,this.fragmentShader=Ah,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ai(e.uniforms),this.uniformsGroups=Th(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Rl extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const An=new O,ko=new Ne,Bo=new Ne;class Bt extends Rl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xa*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){An.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(An.x,An.y).multiplyScalar(-e/An.z),An.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(An.x,An.y).multiplyScalar(-e/An.z)}getViewSize(e,t){return this.getViewBounds(e,ko,Bo),t.subVectors(Bo,ko)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ks*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fi=-90,pi=1;class Rh extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Bt(fi,pi,e,t);i.layers=this.layers,this.add(i);const r=new Bt(fi,pi,e,t);r.layers=this.layers,this.add(r);const a=new Bt(fi,pi,e,t);a.layers=this.layers,this.add(a);const o=new Bt(fi,pi,e,t);o.layers=this.layers,this.add(o);const c=new Bt(fi,pi,e,t);c.layers=this.layers,this.add(c);const l=new Bt(fi,pi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(h,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class wl extends Et{constructor(e,t,n,i,r,a,o,c,l,d){e=e!==void 0?e:[],t=t!==void 0?t:Mi,super(e,t,n,i,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wh extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new wl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new _n(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:Dn});r.uniforms.tEquirect.value=t;const a=new qe(i,r),o=t.minFilter;return t.minFilter===jn&&(t.minFilter=Ot),new Rh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const _r=new O,Ph=new O,Ih=new Pe;class $n{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_r.subVectors(n,t).cross(Ph.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_r),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ih.getNormalMatrix(e),i=this.coplanarPoint(_r).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new Na,ys=new O;class Fa{constructor(e=new $n,t=new $n,n=new $n,i=new $n,r=new $n,a=new $n){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],d=i[5],h=i[6],u=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],b=i[13],T=i[14],x=i[15];if(n[0].setComponents(c-r,u-l,m-f,x-p).normalize(),n[1].setComponents(c+r,u+l,m+f,x+p).normalize(),n[2].setComponents(c+a,u+d,m+g,x+b).normalize(),n[3].setComponents(c-a,u-d,m-g,x-b).normalize(),n[4].setComponents(c-o,u-h,m-_,x-T).normalize(),t===gn)n[5].setComponents(c+o,u+h,m+_,x+T).normalize();else if(t===Bs)n[5].setComponents(o,h,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(e){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ys.x=i.normal.x>0?e.max.x:e.min.x,ys.y=i.normal.y>0?e.max.y:e.min.y,ys.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pl(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Dh(s){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,h=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,d),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const d=c.array,h=c.updateRanges;if(s.bindBuffer(l,o),h.length===0)s.bufferSubData(l,0,d);else{h.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<h.length;f++){const g=h[u],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,h[u]=_)}h.length=u+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];s.bufferSubData(l,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}class fn extends Gt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,d=c+1,h=e/o,u=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<d;p++){const b=p*u-a;for(let T=0;T<l;T++){const x=T*h-r;g.push(x,-b,0),_.push(0,0,1),m.push(T/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){const T=b+l*p,x=b+l*(p+1),U=b+1+l*(p+1),C=b+1+l*p;f.push(T,x,C),f.push(x,U,C)}this.setIndex(f),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Lh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Oh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Uh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$h=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,iu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,su=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ru=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,au=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ou=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lu="gl_FragColor = linearToOutputTexel( gl_FragColor );",du=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_u=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Su=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Eu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Au=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ru=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Iu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Du=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ou=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ku=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$u=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ju=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ku=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ju=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ef=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,af=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,of=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,df=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ff=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,gf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_f=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ef=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Af=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Df=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Of=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$f=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ep=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,np=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ap=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,up=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:Lh,alphahash_pars_fragment:Oh,alphamap_fragment:Uh,alphamap_pars_fragment:Nh,alphatest_fragment:Fh,alphatest_pars_fragment:kh,aomap_fragment:Bh,aomap_pars_fragment:zh,batching_pars_vertex:Hh,batching_vertex:Vh,begin_vertex:Gh,beginnormal_vertex:Wh,bsdfs:$h,iridescence_fragment:Xh,bumpmap_pars_fragment:qh,clipping_planes_fragment:Yh,clipping_planes_pars_fragment:jh,clipping_planes_pars_vertex:Kh,clipping_planes_vertex:Zh,color_fragment:Jh,color_pars_fragment:Qh,color_pars_vertex:eu,color_vertex:tu,common:nu,cube_uv_reflection_fragment:iu,defaultnormal_vertex:su,displacementmap_pars_vertex:ru,displacementmap_vertex:au,emissivemap_fragment:ou,emissivemap_pars_fragment:cu,colorspace_fragment:lu,colorspace_pars_fragment:du,envmap_fragment:hu,envmap_common_pars_fragment:uu,envmap_pars_fragment:fu,envmap_pars_vertex:pu,envmap_physical_pars_fragment:Eu,envmap_vertex:mu,fog_vertex:gu,fog_pars_vertex:_u,fog_fragment:vu,fog_pars_fragment:Su,gradientmap_pars_fragment:yu,lightmap_pars_fragment:xu,lights_lambert_fragment:bu,lights_lambert_pars_fragment:Mu,lights_pars_begin:Tu,lights_toon_fragment:Cu,lights_toon_pars_fragment:Au,lights_phong_fragment:Ru,lights_phong_pars_fragment:wu,lights_physical_fragment:Pu,lights_physical_pars_fragment:Iu,lights_fragment_begin:Du,lights_fragment_maps:Lu,lights_fragment_end:Ou,logdepthbuf_fragment:Uu,logdepthbuf_pars_fragment:Nu,logdepthbuf_pars_vertex:Fu,logdepthbuf_vertex:ku,map_fragment:Bu,map_pars_fragment:zu,map_particle_fragment:Hu,map_particle_pars_fragment:Vu,metalnessmap_fragment:Gu,metalnessmap_pars_fragment:Wu,morphinstance_vertex:$u,morphcolor_vertex:Xu,morphnormal_vertex:qu,morphtarget_pars_vertex:Yu,morphtarget_vertex:ju,normal_fragment_begin:Ku,normal_fragment_maps:Zu,normal_pars_fragment:Ju,normal_pars_vertex:Qu,normal_vertex:ef,normalmap_pars_fragment:tf,clearcoat_normal_fragment_begin:nf,clearcoat_normal_fragment_maps:sf,clearcoat_pars_fragment:rf,iridescence_pars_fragment:af,opaque_fragment:of,packing:cf,premultiplied_alpha_fragment:lf,project_vertex:df,dithering_fragment:hf,dithering_pars_fragment:uf,roughnessmap_fragment:ff,roughnessmap_pars_fragment:pf,shadowmap_pars_fragment:mf,shadowmap_pars_vertex:gf,shadowmap_vertex:_f,shadowmask_pars_fragment:vf,skinbase_vertex:Sf,skinning_pars_vertex:yf,skinning_vertex:xf,skinnormal_vertex:bf,specularmap_fragment:Mf,specularmap_pars_fragment:Tf,tonemapping_fragment:Ef,tonemapping_pars_fragment:Cf,transmission_fragment:Af,transmission_pars_fragment:Rf,uv_pars_fragment:wf,uv_pars_vertex:Pf,uv_vertex:If,worldpos_vertex:Df,background_vert:Lf,background_frag:Of,backgroundCube_vert:Uf,backgroundCube_frag:Nf,cube_vert:Ff,cube_frag:kf,depth_vert:Bf,depth_frag:zf,distanceRGBA_vert:Hf,distanceRGBA_frag:Vf,equirect_vert:Gf,equirect_frag:Wf,linedashed_vert:$f,linedashed_frag:Xf,meshbasic_vert:qf,meshbasic_frag:Yf,meshlambert_vert:jf,meshlambert_frag:Kf,meshmatcap_vert:Zf,meshmatcap_frag:Jf,meshnormal_vert:Qf,meshnormal_frag:ep,meshphong_vert:tp,meshphong_frag:np,meshphysical_vert:ip,meshphysical_frag:sp,meshtoon_vert:rp,meshtoon_frag:ap,points_vert:op,points_frag:cp,shadow_vert:lp,shadow_frag:dp,sprite_vert:hp,sprite_frag:up},te={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},en={basic:{uniforms:Rt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Rt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ge(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Rt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Rt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Rt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Ge(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Rt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Rt([te.points,te.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Rt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Rt([te.common,te.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Rt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Rt([te.sprite,te.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Rt([te.common,te.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Rt([te.lights,te.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};en.physical={uniforms:Rt([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const xs={r:0,b:0,g:0},Gn=new nn,fp=new rt;function pp(s,e,t,n,i,r,a){const o=new Ge(0);let c=r===!0?0:1,l,d,h=null,u=0,f=null;function g(b){let T=b.isScene===!0?b.background:null;return T&&T.isTexture&&(T=(b.backgroundBlurriness>0?t:e).get(T)),T}function _(b){let T=!1;const x=g(b);x===null?p(o,c):x&&x.isColor&&(p(x,1),T=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,T){const x=g(T);x&&(x.isCubeTexture||x.mapping===Vs)?(d===void 0&&(d=new qe(new _n(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Ai(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(U,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),Gn.copy(T.backgroundRotation),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(fp.makeRotationFromEuler(Gn)),d.material.toneMapped=Ve.getTransfer(x.colorSpace)!==je,(h!==x||u!==x.version||f!==s.toneMapping)&&(d.material.needsUpdate=!0,h=x,u=x.version,f=s.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new qe(new fn(2,2),new Un({name:"BackgroundMaterial",uniforms:Ai(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Ve.getTransfer(x.colorSpace)!==je,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,f=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,T){b.getRGB(xs,Al(s)),n.buffers.color.setClear(xs.r,xs.g,xs.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(b,T=1){o.set(b),c=T,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(o,c)},render:_,addToRenderList:m}}function mp(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(S,R,z,B,G){let j=!1;const W=h(B,z,R);r!==W&&(r=W,l(r.object)),j=f(S,B,z,G),j&&g(S,B,z,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,x(S,R,z,B),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return s.createVertexArray()}function l(S){return s.bindVertexArray(S)}function d(S){return s.deleteVertexArray(S)}function h(S,R,z){const B=z.wireframe===!0;let G=n[S.id];G===void 0&&(G={},n[S.id]=G);let j=G[R.id];j===void 0&&(j={},G[R.id]=j);let W=j[B];return W===void 0&&(W=u(c()),j[B]=W),W}function u(S){const R=[],z=[],B=[];for(let G=0;G<t;G++)R[G]=0,z[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:B,object:S,attributes:{},index:null}}function f(S,R,z,B){const G=r.attributes,j=R.attributes;let W=0;const Q=z.getAttributes();for(const V in Q)if(Q[V].location>=0){const le=G[V];let ye=j[V];if(ye===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ye=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ye=S.instanceColor)),le===void 0||le.attribute!==ye||ye&&le.data!==ye.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function g(S,R,z,B){const G={},j=R.attributes;let W=0;const Q=z.getAttributes();for(const V in Q)if(Q[V].location>=0){let le=j[V];le===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(le=S.instanceColor));const ye={};ye.attribute=le,le&&le.data&&(ye.data=le.data),G[V]=ye,W++}r.attributes=G,r.attributesNum=W,r.index=B}function _(){const S=r.newAttributes;for(let R=0,z=S.length;R<z;R++)S[R]=0}function m(S){p(S,0)}function p(S,R){const z=r.newAttributes,B=r.enabledAttributes,G=r.attributeDivisors;z[S]=1,B[S]===0&&(s.enableVertexAttribArray(S),B[S]=1),G[S]!==R&&(s.vertexAttribDivisor(S,R),G[S]=R)}function b(){const S=r.newAttributes,R=r.enabledAttributes;for(let z=0,B=R.length;z<B;z++)R[z]!==S[z]&&(s.disableVertexAttribArray(z),R[z]=0)}function T(S,R,z,B,G,j,W){W===!0?s.vertexAttribIPointer(S,R,z,G,j):s.vertexAttribPointer(S,R,z,B,G,j)}function x(S,R,z,B){_();const G=B.attributes,j=z.getAttributes(),W=R.defaultAttributeValues;for(const Q in j){const V=j[Q];if(V.location>=0){let ie=G[Q];if(ie===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),ie!==void 0){const le=ie.normalized,ye=ie.itemSize,Le=e.get(ie);if(Le===void 0)continue;const Ze=Le.buffer,X=Le.type,ee=Le.bytesPerElement,_e=X===s.INT||X===s.UNSIGNED_INT||ie.gpuType===Pa;if(ie.isInterleavedBufferAttribute){const se=ie.data,Te=se.stride,Ae=ie.offset;if(se.isInstancedInterleavedBuffer){for(let Oe=0;Oe<V.locationSize;Oe++)p(V.location+Oe,se.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Oe=0;Oe<V.locationSize;Oe++)m(V.location+Oe);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let Oe=0;Oe<V.locationSize;Oe++)T(V.location+Oe,ye/V.locationSize,X,le,Te*ee,(Ae+ye/V.locationSize*Oe)*ee,_e)}else{if(ie.isInstancedBufferAttribute){for(let se=0;se<V.locationSize;se++)p(V.location+se,ie.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let se=0;se<V.locationSize;se++)m(V.location+se);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let se=0;se<V.locationSize;se++)T(V.location+se,ye/V.locationSize,X,le,ye*ee,ye/V.locationSize*se*ee,_e)}}else if(W!==void 0){const le=W[Q];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(V.location,le);break;case 3:s.vertexAttrib3fv(V.location,le);break;case 4:s.vertexAttrib4fv(V.location,le);break;default:s.vertexAttrib1fv(V.location,le)}}}}b()}function U(){w();for(const S in n){const R=n[S];for(const z in R){const B=R[z];for(const G in B)d(B[G].object),delete B[G];delete R[z]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;const R=n[S.id];for(const z in R){const B=R[z];for(const G in B)d(B[G].object),delete B[G];delete R[z]}delete n[S.id]}function A(S){for(const R in n){const z=n[R];if(z[S.id]===void 0)continue;const B=z[S.id];for(const G in B)d(B[G].object),delete B[G];delete z[S.id]}}function w(){M(),a=!0,r!==i&&(r=i,l(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:M,dispose:U,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function gp(s,e,t){let n;function i(l){n=l}function r(l,d){s.drawArrays(n,l,d),t.update(d,n,1)}function a(l,d,h){h!==0&&(s.drawArraysInstanced(n,l,d,h),t.update(d,n,h))}function o(l,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,h);let f=0;for(let g=0;g<h;g++)f+=d[g];t.update(f,n,1)}function c(l,d,h,u){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],d[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,d,0,u,0,h);let g=0;for(let _=0;_<h;_++)g+=d[_]*u[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function _p(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Kt&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const w=A===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Sn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==mn&&!w)}function c(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:x,vertexTextures:U,maxSamples:C}}function vp(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new $n,o=new Pe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||n!==0||i;return i=u,n=h.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?d(null):l();else{const b=r?0:n,T=b*4;let x=p.clippingState||null;c.value=x,x=d(g,u,T,f);for(let U=0;U!==T;++U)x[U]=t[U];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,x=f;T!==_;++T,x+=4)a.copy(h[T]).applyMatrix4(b,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Sp(s){let e=new WeakMap;function t(a,o){return o===$r?a.mapping=Mi:o===Xr&&(a.mapping=Ti),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===$r||o===Xr)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new wh(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Il extends Rl{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gi=4,zo=[.125,.215,.35,.446,.526,.582],Yn=20,vr=new Il,Ho=new Ge;let Sr=null,yr=0,xr=0,br=!1;const Xn=(1+Math.sqrt(5))/2,mi=1/Xn,Vo=[new O(-Xn,mi,0),new O(Xn,mi,0),new O(-mi,0,Xn),new O(mi,0,Xn),new O(0,Xn,-mi),new O(0,Xn,mi),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Go{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Sr=this._renderer.getRenderTarget(),yr=this._renderer.getActiveCubeFace(),xr=this._renderer.getActiveMipmapLevel(),br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$o(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sr,yr,xr),this._renderer.xr.enabled=br,e.scissorTest=!1,bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===Ti?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sr=this._renderer.getRenderTarget(),yr=this._renderer.getActiveCubeFace(),xr=this._renderer.getActiveMipmapLevel(),br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Ki,format:Kt,colorSpace:Ri,depthBuffer:!1},i=Wo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yp(r)),this._blurMaterial=xp(r,e,t)}return i}_compileMaterial(e){const t=new qe(this._lodPlanes[0],e);this._renderer.compile(t,vr)}_sceneToCubeUV(e,t,n,i){const o=new Bt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(Ho),d.toneMapping=Ln,d.autoClear=!1;const f=new xt({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),g=new qe(new _n,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Ho),_=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):b===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const T=this._cubeSize;bs(i,b*T,p>2?T:0,T,T),d.setRenderTarget(i),_&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Mi||e.mapping===Ti;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$o());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new qe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;bs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,vr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Vo[(i-r-1)%Vo.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new qe(this._lodPlanes[i],l),u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Yn-1),_=r/g,m=isFinite(r)?1+Math.floor(d*_):Yn;m>Yn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yn}`);const p=[];let b=0;for(let A=0;A<Yn;++A){const w=A/_,M=Math.exp(-w*w/2);p.push(M),A===0?b+=M:A<m&&(b+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:T}=this;u.dTheta.value=g,u.mipInt.value=T-n;const x=this._sizeLods[i],U=3*x*(i>T-gi?i-T+gi:0),C=4*(this._cubeSize-x);bs(t,U,C,3*x,2*x),c.setRenderTarget(t),c.render(h,vr)}}function yp(s){const e=[],t=[],n=[];let i=s;const r=s-gi+1+zo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-gi?c=zo[a-s+gi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),d=-l,h=1+l,u=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*f),T=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let C=0;C<f;C++){const A=C%3*2/3-1,w=C>2?0:-1,M=[A,w,0,A+2/3,w,0,A+2/3,w+1,0,A,w,0,A+2/3,w+1,0,A,w+1,0];b.set(M,_*g*C),T.set(u,m*g*C);const S=[C,C,C,C,C,C];x.set(S,p*g*C)}const U=new Gt;U.setAttribute("position",new Jt(b,_)),U.setAttribute("uv",new Jt(T,m)),U.setAttribute("faceIndex",new Jt(x,p)),e.push(U),i>gi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wo(s,e,t){const n=new Zn(s,e,t);return n.texture.mapping=Vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function xp(s,e,t){const n=new Float32Array(Yn),i=new O(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function $o(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Xo(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function ka(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bp(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===$r||c===Xr,d=c===Mi||c===Ti;if(l||d){let h=e.get(o);const u=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Go(s)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return l&&f&&f.height>0||d&&f&&i(f)?(t===null&&(t=new Go(s)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let c=0;const l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Mp(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Gi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Tp(s,e,t,n){const i={},r=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function c(h){const u=h.attributes;for(const g in u)e.update(u[g],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function l(h){const u=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let T=0,x=b.length;T<x;T+=3){const U=b[T+0],C=b[T+1],A=b[T+2];u.push(U,C,C,A,A,U)}}else if(g!==void 0){const b=g.array;_=g.version;for(let T=0,x=b.length/3-1;T<x;T+=3){const U=T+0,C=T+1,A=T+2;u.push(U,C,C,A,A,U)}}else return;const m=new(yl(u)?Cl:El)(u,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function d(h){const u=r.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:d}}function Ep(s,e,t){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,f){s.drawElements(n,f,r,u*a),t.update(f,n,1)}function l(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,u*a,g),t.update(f,n,g))}function d(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(u,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*_[b];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function Cp(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ap(s,e,t){const n=new WeakMap,i=new Ke;function r(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let M=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let T=0;f===!0&&(T=1),g===!0&&(T=2),_===!0&&(T=3);let x=o.attributes.position.count*T,U=1;x>e.maxTextureSize&&(U=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const C=new Float32Array(x*U*4*h),A=new bl(C,x,U,h);A.type=mn,A.needsUpdate=!0;const w=T*4;for(let S=0;S<h;S++){const R=m[S],z=p[S],B=b[S],G=x*U*4*S;for(let j=0;j<R.count;j++){const W=j*w;f===!0&&(i.fromBufferAttribute(R,j),C[G+W+0]=i.x,C[G+W+1]=i.y,C[G+W+2]=i.z,C[G+W+3]=0),g===!0&&(i.fromBufferAttribute(z,j),C[G+W+4]=i.x,C[G+W+5]=i.y,C[G+W+6]=i.z,C[G+W+7]=0),_===!0&&(i.fromBufferAttribute(B,j),C[G+W+8]=i.x,C[G+W+9]=i.y,C[G+W+10]=i.z,C[G+W+11]=B.itemSize===4?i.w:1)}}u={count:h,texture:A,size:new Ne(x,U)},n.set(o,u),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Rp(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,d=c.geometry,h=e.get(c,d);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return h}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class Dl extends Et{constructor(e,t,n,i,r,a,o,c,l,d=yi){if(d!==yi&&d!==Ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===yi&&(n=Kn),n===void 0&&d===Ci&&(n=Ei),super(null,i,r,a,o,c,d,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Zt,this.minFilter=c!==void 0?c:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ll=new Et,qo=new Dl(1,1),Ol=new bl,Ul=new uh,Nl=new wl,Yo=[],jo=[],Ko=new Float32Array(16),Zo=new Float32Array(9),Jo=new Float32Array(4);function Pi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Yo[i];if(r===void 0&&(r=new Float32Array(i),Yo[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function ht(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ut(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ws(s,e){let t=jo[e];t===void 0&&(t=new Int32Array(e),jo[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function wp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Pp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;s.uniform2fv(this.addr,e),ut(t,e)}}function Ip(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;s.uniform3fv(this.addr,e),ut(t,e)}}function Dp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;s.uniform4fv(this.addr,e),ut(t,e)}}function Lp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;Jo.set(n),s.uniformMatrix2fv(this.addr,!1,Jo),ut(t,n)}}function Op(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;Zo.set(n),s.uniformMatrix3fv(this.addr,!1,Zo),ut(t,n)}}function Up(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;Ko.set(n),s.uniformMatrix4fv(this.addr,!1,Ko),ut(t,n)}}function Np(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Fp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;s.uniform2iv(this.addr,e),ut(t,e)}}function kp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;s.uniform3iv(this.addr,e),ut(t,e)}}function Bp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;s.uniform4iv(this.addr,e),ut(t,e)}}function zp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Hp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;s.uniform2uiv(this.addr,e),ut(t,e)}}function Vp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;s.uniform3uiv(this.addr,e),ut(t,e)}}function Gp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;s.uniform4uiv(this.addr,e),ut(t,e)}}function Wp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(qo.compareFunction=Sl,r=qo):r=Ll,t.setTexture2D(e||r,i)}function $p(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ul,i)}function Xp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Nl,i)}function qp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ol,i)}function Yp(s){switch(s){case 5126:return wp;case 35664:return Pp;case 35665:return Ip;case 35666:return Dp;case 35674:return Lp;case 35675:return Op;case 35676:return Up;case 5124:case 35670:return Np;case 35667:case 35671:return Fp;case 35668:case 35672:return kp;case 35669:case 35673:return Bp;case 5125:return zp;case 36294:return Hp;case 36295:return Vp;case 36296:return Gp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return $p;case 35680:case 36300:case 36308:case 36293:return Xp;case 36289:case 36303:case 36311:case 36292:return qp}}function jp(s,e){s.uniform1fv(this.addr,e)}function Kp(s,e){const t=Pi(e,this.size,2);s.uniform2fv(this.addr,t)}function Zp(s,e){const t=Pi(e,this.size,3);s.uniform3fv(this.addr,t)}function Jp(s,e){const t=Pi(e,this.size,4);s.uniform4fv(this.addr,t)}function Qp(s,e){const t=Pi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function em(s,e){const t=Pi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function tm(s,e){const t=Pi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function nm(s,e){s.uniform1iv(this.addr,e)}function im(s,e){s.uniform2iv(this.addr,e)}function sm(s,e){s.uniform3iv(this.addr,e)}function rm(s,e){s.uniform4iv(this.addr,e)}function am(s,e){s.uniform1uiv(this.addr,e)}function om(s,e){s.uniform2uiv(this.addr,e)}function cm(s,e){s.uniform3uiv(this.addr,e)}function lm(s,e){s.uniform4uiv(this.addr,e)}function dm(s,e,t){const n=this.cache,i=e.length,r=Ws(t,i);ht(n,r)||(s.uniform1iv(this.addr,r),ut(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Ll,r[a])}function hm(s,e,t){const n=this.cache,i=e.length,r=Ws(t,i);ht(n,r)||(s.uniform1iv(this.addr,r),ut(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ul,r[a])}function um(s,e,t){const n=this.cache,i=e.length,r=Ws(t,i);ht(n,r)||(s.uniform1iv(this.addr,r),ut(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Nl,r[a])}function fm(s,e,t){const n=this.cache,i=e.length,r=Ws(t,i);ht(n,r)||(s.uniform1iv(this.addr,r),ut(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ol,r[a])}function pm(s){switch(s){case 5126:return jp;case 35664:return Kp;case 35665:return Zp;case 35666:return Jp;case 35674:return Qp;case 35675:return em;case 35676:return tm;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return sm;case 35669:case 35673:return rm;case 5125:return am;case 36294:return om;case 36295:return cm;case 36296:return lm;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return um;case 36289:case 36303:case 36311:case 36292:return fm}}class mm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yp(t.type)}}class gm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pm(t.type)}}class _m{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Mr=/(\w+)(\])?(\[|\.)?/g;function Qo(s,e){s.seq.push(e),s.map[e.id]=e}function vm(s,e,t){const n=s.name,i=n.length;for(Mr.lastIndex=0;;){const r=Mr.exec(n),a=Mr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Qo(t,l===void 0?new mm(o,s,e):new gm(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new _m(o),Qo(t,h)),t=h}}}class Us{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);vm(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function ec(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Sm=37297;let ym=0;function xm(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const tc=new Pe;function bm(s){Ve._getMatrix(tc,Ve.workingColorSpace,s);const e=`mat3( ${tc.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(s)){case Gs:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function nc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+xm(s.getShaderSource(e),a)}else return i}function Mm(s,e){const t=bm(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Tm(s,e){let t;switch(e){case Bd:t="Linear";break;case zd:t="Reinhard";break;case Hd:t="Cineon";break;case Vd:t="ACESFilmic";break;case Wd:t="AgX";break;case $d:t="Neutral";break;case Gd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ms=new O;function Em(){Ve.getLuminanceCoefficients(Ms);const s=Ms.x.toFixed(4),e=Ms.y.toFixed(4),t=Ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wi).join(`
`)}function Am(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rm(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Wi(s){return s!==""}function ic(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ba(s){return s.replace(wm,Im)}const Pm=new Map;function Im(s,e){let t=De[e];if(t===void 0){const n=Pm.get(e);if(n!==void 0)t=De[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ba(t)}const Dm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rc(s){return s.replace(Dm,Lm)}function Lm(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ac(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Om(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===rl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===vd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===hn&&(e="SHADOWMAP_TYPE_VSM"),e}function Um(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Mi:case Ti:e="ENVMAP_TYPE_CUBE";break;case Vs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Nm(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ti:e="ENVMAP_MODE_REFRACTION";break}return e}function Fm(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case al:e="ENVMAP_BLENDING_MULTIPLY";break;case Fd:e="ENVMAP_BLENDING_MIX";break;case kd:e="ENVMAP_BLENDING_ADD";break}return e}function km(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Bm(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Om(t),l=Um(t),d=Nm(t),h=Fm(t),u=km(t),f=Cm(t),g=Am(r),_=i.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wi).join(`
`),p.length>0&&(p+=`
`)):(m=[ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wi).join(`
`),p=[ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?De.tonemapping_pars_fragment:"",t.toneMapping!==Ln?Tm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,Mm("linearToOutputTexel",t.outputColorSpace),Em(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wi).join(`
`)),a=ba(a),a=ic(a,t),a=sc(a,t),o=ba(o),o=ic(o,t),o=sc(o,t),a=rc(a),o=rc(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===So?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===So?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=b+m+a,x=b+p+o,U=ec(i,i.VERTEX_SHADER,T),C=ec(i,i.FRAGMENT_SHADER,x);i.attachShader(_,U),i.attachShader(_,C),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(R){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(U).trim(),G=i.getShaderInfoLog(C).trim();let j=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,U,C);else{const Q=nc(i,U,"vertex"),V=nc(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+Q+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||G==="")&&(W=!1);W&&(R.diagnostics={runnable:j,programLog:z,vertexShader:{log:B,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(U),i.deleteShader(C),w=new Us(i,_),M=Rm(i,_)}let w;this.getUniforms=function(){return w===void 0&&A(this),w};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,Sm)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ym++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=C,this}let zm=0;class Hm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Vm(e),t.set(e,n)),n}}class Vm{constructor(e){this.id=zm++,this.code=e,this.usedTimes=0}}function Gm(s,e,t,n,i,r,a){const o=new Ml,c=new Hm,l=new Set,d=[],h=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,S,R,z,B){const G=z.fog,j=B.geometry,W=M.isMeshStandardMaterial?z.environment:null,Q=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),V=Q&&Q.mapping===Vs?Q.image.height:null,ie=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const le=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ye=le!==void 0?le.length:0;let Le=0;j.morphAttributes.position!==void 0&&(Le=1),j.morphAttributes.normal!==void 0&&(Le=2),j.morphAttributes.color!==void 0&&(Le=3);let Ze,X,ee,_e;if(ie){const Ye=en[ie];Ze=Ye.vertexShader,X=Ye.fragmentShader}else Ze=M.vertexShader,X=M.fragmentShader,c.update(M),ee=c.getVertexShaderID(M),_e=c.getFragmentShaderID(M);const se=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),Ae=B.isInstancedMesh===!0,Oe=B.isBatchedMesh===!0,st=!!M.map,ze=!!M.matcap,ot=!!Q,L=!!M.aoMap,zt=!!M.lightMap,Fe=!!M.bumpMap,ke=!!M.normalMap,be=!!M.displacementMap,tt=!!M.emissiveMap,xe=!!M.metalnessMap,E=!!M.roughnessMap,v=M.anisotropy>0,N=M.clearcoat>0,q=M.dispersion>0,K=M.iridescence>0,$=M.sheen>0,ve=M.transmission>0,re=v&&!!M.anisotropyMap,de=N&&!!M.clearcoatMap,He=N&&!!M.clearcoatNormalMap,Z=N&&!!M.clearcoatRoughnessMap,he=K&&!!M.iridescenceMap,Me=K&&!!M.iridescenceThicknessMap,Ee=$&&!!M.sheenColorMap,ue=$&&!!M.sheenRoughnessMap,Be=!!M.specularMap,Ie=!!M.specularColorMap,Je=!!M.specularIntensityMap,P=ve&&!!M.transmissionMap,ne=ve&&!!M.thicknessMap,H=!!M.gradientMap,Y=!!M.alphaMap,ce=M.alphaTest>0,ae=!!M.alphaHash,Re=!!M.extensions;let at=Ln;M.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(at=s.toneMapping);const vt={shaderID:ie,shaderType:M.type,shaderName:M.name,vertexShader:Ze,fragmentShader:X,defines:M.defines,customVertexShaderID:ee,customFragmentShaderID:_e,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Oe,batchingColor:Oe&&B._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&B.instanceColor!==null,instancingMorph:Ae&&B.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:se===null?s.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ri,alphaToCoverage:!!M.alphaToCoverage,map:st,matcap:ze,envMap:ot,envMapMode:ot&&Q.mapping,envMapCubeUVHeight:V,aoMap:L,lightMap:zt,bumpMap:Fe,normalMap:ke,displacementMap:u&&be,emissiveMap:tt,normalMapObjectSpace:ke&&M.normalMapType===jd,normalMapTangentSpace:ke&&M.normalMapType===vl,metalnessMap:xe,roughnessMap:E,anisotropy:v,anisotropyMap:re,clearcoat:N,clearcoatMap:de,clearcoatNormalMap:He,clearcoatRoughnessMap:Z,dispersion:q,iridescence:K,iridescenceMap:he,iridescenceThicknessMap:Me,sheen:$,sheenColorMap:Ee,sheenRoughnessMap:ue,specularMap:Be,specularColorMap:Ie,specularIntensityMap:Je,transmission:ve,transmissionMap:P,thicknessMap:ne,gradientMap:H,opaque:M.transparent===!1&&M.blending===Si&&M.alphaToCoverage===!1,alphaMap:Y,alphaTest:ce,alphaHash:ae,combine:M.combine,mapUv:st&&_(M.map.channel),aoMapUv:L&&_(M.aoMap.channel),lightMapUv:zt&&_(M.lightMap.channel),bumpMapUv:Fe&&_(M.bumpMap.channel),normalMapUv:ke&&_(M.normalMap.channel),displacementMapUv:be&&_(M.displacementMap.channel),emissiveMapUv:tt&&_(M.emissiveMap.channel),metalnessMapUv:xe&&_(M.metalnessMap.channel),roughnessMapUv:E&&_(M.roughnessMap.channel),anisotropyMapUv:re&&_(M.anisotropyMap.channel),clearcoatMapUv:de&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:He&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ue&&_(M.sheenRoughnessMap.channel),specularMapUv:Be&&_(M.specularMap.channel),specularColorMapUv:Ie&&_(M.specularColorMap.channel),specularIntensityMapUv:Je&&_(M.specularIntensityMap.channel),transmissionMapUv:P&&_(M.transmissionMap.channel),thicknessMapUv:ne&&_(M.thicknessMap.channel),alphaMapUv:Y&&_(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ke||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!j.attributes.uv&&(st||Y),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Te,skinning:B.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Le,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:st&&M.map.isVideoTexture===!0&&Ve.getTransfer(M.map.colorSpace)===je,decodeVideoTextureEmissive:tt&&M.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(M.emissiveMap.colorSpace)===je,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===gt,flipSided:M.side===Ut,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Re&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&M.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return vt.vertexUv1s=l.has(1),vt.vertexUv2s=l.has(2),vt.vertexUv3s=l.has(3),l.clear(),vt}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)S.push(R),S.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(b(S,M),T(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function b(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function T(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){const S=g[M.type];let R;if(S){const z=en[S];R=Eh.clone(z.uniforms)}else R=M.uniforms;return R}function U(M,S){let R;for(let z=0,B=d.length;z<B;z++){const G=d[z];if(G.cacheKey===S){R=G,++R.usedTimes;break}}return R===void 0&&(R=new Bm(s,S,M,r),d.push(R)),R}function C(M){if(--M.usedTimes===0){const S=d.indexOf(M);d[S]=d[d.length-1],d.pop(),M.destroy()}}function A(M){c.remove(M)}function w(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:U,releaseProgram:C,releaseShaderCache:A,programs:d,dispose:w}}function Wm(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function $m(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function oc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function cc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,u,f,g,_,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:u,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,u,f,g,_,m){const p=a(h,u,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(h,u,f,g,_,m){const p=a(h,u,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,u){t.length>1&&t.sort(h||$m),n.length>1&&n.sort(u||oc),i.length>1&&i.sort(u||oc)}function d(){for(let h=e,u=s.length;h<u;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:d,sort:l}}function Xm(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new cc,s.set(n,[a])):i>=r.length?(a=new cc,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function qm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ge};break;case"SpotLight":t={position:new O,direction:new O,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new O,halfWidth:new O,halfHeight:new O};break}return s[e.id]=t,t}}}function Ym(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let jm=0;function Km(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Zm(s){const e=new qm,t=Ym(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);const i=new O,r=new rt,a=new rt;function o(l){let d=0,h=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,T=0,x=0,U=0,C=0,A=0;l.sort(Km);for(let M=0,S=l.length;M<S;M++){const R=l[M],z=R.color,B=R.intensity,G=R.distance,j=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=z.r*B,h+=z.g*B,u+=z.b*B;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],B);A++}else if(R.isDirectionalLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Q=R.shadow,V=t.get(R);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=R.shadow.matrix,b++}n.directional[f]=W,f++}else if(R.isSpotLight){const W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(z).multiplyScalar(B),W.distance=G,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[_]=W;const Q=R.shadow;if(R.map&&(n.spotLightMap[U]=R.map,U++,Q.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[_]=Q.matrix,R.castShadow){const V=t.get(R);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=j,x++}_++}else if(R.isRectAreaLight){const W=e.get(R);W.color.copy(z).multiplyScalar(B),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=W,m++}else if(R.isPointLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const Q=R.shadow,V=t.get(R);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=R.shadow.matrix,T++}n.point[g]=W,g++}else if(R.isHemisphereLight){const W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(B),W.groundColor.copy(R.groundColor).multiplyScalar(B),n.hemi[p]=W,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=te.LTC_FLOAT_1,n.rectAreaLTC2=te.LTC_FLOAT_2):(n.rectAreaLTC1=te.LTC_HALF_1,n.rectAreaLTC2=te.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const w=n.hash;(w.directionalLength!==f||w.pointLength!==g||w.spotLength!==_||w.rectAreaLength!==m||w.hemiLength!==p||w.numDirectionalShadows!==b||w.numPointShadows!==T||w.numSpotShadows!==x||w.numSpotMaps!==U||w.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=x+U-C,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,w.directionalLength=f,w.pointLength=g,w.spotLength=_,w.rectAreaLength=m,w.hemiLength=p,w.numDirectionalShadows=b,w.numPointShadows=T,w.numSpotShadows=x,w.numSpotMaps=U,w.numLightProbes=A,n.version=jm++)}function c(l,d){let h=0,u=0,f=0,g=0,_=0;const m=d.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){const T=l[p];if(T.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(T.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(T.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(T.width*.5,0,0),x.halfHeight.set(0,T.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),u++}else if(T.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(T.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function lc(s){const e=new Zm(s),t=[],n=[];function i(d){l.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Jm(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new lc(s),e.set(i,[o])):r>=a.length?(o=new lc(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Qm extends es{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=qd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eg extends es{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ng=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ig(s,e,t){let n=new Fa;const i=new Ne,r=new Ne,a=new Ke,o=new Qm({depthPacking:Yd}),c=new eg,l={},d=t.maxTextureSize,h={[On]:Ut,[Ut]:On,[gt]:gt},u=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:tg,fragmentShader:ng}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Gt;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new qe(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rl;let p=this.type;this.render=function(C,A,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const M=s.getRenderTarget(),S=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Dn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=p!==hn&&this.type===hn,G=p===hn&&this.type!==hn;for(let j=0,W=C.length;j<W;j++){const Q=C[j],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ie=V.getFrameExtents();if(i.multiply(ie),r.copy(V.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/ie.x),i.x=r.x*ie.x,V.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/ie.y),i.y=r.y*ie.y,V.mapSize.y=r.y)),V.map===null||B===!0||G===!0){const ye=this.type!==hn?{minFilter:Zt,magFilter:Zt}:{};V.map!==null&&V.map.dispose(),V.map=new Zn(i.x,i.y,ye),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const le=V.getViewportCount();for(let ye=0;ye<le;ye++){const Le=V.getViewport(ye);a.set(r.x*Le.x,r.y*Le.y,r.x*Le.z,r.y*Le.w),z.viewport(a),V.updateMatrices(Q,ye),n=V.getFrustum(),x(A,w,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===hn&&b(V,w),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,S,R)};function b(C,A){const w=e.update(_);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Zn(i.x,i.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(A,null,w,u,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(A,null,w,f,_,null)}function T(C,A,w,M){let S=null;const R=w.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)S=R;else if(S=w.isPointLight===!0?c:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=S.uuid,B=A.uuid;let G=l[z];G===void 0&&(G={},l[z]=G);let j=G[B];j===void 0&&(j=S.clone(),G[B]=j,A.addEventListener("dispose",U)),S=j}if(S.visible=A.visible,S.wireframe=A.wireframe,M===hn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=s.properties.get(S);z.light=w}return S}function x(C,A,w,M,S){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===hn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,C.matrixWorld);const B=e.update(C),G=C.material;if(Array.isArray(G)){const j=B.groups;for(let W=0,Q=j.length;W<Q;W++){const V=j[W],ie=G[V.materialIndex];if(ie&&ie.visible){const le=T(C,ie,M,S);C.onBeforeShadow(s,C,A,w,B,le,V),s.renderBufferDirect(w,null,B,le,C,V),C.onAfterShadow(s,C,A,w,B,le,V)}}}else if(G.visible){const j=T(C,G,M,S);C.onBeforeShadow(s,C,A,w,B,j,null),s.renderBufferDirect(w,null,B,j,C,null),C.onAfterShadow(s,C,A,w,B,j,null)}}const z=C.children;for(let B=0,G=z.length;B<G;B++)x(z[B],A,w,M,S)}function U(C){C.target.removeEventListener("dispose",U);for(const w in l){const M=l[w],S=C.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const sg={[kr]:Br,[zr]:Gr,[Hr]:Wr,[bi]:Vr,[Br]:kr,[Gr]:zr,[Wr]:Hr,[Vr]:bi};function rg(s,e){function t(){let P=!1;const ne=new Ke;let H=null;const Y=new Ke(0,0,0,0);return{setMask:function(ce){H!==ce&&!P&&(s.colorMask(ce,ce,ce,ce),H=ce)},setLocked:function(ce){P=ce},setClear:function(ce,ae,Re,at,vt){vt===!0&&(ce*=at,ae*=at,Re*=at),ne.set(ce,ae,Re,at),Y.equals(ne)===!1&&(s.clearColor(ce,ae,Re,at),Y.copy(ne))},reset:function(){P=!1,H=null,Y.set(-1,0,0,0)}}}function n(){let P=!1,ne=!1,H=null,Y=null,ce=null;return{setReversed:function(ae){if(ne!==ae){const Re=e.get("EXT_clip_control");ne?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT);const at=ce;ce=null,this.setClear(at)}ne=ae},getReversed:function(){return ne},setTest:function(ae){ae?se(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(ae){H!==ae&&!P&&(s.depthMask(ae),H=ae)},setFunc:function(ae){if(ne&&(ae=sg[ae]),Y!==ae){switch(ae){case kr:s.depthFunc(s.NEVER);break;case Br:s.depthFunc(s.ALWAYS);break;case zr:s.depthFunc(s.LESS);break;case bi:s.depthFunc(s.LEQUAL);break;case Hr:s.depthFunc(s.EQUAL);break;case Vr:s.depthFunc(s.GEQUAL);break;case Gr:s.depthFunc(s.GREATER);break;case Wr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Y=ae}},setLocked:function(ae){P=ae},setClear:function(ae){ce!==ae&&(ne&&(ae=1-ae),s.clearDepth(ae),ce=ae)},reset:function(){P=!1,H=null,Y=null,ce=null,ne=!1}}}function i(){let P=!1,ne=null,H=null,Y=null,ce=null,ae=null,Re=null,at=null,vt=null;return{setTest:function(Ye){P||(Ye?se(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(Ye){ne!==Ye&&!P&&(s.stencilMask(Ye),ne=Ye)},setFunc:function(Ye,Wt,sn){(H!==Ye||Y!==Wt||ce!==sn)&&(s.stencilFunc(Ye,Wt,sn),H=Ye,Y=Wt,ce=sn)},setOp:function(Ye,Wt,sn){(ae!==Ye||Re!==Wt||at!==sn)&&(s.stencilOp(Ye,Wt,sn),ae=Ye,Re=Wt,at=sn)},setLocked:function(Ye){P=Ye},setClear:function(Ye){vt!==Ye&&(s.clearStencil(Ye),vt=Ye)},reset:function(){P=!1,ne=null,H=null,Y=null,ce=null,ae=null,Re=null,at=null,vt=null}}}const r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let d={},h={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,T=null,x=null,U=null,C=null,A=new Ge(0,0,0),w=0,M=!1,S=null,R=null,z=null,B=null,G=null;const j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Q=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=Q>=2);let ie=null,le={};const ye=s.getParameter(s.SCISSOR_BOX),Le=s.getParameter(s.VIEWPORT),Ze=new Ke().fromArray(ye),X=new Ke().fromArray(Le);function ee(P,ne,H,Y){const ce=new Uint8Array(4),ae=s.createTexture();s.bindTexture(P,ae),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Re=0;Re<H;Re++)P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY?s.texImage3D(ne,0,s.RGBA,1,1,Y,0,s.RGBA,s.UNSIGNED_BYTE,ce):s.texImage2D(ne+Re,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ce);return ae}const _e={};_e[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),_e[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_e[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(s.DEPTH_TEST),a.setFunc(bi),Fe(!1),ke(fo),se(s.CULL_FACE),L(Dn);function se(P){d[P]!==!0&&(s.enable(P),d[P]=!0)}function Te(P){d[P]!==!1&&(s.disable(P),d[P]=!1)}function Ae(P,ne){return h[P]!==ne?(s.bindFramebuffer(P,ne),h[P]=ne,P===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ne),P===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ne),!0):!1}function Oe(P,ne){let H=f,Y=!1;if(P){H=u.get(ne),H===void 0&&(H=[],u.set(ne,H));const ce=P.textures;if(H.length!==ce.length||H[0]!==s.COLOR_ATTACHMENT0){for(let ae=0,Re=ce.length;ae<Re;ae++)H[ae]=s.COLOR_ATTACHMENT0+ae;H.length=ce.length,Y=!0}}else H[0]!==s.BACK&&(H[0]=s.BACK,Y=!0);Y&&s.drawBuffers(H)}function st(P){return g!==P?(s.useProgram(P),g=P,!0):!1}const ze={[qn]:s.FUNC_ADD,[yd]:s.FUNC_SUBTRACT,[xd]:s.FUNC_REVERSE_SUBTRACT};ze[bd]=s.MIN,ze[Md]=s.MAX;const ot={[Td]:s.ZERO,[Ed]:s.ONE,[Cd]:s.SRC_COLOR,[Nr]:s.SRC_ALPHA,[Dd]:s.SRC_ALPHA_SATURATE,[Pd]:s.DST_COLOR,[Rd]:s.DST_ALPHA,[Ad]:s.ONE_MINUS_SRC_COLOR,[Fr]:s.ONE_MINUS_SRC_ALPHA,[Id]:s.ONE_MINUS_DST_COLOR,[wd]:s.ONE_MINUS_DST_ALPHA,[Ld]:s.CONSTANT_COLOR,[Od]:s.ONE_MINUS_CONSTANT_COLOR,[Ud]:s.CONSTANT_ALPHA,[Nd]:s.ONE_MINUS_CONSTANT_ALPHA};function L(P,ne,H,Y,ce,ae,Re,at,vt,Ye){if(P===Dn){_===!0&&(Te(s.BLEND),_=!1);return}if(_===!1&&(se(s.BLEND),_=!0),P!==Sd){if(P!==m||Ye!==M){if((p!==qn||x!==qn)&&(s.blendEquation(s.FUNC_ADD),p=qn,x=qn),Ye)switch(P){case Si:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case po:s.blendFunc(s.ONE,s.ONE);break;case mo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case go:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Si:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case po:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case mo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case go:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,T=null,U=null,C=null,A.set(0,0,0),w=0,m=P,M=Ye}return}ce=ce||ne,ae=ae||H,Re=Re||Y,(ne!==p||ce!==x)&&(s.blendEquationSeparate(ze[ne],ze[ce]),p=ne,x=ce),(H!==b||Y!==T||ae!==U||Re!==C)&&(s.blendFuncSeparate(ot[H],ot[Y],ot[ae],ot[Re]),b=H,T=Y,U=ae,C=Re),(at.equals(A)===!1||vt!==w)&&(s.blendColor(at.r,at.g,at.b,vt),A.copy(at),w=vt),m=P,M=!1}function zt(P,ne){P.side===gt?Te(s.CULL_FACE):se(s.CULL_FACE);let H=P.side===Ut;ne&&(H=!H),Fe(H),P.blending===Si&&P.transparent===!1?L(Dn):L(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const Y=P.stencilWrite;o.setTest(Y),Y&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),tt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?se(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(P){S!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),S=P)}function ke(P){P!==gd?(se(s.CULL_FACE),P!==R&&(P===fo?s.cullFace(s.BACK):P===_d?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),R=P}function be(P){P!==z&&(W&&s.lineWidth(P),z=P)}function tt(P,ne,H){P?(se(s.POLYGON_OFFSET_FILL),(B!==ne||G!==H)&&(s.polygonOffset(ne,H),B=ne,G=H)):Te(s.POLYGON_OFFSET_FILL)}function xe(P){P?se(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function E(P){P===void 0&&(P=s.TEXTURE0+j-1),ie!==P&&(s.activeTexture(P),ie=P)}function v(P,ne,H){H===void 0&&(ie===null?H=s.TEXTURE0+j-1:H=ie);let Y=le[H];Y===void 0&&(Y={type:void 0,texture:void 0},le[H]=Y),(Y.type!==P||Y.texture!==ne)&&(ie!==H&&(s.activeTexture(H),ie=H),s.bindTexture(P,ne||_e[P]),Y.type=P,Y.texture=ne)}function N(){const P=le[ie];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function He(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(P){Ze.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),Ze.copy(P))}function ue(P){X.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),X.copy(P))}function Be(P,ne){let H=l.get(ne);H===void 0&&(H=new WeakMap,l.set(ne,H));let Y=H.get(P);Y===void 0&&(Y=s.getUniformBlockIndex(ne,P.name),H.set(P,Y))}function Ie(P,ne){const Y=l.get(ne).get(P);c.get(ne)!==Y&&(s.uniformBlockBinding(ne,Y,P.__bindingPointIndex),c.set(ne,Y))}function Je(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},ie=null,le={},h={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,T=null,x=null,U=null,C=null,A=new Ge(0,0,0),w=0,M=!1,S=null,R=null,z=null,B=null,G=null,Ze.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:Te,bindFramebuffer:Ae,drawBuffers:Oe,useProgram:st,setBlending:L,setMaterial:zt,setFlipSided:Fe,setCullFace:ke,setLineWidth:be,setPolygonOffset:tt,setScissorTest:xe,activeTexture:E,bindTexture:v,unbindTexture:N,compressedTexImage2D:q,compressedTexImage3D:K,texImage2D:he,texImage3D:Me,updateUBOMapping:Be,uniformBlockBinding:Ie,texStorage2D:He,texStorage3D:Z,texSubImage2D:$,texSubImage3D:ve,compressedTexSubImage2D:re,compressedTexSubImage3D:de,scissor:Ee,viewport:ue,reset:Je}}function dc(s,e,t,n){const i=ag(n);switch(t){case hl:return s*e;case fl:return s*e;case pl:return s*e*2;case ml:return s*e/i.components*i.byteLength;case La:return s*e/i.components*i.byteLength;case gl:return s*e*2/i.components*i.byteLength;case Oa:return s*e*2/i.components*i.byteLength;case ul:return s*e*3/i.components*i.byteLength;case Kt:return s*e*4/i.components*i.byteLength;case Ua:return s*e*4/i.components*i.byteLength;case Ps:case Is:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ds:case Ls:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kr:case Jr:return Math.max(s,16)*Math.max(e,8)/4;case jr:case Zr:return Math.max(s,8)*Math.max(e,8)/2;case Qr:case ea:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ta:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case na:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ia:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case sa:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ra:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case aa:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case oa:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ca:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case la:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case da:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ha:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ua:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case fa:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case pa:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ma:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Os:case ga:case _a:return Math.ceil(s/4)*Math.ceil(e/4)*16;case _l:case va:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Sa:case ya:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ag(s){switch(s){case Sn:case cl:return{byteLength:1,components:1};case Yi:case ll:case Ki:return{byteLength:2,components:1};case Ia:case Da:return{byteLength:2,components:4};case Kn:case Pa:case mn:return{byteLength:4,components:1};case dl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function og(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ne,d=new WeakMap;let h;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return f?new OffscreenCanvas(E,v):ji("canvas")}function _(E,v,N){let q=1;const K=xe(E);if((K.width>N||K.height>N)&&(q=N/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const $=Math.floor(q*K.width),ve=Math.floor(q*K.height);h===void 0&&(h=g($,ve));const re=v?g($,ve):h;return re.width=$,re.height=ve,re.getContext("2d").drawImage(E,0,0,$,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+$+"x"+ve+")."),re}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){s.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(E,v,N,q,K=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let $=v;if(v===s.RED&&(N===s.FLOAT&&($=s.R32F),N===s.HALF_FLOAT&&($=s.R16F),N===s.UNSIGNED_BYTE&&($=s.R8)),v===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&($=s.R8UI),N===s.UNSIGNED_SHORT&&($=s.R16UI),N===s.UNSIGNED_INT&&($=s.R32UI),N===s.BYTE&&($=s.R8I),N===s.SHORT&&($=s.R16I),N===s.INT&&($=s.R32I)),v===s.RG&&(N===s.FLOAT&&($=s.RG32F),N===s.HALF_FLOAT&&($=s.RG16F),N===s.UNSIGNED_BYTE&&($=s.RG8)),v===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&($=s.RG8UI),N===s.UNSIGNED_SHORT&&($=s.RG16UI),N===s.UNSIGNED_INT&&($=s.RG32UI),N===s.BYTE&&($=s.RG8I),N===s.SHORT&&($=s.RG16I),N===s.INT&&($=s.RG32I)),v===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&($=s.RGB8UI),N===s.UNSIGNED_SHORT&&($=s.RGB16UI),N===s.UNSIGNED_INT&&($=s.RGB32UI),N===s.BYTE&&($=s.RGB8I),N===s.SHORT&&($=s.RGB16I),N===s.INT&&($=s.RGB32I)),v===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&($=s.RGBA8UI),N===s.UNSIGNED_SHORT&&($=s.RGBA16UI),N===s.UNSIGNED_INT&&($=s.RGBA32UI),N===s.BYTE&&($=s.RGBA8I),N===s.SHORT&&($=s.RGBA16I),N===s.INT&&($=s.RGBA32I)),v===s.RGB&&N===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),v===s.RGBA){const ve=K?Gs:Ve.getTransfer(q);N===s.FLOAT&&($=s.RGBA32F),N===s.HALF_FLOAT&&($=s.RGBA16F),N===s.UNSIGNED_BYTE&&($=ve===je?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(E,v){let N;return E?v===null||v===Kn||v===Ei?N=s.DEPTH24_STENCIL8:v===mn?N=s.DEPTH32F_STENCIL8:v===Yi&&(N=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Kn||v===Ei?N=s.DEPTH_COMPONENT24:v===mn?N=s.DEPTH_COMPONENT32F:v===Yi&&(N=s.DEPTH_COMPONENT16),N}function U(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Zt&&E.minFilter!==Ot?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function C(E){const v=E.target;v.removeEventListener("dispose",C),w(v),v.isVideoTexture&&d.delete(v)}function A(E){const v=E.target;v.removeEventListener("dispose",A),S(v)}function w(E){const v=n.get(E);if(v.__webglInit===void 0)return;const N=E.source,q=u.get(N);if(q){const K=q[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(E),Object.keys(q).length===0&&u.delete(N)}n.remove(E)}function M(E){const v=n.get(E);s.deleteTexture(v.__webglTexture);const N=E.source,q=u.get(N);delete q[v.__cacheKey],a.memory.textures--}function S(E){const v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let K=0;K<v.__webglFramebuffer[q].length;K++)s.deleteFramebuffer(v.__webglFramebuffer[q][K]);else s.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)s.deleteFramebuffer(v.__webglFramebuffer[q]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=E.textures;for(let q=0,K=N.length;q<K;q++){const $=n.get(N[q]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(N[q])}n.remove(E)}let R=0;function z(){R=0}function B(){const E=R;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),R+=1,E}function G(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function j(E,v){const N=n.get(E);if(E.isVideoTexture&&be(E),E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){const q=E.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(N,E,v);return}}t.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+v)}function W(E,v){const N=n.get(E);if(E.version>0&&N.__version!==E.version){X(N,E,v);return}t.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+v)}function Q(E,v){const N=n.get(E);if(E.version>0&&N.__version!==E.version){X(N,E,v);return}t.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+v)}function V(E,v){const N=n.get(E);if(E.version>0&&N.__version!==E.version){ee(N,E,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+v)}const ie={[qr]:s.REPEAT,[pn]:s.CLAMP_TO_EDGE,[Yr]:s.MIRRORED_REPEAT},le={[Zt]:s.NEAREST,[Xd]:s.NEAREST_MIPMAP_NEAREST,[is]:s.NEAREST_MIPMAP_LINEAR,[Ot]:s.LINEAR,[js]:s.LINEAR_MIPMAP_NEAREST,[jn]:s.LINEAR_MIPMAP_LINEAR},ye={[Kd]:s.NEVER,[nh]:s.ALWAYS,[Zd]:s.LESS,[Sl]:s.LEQUAL,[Jd]:s.EQUAL,[th]:s.GEQUAL,[Qd]:s.GREATER,[eh]:s.NOTEQUAL};function Le(E,v){if(v.type===mn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Ot||v.magFilter===js||v.magFilter===is||v.magFilter===jn||v.minFilter===Ot||v.minFilter===js||v.minFilter===is||v.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,ie[v.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,ie[v.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,ie[v.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,le[v.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,le[v.minFilter]),v.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,ye[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Zt||v.minFilter!==is&&v.minFilter!==jn||v.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");s.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ze(E,v){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",C));const q=v.source;let K=u.get(q);K===void 0&&(K={},u.set(q,K));const $=G(v);if($!==E.__cacheKey){K[$]===void 0&&(K[$]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,N=!0),K[$].usedTimes++;const ve=K[E.__cacheKey];ve!==void 0&&(K[E.__cacheKey].usedTimes--,ve.usedTimes===0&&M(v)),E.__cacheKey=$,E.__webglTexture=K[$].texture}return N}function X(E,v,N){let q=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=s.TEXTURE_3D);const K=Ze(E,v),$=v.source;t.bindTexture(q,E.__webglTexture,s.TEXTURE0+N);const ve=n.get($);if($.version!==ve.__version||K===!0){t.activeTexture(s.TEXTURE0+N);const re=Ve.getPrimaries(Ve.workingColorSpace),de=v.colorSpace===wn?null:Ve.getPrimaries(v.colorSpace),He=v.colorSpace===wn||re===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let Z=_(v.image,!1,i.maxTextureSize);Z=tt(v,Z);const he=r.convert(v.format,v.colorSpace),Me=r.convert(v.type);let Ee=T(v.internalFormat,he,Me,v.colorSpace,v.isVideoTexture);Le(q,v);let ue;const Be=v.mipmaps,Ie=v.isVideoTexture!==!0,Je=ve.__version===void 0||K===!0,P=$.dataReady,ne=U(v,Z);if(v.isDepthTexture)Ee=x(v.format===Ci,v.type),Je&&(Ie?t.texStorage2D(s.TEXTURE_2D,1,Ee,Z.width,Z.height):t.texImage2D(s.TEXTURE_2D,0,Ee,Z.width,Z.height,0,he,Me,null));else if(v.isDataTexture)if(Be.length>0){Ie&&Je&&t.texStorage2D(s.TEXTURE_2D,ne,Ee,Be[0].width,Be[0].height);for(let H=0,Y=Be.length;H<Y;H++)ue=Be[H],Ie?P&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,ue.width,ue.height,he,Me,ue.data):t.texImage2D(s.TEXTURE_2D,H,Ee,ue.width,ue.height,0,he,Me,ue.data);v.generateMipmaps=!1}else Ie?(Je&&t.texStorage2D(s.TEXTURE_2D,ne,Ee,Z.width,Z.height),P&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Z.width,Z.height,he,Me,Z.data)):t.texImage2D(s.TEXTURE_2D,0,Ee,Z.width,Z.height,0,he,Me,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ie&&Je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ne,Ee,Be[0].width,Be[0].height,Z.depth);for(let H=0,Y=Be.length;H<Y;H++)if(ue=Be[H],v.format!==Kt)if(he!==null)if(Ie){if(P)if(v.layerUpdates.size>0){const ce=dc(ue.width,ue.height,v.format,v.type);for(const ae of v.layerUpdates){const Re=ue.data.subarray(ae*ce/ue.data.BYTES_PER_ELEMENT,(ae+1)*ce/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,ae,ue.width,ue.height,1,he,Re)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,ue.width,ue.height,Z.depth,he,ue.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,H,Ee,ue.width,ue.height,Z.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?P&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,ue.width,ue.height,Z.depth,he,Me,ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,H,Ee,ue.width,ue.height,Z.depth,0,he,Me,ue.data)}else{Ie&&Je&&t.texStorage2D(s.TEXTURE_2D,ne,Ee,Be[0].width,Be[0].height);for(let H=0,Y=Be.length;H<Y;H++)ue=Be[H],v.format!==Kt?he!==null?Ie?P&&t.compressedTexSubImage2D(s.TEXTURE_2D,H,0,0,ue.width,ue.height,he,ue.data):t.compressedTexImage2D(s.TEXTURE_2D,H,Ee,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?P&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,ue.width,ue.height,he,Me,ue.data):t.texImage2D(s.TEXTURE_2D,H,Ee,ue.width,ue.height,0,he,Me,ue.data)}else if(v.isDataArrayTexture)if(Ie){if(Je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ne,Ee,Z.width,Z.height,Z.depth),P)if(v.layerUpdates.size>0){const H=dc(Z.width,Z.height,v.format,v.type);for(const Y of v.layerUpdates){const ce=Z.data.subarray(Y*H/Z.data.BYTES_PER_ELEMENT,(Y+1)*H/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Y,Z.width,Z.height,1,he,Me,ce)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,he,Me,Z.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ee,Z.width,Z.height,Z.depth,0,he,Me,Z.data);else if(v.isData3DTexture)Ie?(Je&&t.texStorage3D(s.TEXTURE_3D,ne,Ee,Z.width,Z.height,Z.depth),P&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,he,Me,Z.data)):t.texImage3D(s.TEXTURE_3D,0,Ee,Z.width,Z.height,Z.depth,0,he,Me,Z.data);else if(v.isFramebufferTexture){if(Je)if(Ie)t.texStorage2D(s.TEXTURE_2D,ne,Ee,Z.width,Z.height);else{let H=Z.width,Y=Z.height;for(let ce=0;ce<ne;ce++)t.texImage2D(s.TEXTURE_2D,ce,Ee,H,Y,0,he,Me,null),H>>=1,Y>>=1}}else if(Be.length>0){if(Ie&&Je){const H=xe(Be[0]);t.texStorage2D(s.TEXTURE_2D,ne,Ee,H.width,H.height)}for(let H=0,Y=Be.length;H<Y;H++)ue=Be[H],Ie?P&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,he,Me,ue):t.texImage2D(s.TEXTURE_2D,H,Ee,he,Me,ue);v.generateMipmaps=!1}else if(Ie){if(Je){const H=xe(Z);t.texStorage2D(s.TEXTURE_2D,ne,Ee,H.width,H.height)}P&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,he,Me,Z)}else t.texImage2D(s.TEXTURE_2D,0,Ee,he,Me,Z);m(v)&&p(q),ve.__version=$.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ee(E,v,N){if(v.image.length!==6)return;const q=Ze(E,v),K=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+N);const $=n.get(K);if(K.version!==$.__version||q===!0){t.activeTexture(s.TEXTURE0+N);const ve=Ve.getPrimaries(Ve.workingColorSpace),re=v.colorSpace===wn?null:Ve.getPrimaries(v.colorSpace),de=v.colorSpace===wn||ve===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const He=v.isCompressedTexture||v.image[0].isCompressedTexture,Z=v.image[0]&&v.image[0].isDataTexture,he=[];for(let Y=0;Y<6;Y++)!He&&!Z?he[Y]=_(v.image[Y],!0,i.maxCubemapSize):he[Y]=Z?v.image[Y].image:v.image[Y],he[Y]=tt(v,he[Y]);const Me=he[0],Ee=r.convert(v.format,v.colorSpace),ue=r.convert(v.type),Be=T(v.internalFormat,Ee,ue,v.colorSpace),Ie=v.isVideoTexture!==!0,Je=$.__version===void 0||q===!0,P=K.dataReady;let ne=U(v,Me);Le(s.TEXTURE_CUBE_MAP,v);let H;if(He){Ie&&Je&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ne,Be,Me.width,Me.height);for(let Y=0;Y<6;Y++){H=he[Y].mipmaps;for(let ce=0;ce<H.length;ce++){const ae=H[ce];v.format!==Kt?Ee!==null?Ie?P&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,0,0,ae.width,ae.height,Ee,ae.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,Be,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?P&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,0,0,ae.width,ae.height,Ee,ue,ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,Be,ae.width,ae.height,0,Ee,ue,ae.data)}}}else{if(H=v.mipmaps,Ie&&Je){H.length>0&&ne++;const Y=xe(he[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ne,Be,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Z){Ie?P&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,he[Y].width,he[Y].height,Ee,ue,he[Y].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Be,he[Y].width,he[Y].height,0,Ee,ue,he[Y].data);for(let ce=0;ce<H.length;ce++){const Re=H[ce].image[Y].image;Ie?P&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,0,0,Re.width,Re.height,Ee,ue,Re.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,Be,Re.width,Re.height,0,Ee,ue,Re.data)}}else{Ie?P&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ee,ue,he[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Be,Ee,ue,he[Y]);for(let ce=0;ce<H.length;ce++){const ae=H[ce];Ie?P&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,0,0,Ee,ue,ae.image[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,Be,Ee,ue,ae.image[Y])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),$.__version=K.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function _e(E,v,N,q,K,$){const ve=r.convert(N.format,N.colorSpace),re=r.convert(N.type),de=T(N.internalFormat,ve,re,N.colorSpace),He=n.get(v),Z=n.get(N);if(Z.__renderTarget=v,!He.__hasExternalTextures){const he=Math.max(1,v.width>>$),Me=Math.max(1,v.height>>$);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?t.texImage3D(K,$,de,he,Me,v.depth,0,ve,re,null):t.texImage2D(K,$,de,he,Me,0,ve,re,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),ke(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,K,Z.__webglTexture,0,Fe(v)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,K,Z.__webglTexture,$),t.bindFramebuffer(s.FRAMEBUFFER,null)}function se(E,v,N){if(s.bindRenderbuffer(s.RENDERBUFFER,E),v.depthBuffer){const q=v.depthTexture,K=q&&q.isDepthTexture?q.type:null,$=x(v.stencilBuffer,K),ve=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=Fe(v);ke(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,re,$,v.width,v.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,re,$,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,$,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,E)}else{const q=v.textures;for(let K=0;K<q.length;K++){const $=q[K],ve=r.convert($.format,$.colorSpace),re=r.convert($.type),de=T($.internalFormat,ve,re,$.colorSpace),He=Fe(v);N&&ke(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,He,de,v.width,v.height):ke(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,He,de,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,de,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Te(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(v.depthTexture);q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j(v.depthTexture,0);const K=q.__webglTexture,$=Fe(v);if(v.depthTexture.format===yi)ke(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(v.depthTexture.format===Ci)ke(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ae(E){const v=n.get(E),N=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const q=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=q}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Te(v.__webglFramebuffer,E)}else if(N){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=s.createRenderbuffer(),se(v.__webglDepthbuffer[q],E,!1);else{const K=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,$)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),se(v.__webglDepthbuffer,E,!1);else{const q=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,K)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(E,v,N){const q=n.get(E);v!==void 0&&_e(q.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&Ae(E)}function st(E){const v=E.texture,N=n.get(E),q=n.get(v);E.addEventListener("dispose",A);const K=E.textures,$=E.isWebGLCubeRenderTarget===!0,ve=K.length>1;if(ve||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=v.version,a.memory.textures++),$){N.__webglFramebuffer=[];for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[re]=[];for(let de=0;de<v.mipmaps.length;de++)N.__webglFramebuffer[re][de]=s.createFramebuffer()}else N.__webglFramebuffer[re]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)N.__webglFramebuffer[re]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(ve)for(let re=0,de=K.length;re<de;re++){const He=n.get(K[re]);He.__webglTexture===void 0&&(He.__webglTexture=s.createTexture(),a.memory.textures++)}if(E.samples>0&&ke(E)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){const de=K[re];N.__webglColorRenderbuffer[re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[re]);const He=r.convert(de.format,de.colorSpace),Z=r.convert(de.type),he=T(de.internalFormat,He,Z,de.colorSpace,E.isXRRenderTarget===!0),Me=Fe(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Me,he,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,N.__webglColorRenderbuffer[re])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),se(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),Le(s.TEXTURE_CUBE_MAP,v);for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)_e(N.__webglFramebuffer[re][de],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,de);else _e(N.__webglFramebuffer[re],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(v)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let re=0,de=K.length;re<de;re++){const He=K[re],Z=n.get(He);t.bindTexture(s.TEXTURE_2D,Z.__webglTexture),Le(s.TEXTURE_2D,He),_e(N.__webglFramebuffer,E,He,s.COLOR_ATTACHMENT0+re,s.TEXTURE_2D,0),m(He)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let re=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(re=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(re,q.__webglTexture),Le(re,v),v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)_e(N.__webglFramebuffer[de],E,v,s.COLOR_ATTACHMENT0,re,de);else _e(N.__webglFramebuffer,E,v,s.COLOR_ATTACHMENT0,re,0);m(v)&&p(re),t.unbindTexture()}E.depthBuffer&&Ae(E)}function ze(E){const v=E.textures;for(let N=0,q=v.length;N<q;N++){const K=v[N];if(m(K)){const $=b(E),ve=n.get(K).__webglTexture;t.bindTexture($,ve),p($),t.unbindTexture()}}}const ot=[],L=[];function zt(E){if(E.samples>0){if(ke(E)===!1){const v=E.textures,N=E.width,q=E.height;let K=s.COLOR_BUFFER_BIT;const $=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=n.get(E),re=v.length>1;if(re)for(let de=0;de<v.length;de++)t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let de=0;de<v.length;de++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ve.__webglColorRenderbuffer[de]);const He=n.get(v[de]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,He,0)}s.blitFramebuffer(0,0,N,q,0,0,N,q,K,s.NEAREST),c===!0&&(ot.length=0,L.length=0,ot.push(s.COLOR_ATTACHMENT0+de),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ot.push($),L.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),re)for(let de=0;de<v.length;de++){t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,ve.__webglColorRenderbuffer[de]);const He=n.get(v[de]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,He,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const v=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function Fe(E){return Math.min(i.maxSamples,E.samples)}function ke(E){const v=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function be(E){const v=a.render.frame;d.get(E)!==v&&(d.set(E,v),E.update())}function tt(E,v){const N=E.colorSpace,q=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==Ri&&N!==wn&&(Ve.getTransfer(N)===je?(q!==Kt||K!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}function xe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.setTexture2D=j,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=Oe,this.setupRenderTarget=st,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ke}function cg(s,e){function t(n,i=wn){let r;const a=Ve.getTransfer(i);if(n===Sn)return s.UNSIGNED_BYTE;if(n===Ia)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Da)return s.UNSIGNED_SHORT_5_5_5_1;if(n===dl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===cl)return s.BYTE;if(n===ll)return s.SHORT;if(n===Yi)return s.UNSIGNED_SHORT;if(n===Pa)return s.INT;if(n===Kn)return s.UNSIGNED_INT;if(n===mn)return s.FLOAT;if(n===Ki)return s.HALF_FLOAT;if(n===hl)return s.ALPHA;if(n===ul)return s.RGB;if(n===Kt)return s.RGBA;if(n===fl)return s.LUMINANCE;if(n===pl)return s.LUMINANCE_ALPHA;if(n===yi)return s.DEPTH_COMPONENT;if(n===Ci)return s.DEPTH_STENCIL;if(n===ml)return s.RED;if(n===La)return s.RED_INTEGER;if(n===gl)return s.RG;if(n===Oa)return s.RG_INTEGER;if(n===Ua)return s.RGBA_INTEGER;if(n===Ps||n===Is||n===Ds||n===Ls)if(a===je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ps)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ps)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ls)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jr||n===Kr||n===Zr||n===Jr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Kr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qr||n===ea||n===ta)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qr||n===ea)return a===je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ta)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===ca||n===la||n===da||n===ha||n===ua||n===fa||n===pa||n===ma)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===na)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ia)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ra)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===aa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ca)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===la)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===da)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ha)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ua)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ma)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Os||n===ga||n===_a)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Os)return a===je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ga)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_l||n===va||n===Sa||n===ya)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Os)return r.COMPRESSED_RED_RGTC1_EXT;if(n===va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ei?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class lg extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class tn extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dg={type:"move"};class Tr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dg)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const hg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ug=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Et,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Un({vertexShader:hg,fragmentShader:ug,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qe(new fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pg extends wi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,h=null,u=null,f=null,g=null;const _=new fg,m=t.getContextAttributes();let p=null,b=null;const T=[],x=[],U=new Ne;let C=null;const A=new Bt;A.viewport=new Ke;const w=new Bt;w.viewport=new Ke;const M=[A,w],S=new lg;let R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=T[X];return ee===void 0&&(ee=new Tr,T[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=T[X];return ee===void 0&&(ee=new Tr,T[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=T[X];return ee===void 0&&(ee=new Tr,T[X]=ee),ee.getHandSpace()};function B(X){const ee=x.indexOf(X.inputSource);if(ee===-1)return;const _e=T[ee];_e!==void 0&&(_e.update(X.inputSource,X.frame,l||a),_e.dispatchEvent({type:X.type,data:X.inputSource}))}function G(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",j);for(let X=0;X<T.length;X++){const ee=x[X];ee!==null&&(x[X]=null,T[X].disconnect(ee))}R=null,z=null,_.reset(),e.setRenderTarget(p),f=null,u=null,h=null,i=null,b=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",G),i.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(U),i.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Zn(f.framebufferWidth,f.framebufferHeight,{format:Kt,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,_e=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?Ci:yi,_e=m.stencil?Ei:Kn);const Te={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(Te),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new Zn(u.textureWidth,u.textureHeight,{format:Kt,type:Sn,depthTexture:new Dl(u.textureWidth,u.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ze.setContext(i),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(X){for(let ee=0;ee<X.removed.length;ee++){const _e=X.removed[ee],se=x.indexOf(_e);se>=0&&(x[se]=null,T[se].disconnect(_e))}for(let ee=0;ee<X.added.length;ee++){const _e=X.added[ee];let se=x.indexOf(_e);if(se===-1){for(let Ae=0;Ae<T.length;Ae++)if(Ae>=x.length){x.push(_e),se=Ae;break}else if(x[Ae]===null){x[Ae]=_e,se=Ae;break}if(se===-1)break}const Te=T[se];Te&&Te.connect(_e)}}const W=new O,Q=new O;function V(X,ee,_e){W.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(_e.matrixWorld);const se=W.distanceTo(Q),Te=ee.projectionMatrix.elements,Ae=_e.projectionMatrix.elements,Oe=Te[14]/(Te[10]-1),st=Te[14]/(Te[10]+1),ze=(Te[9]+1)/Te[5],ot=(Te[9]-1)/Te[5],L=(Te[8]-1)/Te[0],zt=(Ae[8]+1)/Ae[0],Fe=Oe*L,ke=Oe*zt,be=se/(-L+zt),tt=be*-L;if(ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(tt),X.translateZ(be),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Te[10]===-1)X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const xe=Oe+be,E=st+be,v=Fe-tt,N=ke+(se-tt),q=ze*st/E*xe,K=ot*st/E*xe;X.projectionMatrix.makePerspective(v,N,q,K,xe,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ie(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let ee=X.near,_e=X.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(_e=_.depthFar)),S.near=w.near=A.near=ee,S.far=w.far=A.far=_e,(R!==S.near||z!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,z=S.far),A.layers.mask=X.layers.mask|2,w.layers.mask=X.layers.mask|4,S.layers.mask=A.layers.mask|w.layers.mask;const se=X.parent,Te=S.cameras;ie(S,se);for(let Ae=0;Ae<Te.length;Ae++)ie(Te[Ae],se);Te.length===2?V(S,A,w):S.projectionMatrix.copy(A.projectionMatrix),le(X,S,se)};function le(X,ee,_e){_e===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(_e.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=xa*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(X){c=X,u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let ye=null;function Le(X,ee){if(d=ee.getViewerPose(l||a),g=ee,d!==null){const _e=d.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let se=!1;_e.length!==S.cameras.length&&(S.cameras.length=0,se=!0);for(let Ae=0;Ae<_e.length;Ae++){const Oe=_e[Ae];let st=null;if(f!==null)st=f.getViewport(Oe);else{const ot=h.getViewSubImage(u,Oe);st=ot.viewport,Ae===0&&(e.setRenderTargetTextures(b,ot.colorTexture,u.ignoreDepthValues?void 0:ot.depthStencilTexture),e.setRenderTarget(b))}let ze=M[Ae];ze===void 0&&(ze=new Bt,ze.layers.enable(Ae),ze.viewport=new Ke,M[Ae]=ze),ze.matrix.fromArray(Oe.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Oe.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(st.x,st.y,st.width,st.height),Ae===0&&(S.matrix.copy(ze.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),se===!0&&S.cameras.push(ze)}const Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ae=h.getDepthInformation(_e[0]);Ae&&Ae.isValid&&Ae.texture&&_.init(e,Ae,i.renderState)}}for(let _e=0;_e<T.length;_e++){const se=x[_e],Te=T[_e];se!==null&&Te!==void 0&&Te.update(se,ee,l||a)}ye&&ye(X,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Ze=new Pl;Ze.setAnimationLoop(Le),this.setAnimationLoop=function(X){ye=X},this.dispose=function(){}}}const Wn=new nn,mg=new rt;function gg(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Al(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,T,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,b,T):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ut&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ut&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),T=b.envMap,x=b.envMapRotation;T&&(m.envMap.value=T,Wn.copy(x),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),m.envMapRotation.value.setFromMatrix4(mg.makeRotationFromEuler(Wn)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ut&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function _g(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,T){const x=T.program;n.uniformBlockBinding(b,x)}function l(b,T){let x=i[b.id];x===void 0&&(g(b),x=d(b),i[b.id]=x,b.addEventListener("dispose",m));const U=T.program;n.updateUBOMapping(b,U);const C=e.render.frame;r[b.id]!==C&&(u(b),r[b.id]=C)}function d(b){const T=h();b.__bindingPointIndex=T;const x=s.createBuffer(),U=b.__size,C=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,U,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,x),x}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const T=i[b.id],x=b.uniforms,U=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let C=0,A=x.length;C<A;C++){const w=Array.isArray(x[C])?x[C]:[x[C]];for(let M=0,S=w.length;M<S;M++){const R=w[M];if(f(R,C,M,U)===!0){const z=R.__offset,B=Array.isArray(R.value)?R.value:[R.value];let G=0;for(let j=0;j<B.length;j++){const W=B[j],Q=_(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,z+G,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,G),G+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(b,T,x,U){const C=b.value,A=T+"_"+x;if(U[A]===void 0)return typeof C=="number"||typeof C=="boolean"?U[A]=C:U[A]=C.clone(),!0;{const w=U[A];if(typeof C=="number"||typeof C=="boolean"){if(w!==C)return U[A]=C,!0}else if(w.equals(C)===!1)return w.copy(C),!0}return!1}function g(b){const T=b.uniforms;let x=0;const U=16;for(let A=0,w=T.length;A<w;A++){const M=Array.isArray(T[A])?T[A]:[T[A]];for(let S=0,R=M.length;S<R;S++){const z=M[S],B=Array.isArray(z.value)?z.value:[z.value];for(let G=0,j=B.length;G<j;G++){const W=B[G],Q=_(W),V=x%U,ie=V%Q.boundary,le=V+ie;x+=ie,le!==0&&U-le<Q.storage&&(x+=U-le),z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=Q.storage}}}const C=x%U;return C>0&&(x+=U-C),b.__size=x,b.__cache={},this}function _(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function m(b){const T=b.target;T.removeEventListener("dispose",m);const x=a.indexOf(T.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function p(){for(const b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}class vg{constructor(e={}){const{canvas:t=sh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this.toneMapping=Ln,this.toneMappingExposure=1;const x=this;let U=!1,C=0,A=0,w=null,M=-1,S=null;const R=new Ke,z=new Ke;let B=null;const G=new Ge(0);let j=0,W=t.width,Q=t.height,V=1,ie=null,le=null;const ye=new Ke(0,0,W,Q),Le=new Ke(0,0,W,Q);let Ze=!1;const X=new Fa;let ee=!1,_e=!1;const se=new rt,Te=new rt,Ae=new O,Oe=new Ke,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function ot(){return w===null?V:1}let L=n;function zt(y,I){return t.getContext(y,I)}try{const y={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wa}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",ae,!1),L===null){const I="webgl2";if(L=zt(I,y),L===null)throw zt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Fe,ke,be,tt,xe,E,v,N,q,K,$,ve,re,de,He,Z,he,Me,Ee,ue,Be,Ie,Je,P;function ne(){Fe=new Mp(L),Fe.init(),Ie=new cg(L,Fe),ke=new _p(L,Fe,e,Ie),be=new rg(L,Fe),ke.reverseDepthBuffer&&u&&be.buffers.depth.setReversed(!0),tt=new Cp(L),xe=new Wm,E=new og(L,Fe,be,xe,ke,Ie,tt),v=new Sp(x),N=new bp(x),q=new Dh(L),Je=new mp(L,q),K=new Tp(L,q,tt,Je),$=new Rp(L,K,q,tt),Ee=new Ap(L,ke,E),Z=new vp(xe),ve=new Gm(x,v,N,Fe,ke,Je,Z),re=new gg(x,xe),de=new Xm,He=new Jm(Fe),Me=new pp(x,v,N,be,$,f,c),he=new ig(x,$,ke),P=new _g(L,tt,ke,be),ue=new gp(L,Fe,tt),Be=new Ep(L,Fe,tt),tt.programs=ve.programs,x.capabilities=ke,x.extensions=Fe,x.properties=xe,x.renderLists=de,x.shadowMap=he,x.state=be,x.info=tt}ne();const H=new pg(x,L);this.xr=H,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const y=Fe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Fe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(W,Q,!1))},this.getSize=function(y){return y.set(W,Q)},this.setSize=function(y,I,F=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,Q=I,t.width=Math.floor(y*V),t.height=Math.floor(I*V),F===!0&&(t.style.width=y+"px",t.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(W*V,Q*V).floor()},this.setDrawingBufferSize=function(y,I,F){W=y,Q=I,V=F,t.width=Math.floor(y*F),t.height=Math.floor(I*F),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(R)},this.getViewport=function(y){return y.copy(ye)},this.setViewport=function(y,I,F,k){y.isVector4?ye.set(y.x,y.y,y.z,y.w):ye.set(y,I,F,k),be.viewport(R.copy(ye).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(Le)},this.setScissor=function(y,I,F,k){y.isVector4?Le.set(y.x,y.y,y.z,y.w):Le.set(y,I,F,k),be.scissor(z.copy(Le).multiplyScalar(V).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(y){be.setScissorTest(Ze=y)},this.setOpaqueSort=function(y){ie=y},this.setTransparentSort=function(y){le=y},this.getClearColor=function(y){return y.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(y=!0,I=!0,F=!0){let k=0;if(y){let D=!1;if(w!==null){const J=w.texture.format;D=J===Ua||J===Oa||J===La}if(D){const J=w.texture.type,oe=J===Sn||J===Kn||J===Yi||J===Ei||J===Ia||J===Da,pe=Me.getClearColor(),me=Me.getClearAlpha(),Ce=pe.r,we=pe.g,ge=pe.b;oe?(g[0]=Ce,g[1]=we,g[2]=ge,g[3]=me,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Ce,_[1]=we,_[2]=ge,_[3]=me,L.clearBufferiv(L.COLOR,0,_))}else k|=L.COLOR_BUFFER_BIT}I&&(k|=L.DEPTH_BUFFER_BIT),F&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),de.dispose(),He.dispose(),xe.dispose(),v.dispose(),N.dispose(),$.dispose(),Je.dispose(),P.dispose(),ve.dispose(),H.dispose(),H.removeEventListener("sessionstart",Wa),H.removeEventListener("sessionend",$a),Nn.stop()};function Y(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const y=tt.autoReset,I=he.enabled,F=he.autoUpdate,k=he.needsUpdate,D=he.type;ne(),tt.autoReset=y,he.enabled=I,he.autoUpdate=F,he.needsUpdate=k,he.type=D}function ae(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Re(y){const I=y.target;I.removeEventListener("dispose",Re),at(I)}function at(y){vt(y),xe.remove(y)}function vt(y){const I=xe.get(y).programs;I!==void 0&&(I.forEach(function(F){ve.releaseProgram(F)}),y.isShaderMaterial&&ve.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,F,k,D,J){I===null&&(I=st);const oe=D.isMesh&&D.matrixWorld.determinant()<0,pe=kl(y,I,F,k,D);be.setMaterial(k,oe);let me=F.index,Ce=1;if(k.wireframe===!0){if(me=K.getWireframeAttribute(F),me===void 0)return;Ce=2}const we=F.drawRange,ge=F.attributes.position;let We=we.start*Ce,Qe=(we.start+we.count)*Ce;J!==null&&(We=Math.max(We,J.start*Ce),Qe=Math.min(Qe,(J.start+J.count)*Ce)),me!==null?(We=Math.max(We,0),Qe=Math.min(Qe,me.count)):ge!=null&&(We=Math.max(We,0),Qe=Math.min(Qe,ge.count));const nt=Qe-We;if(nt<0||nt===1/0)return;Je.setup(D,k,pe,F,me);let Pt,$e=ue;if(me!==null&&(Pt=q.get(me),$e=Be,$e.setIndex(Pt)),D.isMesh)k.wireframe===!0?(be.setLineWidth(k.wireframeLinewidth*ot()),$e.setMode(L.LINES)):$e.setMode(L.TRIANGLES);else if(D.isLine){let Se=k.linewidth;Se===void 0&&(Se=1),be.setLineWidth(Se*ot()),D.isLineSegments?$e.setMode(L.LINES):D.isLineLoop?$e.setMode(L.LINE_LOOP):$e.setMode(L.LINE_STRIP)}else D.isPoints?$e.setMode(L.POINTS):D.isSprite&&$e.setMode(L.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)$e.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))$e.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const Se=D._multiDrawStarts,rn=D._multiDrawCounts,Xe=D._multiDrawCount,$t=me?q.get(me).bytesPerElement:1,ti=xe.get(k).currentProgram.getUniforms();for(let Nt=0;Nt<Xe;Nt++)ti.setValue(L,"_gl_DrawID",Nt),$e.render(Se[Nt]/$t,rn[Nt])}else if(D.isInstancedMesh)$e.renderInstances(We,nt,D.count);else if(F.isInstancedBufferGeometry){const Se=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,rn=Math.min(F.instanceCount,Se);$e.renderInstances(We,nt,rn)}else $e.render(We,nt)};function Ye(y,I,F){y.transparent===!0&&y.side===gt&&y.forceSinglePass===!1?(y.side=Ut,y.needsUpdate=!0,ns(y,I,F),y.side=On,y.needsUpdate=!0,ns(y,I,F),y.side=gt):ns(y,I,F)}this.compile=function(y,I,F=null){F===null&&(F=y),p=He.get(F),p.init(I),T.push(p),F.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),y!==F&&y.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights();const k=new Set;return y.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const J=D.material;if(J)if(Array.isArray(J))for(let oe=0;oe<J.length;oe++){const pe=J[oe];Ye(pe,F,D),k.add(pe)}else Ye(J,F,D),k.add(J)}),T.pop(),p=null,k},this.compileAsync=function(y,I,F=null){const k=this.compile(y,I,F);return new Promise(D=>{function J(){if(k.forEach(function(oe){xe.get(oe).currentProgram.isReady()&&k.delete(oe)}),k.size===0){D(y);return}setTimeout(J,10)}Fe.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Wt=null;function sn(y){Wt&&Wt(y)}function Wa(){Nn.stop()}function $a(){Nn.start()}const Nn=new Pl;Nn.setAnimationLoop(sn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(y){Wt=y,H.setAnimationLoop(y),y===null?Nn.stop():Nn.start()},H.addEventListener("sessionstart",Wa),H.addEventListener("sessionend",$a),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(I),I=H.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,I,w),p=He.get(y,T.length),p.init(I),T.push(p),Te.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),X.setFromProjectionMatrix(Te),_e=this.localClippingEnabled,ee=Z.init(this.clippingPlanes,_e),m=de.get(y,b.length),m.init(),b.push(m),H.enabled===!0&&H.isPresenting===!0){const J=x.xr.getDepthSensingMesh();J!==null&&$s(J,I,-1/0,x.sortObjects)}$s(y,I,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ie,le),ze=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,ze&&Me.addToRenderList(m,y),this.info.render.frame++,ee===!0&&Z.beginShadows();const F=p.state.shadowsArray;he.render(F,y,I),ee===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,D=m.transmissive;if(p.setupLights(),I.isArrayCamera){const J=I.cameras;if(D.length>0)for(let oe=0,pe=J.length;oe<pe;oe++){const me=J[oe];qa(k,D,y,me)}ze&&Me.render(y);for(let oe=0,pe=J.length;oe<pe;oe++){const me=J[oe];Xa(m,y,me,me.viewport)}}else D.length>0&&qa(k,D,y,I),ze&&Me.render(y),Xa(m,y,I);w!==null&&(E.updateMultisampleRenderTarget(w),E.updateRenderTargetMipmap(w)),y.isScene===!0&&y.onAfterRender(x,y,I),Je.resetDefaultState(),M=-1,S=null,T.pop(),T.length>0?(p=T[T.length-1],ee===!0&&Z.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function $s(y,I,F,k){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)F=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||X.intersectsSprite(y)){k&&Oe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Te);const oe=$.update(y),pe=y.material;pe.visible&&m.push(y,oe,pe,F,Oe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||X.intersectsObject(y))){const oe=$.update(y),pe=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Oe.copy(y.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Oe.copy(oe.boundingSphere.center)),Oe.applyMatrix4(y.matrixWorld).applyMatrix4(Te)),Array.isArray(pe)){const me=oe.groups;for(let Ce=0,we=me.length;Ce<we;Ce++){const ge=me[Ce],We=pe[ge.materialIndex];We&&We.visible&&m.push(y,oe,We,F,Oe.z,ge)}}else pe.visible&&m.push(y,oe,pe,F,Oe.z,null)}}const J=y.children;for(let oe=0,pe=J.length;oe<pe;oe++)$s(J[oe],I,F,k)}function Xa(y,I,F,k){const D=y.opaque,J=y.transmissive,oe=y.transparent;p.setupLightsView(F),ee===!0&&Z.setGlobalState(x.clippingPlanes,F),k&&be.viewport(R.copy(k)),D.length>0&&ts(D,I,F),J.length>0&&ts(J,I,F),oe.length>0&&ts(oe,I,F),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function qa(y,I,F,k){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Zn(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Ki:Sn,minFilter:jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));const J=p.state.transmissionRenderTarget[k.id],oe=k.viewport||R;J.setSize(oe.z,oe.w);const pe=x.getRenderTarget();x.setRenderTarget(J),x.getClearColor(G),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),ze&&Me.render(F);const me=x.toneMapping;x.toneMapping=Ln;const Ce=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),ee===!0&&Z.setGlobalState(x.clippingPlanes,k),ts(y,F,k),E.updateMultisampleRenderTarget(J),E.updateRenderTargetMipmap(J),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let ge=0,We=I.length;ge<We;ge++){const Qe=I[ge],nt=Qe.object,Pt=Qe.geometry,$e=Qe.material,Se=Qe.group;if($e.side===gt&&nt.layers.test(k.layers)){const rn=$e.side;$e.side=Ut,$e.needsUpdate=!0,Ya(nt,F,k,Pt,$e,Se),$e.side=rn,$e.needsUpdate=!0,we=!0}}we===!0&&(E.updateMultisampleRenderTarget(J),E.updateRenderTargetMipmap(J))}x.setRenderTarget(pe),x.setClearColor(G,j),Ce!==void 0&&(k.viewport=Ce),x.toneMapping=me}function ts(y,I,F){const k=I.isScene===!0?I.overrideMaterial:null;for(let D=0,J=y.length;D<J;D++){const oe=y[D],pe=oe.object,me=oe.geometry,Ce=k===null?oe.material:k,we=oe.group;pe.layers.test(F.layers)&&Ya(pe,I,F,me,Ce,we)}}function Ya(y,I,F,k,D,J){y.onBeforeRender(x,I,F,k,D,J),y.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),D.onBeforeRender(x,I,F,k,y,J),D.transparent===!0&&D.side===gt&&D.forceSinglePass===!1?(D.side=Ut,D.needsUpdate=!0,x.renderBufferDirect(F,I,k,D,y,J),D.side=On,D.needsUpdate=!0,x.renderBufferDirect(F,I,k,D,y,J),D.side=gt):x.renderBufferDirect(F,I,k,D,y,J),y.onAfterRender(x,I,F,k,D,J)}function ns(y,I,F){I.isScene!==!0&&(I=st);const k=xe.get(y),D=p.state.lights,J=p.state.shadowsArray,oe=D.state.version,pe=ve.getParameters(y,D.state,J,I,F),me=ve.getProgramCacheKey(pe);let Ce=k.programs;k.environment=y.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(y.isMeshStandardMaterial?N:v).get(y.envMap||k.environment),k.envMapRotation=k.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Ce===void 0&&(y.addEventListener("dispose",Re),Ce=new Map,k.programs=Ce);let we=Ce.get(me);if(we!==void 0){if(k.currentProgram===we&&k.lightsStateVersion===oe)return Ka(y,pe),we}else pe.uniforms=ve.getUniforms(y),y.onBeforeCompile(pe,x),we=ve.acquireProgram(pe,me),Ce.set(me,we),k.uniforms=pe.uniforms;const ge=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ge.clippingPlanes=Z.uniform),Ka(y,pe),k.needsLights=zl(y),k.lightsStateVersion=oe,k.needsLights&&(ge.ambientLightColor.value=D.state.ambient,ge.lightProbe.value=D.state.probe,ge.directionalLights.value=D.state.directional,ge.directionalLightShadows.value=D.state.directionalShadow,ge.spotLights.value=D.state.spot,ge.spotLightShadows.value=D.state.spotShadow,ge.rectAreaLights.value=D.state.rectArea,ge.ltc_1.value=D.state.rectAreaLTC1,ge.ltc_2.value=D.state.rectAreaLTC2,ge.pointLights.value=D.state.point,ge.pointLightShadows.value=D.state.pointShadow,ge.hemisphereLights.value=D.state.hemi,ge.directionalShadowMap.value=D.state.directionalShadowMap,ge.directionalShadowMatrix.value=D.state.directionalShadowMatrix,ge.spotShadowMap.value=D.state.spotShadowMap,ge.spotLightMatrix.value=D.state.spotLightMatrix,ge.spotLightMap.value=D.state.spotLightMap,ge.pointShadowMap.value=D.state.pointShadowMap,ge.pointShadowMatrix.value=D.state.pointShadowMatrix),k.currentProgram=we,k.uniformsList=null,we}function ja(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=Us.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Ka(y,I){const F=xe.get(y);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.batchingColor=I.batchingColor,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.instancingMorph=I.instancingMorph,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function kl(y,I,F,k,D){I.isScene!==!0&&(I=st),E.resetTextureUnits();const J=I.fog,oe=k.isMeshStandardMaterial?I.environment:null,pe=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ri,me=(k.isMeshStandardMaterial?N:v).get(k.envMap||oe),Ce=k.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,we=!!F.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),ge=!!F.morphAttributes.position,We=!!F.morphAttributes.normal,Qe=!!F.morphAttributes.color;let nt=Ln;k.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(nt=x.toneMapping);const Pt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,$e=Pt!==void 0?Pt.length:0,Se=xe.get(k),rn=p.state.lights;if(ee===!0&&(_e===!0||y!==S)){const Ht=y===S&&k.id===M;Z.setState(k,y,Ht)}let Xe=!1;k.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==rn.state.version||Se.outputColorSpace!==pe||D.isBatchedMesh&&Se.batching===!1||!D.isBatchedMesh&&Se.batching===!0||D.isBatchedMesh&&Se.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Se.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Se.instancing===!1||!D.isInstancedMesh&&Se.instancing===!0||D.isSkinnedMesh&&Se.skinning===!1||!D.isSkinnedMesh&&Se.skinning===!0||D.isInstancedMesh&&Se.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Se.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Se.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Se.instancingMorph===!1&&D.morphTexture!==null||Se.envMap!==me||k.fog===!0&&Se.fog!==J||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Z.numPlanes||Se.numIntersection!==Z.numIntersection)||Se.vertexAlphas!==Ce||Se.vertexTangents!==we||Se.morphTargets!==ge||Se.morphNormals!==We||Se.morphColors!==Qe||Se.toneMapping!==nt||Se.morphTargetsCount!==$e)&&(Xe=!0):(Xe=!0,Se.__version=k.version);let $t=Se.currentProgram;Xe===!0&&($t=ns(k,I,D));let ti=!1,Nt=!1,Ii=!1;const it=$t.getUniforms(),Qt=Se.uniforms;if(be.useProgram($t.program)&&(ti=!0,Nt=!0,Ii=!0),k.id!==M&&(M=k.id,Nt=!0),ti||S!==y){be.buffers.depth.getReversed()?(se.copy(y.projectionMatrix),ah(se),oh(se),it.setValue(L,"projectionMatrix",se)):it.setValue(L,"projectionMatrix",y.projectionMatrix),it.setValue(L,"viewMatrix",y.matrixWorldInverse);const yn=it.map.cameraPosition;yn!==void 0&&yn.setValue(L,Ae.setFromMatrixPosition(y.matrixWorld)),ke.logarithmicDepthBuffer&&it.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&it.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,Nt=!0,Ii=!0)}if(D.isSkinnedMesh){it.setOptional(L,D,"bindMatrix"),it.setOptional(L,D,"bindMatrixInverse");const Ht=D.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),it.setValue(L,"boneTexture",Ht.boneTexture,E))}D.isBatchedMesh&&(it.setOptional(L,D,"batchingTexture"),it.setValue(L,"batchingTexture",D._matricesTexture,E),it.setOptional(L,D,"batchingIdTexture"),it.setValue(L,"batchingIdTexture",D._indirectTexture,E),it.setOptional(L,D,"batchingColorTexture"),D._colorsTexture!==null&&it.setValue(L,"batchingColorTexture",D._colorsTexture,E));const Di=F.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&Ee.update(D,F,$t),(Nt||Se.receiveShadow!==D.receiveShadow)&&(Se.receiveShadow=D.receiveShadow,it.setValue(L,"receiveShadow",D.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Qt.envMap.value=me,Qt.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(Qt.envMapIntensity.value=I.environmentIntensity),Nt&&(it.setValue(L,"toneMappingExposure",x.toneMappingExposure),Se.needsLights&&Bl(Qt,Ii),J&&k.fog===!0&&re.refreshFogUniforms(Qt,J),re.refreshMaterialUniforms(Qt,k,V,Q,p.state.transmissionRenderTarget[y.id]),Us.upload(L,ja(Se),Qt,E)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Us.upload(L,ja(Se),Qt,E),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&it.setValue(L,"center",D.center),it.setValue(L,"modelViewMatrix",D.modelViewMatrix),it.setValue(L,"normalMatrix",D.normalMatrix),it.setValue(L,"modelMatrix",D.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ht=k.uniformsGroups;for(let yn=0,xn=Ht.length;yn<xn;yn++){const Za=Ht[yn];P.update(Za,$t),P.bind(Za,$t)}}return $t}function Bl(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function zl(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(y,I,F){xe.get(y.texture).__webglTexture=I,xe.get(y.depthTexture).__webglTexture=F;const k=xe.get(y);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=F===void 0,k.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,I){const F=xe.get(y);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,F=0){w=y,C=I,A=F;let k=!0,D=null,J=!1,oe=!1;if(y){const me=xe.get(y);if(me.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(L.FRAMEBUFFER,null),k=!1;else if(me.__webglFramebuffer===void 0)E.setupRenderTarget(y);else if(me.__hasExternalTextures)E.rebindTextures(y,xe.get(y.texture).__webglTexture,xe.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const ge=y.depthTexture;if(me.__boundDepthTexture!==ge){if(ge!==null&&xe.has(ge)&&(y.width!==ge.image.width||y.height!==ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(y)}}const Ce=y.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(oe=!0);const we=xe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(we[I])?D=we[I][F]:D=we[I],J=!0):y.samples>0&&E.useMultisampledRTT(y)===!1?D=xe.get(y).__webglMultisampledFramebuffer:Array.isArray(we)?D=we[F]:D=we,R.copy(y.viewport),z.copy(y.scissor),B=y.scissorTest}else R.copy(ye).multiplyScalar(V).floor(),z.copy(Le).multiplyScalar(V).floor(),B=Ze;if(be.bindFramebuffer(L.FRAMEBUFFER,D)&&k&&be.drawBuffers(y,D),be.viewport(R),be.scissor(z),be.setScissorTest(B),J){const me=xe.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,me.__webglTexture,F)}else if(oe){const me=xe.get(y.texture),Ce=I||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,me.__webglTexture,F||0,Ce)}M=-1},this.readRenderTargetPixels=function(y,I,F,k,D,J,oe){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=xe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&oe!==void 0&&(pe=pe[oe]),pe){be.bindFramebuffer(L.FRAMEBUFFER,pe);try{const me=y.texture,Ce=me.format,we=me.type;if(!ke.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-k&&F>=0&&F<=y.height-D&&L.readPixels(I,F,k,D,Ie.convert(Ce),Ie.convert(we),J)}finally{const me=w!==null?xe.get(w).__webglFramebuffer:null;be.bindFramebuffer(L.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(y,I,F,k,D,J,oe){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=xe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&oe!==void 0&&(pe=pe[oe]),pe){const me=y.texture,Ce=me.format,we=me.type;if(!ke.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=y.width-k&&F>=0&&F<=y.height-D){be.bindFramebuffer(L.FRAMEBUFFER,pe);const ge=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ge),L.bufferData(L.PIXEL_PACK_BUFFER,J.byteLength,L.STREAM_READ),L.readPixels(I,F,k,D,Ie.convert(Ce),Ie.convert(we),0);const We=w!==null?xe.get(w).__webglFramebuffer:null;be.bindFramebuffer(L.FRAMEBUFFER,We);const Qe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await rh(L,Qe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ge),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,J),L.deleteBuffer(ge),L.deleteSync(Qe),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,I=null,F=0){y.isTexture!==!0&&(Gi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,y=arguments[1]);const k=Math.pow(2,-F),D=Math.floor(y.image.width*k),J=Math.floor(y.image.height*k),oe=I!==null?I.x:0,pe=I!==null?I.y:0;E.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,F,0,0,oe,pe,D,J),be.unbindTexture()},this.copyTextureToTexture=function(y,I,F=null,k=null,D=0){y.isTexture!==!0&&(Gi("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,y=arguments[1],I=arguments[2],D=arguments[3]||0,F=null);let J,oe,pe,me,Ce,we,ge,We,Qe;const nt=y.isCompressedTexture?y.mipmaps[D]:y.image;F!==null?(J=F.max.x-F.min.x,oe=F.max.y-F.min.y,pe=F.isBox3?F.max.z-F.min.z:1,me=F.min.x,Ce=F.min.y,we=F.isBox3?F.min.z:0):(J=nt.width,oe=nt.height,pe=nt.depth||1,me=0,Ce=0,we=0),k!==null?(ge=k.x,We=k.y,Qe=k.z):(ge=0,We=0,Qe=0);const Pt=Ie.convert(I.format),$e=Ie.convert(I.type);let Se;I.isData3DTexture?(E.setTexture3D(I,0),Se=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(E.setTexture2DArray(I,0),Se=L.TEXTURE_2D_ARRAY):(E.setTexture2D(I,0),Se=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const rn=L.getParameter(L.UNPACK_ROW_LENGTH),Xe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),$t=L.getParameter(L.UNPACK_SKIP_PIXELS),ti=L.getParameter(L.UNPACK_SKIP_ROWS),Nt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,nt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,nt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,me),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ce),L.pixelStorei(L.UNPACK_SKIP_IMAGES,we);const Ii=y.isDataArrayTexture||y.isData3DTexture,it=I.isDataArrayTexture||I.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const Qt=xe.get(y),Di=xe.get(I),Ht=xe.get(Qt.__renderTarget),yn=xe.get(Di.__renderTarget);be.bindFramebuffer(L.READ_FRAMEBUFFER,Ht.__webglFramebuffer),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let xn=0;xn<pe;xn++)Ii&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.get(y).__webglTexture,D,we+xn),y.isDepthTexture?(it&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.get(I).__webglTexture,D,Qe+xn),L.blitFramebuffer(me,Ce,J,oe,ge,We,J,oe,L.DEPTH_BUFFER_BIT,L.NEAREST)):it?L.copyTexSubImage3D(Se,D,ge,We,Qe+xn,me,Ce,J,oe):L.copyTexSubImage2D(Se,D,ge,We,Qe+xn,me,Ce,J,oe);be.bindFramebuffer(L.READ_FRAMEBUFFER,null),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else it?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(Se,D,ge,We,Qe,J,oe,pe,Pt,$e,nt.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(Se,D,ge,We,Qe,J,oe,pe,Pt,nt.data):L.texSubImage3D(Se,D,ge,We,Qe,J,oe,pe,Pt,$e,nt):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,D,ge,We,J,oe,Pt,$e,nt.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,D,ge,We,nt.width,nt.height,Pt,nt.data):L.texSubImage2D(L.TEXTURE_2D,D,ge,We,J,oe,Pt,$e,nt);L.pixelStorei(L.UNPACK_ROW_LENGTH,rn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Xe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,$t),L.pixelStorei(L.UNPACK_SKIP_ROWS,ti),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Nt),D===0&&I.generateMipmaps&&L.generateMipmap(Se),be.unbindTexture()},this.copyTextureToTexture3D=function(y,I,F=null,k=null,D=0){return y.isTexture!==!0&&(Gi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,k=arguments[1]||null,y=arguments[2],I=arguments[3],D=arguments[4]||0),Gi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,I,F,k,D)},this.initRenderTarget=function(y){xe.get(y).__webglFramebuffer===void 0&&E.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?E.setTextureCube(y,0):y.isData3DTexture?E.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?E.setTexture2DArray(y,0):E.setTexture2D(y,0),be.unbindTexture()},this.resetState=function(){C=0,A=0,w=null,be.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}}class Ba{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=t}clone(){return new Ba(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Sg extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class yg extends Et{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zs extends Gt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new O,d=new Ne;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){const f=n+h/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),d.x=(a[u]/e+1)/2,d.y=(a[u+1]/e+1)/2,c.push(d.x,d.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(o,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class $i extends Gt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const d=[],h=[],u=[],f=[];let g=0;const _=[],m=n/2;let p=0;b(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(d),this.setAttribute("position",new dt(h,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(f,2));function b(){const x=new O,U=new O;let C=0;const A=(t-e)/n;for(let w=0;w<=r;w++){const M=[],S=w/r,R=S*(t-e)+e;for(let z=0;z<=i;z++){const B=z/i,G=B*c+o,j=Math.sin(G),W=Math.cos(G);U.x=R*j,U.y=-S*n+m,U.z=R*W,h.push(U.x,U.y,U.z),x.set(j,A,W).normalize(),u.push(x.x,x.y,x.z),f.push(B,1-S),M.push(g++)}_.push(M)}for(let w=0;w<i;w++)for(let M=0;M<r;M++){const S=_[M][w],R=_[M+1][w],z=_[M+1][w+1],B=_[M][w+1];(e>0||M!==0)&&(d.push(S,R,B),C+=3),(t>0||M!==r-1)&&(d.push(R,z,B),C+=3)}l.addGroup(p,C,0),p+=C}function T(x){const U=g,C=new Ne,A=new O;let w=0;const M=x===!0?e:t,S=x===!0?1:-1;for(let z=1;z<=i;z++)h.push(0,m*S,0),u.push(0,S,0),f.push(.5,.5),g++;const R=g;for(let z=0;z<=i;z++){const G=z/i*c+o,j=Math.cos(G),W=Math.sin(G);A.x=M*W,A.y=m*S,A.z=M*j,h.push(A.x,A.y,A.z),u.push(0,S,0),C.x=j*.5+.5,C.y=W*.5*S+.5,f.push(C.x,C.y),g++}for(let z=0;z<i;z++){const B=U+z,G=R+z;x===!0?d.push(G,G+1,B):d.push(G+1,G,B),w+=3}l.addGroup(p,w,x===!0?1:2),p+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class za extends Gt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),l(n),d(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const T=new O,x=new O,U=new O;for(let C=0;C<t.length;C+=3)f(t[C+0],T),f(t[C+1],x),f(t[C+2],U),c(T,x,U,b)}function c(b,T,x,U){const C=U+1,A=[];for(let w=0;w<=C;w++){A[w]=[];const M=b.clone().lerp(x,w/C),S=T.clone().lerp(x,w/C),R=C-w;for(let z=0;z<=R;z++)z===0&&w===C?A[w][z]=M:A[w][z]=M.clone().lerp(S,z/R)}for(let w=0;w<C;w++)for(let M=0;M<2*(C-w)-1;M++){const S=Math.floor(M/2);M%2===0?(u(A[w][S+1]),u(A[w+1][S]),u(A[w][S])):(u(A[w][S+1]),u(A[w+1][S+1]),u(A[w+1][S]))}}function l(b){const T=new O;for(let x=0;x<r.length;x+=3)T.x=r[x+0],T.y=r[x+1],T.z=r[x+2],T.normalize().multiplyScalar(b),r[x+0]=T.x,r[x+1]=T.y,r[x+2]=T.z}function d(){const b=new O;for(let T=0;T<r.length;T+=3){b.x=r[T+0],b.y=r[T+1],b.z=r[T+2];const x=m(b)/2/Math.PI+.5,U=p(b)/Math.PI+.5;a.push(x,1-U)}g(),h()}function h(){for(let b=0;b<a.length;b+=6){const T=a[b+0],x=a[b+2],U=a[b+4],C=Math.max(T,x,U),A=Math.min(T,x,U);C>.9&&A<.1&&(T<.2&&(a[b+0]+=1),x<.2&&(a[b+2]+=1),U<.2&&(a[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function f(b,T){const x=b*3;T.x=e[x+0],T.y=e[x+1],T.z=e[x+2]}function g(){const b=new O,T=new O,x=new O,U=new O,C=new Ne,A=new Ne,w=new Ne;for(let M=0,S=0;M<r.length;M+=9,S+=6){b.set(r[M+0],r[M+1],r[M+2]),T.set(r[M+3],r[M+4],r[M+5]),x.set(r[M+6],r[M+7],r[M+8]),C.set(a[S+0],a[S+1]),A.set(a[S+2],a[S+3]),w.set(a[S+4],a[S+5]),U.copy(b).add(T).add(x).divideScalar(3);const R=m(U);_(C,S+0,b,R),_(A,S+2,T,R),_(w,S+4,x,R)}}function _(b,T,x,U){U<0&&b.x===1&&(a[T]=b.x-1),x.x===0&&x.z===0&&(a[T]=U/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.vertices,e.indices,e.radius,e.details)}}class Ha extends za{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ha(e.radius,e.detail)}}class _i extends Gt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],d=[];let h=e;const u=(t-e)/i,f=new O,g=new Ne;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,d.push(g.x,g.y)}h+=u}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const b=p+m,T=b,x=b+n+1,U=b+n+2,C=b+1;o.push(T,x,C),o.push(x,U,C)}}this.setIndex(o),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Bi extends es{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vl,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const hc={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class xg{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){o++,r===!1&&i.onStart!==void 0&&i.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,i.onProgress!==void 0&&i.onProgress(d,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,h){return l.push(d,h),this},this.removeHandler=function(d){const h=l.indexOf(d);return h!==-1&&l.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=l.length;h<u;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null}}}const bg=new xg;class Va{constructor(e){this.manager=e!==void 0?e:bg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Va.DEFAULT_MATERIAL_NAME="__DEFAULT";class Mg extends Va{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=hc.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=ji("img");function c(){d(),hc.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){d(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Tg extends Va{constructor(e){super(e)}load(e,t,n,i){const r=new Et,a=new Mg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ga extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Er=new rt,uc=new O,fc=new O;class Fl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fa,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;uc.setFromMatrixPosition(e.matrixWorld),t.position.copy(uc),fc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fc),t.updateMatrixWorld(),Er.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Er),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Er)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const pc=new rt,zi=new O,Cr=new O;class Eg extends Fl{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),zi.setFromMatrixPosition(e.matrixWorld),n.position.copy(zi),Cr.copy(n.position),Cr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Cr),n.updateMatrixWorld(),i.makeTranslation(-zi.x,-zi.y,-zi.z),pc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pc)}}class mc extends Ga{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Eg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Cg extends Fl{constructor(){super(new Il(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ag extends Ga{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new Cg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Rg extends Ga{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wa);class Xi{texture;state="IDLE";frameCol=0;elapsed=0;facingRight=!0;static ROW_BY_STATE={IDLE:0,SPRINT:1,ACTION:2,STUNNED:3};static FPS_BY_STATE={IDLE:8,SPRINT:14,ACTION:12,STUNNED:12};constructor(e){this.texture=e,this.texture.wrapS=pn,this.texture.wrapT=pn,this.applyUV()}setState(e,t){const n=this.facingRight!==t;if(this.facingRight=t,this.state!==e){const i=this.state==="IDLE"||this.state==="SPRINT",r=e==="IDLE"||e==="SPRINT";this.state=e,(!i||!r)&&(this.frameCol=0,this.elapsed=0),this.applyUV()}else n&&this.applyUV()}update(e){const n=1/Xi.FPS_BY_STATE[this.state];if(this.elapsed+=e,this.elapsed>=n){const i=Math.floor(this.elapsed/n);this.elapsed-=i*n,this.state==="ACTION"?this.frameCol=Math.min(3,this.frameCol+i):this.frameCol=(this.frameCol+i)%4,this.applyUV()}}getCurrentRow(){return Xi.ROW_BY_STATE[this.state]}getCurrentCol(){return this.frameCol}applyUV(){const e=Xi.ROW_BY_STATE[this.state],t=this.frameCol,n=2/1024,i=.25-n*2,r=(3-e)*.25+n;this.facingRight?(this.texture.repeat.x=i,this.texture.offset.x=t*.25+n):(this.texture.repeat.x=-i,this.texture.offset.x=(t+1)*.25-n),this.texture.repeat.y=i,this.texture.offset.y=r}}class wg{container;scene;camera;renderer;textureLoader=new Tg;characterTextures=new Map;itemTextures=new Map;playerNodes=new Map;itemNodes=new Map;ballGroup;ballMesh;ballShadow;ballFireHalo;trailLength=22;trailPositions=[];trailMesh;fenceMaterials=[];fencePulseTime=0;sparks=[];sparkGeo=new _n(.22,.22,.22);camLookAt=new O(0,.5,0);shakeIntensity=0;shakeDirX=0;shakeDirZ=0;portraitPlayAnyway=!1;constructor(e){this.container=e,this.scene=new Sg,this.scene.background=new Ge("#090d18"),this.scene.fog=new Ba("#090d18",.0065),this.camera=new Bt(42,window.innerWidth/window.innerHeight,.5,260),this.camera.position.set(0,18.5,24.5),this.renderer=new vg({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=_t,this.container.appendChild(this.renderer.domElement),this.preloadItemTextures(),this.buildLighting(),this.buildTurfAndLines(),this.buildEnclosedWalledCageAndElectricFence(),this.buildGoals();const{ballGroup:t,ballMesh:n,ballShadow:i,ballFireHalo:r}=this.buildBall();this.ballGroup=t,this.ballMesh=n,this.ballShadow=i,this.ballFireHalo=r,this.trailMesh=this.buildBallRibbonTrail(),window.addEventListener("resize",()=>this.onResize()),this.onResize()}preloadItemTextures(){Object.keys(Rr).forEach(e=>{const t=this.textureLoader.load(Rr[e].iconUrl);t.colorSpace=_t,this.itemTextures.set(e,t)})}getCharacterBaseTexture(e){let t=this.characterTextures.get(e);if(!t){const n=Ns[e];t=this.textureLoader.load(n.spriteSheetUrl),t.colorSpace=_t,t.magFilter=Ot,t.minFilter=Ot,this.characterTextures.set(e,t)}return t}buildLighting(){const e=new Rg(14412031,1.15);this.scene.add(e);const t=new Ag(16774880,1.35);t.position.set(12,28,16),this.scene.add(t);const n=new mc(16724736,18,35);n.position.set(-Ue,5,0),this.scene.add(n);const i=new mc(58879,18,35);i.position.set(Ue,5,0),this.scene.add(i)}buildTurfAndLines(){const e=document.createElement("canvas");e.width=2048,e.height=1280;const t=e.getContext("2d"),n=18,i=e.width/n;for(let U=0;U<n;U++)t.fillStyle=U%2===0?"#1b6d2f":"#228239",t.fillRect(U*i,0,i+1,e.height);const r=t.createRadialGradient(e.width/2,e.height/2,e.height*.2,e.width/2,e.height/2,e.width*.65);r.addColorStop(0,"rgba(255,255,255,0.03)"),r.addColorStop(1,"rgba(0,0,0,0.28)"),t.fillStyle=r,t.fillRect(0,0,e.width,e.height);const a=76,o=68,c=e.width-a*2,l=e.height-o*2;t.strokeStyle="rgba(255, 255, 255, 0.92)",t.lineWidth=12,t.strokeRect(a,o,c,l),t.beginPath(),t.moveTo(e.width/2,o),t.lineTo(e.width/2,e.height-o),t.stroke(),t.beginPath(),t.arc(e.width/2,e.height/2,165,0,Math.PI*2),t.stroke(),t.fillStyle="#ffffff",t.beginPath(),t.arc(e.width/2,e.height/2,18,0,Math.PI*2),t.fill();const d=310,h=580;t.strokeRect(a,(e.height-h)/2,d,h),t.strokeRect(e.width-a-d,(e.height-h)/2,d,h);const u=135,f=340;t.strokeRect(a,(e.height-f)/2,u,f),t.strokeRect(e.width-a-u,(e.height-f)/2,u,f);const g=new yg(e);g.colorSpace=_t,g.anisotropy=8;const _=new fn(Ue*2+1.2,pt*2+1.2),m=new Bi({map:g,roughness:.78,metalness:.05}),p=new qe(_,m);p.rotation.x=-Math.PI/2,this.scene.add(p);const b=new fn(220,160),T=new xt({color:790813}),x=new qe(b,T);x.rotation.x=-Math.PI/2,x.position.y=-.05,this.scene.add(x)}buildEnclosedWalledCageAndElectricFence(){const e=new tn,t=2.4,n=new Bi({color:1581622,roughness:.4,metalness:.65}),i=new xt({color:3718648,transparent:!0,opacity:.12,side:gt}),r=(l,d,h,u,f=!1)=>{const g=Math.hypot(h-l,u-d),_=(l+h)/2,m=(d+u)/2,p=Math.atan2(u-d,h-l),b=new tn;b.position.set(_,0,m),b.rotation.y=-p;const T=f?.38:.75,x=new qe(new _n(g,T,.35),n);if(x.position.y=T/2,b.add(x),!f){const C=new qe(new fn(g,t-T),i);C.position.y=T+(t-T)/2,b.add(C)}(f?[.46,.75]:[.95,1.55,2.15]).forEach((C,A)=>{const w=new xt({color:A%2===0?61695:16763904});this.fenceMaterials.push(w);const M=new qe(new _n(g,.07,.09),w);M.position.y=C,b.add(M)}),e.add(b)};r(-Ue,-pt,Ue,-pt,!1),r(-Ue,pt,Ue,pt,!0),r(-Ue,-pt,-Ue,-bt,!1),r(-Ue,bt,-Ue,pt,!1),r(Ue,-pt,Ue,-bt,!1),r(Ue,bt,Ue,pt,!1);const a=new $i(.28,.32,2.8,12),o=new Bi({color:3359061,metalness:.8,roughness:.25});[[-Ue,-pt],[Ue,-pt],[-Ue,pt],[Ue,pt]].forEach(([l,d])=>{const h=new qe(a,o);h.position.set(l,1.4,d),e.add(h)}),this.scene.add(e)}buildGoals(){const e=t=>{const n=t==="home"?-1:1,i=n*Ue,r=t==="home"?16726832:58879,a=new tn,o=new Bi({color:16777215,emissive:r,emissiveIntensity:.35,roughness:.2,metalness:.5}),c=new $i(.16,.16,Rn,12),l=new qe(c,o);l.position.set(i,Rn/2,-bt),a.add(l);const d=new qe(c,o);d.position.set(i,Rn/2,bt),a.add(d);const h=new $i(.16,.16,bt*2+.3,12),u=new qe(h,o);u.rotation.x=Math.PI/2,u.position.set(i,Rn,0),a.add(u);const f=new _n(Qa,Rn,bt*2),g=new xt({color:r,wireframe:!0,transparent:!0,opacity:.32}),_=new qe(f,g);_.position.set(i+n*Qa/2,Rn/2,0),a.add(_),this.scene.add(a)};e("home"),e("away")}buildBall(){const e=new tn,t=new Ha(.45,2),n=new Bi({color:16777215,emissive:2236962,roughness:.25,metalness:.3}),i=new qe(t,n);e.add(i);const r=new zs(.52,20),a=new xt({color:0,transparent:!0,opacity:.48}),o=new qe(r,a);o.rotation.x=-Math.PI/2,o.position.y=.03,this.scene.add(o);const c=new _i(.5,.88,24),l=new xt({color:16724736,side:gt,transparent:!0,opacity:0}),d=new qe(c,l);return e.add(d),this.scene.add(e),{ballGroup:e,ballMesh:i,ballShadow:o,ballFireHalo:d}}buildBallRibbonTrail(){for(let a=0;a<this.trailLength;a++)this.trailPositions.push(new O(0,.45,0));const e=new Float32Array(this.trailLength*2*3),t=new Gt;t.setAttribute("position",new Jt(e,3));const n=[];for(let a=0;a<this.trailLength-1;a++){const o=a*2,c=o+1,l=o+2,d=o+3;n.push(o,c,l,c,d,l)}t.setIndex(n);const i=new xt({color:3718648,transparent:!0,opacity:.45,side:gt,depthWrite:!1}),r=new qe(t,i);return this.scene.add(r),r}ensurePlayerRenderNode(e){const t=this.playerNodes.get(e.id);if(t&&t.characterId===e.characterId)return t;t&&(this.scene.remove(t.group),this.playerNodes.delete(e.id));const n=new tn,i=new qe(new zs(.75,20),new xt({color:0,transparent:!0,opacity:.42,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.02,i.renderOrder=1,n.add(i);const r=mt[e.teamId].primaryColor,a=new qe(new _i(.72,.92,28),new xt({color:r,side:gt,transparent:!0,opacity:.85,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=.03,a.renderOrder=2,n.add(a);const o=new qe(new _i(.95,1.18,28),new xt({color:16772608,side:gt,transparent:!0,opacity:0,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.y=.04,o.renderOrder=3,n.add(o);const l=this.getCharacterBaseTexture(e.characterId).clone();l.colorSpace=_t,l.generateMipmaps=!1,l.minFilter=Ot,l.magFilter=Ot,l.needsUpdate=!0;const d=new Xi(l),h=new fn(2.75,2.75),u=new xt({map:l,transparent:!0,alphaTest:.25,depthWrite:!0,side:gt}),f=new qe(h,u);f.position.y=1.38,n.add(f),this.scene.add(n);const g={group:n,spriteMesh:f,shadowMesh:i,ringMesh:a,activeHaloMesh:o,animator:d,characterId:e.characterId};return this.playerNodes.set(e.id,g),g}spawnSparkBurst(e,t,n,i,r=14){for(let a=0;a<r;a++){const o=new xt({color:i,transparent:!0,opacity:1}),c=new qe(this.sparkGeo,o);c.position.set(e,t,n);const l=Math.random()*Math.PI*2,d=3+Math.random()*9;this.scene.add(c),this.sparks.push({mesh:c,vx:Math.cos(l)*d,vy:2+Math.random()*7,vz:Math.sin(l)*d,life:.35+Math.random()*.25,maxLife:.55})}}triggerCameraShake(e,t=0,n=0){this.shakeIntensity=Math.max(this.shakeIntensity,e),this.shakeDirX=t||(Math.random()-.5)*2,this.shakeDirZ=n||(Math.random()-.5)*2}setPortraitOverride(e){this.portraitPlayAnyway=e,this.onResize()}onResize(){const e=window.innerWidth,t=window.innerHeight,n=e/Math.max(1,t);this.camera.aspect=n,n<1||this.portraitPlayAnyway?this.camera.fov=Math.min(68,Math.max(46,38/Math.max(.52,n))):n<1.45?this.camera.fov=46:this.camera.fov=40,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}render(e,t){this.fencePulseTime+=t,this.fenceMaterials.forEach((i,r)=>{const a=.75+.25*Math.sin(this.fencePulseTime*8+r*1.7);r%2===0?i.color.setRGB(0,.85*a,1*a):i.color.setRGB(1*a,.78*a,.05)});for(const i of e.players){const r=this.ensurePlayerRenderNode(i);r.group.position.set(i.x,i.y,i.z),r.animator.setState(i.animState,i.facingRight),r.animator.update(t),r.spriteMesh.quaternion.copy(this.camera.quaternion),r.spriteMesh.scale.set(1,1,1),r.spriteMesh.renderOrder=10+Math.round((i.z+pt)*10);const a=i.id===e.activeHomePlayerId||i.id===e.activeAwayPlayerId;if(i.stunTimer>0)r.activeHaloMesh.material.color.setHex(61695),r.activeHaloMesh.material.opacity=.85;else if(i.turboTimer>0)r.activeHaloMesh.material.color.setHex(65416),r.activeHaloMesh.material.opacity=.9;else if(a){const o=i.teamSide==="home"?e.homeCharge:e.awayCharge;r.activeHaloMesh.material.color.setHex(o>=100?16758784:16777215),r.activeHaloMesh.material.opacity=.9}else r.activeHaloMesh.material.opacity=0}this.ballGroup.position.set(e.ball.x,e.ball.y,e.ball.z),this.ballMesh.rotation.x+=e.ball.vz*t*1.4,this.ballMesh.rotation.z-=e.ball.vx*t*1.4,this.ballShadow.position.set(e.ball.x,.03,e.ball.z);const n=Math.max(.45,1-(e.ball.y-.45)*.12);if(this.ballShadow.scale.set(n,n,1),e.ball.isFullChargeShot){this.ballFireHalo.material.opacity=.92,this.ballFireHalo.quaternion.copy(this.camera.quaternion);const i=1+Math.sin(this.fencePulseTime*35)*.22;this.ballFireHalo.scale.set(i,i,1),Math.random()<.65&&this.spawnSparkBurst(e.ball.x,e.ball.y,e.ball.z,16729344,2)}else this.ballFireHalo.material.opacity=0;this.updateBallTrail(e),this.updateFieldItems(e),this.updateSparks(t),this.updateCamera(e,t),this.renderer.render(this.scene,this.camera)}updateBallTrail(e){for(let r=this.trailLength-1;r>0;r--)this.trailPositions[r].copy(this.trailPositions[r-1]);this.trailPositions[0].set(e.ball.x,e.ball.y,e.ball.z);const t=this.trailMesh.geometry.getAttribute("position"),n=e.ball.isFullChargeShot?.46:.22;for(let r=0;r<this.trailLength;r++){const a=this.trailPositions[r],o=1-r/(this.trailLength-1),c=n*o;t.setXYZ(r*2,a.x,a.y+c,a.z),t.setXYZ(r*2+1,a.x,a.y-c,a.z)}t.needsUpdate=!0;const i=Math.hypot(e.ball.vx,e.ball.vz);e.ball.isFullChargeShot?(this.trailMesh.material.color.setHex(16724736),this.trailMesh.material.opacity=.85):i>10.5?(this.trailMesh.material.color.setHex(3718648),this.trailMesh.material.opacity=.45):this.trailMesh.material.opacity=.12}updateFieldItems(e){const t=new Set(e.fieldItems.map(n=>n.uid));for(const[n,i]of this.itemNodes.entries())t.has(n)||(this.scene.remove(i.group),this.itemNodes.delete(n));for(const n of e.fieldItems){let i=this.itemNodes.get(n.uid);if(!i){const r=new tn,a=this.itemTextures.get(n.itemId),o=new qe(new fn(1.75,1.75),new xt({map:a,transparent:!0,alphaTest:.05,side:gt}));o.position.y=.9,r.add(o);const c=n.itemId==="item_pillow"?12978974:n.itemId==="item_bratwurst"?16763904:58879,l=new qe(new _i(Math.max(.4,n.radius-.25),n.radius,32),new xt({color:c,side:gt,transparent:!0,opacity:.65}));l.rotation.x=-Math.PI/2,l.position.y=.04,r.add(l),this.scene.add(r),i={group:r,spriteMesh:o,auraRing:l},this.itemNodes.set(n.uid,i)}i.group.position.set(n.x,0,n.z),i.spriteMesh.position.y=Math.max(.75,n.y),i.spriteMesh.quaternion.copy(this.camera.quaternion)}}updateSparks(e){const t=[];for(const n of this.sparks){if(n.life-=e,n.life<=0){this.scene.remove(n.mesh),n.mesh.material.dispose();continue}n.mesh.position.x+=n.vx*e,n.mesh.position.y+=n.vy*e,n.mesh.position.z+=n.vz*e,n.vy-=16*e,n.mesh.material.opacity=Math.max(0,n.life/n.maxLife),t.push(n)}this.sparks=t}updateCamera(e,t){const n=Math.max(-30,Math.min(Ue-6,e.ball.x)),i=Math.max(-18,Math.min(pt-4,e.ball.z));this.camLookAt.x+=(n-this.camLookAt.x)*Math.min(1,t*8),this.camLookAt.z+=(i-this.camLookAt.z)*Math.min(1,t*8);const r=Math.abs(e.ball.x)>Ue-8&&Math.abs(e.ball.z)<bt+3,a=e.ball.isFullChargeShot?.84:r?.91:1,c=window.innerWidth/Math.max(1,window.innerHeight)<1||this.portraitPlayAnyway?1.28:1,l=this.camLookAt.x,d=18*a*c,h=this.camLookAt.z+23.5*a*c;if(this.camera.position.x+=(l-this.camera.position.x)*Math.min(1,t*7.5),this.camera.position.y+=(d-this.camera.position.y)*Math.min(1,t*6.5),this.camera.position.z+=(h-this.camera.position.z)*Math.min(1,t*7.5),this.shakeIntensity>.005){const u=(Math.random()-.5)*this.shakeIntensity+this.shakeDirX*this.shakeIntensity*.5,f=(Math.random()-.5)*this.shakeIntensity,g=this.shakeDirZ*this.shakeIntensity*.35;this.camera.position.x+=u,this.camera.position.y+=f,this.camera.position.z+=g,this.shakeIntensity*=Math.pow(.015,t)}else this.shakeIntensity=0;this.camera.lookAt(this.camLookAt.x,.4,this.camLookAt.z)}}const Pg="modulepreload",Ig=function(s,e){return new URL(s,e).href},gc={},Dg=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");i=Promise.allSettled(t.map(l=>{if(l=Ig(l,n),l in gc)return;gc[l]=!0;const d=l.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(!!n)for(let g=a.length-1;g>=0;g--){const _=a[g];if(_.href===l&&(!d||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${h}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":Pg,d||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),d)return new Promise((g,_)=>{f.addEventListener("load",g),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};class Lg{root;input;net;config;onStartMatch;onInputAssignmentChange;onPortraitPlayAnyway;hudHomeNameEl;hudAwayNameEl;hudScoreHomeEl;hudScoreAwayEl;hudClockEl;hudModeSubEl;hudHomeChargeFill;hudAwayChargeFill;hudHomeChargeText;hudAwayChargeText;hudHomeItemBox;hudAwayItemBox;btnMusicToggle;btnSoundToggle;btnOpenMenu;bannerToastEl;ostSelectEl;chkMusicEnabledEl;ostClimaxBannerEl;menuPauseBadgeEl;mainMenuDialog;sideSelectDialog;inspectSquadDialog;lanLobbyDialog;boxScoreDialog;portraitOverlayEl;portraitDismissed=!1;inspectPreviewRow=0;activePreviews=[];previewAnimHandle=0;lastPreviewTick=0;constructor(e,t,n){this.root=e,this.input=t,this.net=n,this.config={homeTeamId:"spain",awayTeamId:"france",mode:"timed",durationSeconds:180,targetScore:5,isMultiplayer:!1,localSide:"home",homeInputSource:this.input.getDefaultInputSourceForHome(),awayInputSource:"cpu"},typeof HTMLInputElement<"u"&&!("switch"in HTMLInputElement.prototype)&&Dg(()=>import("./input-switch-polyfill-B34Wr1l0.js"),[],import.meta.url).catch(()=>{}),this.buildDOM(),this.startPreviewLoop(),this.checkOrientation(),window.addEventListener("resize",()=>this.checkOrientation()),this.input.onDevicesChanged=()=>{this.validateInputAssignments(),this.renderTeamSelectCards(),this.sideSelectDialog.open&&this.renderSideSelectModal()},this.input.onSideSelectNudge=(i,r)=>{this.sideSelectDialog.open&&this.handleDeviceNudge(i,r)}}buildDOM(){this.root.innerHTML=`
      <!-- LANDSCAPE ORIENTATION HELPER OVERLAY -->
      <div id="portrait-helper" class="portrait-helper hidden" role="dialog" aria-label="Orientation Notice">
        <div class="portrait-card">
          <div class="portrait-icon">📱↻</div>
          <h2>ROTATE TO LANDSCAPE</h2>
          <p>World Strikers is designed for widescreen sideline action. Rotate your device for the best arcade view, or tap below to play in portrait with auto-widened camera FOV.</p>
          <button id="btn-play-anyway" class="arcade-cta-btn">PLAY ANYWAY (AUTO-FOV)</button>
        </div>
      </div>

      <!-- TOP BROADCAST SCOREBOARD & CHARGE HUD -->
      <header class="top-broadcast-hud">
        <div class="team-hud-panel home-panel">
          <div class="team-header-row">
            <span id="hud-home-name" class="team-badge-name">🇪🇸 SPAIN</span>
            <div id="hud-home-item" class="held-item-pill" title="Held Team Item">
              <span class="item-placeholder">NO ITEM</span>
            </div>
          </div>
          <div class="charge-meter-wrap">
            <div class="charge-meter-track">
              <div id="hud-home-charge-fill" class="charge-meter-fill home-fill" style="width: 0%"></div>
            </div>
            <span id="hud-home-charge-text" class="charge-meter-label">CHARGE 0%</span>
          </div>
        </div>

        <div class="center-scoreboard">
          <div class="score-digits">
            <span id="hud-score-home" class="score-num">0</span>
            <span class="score-sep">:</span>
            <span id="hud-score-away" class="score-num">0</span>
          </div>
          <div id="hud-clock" class="match-clock">03:00</div>
          <div id="hud-mode-sub" class="match-mode-sub">TIMED MATCH</div>
        </div>

        <div class="team-hud-panel away-panel">
          <div class="team-header-row away-row">
            <div id="hud-away-item" class="held-item-pill" title="Held Team Item">
              <span class="item-placeholder">NO ITEM</span>
            </div>
            <span id="hud-away-name" class="team-badge-name">🇫🇷 FRANCE</span>
          </div>
          <div class="charge-meter-wrap">
            <div class="charge-meter-track">
              <div id="hud-away-charge-fill" class="charge-meter-fill away-fill" style="width: 0%"></div>
            </div>
            <span id="hud-away-charge-text" class="charge-meter-label">CHARGE 0%</span>
          </div>
        </div>

        <div class="hud-utility-bar">
          <button id="btn-music-toggle" class="hud-util-btn demo-locked-btn" type="button" aria-disabled="true">🎵 OST: ON</button>
          <button id="btn-sound-toggle" class="hud-util-btn demo-locked-btn" type="button" aria-disabled="true">🔒 SFX: ON</button>
          <button id="btn-open-menu" class="hud-util-btn menu-btn" type="button">⏸️ PAUSE / MENU</button>
        </div>
      </header>

      <!-- PERSISTENT SMALL ON-SCREEN DEMO VERSION DISCLAIMER (WEB DEMO ONLY) -->
      <div id="demo-hud-disclaimer" class="demo-hud-disclaimer " role="note" aria-label="Demo Version Disclaimer">
        <span class="demo-badge-tag">⚠️ DEMO VERSION</span>
        <span class="demo-badge-text">This is the Web Playable Demo (Fixed Matchup: Spain vs. France • 1P vs. CPU • Locked Options &amp; No Multiplayer). Download the Full Build / Android APK for all 4 Teams, Local 2P, Online Room Codes &amp; Custom Options!</span>
      </div>

      <!-- ROCKET LEAGUE-STYLE BOTTOM-LEFT EVENT / QUICK-CHAT FEED -->
      <div id="arcade-toast" class="rl-event-feed" aria-live="polite"></div>

      <!-- ERGONOMIC MOBILE TOUCH CONTROLS (JOYSTICK + 4-BUTTON DIAMOND CLUSTER) -->
      <div id="touch-controls-root" class="touch-controls-root">
        <div class="joystick-zone">
          <div id="virtual-joystick-base" class="virtual-joystick-base">
            <div class="joystick-crosshair"></div>
            <div id="virtual-joystick-knob" class="virtual-joystick-knob"></div>
          </div>
        </div>

        <div class="arcade-diamond-cluster">
          <!-- TOP: ITEM -->
          <button id="btn-touch-item" class="diamond-btn diamond-top" type="button">
            <span class="btn-main-label">ITEM</span>
            <span class="btn-sub-label">EMPTY</span>
          </button>
          <!-- LEFT: PASS / SWITCH -->
          <button id="btn-touch-pass" class="diamond-btn diamond-left" type="button">
            <span class="btn-main-label">PASS</span>
            <span class="btn-sub-label">HOLD: LOB</span>
          </button>
          <!-- RIGHT: SHOOT / TACKLE / SUPER SHOT -->
          <button id="btn-touch-shoot" class="diamond-btn diamond-right" type="button">
            <span class="btn-main-label">SHOOT</span>
            <span class="btn-sub-label">HOLD: CHARGE</span>
          </button>
          <!-- BOTTOM: DODGE -->
          <button id="btn-touch-dodge" class="diamond-btn diamond-bottom" type="button">
            <span class="btn-main-label">DODGE</span>
            <span class="btn-sub-label">DASH +15%</span>
          </button>
        </div>
      </div>

      <!-- MAIN MENU MODAL DIALOG -->
      <dialog id="main-menu-dialog" class="arcade-dialog">
        <div class="modal-card">
          <div class="modal-header">
            <div>
              <span class="modal-eyebrow">WEB PLAYABLE DEMO • 2.5D WALLED CAGE ARCADE SOCCER</span>
              <h1 class="modal-title">WORLD STRIKERS <span class="demo-title-chip">DEMO VERSION</span></h1>
            </div>
            <div class="modal-header-right">
              <span id="menu-pause-status-badge" class="pause-status-badge">⏸️ PAUSED (VS BOTS)</span>
              <button id="btn-resume-match" class="modal-close-btn" type="button">RESUME ✕</button>
            </div>
          </div>

          <div id="demo-menu-disclaimer" class="demo-menu-disclaimer " role="note">
            <span class="demo-badge-tag">⚠️ DEMO DISCLAIMER</span>
            <span>You are playing the <strong>Web Playable Demo Version</strong>. Team switching (locked to 🇪🇸 Spain vs. 🇫🇷 France), Local/Online Multiplayer, and Match/OST Options are disabled in this demo. Download the <strong>Full Game or Android APK</strong> on itch.io to unlock all 4 Teams, 2P Multiplayer &amp; Full Options!</span>
          </div>

          <div class="team-select-grid">
            <!-- HOME TEAM CARD -->
            <div class="team-select-box" id="home-select-box">
              <div class="team-box-label">HOME SQUAD (P1) — 🔒 DEMO LOCKED</div>
              <div class="team-pills-row" id="home-team-pills"></div>
              <div id="home-controlled-by" class="controlled-by-box"></div>
              <div id="home-team-summary" class="team-summary-card"></div>
              <button id="btn-inspect-home" class="secondary-arcade-btn" type="button">🔍 INSPECT HOME SQUAD (16-FRAME)</button>
            </div>

            <!-- VS DIVIDER -->
            <div class="vs-badge-column">
              <div class="vs-medallion">VS</div>
              <button id="btn-side-select-center" class="side-select-mini-btn demo-locked-btn" type="button" aria-disabled="true" title="Locked in Demo Version">
                🔒 SIDES
              </button>
            </div>

            <!-- AWAY TEAM CARD -->
            <div class="team-select-box" id="away-select-box">
              <div class="team-box-label">AWAY SQUAD (CPU BOT) — 🔒 DEMO LOCKED</div>
              <div class="team-pills-row" id="away-team-pills"></div>
              <div id="away-controlled-by" class="controlled-by-box"></div>
              <div id="away-team-summary" class="team-summary-card"></div>
              <button id="btn-inspect-away" class="secondary-arcade-btn" type="button">🔍 INSPECT AWAY SQUAD (16-FRAME)</button>
            </div>
          </div>

          <!-- MUTUALLY EXCLUSIVE GAME MODE SELECTOR -->
          <div class="mode-config-section demo-section-locked">
            <div class="demo-section-lock-tag">🔒 DEMO VERSION: MATCH RULES LOCKED TO 3:00 TIMED MATCH</div>
            <div class="mode-tabs-row" role="tablist">
              <button id="tab-mode-timed" class="mode-tab active" type="button" data-mode="timed" aria-disabled="true">
                ⏱️ TIMED MATCH (DEFAULT)
              </button>
              <button id="tab-mode-target" class="mode-tab demo-locked-btn" type="button" data-mode="target_score" aria-disabled="true">
                🔒 TARGET SCORE (FULL VERSION)
              </button>
            </div>

            <!-- TIMED MATCH OPTIONS -->
            <div id="panel-mode-timed" class="mode-subpanel">
              <span class="subpanel-label">Match Clock (Tie at 0:00 triggers Sudden Death Golden Goal):</span>
              <div class="option-pills" id="timed-duration-pills">
                <button type="button" class="opt-pill demo-locked-pill" data-sec="120" aria-disabled="true">🔒 2:00 FAST</button>
                <button type="button" class="opt-pill active" data-sec="180" aria-disabled="true">3:00 STANDARD</button>
                <button type="button" class="opt-pill demo-locked-pill" data-sec="300" aria-disabled="true">🔒 5:00 MARATHON</button>
              </div>
            </div>

            <!-- TARGET SCORE OPTIONS -->
            <div id="panel-mode-target" class="mode-subpanel hidden">
              <span class="subpanel-label">First Team to Reach Target Goals Immediately Wins:</span>
              <div class="option-pills" id="target-score-pills">
                <button type="button" class="opt-pill active" data-goals="5" aria-disabled="true">FIRST TO 5 GOALS</button>
                <button type="button" class="opt-pill demo-locked-pill" data-goals="10" aria-disabled="true">FIRST TO 10 GOALS</button>
              </div>
            </div>
          </div>

          <!-- SYNTHESIZER WORLD CUP SOUNDTRACK (OST) SELECTOR & TOGGLE -->
          <div class="ost-config-section demo-section-locked">
            <div class="demo-section-lock-tag">🔒 DEMO VERSION: SOUNDTRACK &amp; AUDIO OPTIONS LOCKED</div>
            <div class="ost-header-row">
              <div class="ost-picker-group">
                <label for="select-ost-track" class="subpanel-label">🎹 World Cup Synth OST:</label>
                <select class="ost-select" id="select-ost-track" name="ostTrack" disabled>
                  <button>
                    <selectedcontent></selectedcontent>
                  </button>
                  ${Ar.map(e=>`<option value="${e.id}">🎵 ${e.title} (${e.bpm} BPM)</option>`).join("")}
                </select>
              </div>
              <label class="ost-switch-label demo-locked-pill" for="chk-music-enabled">
                <span>🔒 Soundtrack Locked</span>
                <input id="chk-music-enabled" type="checkbox" switch checked disabled />
              </label>
            </div>

            <div class="option-pills ost-pills-row" id="ost-track-pills">
              ${Ar.map((e,t)=>`<button type="button" class="opt-pill ost-track-pill ${t>0?"demo-locked-pill":""}" data-ost="${e.id}" aria-disabled="true">${t>0?"🔒":"🎵"} ${e.shortTitle} (${e.bpm} BPM)</button>`).join("")}
            </div>

            <div id="ost-climax-banner" class="ost-climax-banner">
              🔥 <strong>FINAL MINUTE / MATCH POINT OVERDRIVE:</strong> <em>"${Mt.climax_overdrive.title} (${Mt.climax_overdrive.bpm} BPM)"</em>
            </div>
          </div>

          <div class="controls-cheat-sheet">
            <span><strong>Desktop:</strong> WASD/Arrows Move • <kbd>J</kbd>/<kbd>Space</kbd> Pass/Switch (Hold=Lob) • <kbd>K</kbd>/<kbd>Enter</kbd> Shoot/Tackle (Hold=Full-Charge, or Tap at 100% Meter!) • <kbd>L</kbd>/<kbd>Shift</kbd> Dodge • <kbd>I</kbd>/<kbd>E</kbd> Use Item • <kbd>Esc</kbd>/<kbd>P</kbd> Pause</span>
          </div>

          <div class="modal-footer-actions">
            <div class="footer-left-btns">
              <button id="btn-open-side-select" class="secondary-arcade-btn side-select-cta-btn demo-locked-btn" type="button" aria-disabled="true">🔒 LOCAL 2P (DEMO LOCKED)</button>
              <button id="btn-open-lan" class="secondary-arcade-btn demo-locked-btn" type="button" aria-disabled="true">🔒 ONLINE / LAN (DEMO LOCKED)</button>
            </div>
            <button id="btn-kickoff" class="arcade-cta-btn kickoff-btn" type="button">⚡ KICK OFF MATCH!</button>
          </div>
        </div>
      </dialog>

      <!-- ARCADE SIDE-SELECT / CONTROLLER DISTRIBUTION MODAL -->
      <dialog id="side-select-dialog" class="arcade-dialog">
        <div class="modal-card side-select-modal-card">
          <div class="modal-header">
            <div>
              <span class="modal-eyebrow">DYNAMIC HARDWARE INPUT DETECTION • LOCAL 1P / 2P</span>
              <h2 class="modal-title">ASSIGN CONTROLLERS & SIDES</h2>
            </div>
            <button id="btn-close-side-select" class="modal-close-btn" type="button">DONE ✕</button>
          </div>

          <div class="side-select-instructions">
            Nudge <strong>◀ Left / Right ▶</strong> on any connected controller or keyboard, or click a button below to assign it to <strong>HOME (P1)</strong> or <strong>AWAY (P2)</strong>. Only hardware currently detected on your device is shown.
          </div>

          <div class="side-select-grid">
            <!-- LEFT: HOME P1 -->
            <div class="side-column home-side-col">
              <div class="side-col-header" id="side-col-home-title">🇪🇸 HOME (P1)</div>
              <div id="side-slot-home" class="side-slot-body"></div>
            </div>

            <!-- CENTER: UNASSIGNED POOL -->
            <div class="side-column center-side-col">
              <div class="side-col-header">DETECTED INPUTS (CENTER)</div>
              <div id="side-slot-center" class="side-slot-body"></div>
            </div>

            <!-- RIGHT: AWAY P2 -->
            <div class="side-column away-side-col">
              <div class="side-col-header" id="side-col-away-title">🇫🇷 AWAY (P2)</div>
              <div id="side-slot-away" class="side-slot-body"></div>
            </div>
          </div>

          <div class="modal-footer-actions">
            <button id="btn-side-reset-cpu" class="secondary-arcade-btn" type="button">🤖 SET P2 TO CPU BOT</button>
            <button id="btn-side-confirm" class="arcade-cta-btn" type="button">✓ CONFIRM SIDES</button>
          </div>
        </div>
      </dialog>

      <!-- INSPECT SQUAD DRAWER / MODAL -->
      <dialog id="inspect-squad-dialog" class="arcade-dialog">
        <div class="modal-card inspect-modal-card">
          <div class="modal-header">
            <div>
              <span class="modal-eyebrow">LIVE 16-FRAME (4x4) UV SPRITE INSPECTOR</span>
              <h2 id="inspect-team-title" class="modal-title">SQUAD ROSTER</h2>
            </div>
            <button id="btn-close-inspect" class="modal-close-btn" type="button">BACK ✕</button>
          </div>

          <div class="anim-row-selector">
            <span class="subpanel-label">Preview Animation Row:</span>
            <button type="button" class="opt-pill inspect-row-btn active" data-row="0">Row 1: IDLE (8 FPS)</button>
            <button type="button" class="opt-pill inspect-row-btn" data-row="1">Row 2: SPRINT (14 FPS)</button>
            <button type="button" class="opt-pill inspect-row-btn" data-row="2">Row 3: KICK / DIVE (12 FPS)</button>
            <button type="button" class="opt-pill inspect-row-btn" data-row="3">Row 4: STUN / X-RAY (12 FPS)</button>
          </div>

          <div id="inspect-players-grid" class="inspect-players-grid"></div>
        </div>
      </dialog>

      <!-- ONLINE & LAN MULTIPLAYER LOBBY MODAL -->
      <dialog id="lan-lobby-dialog" class="arcade-dialog">
        <div class="modal-card lan-modal-card">
          <div class="modal-header">
            <div>
              <span class="modal-eyebrow">CROSS-NETWORK WEBRTC (STUN/TURN) & LOCAL LAN RELAY</span>
              <h2 class="modal-title">ONLINE & LAN MULTIPLAYER LOBBY</h2>
            </div>
            <button id="btn-close-lan" class="modal-close-btn" type="button">BACK ✕</button>
          </div>

          <div id="lan-status-banner" class="lan-status-banner">Status: Offline (Local Mode — Single Player or Local 2P)</div>

          <div class="lan-columns">
            <div class="lan-box">
              <h3>OPTION A: 4-DIGIT ROOM CODE (ONLINE & LAN)</h3>
              <p>Works across <strong>different networks</strong> (via WebRTC STUN/TURN NAT traversal) as well as the <strong>same Wi-Fi/LAN</strong>, including directly on itch.io!</p>
              <div class="lan-action-row">
                <button id="btn-host-room" class="arcade-cta-btn" type="button">HOST 4-DIGIT ROOM</button>
                <span id="host-room-code-display" class="room-code-badge">----</span>
              </div>
              <div class="lan-action-row">
                <input id="input-join-code" class="arcade-input" type="text" maxlength="4" placeholder="Enter 4-Digit Code (e.g. 4829)" />
                <button id="btn-join-room" class="secondary-arcade-btn" type="button">JOIN ROOM</button>
              </div>
            </div>

            <div class="lan-box">
              <h3>OPTION B: DIRECT WEBSOCKET RELAY</h3>
              <p>Optional custom WebSocket relay server (use <code>wss://</code> on HTTPS sites or <code>ws://</code> on local LAN builds).</p>
              <div class="lan-action-row">
                <input id="input-ws-url" class="arcade-input" type="text" placeholder="ws://192.168.1.10:8080" value="ws://localhost:8080" />
              </div>
              <div class="lan-action-row">
                <button id="btn-ws-host" class="secondary-arcade-btn" type="button">CONNECT AS HOST</button>
                <button id="btn-ws-client" class="secondary-arcade-btn" type="button">CONNECT AS CLIENT</button>
              </div>
            </div>
          </div>

          <div class="modal-footer-actions">
            <button id="btn-lan-disconnect" class="secondary-arcade-btn" type="button">SWITCH TO LOCAL / CPU MODE</button>
            <button id="btn-lan-start" class="arcade-cta-btn" type="button">LAUNCH MATCH</button>
          </div>
        </div>
      </dialog>

      <!-- POST-MATCH PLAYER STATS BOX SCORE MODAL -->
      <dialog id="box-score-dialog" class="arcade-dialog">
        <div class="modal-card box-score-modal-card">
          <div class="modal-header">
            <div>
              <span id="box-score-eyebrow" class="modal-eyebrow">WEB PLAYABLE DEMO — OFFICIAL MATCH REPORT</span>
              <h2 id="box-score-winner-title" class="modal-title">MATCH COMPLETE</h2>
            </div>
            <div id="box-score-final-tally" class="final-tally-badge">0 - 0</div>
          </div>

          <div class="demo-menu-disclaimer " role="note">
            <span class="demo-badge-tag">⚠️ DEMO VERSION</span>
            <span>Thanks for playing the <strong>World Strikers Web Demo</strong>! Download the <strong>Full Version or Android APK</strong> on itch.io to unlock all 4 National Squads, Local 2P, Online 4-Digit Room Codes &amp; Custom Match Options!</span>
          </div>

          <!-- MATCH MVP SPOTLIGHT -->
          <div id="mvp-spotlight-banner" class="mvp-spotlight-banner"></div>

          <!-- RESPONSIVE SCROLLABLE SEMANTIC TABLE -->
          <div tabindex="0" role="region" aria-labelledby="box-score-caption" class="table-wrapper">
            <table class="box-score-table">
              <caption id="box-score-caption" class="sr-only">Post-Match Individual Player Statistics for all 8 players</caption>
              <thead>
                <tr>
                  <th scope="col">PLAYER</th>
                  <th scope="col">TEAM</th>
                  <th scope="col">ROLE</th>
                  <th scope="col">GOALS</th>
                  <th scope="col">SHOTS</th>
                  <th scope="col">TACKLES</th>
                  <th scope="col">PASSES</th>
                </tr>
              </thead>
              <tbody id="box-score-tbody"></tbody>
            </table>
          </div>

          <div class="modal-footer-actions">
            <button id="btn-box-menu" class="secondary-arcade-btn" type="button">🏠 MAIN MENU</button>
            <button id="btn-box-rematch" class="arcade-cta-btn" type="button">🔄 INSTANT REMATCH!</button>
          </div>
        </div>
      </dialog>
    `,this.hudHomeNameEl=this.root.querySelector("#hud-home-name"),this.hudAwayNameEl=this.root.querySelector("#hud-away-name"),this.hudScoreHomeEl=this.root.querySelector("#hud-score-home"),this.hudScoreAwayEl=this.root.querySelector("#hud-score-away"),this.hudClockEl=this.root.querySelector("#hud-clock"),this.hudModeSubEl=this.root.querySelector("#hud-mode-sub"),this.hudHomeChargeFill=this.root.querySelector("#hud-home-charge-fill"),this.hudAwayChargeFill=this.root.querySelector("#hud-away-charge-fill"),this.hudHomeChargeText=this.root.querySelector("#hud-home-charge-text"),this.hudAwayChargeText=this.root.querySelector("#hud-away-charge-text"),this.hudHomeItemBox=this.root.querySelector("#hud-home-item"),this.hudAwayItemBox=this.root.querySelector("#hud-away-item"),this.btnMusicToggle=this.root.querySelector("#btn-music-toggle"),this.btnSoundToggle=this.root.querySelector("#btn-sound-toggle"),this.btnOpenMenu=this.root.querySelector("#btn-open-menu"),this.bannerToastEl=this.root.querySelector("#arcade-toast"),this.ostSelectEl=this.root.querySelector("#select-ost-track"),this.chkMusicEnabledEl=this.root.querySelector("#chk-music-enabled"),this.ostClimaxBannerEl=this.root.querySelector("#ost-climax-banner"),this.menuPauseBadgeEl=this.root.querySelector("#menu-pause-status-badge"),this.mainMenuDialog=this.root.querySelector("#main-menu-dialog"),this.sideSelectDialog=this.root.querySelector("#side-select-dialog"),this.inspectSquadDialog=this.root.querySelector("#inspect-squad-dialog"),this.lanLobbyDialog=this.root.querySelector("#lan-lobby-dialog"),this.boxScoreDialog=this.root.querySelector("#box-score-dialog"),this.portraitOverlayEl=this.root.querySelector("#portrait-helper"),this.input.mountTouchControls(this.root.querySelector("#touch-controls-root"),this.root.querySelector("#virtual-joystick-base"),this.root.querySelector("#virtual-joystick-knob"),this.root.querySelector("#btn-touch-pass"),this.root.querySelector("#btn-touch-shoot"),this.root.querySelector("#btn-touch-dodge"),this.root.querySelector("#btn-touch-item")),this.syncTouchHudState(),this.syncOstControls(),et.onOstStateChange=()=>this.syncOstControls(),et.onTrackAutoAdvance=e=>{et.musicEnabled&&this.showToast(`🎵 Now Playing: ${e.title}`,2400)},this.bindUIEvents(),this.renderTeamSelectCards(),this.openMainMenu()}syncTouchHudState(){this.input.syncTouchHudForAssignments(this.config.homeInputSource,this.config.awayInputSource),this.bannerToastEl.classList.toggle("above-joystick",this.input.touchHudVisible)}validateInputAssignments(){let e=!1;{const t=this.input.getDefaultInputSourceForHome();this.config.homeInputSource!==t&&(this.config.homeInputSource=t,e=!0),this.config.awayInputSource!=="cpu"&&(this.config.awayInputSource="cpu",e=!0)}e&&(this.syncTouchHudState(),this.onInputAssignmentChange?.(this.config.homeInputSource,this.config.awayInputSource))}setSideInputSource(e,t){{this.showToast("🔒 DEMO VERSION: Local 2P & controller side switching are only available in the Full Version!",2600);return}}handleDeviceNudge(e,t){}syncOstControls(){const e=et.musicEnabled,t=et.isClimaxOverdriveLocked(),n=et.getSelectedOst(),i=et.getEffectiveTrackMeta();this.btnMusicToggle.textContent=`🔒 OST: ${t?"OVERDRIVE 🔥":i.shortTitle}`,this.btnMusicToggle.classList.toggle("active-util",e&&!Xs),this.btnMusicToggle.classList.toggle("climax-locked-btn",e&&t),this.chkMusicEnabledEl.checked=e,this.chkMusicEnabledEl.disabled=Xs,this.ostSelectEl.value=n,this.ostSelectEl.disabled=t||Xs,this.root.querySelectorAll("#ost-track-pills .ost-track-pill").forEach(r=>{const a=r.dataset.ost;r.classList.toggle("active",a===n&&!t)}),t?(this.ostClimaxBannerEl.classList.add("climax-active"),this.ostClimaxBannerEl.innerHTML=`🔥 <strong>FINAL MINUTE / MATCH POINT OVERDRIVE:</strong> Now playing <em>"${Mt.climax_overdrive.title} (${Mt.climax_overdrive.bpm} BPM)"</em>`):(this.ostClimaxBannerEl.classList.remove("climax-active"),this.ostClimaxBannerEl.innerHTML=`🔥 <strong>FINAL MINUTE / MATCH POINT OVERDRIVE:</strong> <em>"${Mt.climax_overdrive.title} (${Mt.climax_overdrive.bpm} BPM)"</em>`)}bindUIEvents(){this.root.querySelector("#btn-play-anyway").addEventListener("click",()=>{this.portraitDismissed=!0,this.portraitOverlayEl.classList.add("hidden"),this.onPortraitPlayAnyway?.(!0)}),this.btnMusicToggle.addEventListener("click",()=>{{this.showToast("🔒 DEMO VERSION: Audio & soundtrack options are locked in the Web Demo!",2400);return}}),this.btnSoundToggle.addEventListener("click",()=>{{this.showToast("🔒 DEMO VERSION: Audio & SFX options are locked in the Web Demo!",2400);return}}),this.btnOpenMenu.addEventListener("click",()=>{this.openMainMenu()}),this.root.querySelector("#btn-resume-match").addEventListener("click",()=>{this.closeDialog(this.mainMenuDialog)});const e=()=>{{this.showToast("🔒 DEMO VERSION: Local 2P & Controller Assignment are only available in the Full Version!",2600);return}};this.root.querySelector("#btn-open-side-select").addEventListener("click",e),this.root.querySelector("#btn-side-select-center").addEventListener("click",e),this.root.querySelector("#btn-close-side-select").addEventListener("click",()=>{this.closeDialog(this.sideSelectDialog)}),this.root.querySelector("#btn-side-confirm").addEventListener("click",()=>{this.closeDialog(this.sideSelectDialog)}),this.root.querySelector("#btn-side-reset-cpu").addEventListener("click",()=>{this.setSideInputSource("away","cpu")}),this.chkMusicEnabledEl.addEventListener("change",()=>{{this.chkMusicEnabledEl.checked=!0,this.showToast("🔒 DEMO VERSION: Soundtrack options are locked in the Web Demo!",2400);return}}),this.ostSelectEl.addEventListener("change",()=>{{this.ostSelectEl.value=et.getSelectedOst(),this.showToast("🔒 DEMO VERSION: Custom OST selection is locked in the Web Demo!",2400);return}}),this.root.querySelectorAll("#ost-track-pills .ost-track-pill").forEach(a=>{a.addEventListener("click",o=>{{this.showToast("🔒 DEMO VERSION: Custom OST track selection is available in the Full Version!",2400);return}})}),window.addEventListener("keydown",a=>{if(a.code==="KeyP"||a.code==="Escape"){const o=document.activeElement?.tagName;if(o==="INPUT"||o==="SELECT"||this.sideSelectDialog.open||this.inspectSquadDialog.open||this.lanLobbyDialog.open||this.boxScoreDialog.open)return;a.code==="KeyP"?(a.preventDefault(),this.mainMenuDialog.open?this.closeDialog(this.mainMenuDialog):this.openMainMenu()):a.code==="Escape"&&!this.mainMenuDialog.open&&(a.preventDefault(),this.openMainMenu())}}),this.root.querySelector("#btn-inspect-home").addEventListener("click",()=>{this.openInspectSquad(this.config.homeTeamId)}),this.root.querySelector("#btn-inspect-away").addEventListener("click",()=>{this.openInspectSquad(this.config.awayTeamId)}),this.root.querySelector("#btn-close-inspect").addEventListener("click",()=>{this.closeDialog(this.inspectSquadDialog)}),this.root.querySelectorAll(".inspect-row-btn").forEach(a=>{a.addEventListener("click",o=>{const c=o.currentTarget;this.inspectPreviewRow=Number(c.dataset.row||0),this.root.querySelectorAll(".inspect-row-btn").forEach(l=>l.classList.remove("active")),c.classList.add("active");for(const l of this.activePreviews)l.row=this.inspectPreviewRow})});const t=this.root.querySelector("#tab-mode-timed"),n=this.root.querySelector("#tab-mode-target");this.root.querySelector("#panel-mode-timed"),this.root.querySelector("#panel-mode-target");const i=a=>{{this.showToast("🔒 DEMO VERSION: Match mode & rules are locked to 3:00 Timed Match in the Web Demo!",2600);return}};t.addEventListener("click",()=>i()),n.addEventListener("click",()=>i()),this.root.querySelectorAll("#timed-duration-pills .opt-pill").forEach(a=>{a.addEventListener("click",o=>{{this.showToast("🔒 DEMO VERSION: Match duration is locked to 3:00 Standard in the Web Demo!",2600);return}})}),this.root.querySelectorAll("#target-score-pills .opt-pill").forEach(a=>{a.addEventListener("click",o=>{{this.showToast("🔒 DEMO VERSION: Custom match options are locked in the Web Demo!",2600);return}})}),this.root.querySelector("#btn-kickoff").addEventListener("click",()=>{this.closeDialog(this.mainMenuDialog),this.onStartMatch?.({...this.config})}),this.root.querySelector("#lan-status-banner");const r=this.root.querySelector("#host-room-code-display");this.net.onStatusChange=(a,o)=>{},this.net.onRoomCodeChanged=a=>{r.textContent=a||"----"},this.root.querySelector("#btn-open-lan").addEventListener("click",()=>{{this.showToast("🔒 DEMO VERSION: Online & LAN Multiplayer are only available in the Full Version!",2600);return}}),this.root.querySelector("#btn-close-lan").addEventListener("click",()=>{this.closeDialog(this.lanLobbyDialog)}),this.root.querySelector("#btn-host-room").addEventListener("click",()=>{}),this.root.querySelector("#btn-join-room").addEventListener("click",()=>{}),this.root.querySelector("#btn-ws-host").addEventListener("click",()=>{}),this.root.querySelector("#btn-ws-client").addEventListener("click",()=>{}),this.root.querySelector("#btn-lan-disconnect").addEventListener("click",()=>{this.net.disconnect(),r.textContent="----"}),this.root.querySelector("#btn-lan-start").addEventListener("click",()=>{}),this.root.querySelector("#btn-box-rematch").addEventListener("click",()=>{this.closeDialog(this.boxScoreDialog),this.onStartMatch?.({...this.config})}),this.root.querySelector("#btn-box-menu").addEventListener("click",()=>{this.closeDialog(this.boxScoreDialog),this.openMainMenu()})}renderTeamSelectCards(){const e=["spain","france","germany","brazil"],t=this.input.getAvailableInputDevices(),n=(i,r,a,o)=>{const c=this.root.querySelector(r),l=this.root.querySelector(a),d=this.root.querySelector(o),h=i==="home"?this.config.homeTeamId:this.config.awayTeamId,u=i==="home"?this.config.homeInputSource:this.config.awayInputSource;c.innerHTML=e.map(m=>{const p=mt[m],b=m===h;return`<button type="button" class="team-pill-btn ${b?"active":""} ${b?"":"demo-locked-pill"}" data-team="${m}" aria-disabled="true">
            <span>${b?"":"🔒 "}${p.flagEmoji}</span> <span>${p.name}</span>
          </button>`}).join(""),c.querySelectorAll(".team-pill-btn").forEach(m=>{m.addEventListener("click",p=>{{this.showToast("🔒 DEMO VERSION: Teams are locked to Spain vs. France in the Web Demo!",2600);return}})});const f=[...t.map(m=>({id:m.id,icon:m.icon,shortLabel:m.shortLabel,hint:m.controlsHint})),{id:"cpu",icon:"🤖",shortLabel:"CPU Bot",hint:"AI-Controlled Squad"}],g=f.find(m=>m.id===u)||f[f.length-1];l.innerHTML=`
        <div class="controlled-by-header">
          <span class="controlled-by-label">CONTROLLED BY:</span>
          <span class="controlled-by-active-tag">${g.icon} ${g.shortLabel} (🔒 DEMO)</span>
        </div>
        <div class="input-source-pills">
          ${f.map(m=>{const p=m.id===u;return`
            <button type="button" class="input-source-pill ${p?"active":""} ${p?"":"demo-locked-pill"}" data-source="${m.id}" aria-disabled="true">
              <span>${p?m.icon:"🔒"}</span> <span>${m.shortLabel}</span>
            </button>
          `}).join("")}
        </div>
        <div class="input-hint-line">${i==="away"?"🔒 Demo Locked to AI CPU Bot (Multiplayer in Full Version)":g.hint}</div>
      `,l.querySelectorAll(".input-source-pill").forEach(m=>{m.addEventListener("click",p=>{const b=p.currentTarget.dataset.source;this.setSideInputSource(i,b)})});const _=mt[h];d.innerHTML=`
        <div class="team-summary-header" style="border-left: 5px solid ${_.primaryColor}">
          <div class="team-summary-title">${_.flagEmoji} ${_.name} — <em>"${_.nickname}"</em></div>
          <div class="team-summary-tagline">${_.styleTagline}</div>
        </div>
        <div class="mini-roster-list">
          ${_.players.map(m=>`
            <div class="mini-roster-item">
              <span class="mini-shirt" style="background:${m.kitPrimary};color:${m.kitPrimary==="#ffffff"?"#111":"#fff"}">#${m.number}</span>
              <span class="mini-name">${m.shortName}</span>
              <span class="mini-role">${m.role==="Goalkeeper"?"🧤 GK":"⚡ FWD"}</span>
            </div>
          `).join("")}
        </div>
      `};n("home","#home-team-pills","#home-controlled-by","#home-team-summary"),n("away","#away-team-pills","#away-controlled-by","#away-team-summary")}renderSideSelectModal(){const e=mt[this.config.homeTeamId],t=mt[this.config.awayTeamId],n=this.input.getAvailableInputDevices(),i=this.root.querySelector("#side-col-home-title"),r=this.root.querySelector("#side-col-away-title");i.textContent=`${e.flagEmoji} ${e.name} (HOME P1)`,r.textContent=`${t.flagEmoji} ${t.name} (AWAY P2)`;const a=this.root.querySelector("#side-slot-home"),o=this.root.querySelector("#side-slot-center"),c=this.root.querySelector("#side-slot-away"),l=(f,g)=>{const _=g==="home"?`
            <button type="button" class="side-move-btn" data-dev="${f.id}" data-target="center">CENTER ▶</button>
            <button type="button" class="side-move-btn" data-dev="${f.id}" data-target="away">AWAY P2 ▶▶</button>
          `:g==="away"?`
            <button type="button" class="side-move-btn" data-dev="${f.id}" data-target="home">◀◀ HOME P1</button>
            <button type="button" class="side-move-btn" data-dev="${f.id}" data-target="center">◀ CENTER</button>
          `:`
            <button type="button" class="side-move-btn assign-home" data-dev="${f.id}" data-target="home">◀ HOME (P1)</button>
            <button type="button" class="side-move-btn assign-away" data-dev="${f.id}" data-target="away">AWAY (P2) ▶</button>
          `;return`
        <div class="side-device-card ${g}-assigned">
          <div class="side-device-top">
            <span class="side-device-icon">${f.icon}</span>
            <div class="side-device-titles">
              <div class="side-device-name">${f.label}</div>
              <div class="side-device-hint">${f.controlsHint}</div>
            </div>
          </div>
          <div class="side-device-actions">
            ${_}
          </div>
        </div>
      `},d=n.filter(f=>f.id===this.config.homeInputSource),h=n.filter(f=>f.id===this.config.awayInputSource),u=n.filter(f=>f.id!==this.config.homeInputSource&&f.id!==this.config.awayInputSource);a.innerHTML=d.length>0?d.map(f=>l(f,"home")).join(""):'<div class="side-cpu-placeholder">🤖 CPU BOT CONTROLLING HOME</div>',c.innerHTML=h.length>0?h.map(f=>l(f,"away")).join(""):'<div class="side-cpu-placeholder">🤖 CPU BOT CONTROLLING AWAY</div>',o.innerHTML=u.length>0?u.map(f=>l(f,"center")).join(""):'<div class="side-empty-pool">All detected inputs are assigned! Connect another controller or press a key to detect more hardware.</div>',this.sideSelectDialog.querySelectorAll(".side-move-btn").forEach(f=>{f.addEventListener("click",g=>{const _=g.currentTarget,m=_.dataset.dev,p=_.dataset.target;et.playKick(!1),p==="home"?this.setSideInputSource("home",m):p==="away"?this.setSideInputSource("away",m):(this.config.homeInputSource===m&&this.setSideInputSource("home","cpu"),this.config.awayInputSource===m&&this.setSideInputSource("away","cpu"))})})}openInspectSquad(e){const t=mt[e],n=this.root.querySelector("#inspect-team-title");n.textContent=`${t.flagEmoji} ${t.name} — "${t.nickname}"`;const i=this.root.querySelector("#inspect-players-grid");this.activePreviews=[],i.innerHTML=t.players.map(r=>`
        <article class="inspect-player-card">
          <div class="inspect-sprite-stage">
            <canvas class="inspect-sprite-canvas" data-char-id="${r.id}" width="160" height="160"></canvas>
            <span class="inspect-role-chip ${r.role==="Goalkeeper"?"gk-chip":"out-chip"}">
              ${r.role==="Goalkeeper"?"🧤 GOALKEEPER (ITEM IMMUNE)":"⚡ OUTFIELDER"}
            </span>
          </div>
          <div class="inspect-player-info">
            <h3 class="inspect-player-name">${r.name}</h3>
            <div class="inspect-trait-box">
              <strong>★ ${r.traitName}:</strong> ${r.traitDesc}
            </div>
            <p class="inspect-bio">${r.bio}</p>
            <div class="inspect-stats-bars">
              ${this.renderStatBar("SPD",r.stats.speed,"#00e5ff")}
              ${this.renderStatBar("SHT",r.stats.shotPower,"#ff3b30")}
              ${this.renderStatBar("PAS",r.stats.passing,"#ffcc00")}
              ${this.renderStatBar("TCK",r.stats.tackling,"#00ff66")}
            </div>
          </div>
        </article>
      `).join(""),i.querySelectorAll(".inspect-sprite-canvas").forEach(r=>{const a=r.dataset.charId,o=Ns[a];this.registerCanvasPreview(r,o,this.inspectPreviewRow)}),this.showDialog(this.inspectSquadDialog)}renderStatBar(e,t,n){return`
      <div class="stat-bar-row">
        <span class="stat-label">${e}</span>
        <div class="stat-track">
          <div class="stat-fill" style="width:${t*10}%;background:${n}"></div>
        </div>
        <span class="stat-num">${t}</span>
      </div>
    `}registerCanvasPreview(e,t,n){const i=e.getContext("2d");if(!i)return;const r=new Image;r.src=t.spriteSheetUrl,this.activePreviews.push({canvas:e,ctx:i,img:r,row:n,fps:10})}startPreviewLoop(){const e=t=>{if(t-this.lastPreviewTick>=95){this.lastPreviewTick=t;const n=Math.floor(t/100)%4;for(const i of this.activePreviews){if(!i.img.complete||i.img.naturalWidth===0)continue;const r=i.img.naturalWidth/4,a=i.img.naturalHeight/4;i.ctx.clearRect(0,0,i.canvas.width,i.canvas.height),i.ctx.drawImage(i.img,n*r,i.row*a,r,a,0,0,i.canvas.width,i.canvas.height)}}this.previewAnimHandle=requestAnimationFrame(e)};this.previewAnimHandle=requestAnimationFrame(e),this.previewAnimHandle}showToast(e,t=3200){for(;this.bannerToastEl.children.length>=4;)this.bannerToastEl.firstElementChild?.remove();const n=document.createElement("div");n.className="rl-feed-item",n.textContent=e,this.bannerToastEl.appendChild(n),window.setTimeout(()=>{n.classList.add("rl-feed-fadeout"),window.setTimeout(()=>n.remove(),260)},t)}isPauseOverlayOpen(){return this.mainMenuDialog.open||this.sideSelectDialog.open||this.inspectSquadDialog.open||this.lanLobbyDialog.open||this.boxScoreDialog.open||!this.portraitOverlayEl.classList.contains("hidden")}syncPauseBadge(e){const t=!e&&this.config.homeInputSource!=="cpu"&&this.config.awayInputSource!=="cpu";e?(this.menuPauseBadgeEl.textContent="🌐 LIVE IN BACKGROUND (LAN)",this.menuPauseBadgeEl.classList.add("live-multiplayer"),this.btnOpenMenu.textContent="MENU"):t?(this.menuPauseBadgeEl.textContent="⏸️ PAUSED (LOCAL 2P)",this.menuPauseBadgeEl.classList.remove("live-multiplayer"),this.btnOpenMenu.textContent="⏸️ PAUSE / MENU"):(this.menuPauseBadgeEl.textContent="⏸️ GAME PAUSED (VS BOTS)",this.menuPauseBadgeEl.classList.remove("live-multiplayer"),this.btnOpenMenu.textContent="⏸️ PAUSE / MENU")}updateHUD(e,t=!1){const n=mt[e.config.homeTeamId],i=mt[e.config.awayTeamId],r=this.net.isConnected||e.config.isMultiplayer,a=!r&&e.config.homeInputSource!=="cpu"&&e.config.awayInputSource!=="cpu";this.syncPauseBadge(r),this.hudHomeNameEl.textContent=`${n.flagEmoji} ${n.name}`,this.hudAwayNameEl.textContent=`${i.flagEmoji} ${i.name}`,this.hudScoreHomeEl.textContent=String(e.homeScore),this.hudScoreAwayEl.textContent=String(e.awayScore);const o=a?"⏸️ PAUSED (LOCAL 2P)":"⏸️ PAUSED (VS BOTS)";if(e.config.mode==="target_score")this.hudClockEl.textContent=`FIRST TO ${e.config.targetScore}`,this.hudModeSubEl.textContent=t?o:"TARGET SCORE MODE",this.hudClockEl.classList.remove("sudden-death-glow");else if(e.isSuddenDeath)this.hudClockEl.textContent="GOLDEN GOAL!",this.hudModeSubEl.textContent=t?o:"SUDDEN DEATH OVERDRIVE",this.hudClockEl.classList.add("sudden-death-glow");else{const _=Math.ceil(e.timeRemaining),m=Math.floor(_/60),p=_%60;this.hudClockEl.textContent=`${String(m).padStart(2,"0")}:${String(p).padStart(2,"0")}`,this.hudModeSubEl.textContent=t?o:"TIMED MATCH",this.hudClockEl.classList.remove("sudden-death-glow")}const c=Math.round(e.homeCharge),l=Math.round(e.awayCharge);this.hudHomeChargeFill.style.width=`${c}%`,this.hudAwayChargeFill.style.width=`${l}%`,this.hudHomeChargeFill.classList.toggle("meter-max-glow",c>=100),this.hudAwayChargeFill.classList.toggle("meter-max-glow",l>=100),this.hudHomeChargeText.textContent=c>=100?"🔥 SUPER SHOT READY!":`CHARGE ${c}%`,this.hudAwayChargeText.textContent=l>=100?"🔥 SUPER SHOT READY!":`CHARGE ${l}%`,this.renderHeldItemSlot(this.hudHomeItemBox,e.homeHeldItem),this.renderHeldItemSlot(this.hudAwayItemBox,e.awayHeldItem);const d=e.config.awayInputSource==="touch"?"away":e.config.homeInputSource==="touch"?"home":e.config.localSide,u=e.getPlayerById(e.ball.ownerId)?.teamSide===d,f=d==="home"?e.homeCharge:e.awayCharge,g=d==="home"?e.homeHeldItem:e.awayHeldItem;this.input.updateContextLabels(u,f,g)}renderHeldItemSlot(e,t){const n=e.getAttribute("data-held-item")||"",i=t||"";if(n===i)return;if(e.setAttribute("data-held-item",i),!t){e.innerHTML='<span class="item-placeholder">NO ITEM</span>';return}const r=Rr[t];e.innerHTML=`
      <img src="${r.iconUrl}" alt="${r.name}" class="hud-item-icon" />
      <span class="hud-item-name">${r.name.split(" ").slice(-1)[0].toUpperCase()}</span>
    `}showPostMatchBoxScore(e){const t=mt[e.config.homeTeamId],n=mt[e.config.awayTeamId],i=e.winnerSide==="away"?n:t,r=this.root.querySelector("#box-score-winner-title");r.textContent=`${i.flagEmoji} ${i.name} WINS THE MATCH!`;const a=this.root.querySelector("#box-score-final-tally");a.textContent=`${t.flagEmoji} ${e.homeScore}  —  ${e.awayScore} ${n.flagEmoji}`;const o=e.computeMVP(),c=Ns[o.characterId],l=this.root.querySelector("#mvp-spotlight-banner");l.innerHTML=`
      <div class="mvp-card">
        <canvas id="mvp-preview-canvas" width="96" height="96" class="mvp-sprite-canvas"></canvas>
        <div class="mvp-details">
          <span class="mvp-badge">🏆 MATCH MVP</span>
          <h3>${o.name} (${mt[o.teamId].name})</h3>
          <p>${o.goals} Goals • ${o.shots} Shots • ${o.tackles} Tackles • ${o.passes} Passes</p>
        </div>
      </div>
    `,this.activePreviews=[];const d=l.querySelector("#mvp-preview-canvas");d&&c&&this.registerCanvasPreview(d,c,2);const h=this.root.querySelector("#box-score-tbody"),u=Object.values(e.stats);h.innerHTML=u.map(f=>{const g=mt[f.teamId],_=f.playerId===o.playerId;return`
          <tr class="${_?"mvp-row":""}">
            <th scope="row">#${f.number} ${f.shortName} ${_?"⭐":""}</th>
            <td>${g.flagEmoji} ${g.name}</td>
            <td>${f.role}</td>
            <td><strong>${f.goals}</strong></td>
            <td>${f.shots}</td>
            <td>${f.tackles}</td>
            <td>${f.passes}</td>
          </tr>
        `}).join(""),this.showDialog(this.boxScoreDialog)}openMainMenu(){this.renderTeamSelectCards(),this.syncOstControls(),this.syncPauseBadge(this.net.isConnected||this.config.isMultiplayer),this.showDialog(this.mainMenuDialog)}showDialog(e){e.open||e.showModal()}closeDialog(e){e.open&&e.close()}checkOrientation(){window.innerHeight>window.innerWidth&&window.innerWidth<768&&!this.portraitDismissed?this.portraitOverlayEl.classList.remove("hidden"):this.portraitOverlayEl.classList.add("hidden")}}class Og{renderer;input;net;ui;sim;accumulator=0;fixedStep=1/60;lastTime=performance.now();boxScoreShownForMatch=!1;constructor(){document.title="World Strikers — Web Playable Demo | 2.5D Arcade Soccer";const e=document.getElementById("canvas-container"),t=document.getElementById("ui-root");this.renderer=new wg(e),this.input=new Gl,this.net=new md,this.ui=new Lg(t,this.input,this.net),this.sim=new to(this.ui.config),this.ui.onStartMatch=n=>{this.startNewMatch(n,!0)},this.ui.onInputAssignmentChange=(n,i)=>{this.sim.config.homeInputSource=n,this.sim.config.awayInputSource="cpu"},this.ui.onPortraitPlayAnyway=n=>{this.renderer.setPortraitOverride(n)},this.net.onMatchStartReceived=n=>{},this.net.onSnapshotReceived=(n,i)=>{},requestAnimationFrame(n=>this.loop(n))}startNewMatch(e,t){const n={...e,homeTeamId:"spain",awayTeamId:"france",mode:"timed",durationSeconds:180,targetScore:5,isMultiplayer:!1,localSide:"home",awayInputSource:"cpu"};this.sim=new to(n),this.boxScoreShownForMatch=!1,et.setClimaxOverride(!1),et.startMusicIfReady(),et.playWhistle(),this.ui.showToast("⚡ KICK OFF! NO OUT-OF-BOUNDS — CAGE MATCH LIVE!",2200)}updateSoundtrackClimaxState(){if(this.sim.isMatchOver){et.setClimaxOverride(!1);return}const e=this.sim.config.mode==="timed"&&(this.sim.timeRemaining<=60||this.sim.isSuddenDeath),t=this.sim.config.mode==="target_score"&&(this.sim.homeScore>=this.sim.config.targetScore-1||this.sim.awayScore>=this.sim.config.targetScore-1),n=e||t;if(et.setClimaxOverride(n)&&n){const r=this.sim.config.mode==="timed"?"FINAL MINUTE OVERDRIVE":"MATCH POINT OVERDRIVE";this.ui.showToast(`🔥 ${r}! Now Playing: Carnaval de Overdrive!`,3200)}}handleSimEvents(e){for(const t of e)switch(t.message&&this.ui.showToast(t.message,2400),t.type){case"KICK":et.playKick(!1),t.x!==void 0&&t.z!==void 0&&this.renderer.spawnSparkBurst(t.x,.5,t.z,16777215,6);break;case"FULL_CHARGE_SHOT":et.playFullChargeShot(),this.renderer.triggerCameraShake(.62,t.dirX||0,t.dirZ||0),t.x!==void 0&&t.z!==void 0&&this.renderer.spawnSparkBurst(t.x,.9,t.z,16726784,22);break;case"TACKLE_HIT":et.playTackle(),this.renderer.triggerCameraShake(.38,t.dirX||0,t.dirZ||0),t.x!==void 0&&t.z!==void 0&&this.renderer.spawnSparkBurst(t.x,.8,t.z,16763904,14);break;case"FENCE_SHOCK":et.playFenceShock(),this.renderer.triggerCameraShake(.55),t.x!==void 0&&t.z!==void 0&&this.renderer.spawnSparkBurst(t.x,1.2,t.z,61695,26);break;case"FOUL_ITEM_AWARDED":et.playItemGrant();break;case"ITEM_USED":et.playItemGrant();break;case"ITEM_HIT":et.playTackle(),this.renderer.triggerCameraShake(.45),t.x!==void 0&&t.z!==void 0&&this.renderer.spawnSparkBurst(t.x,1,t.z,16755200,18);break;case"GOALIE_SAVE":et.playKick(!0),t.x!==void 0&&t.z!==void 0&&this.renderer.spawnSparkBurst(t.x,1.1,t.z,16766720,12);break;case"GOALIE_STUN_REBOUND":et.playFenceShock(),this.renderer.triggerCameraShake(.58),t.x!==void 0&&t.z!==void 0&&this.renderer.spawnSparkBurst(t.x,1.2,t.z,16724736,24);break;case"GOAL_SCORED":et.playGoalHorn(),this.renderer.triggerCameraShake(.75),t.x!==void 0&&t.z!==void 0&&this.renderer.spawnSparkBurst(t.x,1.4,t.z,16763904,34);break;case"SUDDEN_DEATH":et.playWhistle();break;case"MATCH_OVER":et.playWhistle();break}}loop(e){const t=Math.min(.1,(e-this.lastTime)/1e3);this.lastTime=e,this.input.checkGamepadChanges();const n=this.net.isConnected||this.sim.config.isMultiplayer,i=this.ui.isPauseOverlayOpen(),r=!n&&i;if(r)this.accumulator=0;else for(this.accumulator+=t;this.accumulator>=this.fixedStep;){this.accumulator-=this.fixedStep;const a=this.sim.config.homeInputSource,o=this.sim.config.awayInputSource,c=a==="kb_wasd"&&o!=="kb_arrows"||o==="kb_wasd"&&a!=="kb_arrows";if(this.net.isConnected&&this.net.role==="client"){const l=o!=="cpu"?o:a!=="cpu"?a:this.input.getDefaultInputSourceForHome(),d=l!=="cpu"?this.input.sampleSourceInput(l,this.fixedStep,!0):un(),h=i?un():d;this.net.sendInputFrame(h)}else if(this.net.isConnected&&this.net.role==="host"){const l=a!=="cpu"?a:this.input.getDefaultInputSourceForHome(),d=l!=="cpu"?this.input.sampleSourceInput(l,this.fixedStep,!0):un(),h=i?un():d,u=this.sim.step(this.fixedStep,h,this.net.latestRemoteInput);this.net.latestRemoteInput=un(),this.handleSimEvents(u),this.net.sendStateSnapshot(this.sim.getSnapshot(),u)}else{const l=a!=="cpu"?this.input.sampleSourceInput(a,this.fixedStep,c):void 0,d=o!=="cpu"?this.input.sampleSourceInput(o,this.fixedStep,c):void 0,h=this.sim.step(this.fixedStep,l,d);this.handleSimEvents(h)}}this.updateSoundtrackClimaxState(),this.renderer.render(this.sim,r?0:t),this.ui.updateHUD(this.sim,r),this.sim.isMatchOver&&!this.boxScoreShownForMatch&&(this.boxScoreShownForMatch=!0,this.ui.showPostMatchBoxScore(this.sim)),requestAnimationFrame(a=>this.loop(a))}}window.addEventListener("DOMContentLoaded",()=>{new Og});
