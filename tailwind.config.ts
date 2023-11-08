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
            keyframes: {
                'ping-invert': {
                    '0%': { transform: 'scale(2)', opacity: '0' },
                    '75%, 100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
            animation: {
                'ping-one-time': 'ping-invert 1s cubic-bezier(0, 0, 0.2, 1);',
            },
        },
    },
    plugins: [],
};
export default config;
