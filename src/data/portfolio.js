export const personalInfo = {
    name: "Alejandro Valenzuela Villa",
    photoPath: "/assets/profile-image.jpeg",
    tagline: "Ingeniero de Software | Arquitecto de Soluciones",
    bio: `¡Hola! Soy Alejandro Valenzuela Villa, soy Ingeniero de software por la Universidad de Murcia y con un curso de especialista en desarrollos de aplicaciones móviles.
    Me considero un apasionado de la tecnología y del desarrollo de software con más de diez años de experiencia en el sector.
    Actualmente, me dedico tanto a desarrollar como a ser arquitecto de software backend.`,
    email: "murcianotech@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/alejandro-valenzuela-villa-47322570/",
    githubUrl: "https://github.com/MurcianoTech",
    youtubeUrl: "https://www.youtube.com/channel/UCphxAiT1Cp230Nf9sPDKigA"
};

export const socialLinks = [
    { name: 'LinkedIn', url: personalInfo.linkedinUrl, iconClass: 'fab fa-linkedin' },
    { name: 'GitHub', url: personalInfo.githubUrl, iconClass: 'fab fa-github' },
    { name: 'YouTube', url: personalInfo.youtubeUrl, iconClass: 'fab fa-youtube' },
    { name: 'Email', url: personalInfo.email, iconClass: 'fas fa-envelope' }
];

export const navigationLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Contacto', href: '#contact' }
];

export const experienceData = [
    {
        title: "Arquitecto de software | Senior software developer",
        company: "Capgemini",
        period: "Octubre 2021 - Actualidad",
        description: [
            `Trabajo realizado a distancia.`,
            `Desarrollo PHP (5.6, 7.x, 8), JavaScript (Vanilla, JQuery, Angular 10, Redux, Typescript con NgRx).`,
            `Bases de datos relacionales (MySql, Oracle, SQLite) y no relacionales (MongoDB).`,
            `Desarrollo de pruebas unitarias y de aceptación (PHPUnit, Behat).`,
            `Logs con Graylog y Kibana. Docker. Metodología SCRUM.`,
            `Desarrollo de proyectos utilizando DDD (Domain Driven Design) y TDD con arquitectura hexagonal y principios SOLID.`,
            `Uso de ElasticSearch y Dynatrace.`,
            `Referencia técnica en los diferentes proyectos.`,
            `Proyectos: JRunWay (referente Backend, PHP 7+, Kibana, ElasticSearch, MySql), FaCe (referente Backend), PtPlata (referente Backend), Forma (creación de formularios).`,
            `Formación impartida: Diseño Orientado al Dominio (DDD), Conducción por el Comportamiento.`
        ]
    },
    {
        title: "Software Engineer",
        company: "PcComponentes",
        period: "Septiembre 2018 - Septiembre 2021",
        description: [
            `Trabajo realizado a distancia.`,
            `Desarrollo web (PHP, JavaScript, JQuery, Angular, Java) y móvil (Android).`,
            `Bases de datos relacionales (MySQL) y NoSQL (MongoDb, Postgres).`,
            `Desarrollo .NET. Pruebas unitarias (PHPUnit, JUnit) y de aceptación (Behat).`,
            `Principios SOLID, uso de Docker, arquitectura hexagonal.`,
            `Implementación de microservicios.`,
            `Proyectos logísticos para almacenes (WMS).`,
            `Proyectos con DDD (Domain Driven Design), Event Sourcing y CQRS.`,
            `SCRUM.`
        ]
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
        ]
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
            `Bases de datos MySQL, SQLite.`
        ]
    },
];

export const aboutMeContent = `Mi nombre es ${personalInfo.name}. Como Ingeniero de Software, he dedicado más de una década a transformar ideas en soluciones tecnológicas robustas. Mi trayectoria abarca desde el desarrollo web y móvil hasta la arquitectura de sistemas complejos, siempre con un enfoque en la calidad del código y la eficiencia.

Soy un firme creyente en el aprendizaje continuo y la aplicación de metodologías ágiles como SCRUM. He tenido la oportunidad de impartir formación en Diseño Orientado al Dominio (DDD) y Conducción por el Comportamiento, lo que refleja mi compromiso no solo con el desarrollo, sino también con la transmisión de conocimiento y las buenas prácticas.

Mi pasión por la tecnología me impulsa a explorar nuevas herramientas y enfoques, asegurando que mis proyectos no solo cumplan con los requisitos actuales, sino que estén preparados para los desafíos del futuro.`;

export const contactInfo = {
    intro: "Estoy siempre abierto a nuevas oportunidades de desarrollo, colaboraciones técnicas o simplemente para hablar de tecnología. ¡No dudes en escribirme!",
    email: personalInfo.email,
    linkedin: personalInfo.linkedinUrl,
    github: personalInfo.githubUrl,
};
