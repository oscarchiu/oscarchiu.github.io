// Same dependency-free data-i18n pattern as the portfolio. Chinese is the fallback.
(function () {
  'use strict';
  var translations = {
    en: {
      name: 'LoiLiau',
      lead: 'Free voice calls designed for older adults. Family helps set it up once; after that, just tap a friend to call.',
      about: 'The name comes from “loi liau” in Hakka: “come sit and chat.” Completely free, with no ads or tracking. Calls are encrypted and never recorded.',
      start: 'Getting started',
      stepName: 'Enter your name to start as a guest. No phone number needed.',
      stepPair: 'Add a friend: one person opens “Add friend” to show a QR code or 6-digit pairing code. The other scans it or enters the code, and you become friends.',
      stepCall: 'Return to the home screen and tap a friend’s photo to call.',
      settings: 'Tap the gray gear at the top right of the home screen to open Settings. You can change your photo, rename friends, or link an account.',
      faq: 'Frequently asked questions',
      ringQuestion: 'Will calls ring when the app isn’t open?',
      ringAnswer: 'Yes. Allow notifications for LoiLiau. On Android, also allow full-screen notifications and remove battery restrictions for the app.',
      phoneQuestion: 'Will I lose my friends when I change phones?',
      phoneAnswer: 'A guest account stays on the original phone. Before changing phones, link an Apple or Google account, or an email address, in Settings. Sign in with the same account on your new phone to restore your friends.',
      removeQuestion: 'Don’t want calls from someone anymore?',
      removeAnswer: 'Remove them from the friends list in Settings. Neither of you can call the other unless you pair again.',
      deleteQuestion: 'How do I delete my account?',
      deleteAnswer: 'Tap “Delete account” at the bottom of Settings. Your data is deleted immediately. See the <a href="privacy/" lang="zh-Hant">Privacy Policy (Traditional Chinese)</a> for details.',
      emergencyQuestion: 'Can I call emergency numbers or regular phone numbers?',
      emergencyAnswer: 'No. LoiLiau only calls friends you have paired with. In an emergency, use your phone’s regular dialer to call the local emergency number (119 or 110 in Taiwan).',
      contact: 'Contact us',
      contactBody: 'For help, suggestions, or reports of inappropriate users, email <a href="mailto:oscar@oscarchiu.dev?subject=LoiLiau">oscar@oscarchiu.dev</a>.',
      support: 'Support LoiLiau',
      supportBody: 'LoiLiau will stay free and ad-free. If it helps you and your family, you can buy the developer a coffee to help cover server and developer account costs.',
      coffee: '☕ Buy me a coffee on Ko-fi',
      privacy: 'Privacy Policy (Traditional Chinese)',
      terms: 'Terms of Use (Traditional Chinese)'
    },
    id: {
      name: 'LoiLiau',
      lead: 'Aplikasi panggilan suara gratis yang dirancang untuk lansia. Keluarga cukup membantu menyiapkan sekali; setelah itu, tinggal ketuk foto teman untuk menelepon.',
      about: 'Nama LoiLiau berasal dari bahasa Hakka, “loi liau”, yang berarti “mari duduk dan mengobrol”. Sepenuhnya gratis, tanpa iklan atau pelacakan. Panggilan dienkripsi dan tidak pernah direkam.',
      start: 'Cara memulai',
      stepName: 'Masukkan nama untuk mulai menggunakan sebagai tamu. Tidak perlu nomor telepon.',
      stepPair: 'Tambahkan teman: satu orang membuka “Tambah teman” untuk menampilkan kode QR atau kode pemasangan 6 digit. Orang lainnya memindai atau memasukkan kode tersebut, lalu kalian menjadi teman.',
      stepCall: 'Kembali ke layar utama, lalu ketuk foto teman untuk menelepon.',
      settings: 'Ketuk ikon roda gigi abu-abu di kanan atas layar utama untuk membuka Pengaturan. Anda dapat mengganti foto profil, mengubah nama panggilan teman, atau menautkan akun.',
      faq: 'Pertanyaan umum',
      ringQuestion: 'Apakah panggilan tetap berdering saat aplikasi tidak dibuka?',
      ringAnswer: 'Ya. Izinkan notifikasi untuk LoiLiau. Di Android, izinkan juga notifikasi layar penuh dan nonaktifkan pembatasan baterai untuk aplikasi ini.',
      phoneQuestion: 'Apakah daftar teman akan hilang jika saya mengganti ponsel?',
      phoneAnswer: 'Akun tamu hanya tersimpan di ponsel semula. Sebelum mengganti ponsel, tautkan akun Apple, Google, atau alamat email melalui Pengaturan. Masuk dengan akun yang sama di ponsel baru untuk memulihkan daftar teman.',
      removeQuestion: 'Tidak ingin menerima panggilan dari seseorang lagi?',
      removeAnswer: 'Hapus orang tersebut dari daftar teman di Pengaturan. Setelah dihapus, kalian tidak dapat saling menelepon kecuali melakukan pemasangan ulang.',
      deleteQuestion: 'Bagaimana cara menghapus akun?',
      deleteAnswer: 'Ketuk “Hapus akun” di bagian paling bawah Pengaturan. Data Anda akan langsung dihapus. Lihat <a href="privacy/" lang="zh-Hant">Kebijakan Privasi (bahasa Mandarin Tradisional)</a> untuk detailnya.',
      emergencyQuestion: 'Bisakah saya menelepon nomor darurat atau nomor telepon biasa?',
      emergencyAnswer: 'Tidak. LoiLiau hanya dapat menelepon teman yang sudah dipasangkan. Dalam keadaan darurat, gunakan fitur telepon biasa di ponsel untuk menghubungi nomor darurat setempat (119 atau 110 di Taiwan).',
      contact: 'Hubungi kami',
      contactBody: 'Jika mengalami masalah, ingin memberi saran, atau melaporkan pengguna yang berperilaku tidak pantas, kirim email ke <a href="mailto:oscar@oscarchiu.dev?subject=LoiLiau">oscar@oscarchiu.dev</a>.',
      support: 'Dukung LoiLiau',
      supportBody: 'LoiLiau akan tetap gratis dan tanpa iklan. Jika aplikasi ini membantu Anda dan keluarga, Anda dapat mentraktir pengembang secangkir kopi untuk membantu biaya server dan akun pengembang.',
      coffee: '☕ Traktir saya kopi melalui Ko-fi',
      privacy: 'Kebijakan Privasi (bahasa Mandarin Tradisional)',
      terms: 'Ketentuan Penggunaan (bahasa Mandarin Tradisional)'
    }
  };
  var meta = {
    zh: { lang: 'zh-Hant-TW', title: document.title, description: document.querySelector('meta[name="description"]').content },
    en: { lang: 'en', title: 'LoiLiau: Free voice calls for older adults', description: 'Free voice calls designed for older adults. Set up once with family, then tap a friend to call. Getting started, frequently asked questions, and support.' },
    id: { lang: 'id', title: 'LoiLiau: Panggilan suara gratis untuk lansia', description: 'Panggilan suara gratis untuk lansia. Keluarga membantu menyiapkan sekali, lalu tinggal ketuk foto teman untuk menelepon. Panduan, pertanyaan umum, dan bantuan.' }
  };
  var nodes = document.querySelectorAll('[data-i18n]');
  var languageSelect = document.getElementById('language-select');
  translations.zh = {};
  nodes.forEach(function (node) { translations.zh[node.dataset.i18n] = node.innerHTML; });
  function normalize(value) {
    if (typeof value !== 'string') return null;
    var code = value.toLowerCase().split('-')[0];
    return Object.prototype.hasOwnProperty.call(meta, code) ? code : null;
  }
  function apply(lang) {
    nodes.forEach(function (node) { node.innerHTML = translations[lang][node.dataset.i18n]; });
    document.documentElement.lang = meta[lang].lang;
    document.title = meta[lang].title;
    document.querySelector('meta[name="description"]').content = meta[lang].description;
    languageSelect.value = lang;
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
    // Keep from=app intact so switching languages never reveals the sponsor section.
    var next = new URL(location.href);
    next.searchParams.set('lang', lang);
    try { history.replaceState(null, '', next); } catch (error) {}
  });
})();
