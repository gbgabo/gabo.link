import { t, type Dictionary } from 'intlayer';

const appContent = {
  key: 'app',
  content: {
    meta: {
      title: t({
        en: "Gabo's Link",
        'pt-BR': "Gabo's Link",
      }),
      description: t({
        en: "Gabo's Link",
        'pt-BR': 'O canto do Gabo na web',
      }),
    },
    nav: {
      projects: t({
        en: '/projects',
        'pt-BR': '/projetos',
      }),
      about: t({
        en: '/about',
        'pt-BR': '/sobre',
      }),
      articles: t({
        en: '/articles',
        'pt-BR': '/textos',
      }),
      lists: t({
        en: '/lists',
        'pt-BR': '/listas',
      }),
    },
    search: {
      title: t({
        en: 'Explore the blog',
        'pt-BR': 'Explore o blog',
      }),
      description: t({
        en: 'Search from published pages, articles and lists',
        'pt-BR': 'Pesquise por páginas, textos e listas publicadas',
      }),
    },
    footer: t({
      en: "Dark <span class='dark:hidden'>(and maybe light?)</span> theme based on <a class='hover:underline font-bold text-pink' href='https://wildberries.style/''><img class='w-5 h-5 md:w-6 md:h-6 bg-cover inline-block align-bottom rounded-sm mr-1' src='https://wildberries.style/img/ui/wb_logo.svg' alt='wildberries theme logo'/>Wildberries</a>",
      'pt-BR':
        "Tema escuro <span class='dark:hidden'>(e claro também?)</span> baseado no <a class='hover:underline font-bold text-pink' href='https://wildberries.style/''><img class='w-5 h-5 md:w-6 md:h-6 bg-cover inline-block align-bottom rounded-sm mr-1' src='https://wildberries.style/img/ui/wb_logo.svg' alt='logo do tema wildberies'/>Wildberries</a>",
    }),
  },
} satisfies Dictionary;

export default appContent;
