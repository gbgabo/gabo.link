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
        'dark-purple': 'var(--wb-dark-purple)',
        'darker-purple': '#19002e',
        'acid-green': 'var(--wb-acid-green)',
        cherry: 'var(--wb-cherry)',
        pink: 'var(--wb-pink)',
        'light-purple': '#c79bff',
        grape: 'var(--wb-grape)',
        'pastel-purple': '#e7d4ff',
        'muted-purple': 'var(--wb-muted-purple)',
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
        'main-left': 'min(100ch, 100%) 1fr',
      },
    },
  },
  safelist: ['dark:hidden'],
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
