import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                'blue-1': '#010C15',
                'blue-2': '#011627',
                'blue-3': '#1E2D3D',
                'blue-4': '#607B96',
            },
        },
    },
    plugins: [],
};
export default config;
