import axios from 'axios';
import { handleDates } from '@/utils/date-utils';

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
    created_at: Date;
    updated_at: Date;
    description: string;
    comments: number;
    owner: {
        login: string;
        id: number;
        avatar_url: string;
        html_url: string;
    };
}

export async function getAll({ username, per_page = 1000 }: { username: string; per_page?: number }): Promise<Gist[]> {
    const res = await axios.get(`https://api.github.com/users/${username}/gists?per_page=${per_page}`);
    const data = res.data;
    handleDates(data);

    return data;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getFileContent(file: File) {
    // await delay(1500);
    const res = await axios.get(file.raw_url);
    return res.data;
}
