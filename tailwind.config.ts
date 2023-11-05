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
                'light-gray': '#E5E9F0',
                'accent-turquoise': '#43D9AD',
                'secondary-indigo': '#4D5BCE',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};
export default config;
