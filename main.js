// Decorative waveform on the Now Playing card
(function () {
  var heights = [4, 10, 16, 12, 22, 30, 14, 8, 18, 26, 12, 6, 12, 20, 34, 16, 10, 14, 24, 12, 6, 14, 18, 10, 4, 8, 16, 22, 12, 6, 10, 4, 8, 14, 20, 10, 6, 12, 18, 26, 14, 8, 12, 6, 10, 6, 4, 4];
  var bars = document.querySelector('.bars');
  heights.forEach(function (h, i) {
    var bar = document.createElement('i');
    bar.style.height = h + 'px';
    if (i < 18) bar.className = 'on';
    bars.appendChild(bar);
  });
})();

// 中／EN toggle. Chinese lives in the HTML; English replaces it by data-i18n key.
(function () {
  var en = {
    'nav.services': 'Services',
    'nav.work': 'Work',
    'nav.notes': 'Experience',
    'nav.contact': 'Contact',
    'hero.title': 'Your digital challenges,<br>I’ll find a way.',
    'hero.lead': 'iOS developer since 2013, also building Laravel websites and admin backends. At a health-tech company I take diagnostic apps, their backends and the company websites from first build to launch, and keep them running.',
    'cta.mail': 'Email me',
    'cta.line': 'Chat on LINE',
    'stat.ios': 'Building iOS since',
    'stat.full': 'Front to back',
    'stat.health': 'Health-tech domain',
    'work.label': 'NOW PLAYING · WORK',
    'work.name': '',
    'work.desc': 'A voice-call app built for my 94-year-old grandmother: big buttons, few steps, open it and call family.',
    'work.intro': 'Meet LoiLiau →',
    'svc.title': 'What I can build for you',
    'svc.1.t': 'iOS apps',
    'svc.1.d': 'New builds, maintenance and redesigns in Swift, UIKit and SwiftUI, including legacy Objective-C codebases.',
    'svc.2.t': 'Flutter, cross-platform',
    'svc.2.d': 'One codebase for iOS and Android, with the same features and screens on both.',
    'svc.3.t': 'Websites & backends',
    'svc.3.d': 'Laravel sites, admin panels and APIs for your app; WordPress marketing sites.',
    'svc.4.t': 'Release & maintenance',
    'svc.4.d': 'TestFlight, App Store review and Fastlane automation, plus updates and troubleshooting after launch.',
    'notes.title': 'Experience',
    'notes.intro': 'At a health-tech company I own several diagnostic apps and the company websites, from development to long-term maintenance.',
    'notes.1': 'Women’s health tracking app: reads ovulation test strips with the phone camera, with Apple Health and Apple Watch wrist temperature. Joined in 2016; sole maintainer since 2020.',
    'notes.2': 'Lipid management app, built from scratch for iPhone plus an iPad edition for clinics: Bluetooth sync with the test meter, an AI food-recognition integration, health reports, family sharing and paid membership.',
    'notes.3': 'Localized releases including Vietnamese, Russian and right-to-left layouts; familiar with App Review rules such as Sign in with Apple and account deletion.',
    'notes.4': 'Mixed Objective-C / Swift codebases: improved step by step, without a full rewrite.',
    'contact.label': 'SESSION — REMOTE FIRST',
    'contact.title': 'Let’s talk about your product.',
    'contact.lead': 'Not sure what you need yet? That’s fine. We can scope it together, estimate the hours and ship in phases.',
    'contact.line': 'LINE'
  };
  var meta = {
    zh: { title: document.title, lang: 'zh-Hant-TW' },
    en: { title: 'Oscar Chiu | Your digital challenges, I’ll find a way', lang: 'en' }
  };
  var nodes = document.querySelectorAll('[data-i18n]');
  var zh = {};
  nodes.forEach(function (n) { zh[n.dataset.i18n] = n.innerHTML; });

  function apply(lang) {
    var dict = lang === 'en' ? en : zh;
    nodes.forEach(function (n) {
      var v = dict[n.dataset.i18n];
      if (v != null) n.innerHTML = v;
    });
    document.documentElement.lang = meta[lang].lang;
    document.title = meta[lang].title;
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
  }

  var stored = null;
  try { stored = localStorage.getItem('lang'); } catch (e) {}
  var param = new URLSearchParams(location.search).get('lang');
  var initial = param || stored || (/^zh/i.test(navigator.language) ? 'zh' : 'en');
  if (initial === 'en') apply('en');

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () {
      apply(b.dataset.lang);
      try { localStorage.setItem('lang', b.dataset.lang); } catch (e) {}
    });
  });
})();
