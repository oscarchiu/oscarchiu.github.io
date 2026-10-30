// Shared three-language selection for the introduction, privacy policy, and terms.
(function () {
  'use strict';
  window.initLoiLiauLanguage = function (page) {
    var translations = page.translations;
    var meta = page.meta;
    var nodes = document.querySelectorAll('[data-i18n]');
    var languageSelect = document.getElementById('language-select');
    translations.zh = {};
    nodes.forEach(function (node) { translations.zh[node.dataset.i18n] = node.innerHTML; });
    meta.zh = {
      lang: 'zh-Hant-TW', title: document.title,
      description: document.querySelector('meta[name="description"]').content
    };
    function normalize(value) {
      if (typeof value !== 'string') return null;
      var code = value.toLowerCase().split('-')[0];
      return Object.prototype.hasOwnProperty.call(meta, code) ? code : null;
    }
    function apply(lang) {
      nodes.forEach(function (node) {
        var value = translations[lang][node.dataset.i18n];
        if (value != null) node.innerHTML = value;
      });
      document.documentElement.lang = meta[lang].lang;
      document.title = meta[lang].title;
      document.querySelector('meta[name="description"]').content = meta[lang].description;
      languageSelect.value = lang;
      // Include language in links as well as storage, including when storage is blocked.
      var current = new URL(location.href);
      var paths = ['/loiliau/', '/loiliau/privacy/', '/loiliau/terms/'];
      document.querySelectorAll('a[href]').forEach(function (link) {
        var target = new URL(link.getAttribute('href'), location.href);
        if (target.origin !== current.origin || paths.indexOf(target.pathname) === -1) return;
        target.searchParams.set('lang', lang);
        if (current.searchParams.get('from') === 'app') target.searchParams.set('from', 'app');
        link.setAttribute('href', target.pathname + target.search + target.hash);
      });
    }
    var stored = null;
    try { stored = normalize(localStorage.getItem('loiliau-language')); } catch (error) {}
    var url = new URL(location.href);
    var preferred = (navigator.languages || [navigator.language]).map(normalize).find(Boolean);
    apply(normalize(url.searchParams.get('lang')) || stored || preferred || 'en');
    languageSelect.addEventListener('change', function () {
      var lang = languageSelect.value;
      apply(lang);
      try { localStorage.setItem('loiliau-language', lang); } catch (error) {}
      // Keep from=app intact through switching and navigation back from legal pages.
      var next = new URL(location.href);
      next.searchParams.set('lang', lang);
      try { history.replaceState(null, '', next); } catch (error) {}
    });
  };
})();
