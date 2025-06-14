import ScrollReveal from 'scrollreveal';

document.addEventListener('DOMContentLoaded', () => {
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

    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    const mainContent = document.querySelector('main');
    const menuLinks = document.querySelectorAll('.side-menu .menu-link');
    const sections = document.querySelectorAll('main section[id]');
    const themeToggle = document.getElementById('theme-toggle');

    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

        const icon = themeToggle.querySelector('i');
        if (icon) {
            if (isDarkMode) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
    };

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    const initialIcon = themeToggle.querySelector('i');
    if (initialIcon) {
        if (document.body.classList.contains('dark-mode')) {
            initialIcon.classList.remove('fa-moon');
            initialIcon.classList.add('fa-sun');
        } else {
            initialIcon.classList.remove('fa-sun');
            initialIcon.classList.add('fa-moon');
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleDarkMode);
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            if (sidebar) sidebar.classList.toggle('is-open');
            if (menuToggle) menuToggle.classList.toggle('is-active');
            if (mainContent) mainContent.classList.toggle('sidebar-open');
        });
    }

    menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    if (sidebar) sidebar.classList.remove('is-open');
                    if (menuToggle) menuToggle.classList.remove('is-active');
                    if (mainContent) mainContent.classList.remove('sidebar-open');
                }
            });
        });

    const activateNavLink = () => {
        let currentActiveLink = null;
        let scrollY = window.scrollY || window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
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
            const homeLink = document.querySelector('.side-menu a[href="#hero"]');
            if (homeLink) {
                homeLink.classList.add('active');
            }
        }
    };

    window.addEventListener('scroll', activateNavLink);
    activateNavLink();
});