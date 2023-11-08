import file from '@/../data.json';
import * as icons from 'react-icons/fa6';

export type AboutSectionInfoFile = {
    name: string;
    description: string;
};

export type AboutSectionInfo = {
    title: string;
    description: string;
    files?: AboutSectionInfoFile[];
};

export type AboutSection = {
    title: string;
    icon: string;
    info: AboutSectionInfo[];
};

export type FindMeAlsoInSource = {
    title: string;
    url: string;
    user: string;
    icon: keyof typeof icons;
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
};

// @ts-ignore TS2322
export const data: Data = file;
