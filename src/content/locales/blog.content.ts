import { t, type Dictionary } from 'intlayer';

const blogContent = {
  key: 'blog',
  content: {
    post: {
      toc: t({
        en: 'Table of content',
        'pt-BR': 'Sumário',
      }),
      top: t({
        en: 'Go to top',
        'pt-BR': 'Ir ao topo',
      }),
      readingTime: t({
        en: 'min read',
        'pt-BR': 'min de leitura',
      }),
      share: t({
        en: 'Share:',
        'pt-BR': 'Compartilhar:',
      }),

      backToBlog: t({
        en: 'Back to Blog',
        'pt-BR': 'Voltar ao Blog',
      }),
    },
    categories: {
      title: t({
        en: 'Category',
        'pt-BR': 'Categoria',
      }),
      articles: t({
        en: 'articles',
        'pt-BR': 'textos',
      }),
      lists: t({
        en: 'lists',
        'pt-BR': 'listas',
      }),
    },
  },
} satisfies Dictionary;

export default blogContent;
