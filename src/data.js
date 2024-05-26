import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

// export const headerData = {
//   links: [
//     {
//       text: 'Landing',
//       links: [
//         {
//           text: 'Sass',
//           href: getPermalink('/landing/saas'),
//         },
//         {
//           text: 'Startup',
//           href: getPermalink('/landing/startup'),
//         },
//         {
//           text: 'Mobile App',
//           href: getPermalink('/landing/mobile-app'),
//         },
//       ],
//     },
//     {
//       text: 'Pages',
//       links: [
//         {
//           text: 'Features',
//           href: '#',
//         },
//         {
//           text: 'Pricing',
//           href: '#',
//         },
//         {
//           text: 'About us',
//           href: '#',
//         },
//         {
//           text: 'Contact',
//           href: '#',
//         },
//         {
//           text: 'Terms',
//           href: getPermalink('/terms'),
//         },
//         {
//           text: 'Privacy policy',
//           href: getPermalink('/privacy'),
//         },
//       ],
//     },
//     {
//       text: 'Widgets',
//       href: '#',
//     },
//     {
//       text: 'Blog',
//       href: getBlogPermalink(),
//     },
//   ],
//   actions: [
//     { type: 'button', text: 'Download', href: 'https://github.com/onwidget/astrowind' }
//   ],
// };

export const headerData = {
  links: [
    {
      text: '/blog',
      href: ['blog', 'page'],
      links: [
        {
          text: 'site.articles',
          href: ['articles', 'category'],
        },
        {
          text: 'site.lists',
          href: ['lists', 'category'],
        },
      ],
    },
    {
      text: 'site.projects',
      href: ['projects', 'page'],
    },
    // {
    //   text: '/uses',
    //   href: getBlogPermalink('uses', 'page'),
    // },
    {
      text: 'site.about',
      href: ['about', 'page'],
    },
  ],
};

export const footerData = {
  links: [
    // {
    //   title: 'Product',
    //   links: [
    //     { text: 'Features', href: '#' },
    //     { text: 'Security', href: '#' },
    //     { text: 'Team', href: '#' },
    //     { text: 'Enterprise', href: '#' },
    //     { text: 'Customer stories', href: '#' },
    //     { text: 'Pricing', href: '#' },
    //     { text: 'Resources', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Platform',
    //   links: [
    //     { text: 'Developer API', href: '#' },
    //     { text: 'Partners', href: '#' },
    //     { text: 'Atom', href: '#' },
    //     { text: 'Electron', href: '#' },
    //     { text: 'AstroWind Desktop', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Support',
    //   links: [
    //     { text: 'Docs', href: '#' },
    //     { text: 'Community Forum', href: '#' },
    //     { text: 'Professional Services', href: '#' },
    //     { text: 'Skills', href: '#' },
    //     { text: 'Status', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Company',
    //   links: [
    //     { text: 'About', href: '#' },
    //     { text: 'Blog', href: '#' },
    //     { text: 'Careers', href: '#' },
    //     { text: 'Press', href: '#' },
    //     { text: 'Inclusion', href: '#' },
    //     { text: 'Social Impact', href: '#' },
    //     { text: 'Shop', href: '#' },
    //   ],
    // },
  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
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
  footNote: 'site.footer.footNote',
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

export const bentoGrids = {
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
      title: 'Dregrees',
      span: 'md:col-span-2',
      items: [
        [
          { type: 'text', value: '- 2016 ~ Dec/2022 ' },
          { type: 'chip', value: 'Computer Enginneering' },
        ],
        [{ type: 'text', value: 'Bachelor Degree - Universidade Positivo' }],
        [
          { type: 'text', value: '- 2012 ~ 2015 ' },
          { type: 'chip', value: 'Mechatronics' },
        ],
        [{ type: 'text', value: 'Technician Degree - Ensitec' }],
      ],
    },
    {
      title: 'Languages',
      items: [
        [
          { type: 'chip', value: 'Brazilian Portuguese' },
          { type: 'text', value: 'Native' },
        ],
        [
          { type: 'chip', value: 'English' },
          { type: 'text', value: 'Proficient' },
        ],
        [
          { type: 'chip', value: 'Chinese' },
          { type: 'text', value: 'Basic' },
        ],
      ],
    },
  ],
};
