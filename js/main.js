/**
 * Almoço Companheiro - Script principal
 * Landing page para serviço de companhia no almoço (Coimbra)
 */

(function () {
  'use strict';

  // Utilitários
  const init = function () {
    // Inicialização futura: analytics, interações, etc.
    console.log('Almoço Companheiro carregado');
  };

  // Executar quando o DOM estiver pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
