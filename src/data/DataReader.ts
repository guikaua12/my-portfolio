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
};

const file = fs.readFileSync(process.cwd() + '/data.json', 'utf8');
export const data: Data = JSON.parse(file);
