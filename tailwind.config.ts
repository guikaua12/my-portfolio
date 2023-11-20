import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            transitionDuration: {
                '2000': '2000ms',
            },
            colors: {
                'blue-1': '#010C15',
                'blue-2': '#011627',
                'blue-3': '#1E2D3D',
                'blue-4': '#607B96',
                'royal-blue': '#5565E8',
                'light-gray': '#E5E9F0',
                mirage: '#1C2B3A',
                'regent-st-blue': '#A0BDE1',
                'primary-blue-charcoal': '#011221',
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
                'ping-invert-scale-inverted': {
                    '0%': { transform: 'scale(0.66)', opacity: '0' },
                    '75%, 100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
            animation: {
                'ping-one-time': 'ping-invert 1s cubic-bezier(0, 0, 0.2, 1);',
                discover: 'ping-invert-scale-inverted 500ms cubic-bezier(0, 0, 0.2, 1);',
                'spin-slow': 'spin 2500ms linear infinite',
            },
        },
    },
    plugins: [
        require('tailwindcss-animate'),
        // ...
    ],
};
export default config;
