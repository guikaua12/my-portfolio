import fs from 'fs';

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

const file = fs.readFileSync(process.cwd() + '/data.json', 'utf8');
export const data: Data = JSON.parse(file);
