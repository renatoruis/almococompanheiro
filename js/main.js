/**
 * Almoço Companheiro - Script principal
 * Landing page para serviço de companhia no almoço (Coimbra)
 */

(function () {
  'use strict';

  const COOKIE_CONSENT_KEY = 'almococompanheiro-cookies';

  const init = function () {
    // Aviso de cookies – RGPD / Lei n.º 41/2004
    const cookieBanner = document.getElementById('cookie-banner');
    if (cookieBanner) {
      const acceptBtn = document.getElementById('cookie-accept');
      const rejectBtn = document.getElementById('cookie-reject');
      const consent = localStorage.getItem(COOKIE_CONSENT_KEY);

      function hideBanner() {
        cookieBanner.classList.remove('translate-y-0');
        cookieBanner.classList.add('translate-y-full');
      }

      function showBanner() {
        cookieBanner.classList.remove('translate-y-full');
        cookieBanner.classList.add('translate-y-0');
      }

      function setConsent(value) {
        localStorage.setItem(COOKIE_CONSENT_KEY, value);
        hideBanner();
      }

      requestAnimationFrame(function () {
        if (consent === 'accept' || consent === 'reject') {
          hideBanner();
        } else {
          showBanner();
        }
      });

      if (acceptBtn) acceptBtn.addEventListener('click', () => setConsent('accept'));
      if (rejectBtn) rejectBtn.addEventListener('click', () => setConsent('reject'));
    }

    // Back to top – mostrar/esconder conforme scroll
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
      const scrollThreshold = 300;

      function toggleBackToTop() {
        if (window.scrollY > scrollThreshold) {
          backToTop.classList.remove('opacity-0', 'pointer-events-none');
        } else {
          backToTop.classList.add('opacity-0', 'pointer-events-none');
        }
      }

      window.addEventListener('scroll', toggleBackToTop, { passive: true });
      requestAnimationFrame(function () {
        toggleBackToTop();
      });

      backToTop.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
