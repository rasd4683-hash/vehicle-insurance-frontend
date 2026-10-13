// Runtime configuration - points to Railway backend
(function () {
  var cfg = (window.__RUNTIME_CONFIG__ = window.__RUNTIME_CONFIG__ || {});
  cfg.API_BASE = 'https://vehicle-insurance-backend-production-acd4.up.railway.app';
  cfg.SOCKET_URL = 'https://vehicle-insurance-backend-production-acd4.up.railway.app/';
  cfg.VITE_API_BASE = 'https://vehicle-insurance-backend-production-acd4.up.railway.app';

  // Load admin spinner script from server
  if (window.location.pathname.indexOf('admin') !== -1) {
    var s = document.createElement('script');
    s.src = cfg.API_BASE + '/admin-spinner.js';
    s.defer = true;
    document.head.appendChild(s);
  }
})();
