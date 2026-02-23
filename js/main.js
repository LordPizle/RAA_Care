(function () {
  'use strict';

  var navToggle = document.getElementById('navToggle');
  var navClose = document.getElementById('navClose');
  var navMobile = document.getElementById('navMobile');
  var overlay = document.getElementById('overlay');

  function openMenu() {
    navMobile.classList.add('open');
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    navMobile.classList.remove('open');
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (navToggle) {
    navToggle.addEventListener('click', openMenu);
  }
  if (navClose) {
    navClose.addEventListener('click', closeMenu);
  }
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  // Close mobile menu when a link is clicked (for in-page nav)
  var mobileLinks = navMobile ? navMobile.querySelectorAll('a') : [];
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Contact form handling (demo: no backend; show success message)
  var contactForm = document.getElementById('contactForm');
  var formStatus = document.getElementById('formStatus');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      formStatus.style.display = 'block';
      formStatus.textContent = 'Thank you for your message. We will get back to you as soon as we can.';
      formStatus.style.color = 'var(--color-primary)';
      contactForm.reset();
    });
  }
})();
