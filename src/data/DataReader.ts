import file from '@/../data.json';
import * as icons from 'react-icons/fa6';

export type AboutSectionInfo = {
    title: string;
    description: string;
};

export type AboutSection = {
    title: string;
    icon: string;
    info: AboutSectionInfo[];
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
            sources: {
                youtube: {
                    title: string;
                    url: string;
                    user: string;
                };
                instagram: {
                    title: string;
                    url: string;
                    user: string;
                };
                twitch: {
                    title: string;
                    url: string;
                    user: string;
                };
            };
        };
    };
};

// @ts-ignore TS2322
export const data: Data = file;
