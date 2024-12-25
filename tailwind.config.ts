import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
      },
      colors: {
        primary: '#2F6FED',
        accent: '#FF7043',
        'gray-1000': '#232323',
        'gray-900': '#E6EFF5',
        'gray-500': "#F5F7FA",
        'gray-300': '#B1B1B1',
        'blue-300': '#343C6A',
        'blue-200': '#718EBF',
        'blue-100': '#8BA3CB',
      },
      fontSize: {
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
        'desktop': '778px',
      },
    },
  },
  plugins: [],
} satisfies Config;
