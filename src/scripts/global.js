import ScrollReveal from 'scrollreveal';

document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica de ScrollReveal ---
    ScrollReveal({
        distance: '60px',
        duration: 1000,
        easing: 'ease-in-out',
        origin: 'bottom',
        reset: false,
    });

    ScrollReveal().reveal('.section-card', { interval: 100, delay: 200 });

    ScrollReveal().reveal('.hero-content h1', { origin: 'top', delay: 300 });
    ScrollReveal().reveal('.hero-content p', { origin: 'right', delay: 500 });
    ScrollReveal().reveal('.hero-content .primary-button', { origin: 'bottom', delay: 700 });

    ScrollReveal().reveal('.about-section .profile-image-container', { origin: 'left', delay: 200 });
    ScrollReveal().reveal('.about-section .about-text-content', { origin: 'right', delay: 400 });

    ScrollReveal().reveal('.experience-item', { interval: 150, delay: 300 });

    ScrollReveal().reveal('.video-item', { interval: 100, delay: 200 });
    ScrollReveal().reveal('.channel-link', { origin: 'top', delay: 400 });

    ScrollReveal().reveal('.skill-item', { interval: 100, delay: 200 });

    ScrollReveal().reveal('.contact-section h2', { origin: 'top', distance: '20px', delay: 200 });
    ScrollReveal().reveal('.contact-section .contact-intro', { origin: 'bottom', distance: '20px', delay: 300 });
    ScrollReveal().reveal('.contact-info p', { interval: 100, delay: 400 });

    // --- Lógica del Sidebar y Navegación ---
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    const mainContent = document.querySelector('main');
    const menuLinks = document.querySelectorAll('.side-menu .menu-link');
    const sections = document.querySelectorAll('main section[id]');
    // No necesitamos themeToggle aquí, theme-toggle.js ya lo maneja

    // La lógica de toggleDarkMode, savedTheme, initialIcon y el event listener para themeToggle
    // SE ELIMINAN DE AQUÍ por completo, ya que `theme-toggle.js` se encarga de eso.

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            console.log('Botón de menú clicado!')
            if (sidebar) sidebar.classList.toggle('is-open');
            if (menuToggle) menuToggle.classList.toggle('is-active');
            if (mainContent) mainContent.classList.toggle('sidebar-open');
        });
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Cierra el sidebar solo en pantallas pequeñas al hacer clic en un enlace
            if (window.innerWidth <= 768) {
                if (sidebar) sidebar.classList.remove('is-open');
                if (menuToggle) menuToggle.classList.remove('is-active');
                if (mainContent) mainContent.classList.remove('sidebar-open');
            }
        });
    });

    // Lógica para activar el enlace de navegación al hacer scroll
    const activateNavLink = () => {
        let currentActiveLink = null;
        let scrollY = window.scrollY || window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Ajuste para el offset de la sección
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentActiveLink = document.querySelector(`.side-menu a[href="#${sectionId}"]`);
            }
        });

        menuLinks.forEach(link => {
            link.classList.remove('active');
        });
        if (currentActiveLink) {
            currentActiveLink.classList.add('active');
        } else {
            // Si no hay ninguna sección activa, activa el enlace a la sección 'hero' (si existe)
            const homeLink = document.querySelector('.side-menu a[href="#hero"]');
            if (homeLink) {
                homeLink.classList.add('active');
            }
        }
    };

    window.addEventListener('scroll', activateNavLink);
    activateNavLink(); // Llama una vez al cargar para establecer el estado inicial
});
