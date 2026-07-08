// Menu mobile (hambúrguer)
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('navLinks');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Destaca o link do menu correspondente à seção visível
  var sections = document.querySelectorAll('main section[id]');
  var navAnchors = document.querySelectorAll('.navlinks a');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var id = entry.target.getAttribute('id');
        navAnchors.forEach(function (a) {
          a.style.opacity = a.getAttribute('href') === '#' + id ? '1' : '';
          a.style.borderColor = a.getAttribute('href') === '#' + id ? 'var(--gold)' : '';
        });
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });

  sections.forEach(function (s) { observer.observe(s); });
});
