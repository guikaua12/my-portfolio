import { isValid, parseISO } from 'date-fns';

export function handleDates(data: any) {
    if (data === null || data === undefined || typeof data !== 'object') return data;

    if (Array.isArray(data)) {
        for (const item of data) {
            for (const key of Object.keys(item)) {
                const value = item[key];
                if (isValidDate(value)) item[key] = parseISO(value);
                else if (typeof value === 'object') handleDates(value);
            }
        }
        return;
    }

    for (const key of Object.keys(data)) {
        const value = data[key];
        if (isValidDate(value)) data[key] = parseISO(value);
        else if (typeof value === 'object') handleDates(value);
    }
}

export function isValidDate(date: string) {
    const parsedDate = parseISO(date);
    return isValid(parsedDate);
}
