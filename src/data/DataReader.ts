import file from '@/../data.json';
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
    url: string;
    user: string;
    icon: keyof typeof icons;
};

export type Technology = {
    name: string;
    icon: keyof typeof remixIcons;
    color: string;
    backgroundColor: string;
};

export type Project = {
    id: string;
    title: string;
    description: string;
    img: string;
    tech: string[];
    url: string;
};

export type Data = {
    name: string;
    logo_name: string;
    role: string;
    about: { sections: AboutSection[] };
    contacts: {
        social: {
            github: {
                title: string;
                url: string;
                user: string;
            };
            facebook: {
                title: string;
                url: string;
                user: string;
            };
            twitter: {
                title: string;
                url: string;
                user: string;
            };
        };
        find_me_also_in: {
            title: string;
            sources: FindMeAlsoInSource[];
        };
    };
    technologies: {
        [key: string]: Technology;
    };
    projects: {
        [key: string]: Project;
    };
};

// @ts-ignore TS2322
const data: Data = file;

data.about.sections.forEach((section) => {
    section.info.forEach((info) => {
        info.files.forEach((file) => {
            file.parent = info;
        });
        info.parent = section;
    });
});

export { data };
