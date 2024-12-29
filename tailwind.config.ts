import type { Config } from 'tailwindcss';

export default {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-primary)', 'sans-serif'],
        secondary: ['var(--font-secondary)', 'sans-serif'],
      },
      colors: {
        'dark-gray': '#232323',
        'light-blue-gray': '#E6EFF5',
        'ghost-white': '#F5F7FA',
        'medium-gray': '#B1B1B1',
        'ivory-gray': '#F3F3F5',
        'navy-blue': '#343C6A',
        'steel-blue': '#718EBF',
        'sky-blue': '#8BA3CB',
        'pale-blue': '#DFEAF2',
        'light-warning': '#FFF5D9',
        'light-info': '#E7EDFF',
        'light-success': '#DCFAF8',
        danger: '#FF4B4A',
        success: '#41D4A8',
        info: '#396AFF',
        orange: '#FC7900',
      },
      fontSize: {
        xxs: '10px',
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '20px',
        13: '13px',
        15: '15px',
        17: '17px',
        22: '22px',
        25: '25px',
        28: '28px',
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        'x-bold': '800',
      },
      screens: {
        mobile: '576px',
        desktop: '900px',
      },
      backgroundImage: {
        'dark-card':
          'linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)',
        'dark-card-number':
          'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)',
      },
      borderRadius: {
        10: '10px',
        15: '15px',
        25: '25px',
        50: '50px',
      },
      height: {
        '18px': '18px',
        '30px': '30px',
        '35px': '35px',
        '50px': '50px',
        '70px': '70px',
        '90px': '90px',
        '100px': '100px',
        '254px': '254px',
        '275px': '275px',
        '325px': '325px',
      },
      minHeight: {
        '50px': '50px',
        '70px': '70px',
        '170px': '170px',
        '235px': '235px',
      },
      maxHeight: {
        '235px': '235px',
      },
      width: {
        '27px': '27px',
        '30px': '30px',
        '35px': '35px',
        '50px': '50px',
        '90px': '90px',
        '100px': '100px',
        '140px': '140px',
        '190px': '190px',
        '265px': '265px',
        '350px': '350px',
        '450px': '450px',
        '635px': '635px',
        '730px': '730px',
      },
      minWidth: {
        '100px': '100px',
        '125px': '125px',
        '265px': '265px',
        '350px': '350px',
      },
      keyframes: {
        ripple: {
          '0%': {
            transform: 'scale(0)',
            opacity: '0.75',
          },
          '100%': {
            transform: 'scale(4)',
            opacity: '0',
          },
        },
      },
      animation: {
        ripple: 'ripple 600ms linear',
      },
    },
  },
  plugins: [],
} satisfies Config;
