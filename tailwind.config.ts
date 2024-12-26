import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-primary)', 'sans-serif'],
        secondary: ['var(--font-secondary)', 'sans-serif'],
      },
      colors: {
        primary: '#2F6FED',
        accent: '#FF7043',
        'gray-1000': '#232323',
        'gray-900': '#E6EFF5',
        'gray-500': "#F5F7FA",
        'gray-300': '#B1B1B1',
        'gray-200': '#F3F3F5',
        'blue-300': '#343C6A',
        'blue-200': '#718EBF',
        'blue-100': '#8BA3CB',
        'blue-50': '#DFEAF2',
        'warning-100': '#FFF5D9',
        'info-100': '#E7EDFF',
        'success-100': '#DCFAF8',
        'danger': '#FF4B4A',
        'success': '#41D4A8',
        'info': '#396AFF',
      },
      fontSize: {
        'xxs': '10px',
        'xs': '12px',
        'sm': '14px',
        'md': '16px',
        'lg': '20px',
        'custom-13': '13px',
        'custom-15': '15px',
        'custom-17': '17px',
        'custom-22': '22px',
        'custom-25': '25px',
        'custom-28': '28px',
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'x-bold': '800',
      },
      screens: {
        'mobile': '576px',
        'desktop': '900px',
      },
      backgroundImage: {
        'dark-card': 'linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)',
        'dark-card-number': 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
