export const personalInfo = {
    name: "Alejandro Valenzuela Villa",
    photoPath: "/assets/profile-image.jpeg",
    tagline: "Ingeniero de Software | Arquitecto Backend | YouTuber",  
    welcomeMessage: '!Bienvenido a mi portfolio! Espero que encuentres aquí información interesante sobre mi trayectoria profesional y mis proyectos.',
    bio: `¡Hola! Soy Alejandro Valenzuela Villa, soy Ingeniero de software por la Universidad de Murcia y con un curso de especialista en desarrollos de aplicaciones móviles.
    Me considero un apasionado de la tecnología y del desarrollo de software con más de diez años de experiencia en el sector.
    Actualmente, me dedico  a la arquitectura de software y al desarrollo backend, trabajando principalmente con PHP y Java.
    Aunque aprendiendo Python para ampliar mis horizontes.`,
    email: "murcianotech@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/alejandro-valenzuela-villa-47322570/",
    githubUrl: "https://github.com/MurcianoTech",
    youtubeUrl: "https://www.youtube.com/channel/UCphxAiT1Cp230Nf9sPDKigA",
    contactIntro: '¿Tienes un proyecto en mente, una pregunta o simplemente quieres saludar? ¡No dudes en contactarme!'
};

export const socialLinks = [
    { name: 'LinkedIn', url: personalInfo.linkedinUrl, iconClass: 'fab fa-linkedin' },
    { name: 'GitHub', url: personalInfo.githubUrl, iconClass: 'fab fa-github' },
    { name: 'YouTube', url: personalInfo.youtubeUrl, iconClass: 'fab fa-youtube' },
];

export const navigationLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'YouTube', href: '#youtube-videos' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contacto', href: '#contact' }
];

export const youtubeVideos = [
    {
        title: 'Bases vs Lenguaje: ¿Cómo Deberías Empezar? 🤔',
        url: 'http://www.youtube.com/watch?v=G83Y3S7ufok',
        thumbnail: 'https://img.youtube.com/vi/G83Y3S7ufok/mqdefault.jpg'
    },
    {
        title: 'COBOL: El Lenguaje que Sostiene al Mundo y la Escasez de Desarrolladores',
        url: 'http://www.youtube.com/watch?v=UxRR6Ih2dbw',
        thumbnail: 'https://img.youtube.com/vi/UxRR6Ih2dbw/mqdefault.jpg'
    },
    {
        title: '🚨 ¿Por qué todo el mundo ODIA a PHP? (¿Realmente es tan malo?)',
        url: 'http://www.youtube.com/watch?v=khmfuLdD3-0',
        thumbnail: 'https://img.youtube.com/vi/khmfuLdD3-0/mqdefault.jpg'
    },
    {
        title: 'Cómo Conseguir Tu Primer Trabajo como Junior: 3 Tips Infalibles 🚀',
        url: 'http://www.youtube.com/watch?v=G3jf1ow1I2s',
        thumbnail: 'https://img.youtube.com/vi/G3jf1ow1I2s/mqdefault.jpg'
    },
    {
        title: 'Puntos IMPORTANTES para trabajar en el Mundo IT y superar procesos de selección',
        url: 'http://www.youtube.com/watch?v=3IuVhLHIMmc',
        thumbnail: 'https://img.youtube.com/vi/3IuVhLHIMmc/mqdefault.jpg'
    },
    {
        title: 'Qué es acoplamiento y cohesión? | Principios SOLID',
        url: 'http://www.youtube.com/watch?v=6EWbbZZPdms',
        thumbnail: 'https://img.youtube.com/vi/6EWbbZZPdms/mqdefault.jpg'
    },
    {
        title: 'Notas de Corte Ingeniería Informática 2025: ¿Qué Está Pasando?',
        url: 'http://www.youtube.com/watch?v=WAcBgyiz_ig',
        thumbnail: 'https://img.youtube.com/vi/WAcBgyiz_ig/mqdefault.jpg'
    },
    {
        title: 'Lenguaje Ensamblador: La Historia del Lenguaje que Controla la Máquina 🖥️',
        url: 'http://www.youtube.com/watch?v=9ULH0-eARqw',
        thumbnail: 'https://img.youtube.com/vi/9ULH0-eARqw/mqdefault.jpg'
    }
];

