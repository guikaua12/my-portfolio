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
                                    "<br>Hi, my name is Guilherme Kauã (AKA Approximations), i'm a 20-year-old technology enthusiast and fullstack developer. I love creating beautiful and functional websites and applications, using a variety of languages and frameworks. Some of the skills that I have are HTML, CSS, JS, TS, React, Next, Tailwind, SQL, MongoDB, Postgres, Express, and Node.<br><br>I have a great experience with the Java language itself, but i just started learning the comercial side with Spring Boot, JPA, etc...<br><br>I enjoy learning new things and challenging myself with different projects. I am always looking for opportunities to improve my knowledge and experience in web development. I am also passionate about sharing my work and helping others in the tech community.",
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
                                    '<br>I am a student at UNOPAR (Universidade Norte do Paraná), one of the largest universities in Brazil. I am currently pursuing a degree in System Analysis and Development, which is a field that combines computer science, engineering, and business.<br><br>System Analysis and Development is a course that teaches how to plan, design, implement, and maintain software systems that meet the needs of users and organizations. It covers topics such as programming languages, databases, web development, software engineering, project management.<br><br>I started my course in the second semester of 2022, and I expect to graduate in the first semester of 2024.',
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
                                    '<br>I am a self-taught programmer with a passion for creating interactive applications. I started coding in 2021, when I wrote some simple Python scripts to automate some tasks in the games I played. I enjoyed the challenge and the satisfaction of making things work with code, so I decided to pursue programming as a hobby and a career.<br><br>In 2022, I began developing plugins for Bukkit/Spigot servers, which are platforms for running Minecraft multiplayer servers. I learned how to use Java, the Bukkit API, and various libraries and frameworks. I also started doing commissions for other server owners, who hired me to develop plugins according to their specifications and needs. I gained valuable experience in working with clients, managing projects, and delivering quality products.<br><br>In December 2022, I expanded my skill set by studying web development, both frontend and backend. I took some online courses to learn the basics of HTML, CSS, JavaScript, and Node.js, as well as some popular tools and frameworks such as Tailwind, React, Express, and MongoDB. I applied my knowledge by building some personal projects, such as this portfolio website, and a Trips website. I also learned how to use Git, GitHub, and Vercel to manage and deploy my code.<br><br>I am always eager to learn new technologies and improve my skills. I am looking for opportunities to work on exciting and challenging projects.<br><br>**Note:** I have not stopped developing plugins for Bukkit/Spigot servers. I still enjoy working on them and I am open to new commissions. Web development is an additional skill  (will soon be the main) that I have acquired and I can also make websites for various purposes.',
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
                                    '<br>As a Fullstack developer, I have a strong background in web development, both frontend and backend. I use Typescript on almost all my projects, as it helps me write clean and maintainable code.<br><br>Frontend skills:<br>- HTML, CSS, JS, TS<br>- React<br>- Next<br>- Tailwind<br><br>Backend skills:<br>- Node.js<br>- Express.js<br>- I also know clean-code, clean architecture, SOLID, and some conventions',
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
