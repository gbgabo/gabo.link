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
      href: getBlogPermalink(),
      links: [
        {
          text: 'site.articles',
          href: getPermalink('articles', 'category'),
        },
        {
          text: 'site.lists',
          href: getPermalink('lists', 'category'),
        },
      ],
    },
    {
      text: 'site.projects',
      href: getPermalink('projects', 'page'),
    },
    // {
    //   text: '/uses',
    //   href: getBlogPermalink('uses', 'page'),
    // },
    {
      text: 'site.about',
      href: getPermalink('about', 'page'),
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
      outline: 'text-acid-green',
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
        { type: 'Linux Distribution', value: ['Debian', 'Manjaro'] },
        { type: 'Window Manager || Desktop Enviroment', value: ['dwm', 'Gnome'] },
        { type: 'General Purpose Menu Launcher', value: 'dmenu' },
        { type: 'Brain dump and writing journal', value: 'Logseq' },
        { type: 'Web Browser', value: 'Firefox' },
        { type: 'Text editor', value: 'vscodium' },
        { type: 'Email Client', value: 'Thunderbird' },
      ],
    },
    {
      icon: 'tabler:terminal',
      title: 'The CLI',
      items: [
        { type: 'Terminal Emulator', value: 'st' },
        { type: 'Shell', value: 'zsh' },
        { type: 'Terminal multiplexer', value: 'tmux' },
      ],
    },
    {
      title: 'Scripts',
      items: [{ value: 'tmenu' }, { value: 'tsearch' }],
    },
    {
      title: 'Reproduce my setup:',
      items: [{ variant: 'primary', value: 'Check my dotfiles', href: 'https://github.com/gbgabo/dotfiles' }],
    },
    {
      icon: 'tabler:settings',
      title: 'Services',
      items: [
        { type: 'Password Manager', value: 'KeePassXC' },
        { type: 'Email Provider', value: 'Tutanota' },
        { type: 'Login Manager', value: 'Simple Login' },
        { type: 'File Sync', value: 'Syncthing' },
      ],
    },
    {
      icon: 'tabler:device-mobile',
      title: 'Mobile',
      span: 'md:col-span-2',
      items: [
        {
          type: 'Launcher',
          value: 'Olauncher Clutter Free',
        },
        {
          type: 'Podcast Player',
          value: 'AntennaPod',
        },
        {
          type: 'Mail',
          value: 'K-9 Mail',
        },
        {
          type: 'Web Browser',
          value: 'Bromite',
        },
      ],
    },
    {
      icon: 'ic:outline-color-lens',
      title: 'Theming',
      span: 'md:col-span-3',
      items: [
        { type: 'Font', value: 'jetbrains-mono through nerd fonts' },
        { type: 'Color Scheme', value: 'Wildberries Theme', href: 'https://wildberries.style/about)' },
      ],
    },
  ],
};
