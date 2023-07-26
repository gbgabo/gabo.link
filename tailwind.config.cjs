const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        'fade-up': {
          from: {
            opacity: 0,
            transform: 'translateY(50%)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0%)',
          },
        },
        'show-dialog': {
          from: {
            opacity: 0,
            transform: 'translateY(-100%)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0%)',
          },
        },
        'hide-dialog': {
          to: {
            opacity: 0,
            transform: 'translateY(-100%)',
          },
        },
        'show-backdrop': {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        'hide-backdrop': {
          to: {
            opacity: 0,
          },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.3s',
        'show-dialog': 'show-dialog 0.5s ease normal',
        'hide-dialog': 'hide-dialog 0.5s ease normal',
        'show-backdrop': 'show-backdrop 0.5s ease normal',
        'hide-backdrop': 'hide-backdrop 0.5s ease 0.2s normal',
      },
      gridTemplateColumns: {
        main: '1fr min(65ch, 100%) 1fr',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
