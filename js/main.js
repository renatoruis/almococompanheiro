/**
 * Almoço Companheiro - Script principal
 * Landing page para serviço de companhia no almoço (Coimbra)
 */

(function () {
  'use strict';

  const init = function () {
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
      toggleBackToTop();

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
