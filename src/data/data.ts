import * as icons from 'react-icons/fa6';
import * as remixIcons from 'react-icons/ri';

export type AboutSectionInfoFile = {
    name: string;
    description: string;
    parent: AboutSectionInfo;
};

export type AboutSectionInfo = {
    title: string;
    description: string;
    files: AboutSectionInfoFile[];
    parent: AboutSection;
};

export type AboutSection = {
    title: string;
    icon: keyof typeof remixIcons;
    info: AboutSectionInfo[];
};

export type FindMeAlsoInSource = {
    title: string;
    name: string;
    url: string;
    user: string;
    icon: keyof typeof icons;
};

export type Technology = {
    name: string;
    icon: string;
    color: string;
    backgroundColor: string;
};

export type Project = {
    id: string;
    title: string;
    description: string;
    tech: string[];
    url: string;
};

const data = {
    name: 'Guilherme Kauã',
    logo_name: 'guilherme-kaua',
    role: 'Fullstack developer',
    about: {
        sections: [
            {
                title: 'personal-info',
                icon: 'RiUser4Fill',
                info: [
                    {
                        title: 'bio',
                        description: 'Info about me',
                        files: [
                            {
                                name: 'index',
                                description:
                                    '<br>' +
                                    'I’m Guilherme Kauã (though most people online know me as Approximations), a 20-year-old full-stack web developer. Officially, I work across both front-end and back-end development, but I also have a genuine love for creating UI designs as a hobby. My goal is to build digital experiences that look good and perform flawlessly.<br>' +
                                    '<br>' +
                                    'I’m constantly learning new technologies and taking on projects that push me to grow :)',
                            },
                        ],
                    },
                    {
                        title: 'education',
                        description: 'Info about my education',
                        files: [
                            {
                                name: 'university',
                                description:
                                    '<br>Currently, I hold an Associate Degree in Systems Analysis and Development, which I completed in June 2024.<br>' +
                                    '<br>' +
                                    'Throughout my studies, I gained a solid foundation in the core areas of programming, database management, and system development. This degree allowed me to dive deep into the world of technology and build a strong skill set in both the theoretical and practical aspects of the field.<br>' +
                                    '<br>' +
                                    'As I continue to expand my knowledge, I’m excited to leverage this education in real-world projects, always striving to grow and adapt in the fast-evolving tech landscape.',
                            },
                        ],
                    },
                ],
            },
            {
                title: 'professional-info',
                icon: 'RiTerminalBoxFill',
                info: [
                    {
                        title: 'experience',
                        description: '<br>Info about my professional experience',
                        files: [
                            {
                                name: 'index',
                                description:
                                    '<br>I am a Full-Stack Developer with extensive experience in Java, Spring Boot, React, and Next.js. My programming journey began in 2021 when I started creating simple automation scripts for games, which sparked my passion for solving problems through code and led me to pursue programming professionally.<br>' +
                                    '<br>' +
                                    'In 2022, I expanded my expertise by developing custom backend solutions for Bukkit/Spigot servers, mastering Java and various frameworks. Through my freelance work at DevRoom, I successfully delivered over multiple custom Java solutions using Java, Hibernate, MySQL, etc..., while working directly with clients to gather requirements and deliver tailored solutions. This provided invaluable experience in project management, system architecture design using UML diagrams, and maintaining code quality through test automation and clean architecture practices.<br>' +
                                    '<br>' +
                                    'From 2023 onwards, I broadened my skill set to encompass full-stack development. At Screen Labs, I implemented a complete e-commerce frontend using React.js, Next.js, and TypeScript, translating Figma designs into responsive, accessible interfaces. My role at Hive Media further enhanced my frontend capabilities, where I developed dashboard interfaces and desktop applications with Electron, while optimizing SEO performance through sitemap and JSON-LD integration.<br>' +
                                    '<br>' +
                                    "Currently at OTI Software, I focus on backend development with Spring Boot, where I've established CI/CD pipelines using Jenkins, implemented comprehensive testing strategies with JUnit, Mockito, and Testcontainers, and refactored legacy codebases following SOLID principles. I also resolve production issues through log analysis and cross-functional collaboration.",
                            },
                        ],
                    },
                    {
                        title: 'hard-skills',
                        description: '<br>Info about my hard-skills',
                        files: [
                            {
                                name: 'index',
                                description:
                                    '<br>As a Full-Stack Developer, I have extensive experience in both frontend and backend development. I leverage TypeScript across my projects to ensure type safety and maintainable code.<br>' +
                                    '<br>' +
                                    'Frontend skills:<br>' +
                                    '- HTML, CSS, JavaScript, TypeScript<br>' +
                                    '- React.js, Next.js<br>' +
                                    '- Tailwind CSS, Electron<br>' +
                                    '- SEO optimization (sitemap, JSON-LD)<br>' +
                                    '- Responsive and accessible UI development<br>' +
                                    '<br>' +
                                    'Backend skills:<br>' +
                                    '- Java, Spring Boot, Hibernate<br>' +
                                    '- Node.js, Express.js<br>' +
                                    '- RESTful API development<br>' +
                                    '- Message queuing (RabbitMQ)<br>' +
                                    '- Caching (Redis)<br>' +
                                    '<br>' +
                                    'I apply clean code principles, clean architecture patterns, and SOLID principles throughout my development process. My experience includes designing system architecture with UML, implementing comprehensive testing strategies (JUnit, Mockito, Testcontainers), and establishing CI/CD pipelines with Jenkins and Docker.',
                            },
                        ],
                    },
                ],
            },
            {
                title: 'hobbies-info',
                icon: 'RiGamepadFill',
                info: [
                    {
                        title: 'favorite-games',
                        description: 'Info about my favorite games',
                        files: [
                            {
                                name: 'index',
                                description:
                                    '<br>I play a lot CS:GO (now CS2) on almost all my free time. I also like to play Fortnite, and some other games.',
                            },
                        ],
                    },
                ],
            },
        ] as AboutSection[],
    },
    contacts: {
        direct: {
            title: 'contacts',
            sources: {
                email: 'guilhermeksilva556@gmail.com',
            },
        },
        social: {
            github: {
                title: 'Github profile',
                url: 'https://github.com/guikaua12',
                user: 'guikaua12',
            },
        },
        find_me_also_in: {
            title: 'find-me-also-in',
            sources: [
                {
                    name: 'youtube',
                    title: 'YouTube channel',
                    url: 'https://www.youtube.com/channel/UCCoUKF5vW1XPMDUYBbY6Bbg',
                    user: 'Approximations',
                    icon: 'FaYoutube',
                },
                {
                    name: 'instagram',
                    title: 'Instagram account',
                    url: 'https://www.instagram.com/g._.kaua/',
                    user: 'g._.kaua',
                    icon: 'FaInstagram',
                },
                {
                    name: 'twitch',
                    title: 'Twitch profile',
                    url: 'https://www.twitch.tv/approximations0',
                    user: 'approximations0',
                    icon: 'FaTwitch',
                },
            ] as FindMeAlsoInSource[],
        },
    },
    technologies: {
        Java: {
            name: 'Java',
            icon: 'icons/java.svg',
            backgroundColor: '#FFF',
            color: '#E1A914',
        },
        Spring: {
            name: 'Spring',
            icon: 'icons/spring.svg',
            backgroundColor: '#FFF',
            color: '#6DB33F',
        },
        Hibernate: {
            name: 'Hibernate',
            icon: 'icons/hibernate.svg',
            backgroundColor: '#FFF',
            color: '#59666C',
        },
        React: {
            name: 'React',
            icon: 'icons/react.svg',
            backgroundColor: '#86E1F9',
            color: '#FFF',
        },
        HTML: {
            name: 'HTML',
            icon: 'icons/html5-fill.svg',
            backgroundColor: '#e34c26',
            color: '#FFF',
        },
        CSS: {
            name: 'CSS',
            icon: 'icons/css3-fill.svg',
            backgroundColor: '#264de4',
            color: '#FFF',
        },
        'Tailwind CSS': {
            name: 'Tailwind CSS',
            icon: 'icons/tailwindcss.svg',
            backgroundColor: '#05B6D4',
            color: '#FFF',
        },
        NextJS: {
            name: 'NextJS',
            icon: 'icons/nextdotjs.svg',
            backgroundColor: '#080808',
            color: '#FFF',
        },
        NodeJS: {
            name: 'NodeJS',
            icon: 'icons/nodedotjs.svg',
            backgroundColor: '#339933',
            color: '#FFF',
        },
        Javascript: {
            name: 'Javascript',
            icon: 'icons/javascript.svg',
            backgroundColor: '#F7DF1E',
            color: '#000',
        },
        Typescript: {
            name: 'Typescript',
            icon: 'icons/typescript.svg',
            backgroundColor: '#3178C6',
            color: '#FFF',
        },
        Express: {
            name: 'Express',
            icon: 'icons/express.svg',
            backgroundColor: '#404D59',
            color: '#FFF',
        },
        PostgreSQL: {
            name: 'PostgreSQL',
            icon: 'icons/postgresql.svg',
            backgroundColor: '#4169E1',
            color: '#FFF',
        },
    } as { [key: string]: Technology },
    projects: [
        {
            id: '10',
            title: '_spigot-boot',
            description: 'Improve the way you write Spigot plugins by coding on top of IOC containers ',
            tech: ['Java', 'Hibernate'],
            url: 'https://github.com/guikaua12/spigot-boot',
        },
        {
            id: '9',
            title: '_microservice-spring',
            description: 'Backend simples usando arquitetura de microserviços',
            tech: ['Java', 'Spring', 'Hibernate'],
            url: 'https://github.com/guikaua12/microservices-spring',
        },
        {
            id: '8',
            title: '_music',
            description:
                'Esse projeto foi criado para fins de estudo, consiste em uma plataforma de músicas, onde os usúarios podem consumir e fazer upload de músicas.',
            tech: ['React', 'NextJS', 'Hibernate', 'Typescript'],
            url: 'https://github.com/guikaua12/music',
        },
        {
            id: '7',
            title: '_music-api',
            description:
                'Esse projeto foi criado para fins de estudo, consiste em uma plataforma de músicas, onde os usúarios podem consumir e fazer upload de músicas. A ideia é usar o Cloudflare R2 (usando a API do AWS S3) pra salvar e recuperar as músicas.',
            tech: ['Java', 'Spring', 'Hibernate'],
            url: 'https://github.com/guikaua12/music-api',
        },
        {
            id: '6',
            title: '_spring-example',
            description: "This project was my first contact with Spring Framework, with Nélio Alves's Udemy course.",
            tech: ['Java', 'Spring', 'Hibernate'],
            url: 'https://github.com/guikaua12/music-api',
        },
        {
            id: '5',
            title: '_design-patterns',
            description:
                'This is a project that i implement some of the most used design patterns, such as Observer, Singleton, Builder, etc... using Java.',
            tech: ['Java'],
            url: 'https://github.com/guikaua12/design-patterns',
        },
        {
            id: '4',
            title: '_apx-plugin',
            description:
                'ApxPlugin is a library for minecraft server plugin development. I built it inspired on Spring Framework, i used Hibernate as ORM, it uses proxy to handle Hibernate transactions on a single thread, and it has a lot of features that make plugin development easier.',
            tech: ['Java', 'Hibernate'],
            url: 'https://github.com/guikaua12/ApxPlugin',
        },
        {
            id: '3',
            title: '_my-portfolio',
            description: 'A portfolio website made using Next and Tailwind',
            tech: ['NextJS', 'Typescript', 'Tailwind CSS'],
            url: 'https://github.com/guikaua12/my-portfolio',
        },
        {
            id: '2',
            title: '_trips-api',
            description: 'A REST API for the trips website made with Express and Postgres.',
            tech: ['NodeJS', 'Express', 'PostgreSQL', 'Typescript'],
            url: 'https://github.com/guikaua12/trips-api',
        },
        {
            id: '1',
            title: '_trips',
            description: 'A trips website made with Next and Tailwind.',
            tech: ['NextJS', 'Tailwind CSS', 'Typescript'],
            url: 'https://github.com/guikaua12/trips',
        },
    ] as Project[],
};

data.about.sections.forEach((section) => {
    section.info.forEach((info) => {
        info.files.forEach((file) => {
            file.parent = info;
        });
        info.parent = section;
    });
});

export { data };
