import { t, type Dictionary } from 'intlayer';

const homeContent = {
  key: 'home',
  content: {
    title: t({
      en: 'Welcome to my corner on the web',
      'pt-BR': 'Bem vindx ao meu canto da web',
    }),
    subtitle: t({
      en: "Hey! I'm Gabo and I'm a software engineer from Brazil",
      'pt-BR': 'Olá! Me chamo Gabo e sou um engenheiro de software',
    }),
    cta1: t({
      en: 'Read the blog',
      'pt-BR': 'Leia o blog',
    }),
    cta2: t({
      en: 'About me',
      'pt-BR': 'Sobre mim',
    }),
    allPosts: t({
      en: 'View all posts',
      'pt-BR': 'Ver todos os posts',
    }),
  },
} satisfies Dictionary;

export default homeContent;