export const experienceData = [
    {
        title: "Arquitecto de software | Senior software developer",
        company: "Capgemini",
        period: "Octubre 2021 - Actualidad",
        description: [
            `Trabajo realizado a distancia.`,
            `Desarrollo de pruebas unitarias y de aceptación (PHPUnit, Behat).`,
            `Logs con Graylog y Kibana. Docker. Metodología SCRUM.`,
            `Desarrollo de proyectos utilizando DDD (Domain Driven Design) y TDD con arquitectura hexagonal y principios SOLID.`,
            `Uso de ElasticSearch y Dynatrace.`,
            `Referencia técnica en los diferentes proyectos.`,
            `Proyectos: JRunWay, FaCe, PtPlata, Forma.`,
            `Formación impartida: Diseño Orientado al Dominio (DDD), Conducción por el Comportamiento.`
        ],
        skillsUsed: ['PHP', 'MySQL', 'Git', 'Angular', 'Java', 'HTML5', 'CSS3', 'TDD', 'DDD', 'C#', 'Clean Code','DDD', 'MongoDB', 'Oracle']
    },
    {
        title: "Software Engineer",
        company: "PcComponentes",
        period: "Septiembre 2018 - Septiembre 2021",
        description: [
            `Trabajo realizado a distancia.`,
            `Desarrollo .NET. Pruebas unitarias (PHPUnit, JUnit) y de aceptación (Behat).`,
            `Principios SOLID, uso de Docker, arquitectura hexagonal.`,
            `Implementación de microservicios.`,
            `Proyectos logísticos para almacenes (WMS).`,
            `Proyectos con DDD (Domain Driven Design), Event Sourcing y CQRS.`,
            `SCRUM.`
        ],
        skillsUsed: ['PHP', 'MySQL', 'Git', 'Angular', 'Java', 'HTML5', 'CSS3', 'TDD', 'DDD', 'C#', 'Clean Code','DDD', 'MongoDB', 'Android Java']
    },
    {
        title: "Android & Web Developer",
        company: "Intelia",
        period: "Febrero 2018 - Julio 2018",
        description: [
            `Desarrollo web con PHP (Symfony), JavaScript (Jquery, Angular) y Twig.`,
            `Desarrollo de aplicaciones Android nativas.`,
            `Metodología ágil SCRUM.`,
            `Desarrollo de automatización de procesos.`
        ],
        skillsUsed: ['PHP', 'MySQL', 'Git', 'Angular', 'Java', 'HTML5', 'CSS3', 'JavaScript']
    },
    {
        title: "Android & Web Developer",
        company: "SelectAsterisco",
        period: "Septiembre 2015 - Enero 2018",
        description: [
            `Desarrollo de aplicaciones web con PHP, JavaScript (Jquery, AngularJS, Angular2, ExtJs y NodeJS), CSS3, HTML5.`,
            `Desarrollo de aplicaciones móviles Android.`,
            `Desarrollo de aplicaciones híbridas utilizando Cordova, Ionic con JavaScript.`,
            `Servidores Apache.`,
        ],
        skillsUsed: ['PHP', 'MySQL', 'Git', 'Angular', 'Java', 'HTML5', 'CSS3', 'JavaScript']
    },
];

export const skills = [
    { name: 'PHP', icon: 'fab fa-php', percentage: 100, color: '#777BB4' },
    { name: 'MySQL', icon: 'fas fa-database', percentage: 90, color: '#4479A1' },
    { name: 'Git', icon: 'fab fa-git-alt', percentage: 90, color: '#F05032' },
    { name: 'TDD', icon: 'fas fa-vial', percentage: 85, color: '#4CAF50' }, // Icono de vial para testing, color verde
    { name: 'DDD', icon: 'fas fa-cube', percentage: 85, color: '#8E24AA' }, // Icono de cubo para Domain-Driven Design, color púrpura
    { name: 'Principios SOLID', icon: 'fas fa-hands-helping', percentage: 90, color: '#FFC107' }, // Icono de manos para colaboración/principios, color ámbar
    { name: 'Clean Code', icon: 'fas fa-broom', percentage: 90, color: '#2196F3' }, // Icono de escoba para Clean Code, color azul claro
    { name: 'JavaScript', icon: 'fab fa-js-square', percentage: 75, color: '#F7DF1E' },
    { name: 'Python', icon: 'fab fa-python', percentage: 75, color: '#3776AB' }, // Icono de Python, color de Python
    { name: 'Angular', icon: 'fab fa-angular', percentage: 70, color: '#DD0031' }, // Icono de Angular, color de Angular
    { name: 'C#', icon: 'fas fa-hashtag', percentage: 60, color: '#922090' }, // Icono de #, color de C#
    { name: 'Java', icon: 'fab fa-java', percentage: 80, color: '#007396' }, // Icono de Java, color de Java
    { name: 'MongoDB', icon: 'fas fa-leaf', percentage: 70, color: '#47A248' }, // Icono de hoja para MongoDB, color de MongoDB
    { name: 'Oracle', icon: 'fas fa-database', percentage: 80, color: '#F80000' }, // Icono de base de datos, color de Oracle
    { name: 'Android Java', icon: 'fab fa-android', percentage: 80, color: '#3DDC84' }, // Icono de Android, color de Android
    { name: 'HTML5', icon: 'fab fa-html5', percentage: 95, color: '#E34F26' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', percentage: 70, color: '#1572B6' }
];

export const aboutMeContent = `Mi nombre es ${personalInfo.name}. Como Ingeniero de Software, he dedicado más de una década a transformar ideas en soluciones tecnológicas robustas. Mi trayectoria abarca desde el desarrollo web y móvil hasta la arquitectura de sistemas complejos, siempre con un enfoque en la calidad del código y la eficiencia.

Soy un firme creyente en el aprendizaje continuo y la aplicación de metodologías ágiles como SCRUM. He tenido la oportunidad de impartir formación en Diseño Orientado al Dominio (DDD) y Conducción por el Comportamiento, lo que refleja mi compromiso no solo con el desarrollo, sino también con la transmisión de conocimiento y las buenas prácticas.

Mi pasión por la tecnología me impulsa a explorar nuevas herramientas y enfoques, asegurando que mis proyectos no solo cumplan con los requisitos actuales, sino que estén preparados para los desafíos del futuro.`;

export const contactInfo = {
    intro: "Estoy siempre abierto a nuevas oportunidades de desarrollo, colaboraciones técnicas o simplemente para hablar de tecnología. ¡No dudes en escribirme!",
    email: personalInfo.email,
    github: personalInfo.githubUrl,
};
