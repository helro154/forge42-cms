(function (Drupal, once) {
  Drupal.behaviors.forge42Navigation = {
    attach(context) {
      once('forge42-nav', '.nav-toggle', context).forEach((button) => {
        const nav = document.querySelector('.main-nav');
        if (!nav) return;

        button.addEventListener('click', () => {
          const open = nav.classList.toggle('is-open');
          button.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
      });
    }
  };
})(Drupal, once);
