import axios from 'axios';

export interface File {
    filename: string;
    language: string;
    raw_url: string;
}

export interface Gist {
    id: string;
    url: string;
    html_url: string;
    files: {
        [key: string]: File;
    };
    created_at: string;
    updated_at: string;
    description: string;
    comments: number;
    owner: {
        login: string;
        id: number;
        avatar_url: string;
        html_url: string;
    };
}

export async function getAll(username: string): Promise<Gist[]> {
    const res = await axios.get(`https://api.github.com/users/${username}/gists`);
    return res.data;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getFileContent(file: File) {
    // await delay(1500);
    const res = await axios.get(file.raw_url);
    return res.data;
}
