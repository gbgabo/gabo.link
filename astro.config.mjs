import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig, squooshImageService } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import astroI18next from 'astro-i18next';
import { readingTimeRemarkPlugin } from './src/utils/frontmatter.mjs';

import { SITE } from './src/config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const whenExternalScripts = (items = []) =>
  SITE.googleAnalyticsId ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',

  output: 'static',

  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap(),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        ep: ['arrow-left-bold', 'close-bold'],
        eva: ['diagonal-arrow-right-up-fill'],
        mdi: ['linux', 'web', 'language-javascript', 'language-typescript'],
        ph: ['hand-fist-bold'],
        fluent: ['play-32-filled'],
        ic: ['round-code', 'outline-color-lens'],
        'simple-icons': ['html5', 'css3', 'nextdotjs', 'tailwindcss', 'gnubash', 'astro', 'python', 'linux'],
        ri: ['twitter-fill', 'facebook-box-fill', 'linkedin-box-fill', 'whatsapp-fill', 'mail-fill'],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    astroI18next(),
  ],

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    // Can be 'shiki' (default), 'prism' or false to disable highlighting
    syntaxHighlight: 'prism',
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
