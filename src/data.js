import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import { getIntlayer } from 'intlayer';

export const headerData = (locale = '') => {
  const { nav } = getIntlayer('app', locale);
  return {
    links: [
      {
        text: '/blog',
        href: ['blog', 'page'],
        links: [
          {
            text: nav.articles,
            href: ['articles', 'category'],
          },
          {
            text: nav.lists,
            href: ['lists', 'category'],
          },
        ],
      },
      {
        text: nav.projects,
        href: ['projects', 'page'],
      },

      {
        text: nav.about,
        href: ['about', 'page'],
      },
    ],
    // actions: [
    //     { type: 'button', text: 'Download', href: 'https://github.com/onwidget/astrowind' }
    //   ],
  };
};

export const footerData = (locale = '') => {
  const { footer } = getIntlayer('app', locale);
  return {
    socialLinks: [
      { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/gbgabo' },
      { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/gabriel-gaboardi/' },
      { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/gb_gabo/' },
      { ariaLabel: 'Codepen', icon: 'tabler:brand-codepen', href: 'https://codepen.io/gb_gabo' },
      { ariaLabel: 'Mastodon', icon: 'tabler:brand-mastodon', href: 'https://mastodon.sdf.org/@gb_gabo' },
      { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/gb_gabo' },
      { ariaLabel: 'Mail', icon: 'tabler:mail', href: 'mailto:contact@gabo.link' },
      { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    ],
    footNote: footer
  };
};

export const categoryData = {
  lists: {
    classes: {
      filled: 'text-darker-purple bg-pink',
      outline: 'text-pink',
    },
    icon: 'tabler:list-details',
  },
  articles: {
    classes: {
      filled: 'text-darker-purple bg-acid-green',
      outline: 'text-acid-green drop-shadow-sm',
    },
    icon: 'tabler:news',
  },
};

export const bentoGrids = (locale = '') => {
  const { academics, languages } = getIntlayer('about', locale);
  return {
    uses: [
    {
      icon: 'tabler:app-window',
      title: 'The GUI',
      span: 'md:row-span-3 md:col-span-2',
      items: [
        [
          { type: 'text', value: 'Linux Distribution: ' },
          { type: 'chip', value: 'Debian' },
          { type: 'chip', value: 'Manjaro' },
        ],
        [
          { type: 'text', value: 'Window Manager || Desktop Enviroment: ' },
          { type: 'chip', value: 'dwm' },
          { type: 'chip', value: 'Gnome' },
        ],
        [
          { type: 'text', value: 'General Purpose Menu Launcher: ' },
          { type: 'chip', value: 'dmenu' },
        ],
        [
          { type: 'text', value: 'Brain dump and writing journal: ' },
          { type: 'chip', value: 'Logseq' },
        ],
        [
          { type: 'text', value: 'Web Browser: ' },
          { type: 'chip', value: 'Firefox' },
        ],
        [
          { type: 'text', value: 'Text editor: ' },
          { type: 'chip', value: 'vscodium' },
        ],
        [
          { type: 'text', value: 'Email Client: ' },
          { type: 'chip', value: 'Thunderbird' },
        ],
      ],
    },
    {
      icon: 'tabler:terminal',
      title: 'The CLI',
      items: [
        [
          {
            type: 'text',
            value: 'Terminal Emulator: ',
          },
          {
            type: 'chip',
            value: 'st',
          },
        ],
        [
          { type: 'text', value: 'Shell: ' },
          { type: 'chip', value: 'zsh' },
        ],
        [
          { type: 'text', value: 'Terminal multiplexer: ' },
          { type: 'chip', value: 'tmux' },
        ],
      ],
    },
    {
      title: 'Scripts',
      items: [
        [
          { type: 'chip', value: 'tmenu' },
          { type: 'chip', value: 'tsearch' },
        ],
      ],
    },
    {
      title: 'Reproduce my setup:',
      items: [
        [{ type: 'chip', variant: 'primary', value: 'Check my dotfiles', href: 'https://github.com/gbgabo/dotfiles' }],
      ],
    },
    {
      icon: 'tabler:settings',
      title: 'Services',
      items: [
        [
          { type: 'text', value: 'Password Manager: ' },
          { type: 'chip', value: 'KeePassXC' },
        ],
        [
          { type: 'text', value: 'Email Provider: ' },
          { type: 'chip', value: 'Tutanota' },
        ],
        [
          { type: 'text', value: 'Login Manager: ' },
          { type: 'chip', value: 'Simple Login' },
        ],
        [
          { type: 'text', value: 'File Sync: ' },
          { type: 'chip', value: 'Syncthing' },
        ],
      ],
    },
    {
      icon: 'tabler:device-mobile',
      title: 'Mobile',
      span: 'md:col-span-2',
      items: [
        [
          {
            type: 'text',
            value: 'Launcher: ',
          },
          {
            type: 'chip',
            value: 'Olauncher Clutter Free',
          },
        ],
        [
          {
            type: 'text',
            value: 'Podcast Player: ',
          },
          {
            type: 'chip',
            value: 'AntennaPod',
          },
        ],
        [
          {
            type: 'text',
            value: 'Mail: ',
          },
          {
            type: 'chip',
            value: 'K-9 Mail',
          },
        ],
        [
          {
            type: 'text',
            value: 'Web Browser: ',
          },
          {
            type: 'chip',
            value: 'Bromite',
          },
        ],
        [
          {
            type: 'Package Manager: ',
            value: 'droid-ify (f-droid client)',
          },
        ],
      ],
    },
    {
      icon: 'ic:outline-color-lens',
      title: 'Theming',
      span: 'md:col-span-3',
      items: [
        [
          { type: 'text', value: 'Font: ' },
          { type: 'chip', value: 'jetbrains-mono through nerd fonts' },
        ],
        [
          { type: 'text', value: 'Color Scheme: ' },
          { type: 'chip', value: 'Wildberries Theme', href: 'https://wildberries.style/about' },
        ],
      ],
    },
  ],
  academics: [
    {
      icon: 'fluent:hat-graduation-28-filled',
      title: academics.title,
      span: 'md:col-span-2',
      items: [
        [...academics.items.eng],
        [...academics.items.engUni],
        [...academics.items.mech],
        [...academics.items.mechUni],
      ],
    },
    {
      title: languages.title,
      items: [
        [...languages.items.br],
        [...languages.items.en],
        [...languages.items.ch]
      ],
    },
  ],}
  
};
