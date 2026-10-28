// Tizen Home Skin configuration. Edit, then rebuild + reinstall the .wgt.
window.CONFIG = {
  // true: thêm ô giả (YouTube, Netflix...) cho app chưa cài, dùng để xem giao diện
  // trên emulator. Đang tắt (dùng app thật).
  demoMode: false,

  // Front of the row, matched against app names (case-insensitive substring),
  // in this order. Everything after that is alphabetical.
  orderNames: ['youtube', 'apple music', 'netflix', 'apple tv'],

  // Apps never shown (name substrings, case-insensitive). The launcher hides
  // itself automatically; add anything else you don't want as a tile.
  hiddenNames: ['samsung account', 'privacy', 'terms', 'launchertv', 'BasicProject','NTK'],

  // Bundled sharp icons, matched by app-name substring. Apps without a match
  // use the icon path Tizen reports for them (usually much smaller).
  iconMap: {
    'netflix': 'icons/netflix.png',
    'youtube': 'icons/youtube.png',
    'apple tv': 'icons/appletv.png',
    'apple music': 'icons/applemusic.png',
    'fpt play': 'icons/fptplay.png'
  },

  // Weather (Open-Meteo, free, no API key). Hiện đặt: Đà Nẵng.
  weatherCity: 'Da Nang',
  latitude: 16.0544,
  longitude: 108.2022
};