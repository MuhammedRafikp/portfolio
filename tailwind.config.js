/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: {
                    dark: '#121212',
                    light: '#f8fafc',
                },
                primary: {
                    50: '#f0fdfa',
                    100: '#ccfbf1',
                    200: '#99f6e4',
                    300: '#5eead4',
                    400: '#2dd4bf',
                    500: '#14b8a6',
                    600: '#0d9488',
                    700: '#0f766e',
                    800: '#115e59',
                    900: '#134e4a',
                },
                secondary: {
                    50: '#f5f3ff',
                    100: '#ede9fe',
                    200: '#ddd6fe',
                    300: '#c4b5fd',
                    400: '#a78bfa',
                    500: '#8b5cf6',
                    600: '#7c3aed',
                    700: '#6d28d9',
                    800: '#5b21b6',
                    900: '#4c1d95',
                },
                codeblock: '#1e293b',
                darkgray: '#2d3748',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            spacing: {
                '8xl': '96rem',
                '9xl': '128rem',
            },
            animation: {
                'text-gradient': 'text-gradient 3s ease infinite',
                cursor: 'cursor .6s linear infinite alternate',
                'border-beam': 'border-beam 2s linear infinite alternate',
            },
            keyframes: {
                'text-gradient': {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center',
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center',
                    },
                },
                cursor: {
                    '0%, 40%': { opacity: 0 },
                    '60%, 100%': { opacity: 1 },
                },
                'border-beam': {
                    '0%': { 'border-color': 'rgba(59, 130, 246, 0.5)' },
                    '33%': { 'border-color': 'rgba(139, 92, 246, 0.5)' },
                    '66%': { 'border-color': 'rgba(45, 212, 191, 0.5)' },
                    '100%': { 'border-color': 'rgba(59, 130, 246, 0.5)' },
                },
            },
        },
    },
    plugins: [],
};