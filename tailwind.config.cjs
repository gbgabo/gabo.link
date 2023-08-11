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
        'dark-purple': 'rgb(36, 0, 65)',
        'darker-purple': 'rgb(25, 0, 46)',
        'acid-green': 'rgb(0, 255, 183)',
        cherry: 'rgb(144, 0, 72)',
        pink: 'rgb(255, 14, 130)',
        'light-purple': 'rgb(199, 155, 255)',
        grape: 'rgb(117, 45, 206)',
        'pastel-purple': 'rgb(231, 212, 255)',
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
      },
      animation: {
        'fade-up': 'fade-up 0.3s',
      },
      gridTemplateColumns: {
        main: '1fr min(65ch, 100%) 1fr',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
