/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            primary: '#5C62F9',
            mainGreen: '#35C89F',
            mainYellow: '#FFCC00',
            mainRed: '#F97F88',
            red: '#F97F88',
            white: '#FFFFFF',
            black: '#01082D',
            gray80: '#343957',
            gray60: '#676B81',
            gray40: '#999CAB',
            gray20: '#CCCED5',
            gray10: '#E6E6EA',
            gray5: '#F2F3F5',
            cream: '#F9F6F3',
            tertiaryYellow: '#FFEDA6',
            disabled: '#E0E2EC',
            disabledDark: '#A0A3AF',
            yellow: '#FFD940',
            lightPurple: '#F7F7FF',
        },
        fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
        },
        extend: {
            spacing: {
                128: '32rem',
                144: '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
        },
    },
    plugins: [],
};
