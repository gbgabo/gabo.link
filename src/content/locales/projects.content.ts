import { t, type Dictionary } from 'intlayer';

const projectsContent = {
  key: 'projects',
  content: {
    meta: {
      title: t({
        en: 'Projects',
        'pt-BR': 'Projetos',
      }),
      description: t({
        en: "The projects I've been making to practice programming by the means of solving problems, expressing myself, or simply having fun",
        'pt-BR':
          'Os projetos que tenho realizado para praticar programação, seja resolvendo problemas, me expressando ou simplesmente me divertindo.',
      }),
    },
    title: t({
      en: 'projects',
      'pt-BR': 'projetos',
    }),
    ctaAbout: t({
      en: 'About the project',
      'pt-BR': 'Conheça o projeto',
    }),
    ctaVisit: t({
      en: 'Access',
      'pt-BR': 'Acesse',
    }),
    items: {
      chicotadas: {
        title: t({
          en: 'chicotadas.com.br',
          'pt-BR': 'chicotadas.com.br',
        }),

        description: t({
          en: "The home page of Chicotadas podcast. The project aims to host and manage all official content of the show. Dedicated feed for episodes and social media posts, dictionary page for listing common terms used on the episodes, also featuring instant description of terms along any episode's transcription",
          'pt-BR':
            'A página inicial do Chicotadas podcast. O projeto visa guardar e gerenciar todo conteúdo oficial do show. Feed dedicado para episódios, posts para redes, página de dicionário para listar termos comuns usados nos episódios, incluindo também descrição instantânea de termos ao longo das transcrições de episódios e mais',
        }),
      },
      blog: {
        title: t({
          en: 'gabo.link Personal Blog',
          'pt-BR': 'Blog Pessoal gabo.link',
        }),
        description: t({
          en: "It's this very website. It's a fork of an Astro + Tailwind template called Astrowind. It's now implemennted with extra features such as bottom navigation, better handling of YT iframes, table of contents on posts, and internationalization",
          'pt-BR':
            'É este exato site. É um fork de um template em Astro + Tailwind chamado Astrowind. É agora implementado com funcionalidades extras como navegação por baixo, suporte otimizado para YT iframes, sumário em posts e internacionalização',
        }),
      },
      wash: {
        title: t({
          en: 'Laundry Symbols',
          'pt-BR': 'Laundry Symbols',
        }),
        description: t({
          en: "A page that lists most of the so called laundry symbols found on every clothing, indicating the manufacturer's suggestions as to methods of washing, drying, dry-cleaning and ironing clothing. Also includes filter for non standard and legacy symbols",
          'pt-BR':
            'Uma página que lista os simbolos de lavagem encontradas em todas as roupas, indicando as sugestões da fabricante para lavagem, secagem, lavagem a seco e passagem. Também inclui filtro para símbolos legado e não padrão',
        }),
      },
      wildberries: {
        title: t({
          en: 'Wildberries Theme Homepage',
          'pt-BR': 'Homepage Tema Wildberries',
        }),
        description: t({
          en: 'Wildberries is a purple dark theme, with additional bright accents, almost in a cyberpunkish way. Intially created with Next.js, the now Astro project makes available the list of applications and its ways to install this color scheme I came up with during the years',
          'pt-BR':
            'Wildberries é um tema roxo escuro, com destaques brilhantes, quase numa pegada cyberpunk. Esse é o meu primeiro projeto em Next.js, criado para disponibilizar a lista de aplicações e as formas para se instalar esse tema de cores que criei durante os anos.',
        }),
      },
      tinytools: {
        title: t({
          en: 'Tinytools',
          'pt-BR': 'Tinytools',
        }),
        description: t({
          en: 'A suite of tiny scripts written in SHELL me and @calebe94 maintain. Our projects are designed to improve your productivity in a simple way',
          'pt-BR':
            'Um suite de pequenos scripts escritos em SHELL que eu e o @calebe94 mantemos. Nossos pequenos projetos são pensados para melhorar sua produtividade de um jeito simples',
        }),
      },
      linky: {
        title: t({
          en: 'Linky',
          'pt-BR': 'Linky',
        }),
        description: t({
          en: 'My first react website. A project with the purpose to create a link and style editor inspired by linktree',
          'pt-BR':
            'Minha primeira aplicação em React. Um projeto com o intúito de criar um editor de agregador de link, inspirado no linktree',
        }),
      },
    },
  },
} satisfies Dictionary;

export default projectsContent;
