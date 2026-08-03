import { t, type Dictionary } from 'intlayer';

const aboutContent = {
  key: 'about',
  content: {
    title: t({
      en: "I'm a developer intrigued by technology shaping society",
      'pt-BR': 'Sou um desenvolvedor intrigado pela tecnologia moldando a sociedade',
    }),
    subtitle: t({
      en: "I'm a software engineer from Brazil, working with Laravel and studying current full-stack frameworks like Next.js. Experience with React and Typescript. Big fan of SSG frameworks such as Astro.",
      'pt-BR':
        'Sou um engenheiro de software, trabalhando com Laravel e estudando frameworks full-stack como Next.js. Experiência em React e Typescript. Grande Fan de frameworks SSG como Astro.',
    }),
    meta: {
      title: t({
        en: 'About',
        'pt-BR': 'Sobre',
      }),
      description: t({
        en: 'Get to know more about me (Gabo). A software engineer, content creator wannabe, and supporter of all things free and open source',
        'pt-BR':
          'Conheça mais sobre mim (Gabo). Um desenvolvedor de software, aspirante a criador de conteúdo e apoiador de tudo o que é sofware livre e de código aberto.',
      }),
    },
    topics: {
      header: t({
        en: 'Chat with me about',
        'pt-BR': 'Fale comigo sobre',
      }),
      cta: t({
        en: 'See my blog posts',
        'pt-BR': 'Acesse o blog',
      }),
      content: {
        foss: {
          title: t({
            en: 'Free and Open Source Software',
            'pt-BR': 'Software Livre e Código aberto',
          }),
          description: t({
            en: "The power that moves the modern world is made with free software available to build better tools. I'm an evangelist of free software and love to talk and promote it's benefits to developers and users.",
            'pt-BR':
              'O poder que move o mundo moderno é feito por software livre disponível para a construção de ferramentas melhores. Sou um evangelista do software livre e amo falar e promover seus benefícios para desenvolvedores e usuários.',
          }),
        },
        ricing: {
          title: t({
            en: 'Linux Customisation',
            'pt-BR': 'Customização Linux',
          }),
          description: t({
            en: "With linux and free OS/Kernels alike, you can customise your enviroment to a more productive or simply aesthetically pleasing setup. There is a plethora of tools the community is constantly sharing, and you have no idea how different and personal your system can be to fit your needs. Check out my <a class='underline text-acid-green' href='#what-i-use'>dotfiles</a>.",
            'pt-BR':
              "Com Linux e SOs/kernels livres análogos, você pode customizar seu ambiente em um setup mais produtivo, ou simplesmente mais agradável visualmente. Há uma gama de ferramentas que a comunidade constantemente compartilha, e você não tem ideia quão diferente o seu sistema pessoal pode ser para servir as suas necessidades. Dê uma olhada nos meus <a class='underline text-acid-green' href='#what-i-use'>dotfiles</a>",
          }),
        },
        webdev: {
          title: t({
            en: 'Web development technologies',
            'pt-BR': 'Tecnologias de desenvolvimento web',
          }),
          description: t({
            en: 'There is no surprise in web development being bombarded by new frameworks and tools. Beyond just hype, there is real innovation and problems being solved by interesting new approaches.',
            'pt-BR':
              'Não há surpresa que o mundo do desenvolvimento web é bombardeado por novos frameworks e ferramentas. Além de apenas hype, há reais inovações e problemas sendo resolvidos por novas abordagens interessantes.',
          }),
        },
        lists: {
          title: t({
            en: 'Cool content on the internet',
            'pt-BR': 'Conteúdo legal na internet',
          }),
          description: t({
            en: "The internet is full of people creating amazing stuff from videos, podcasts and art in general. In my <a class='underline text-acid-green' href='/category/lists'>blog lists</a> you may find interesting content I compile from the sites I surf.",
            'pt-BR':
              "A internet é cheia de pessoas criando coisas, de vídeos, podcasts e arte no geral. Nas <a class='underline text-acid-green' href='/pt-BR/category/lists'>listas do blog</a>, vocẽ pode achar conteúdos interessantes que eu compilo dos sites que eu surfo.",
          }),
        },
      },
    },
    uses: {
      header: t({
        en: 'What I use',
        'pt-BR': 'O que eu uso',
      }),
      content: {
        uses: {
          title: t({
            en: '/uses',
            'pt-BR': '/uses',
          }),
          description: t({
            en: 'A list of the software I use on the daily basis',
            'pt-BR': 'Uma lista de softwares que eu uso no dia a dia',
          }),
        },
        dotfiles: {
          title: t({
            en: '/dotfiles',
            'pt-BR': '/dotfiles',
          }),
          description: t({
            en: 'The files to reproduce my linux setup',
            'pt-BR': 'Os arquivos para reproduzir meu setup linux',
          }),
        },
      },
    },
    skills: {
      header: t({
        en: 'Skills',
        'pt-BR': 'Habilidades',
      }),
      cta: t({
        en: 'Check my projects',
        'pt-BR': 'Veja meus projetos',
      }),
    },
    academics: {
      title: t({
        en: 'Degrees',
        'pt-BR': 'Acadêmica',
      }),
      items: {
        eng: [
          {
            type: 'text',
            value: t({
              en: '- 2016 ~ Dec/2022 ',
              'pt-BR': '- 2016 ~ Dez/2022 ',
            }),
          },
          {
            type: 'chip',
            value: t({
              en: 'Computer Engineering',
              'pt-BR': 'Engenharia da Computação',
            }),
          },
        ],
        engUni: [
          {
            type: 'text',
            value: t({
              en: 'Bachelor Degree - Universidade Positivo',
              'pt-BR': 'Bacharelado - Universidade Positivo',
            }),
          },
        ],
        mech: [
          {
            type: 'text',
            value: t({
              en: '- 2012 ~ 2015 ',
              'pt-BR': '- 2012 ~ 2015 ',
            }),
          },
          {
            type: 'chip',
            value: t({
              en: 'Mechatronics',
              'pt-BR': 'Mecatrônica',
            }),
          },
        ],
        mechUni: [
          {
            type: 'text',
            value: t({
              en: 'Technician Degree - Ensitec',
              'pt-BR': 'Curso Técnico - Ensitec',
            }),
          },
        ],
      },
    },
    languages: {
      title: t({
        en: 'Languages',
        'pt-BR': 'Idiomas',
      }),
      items: {
        br: [
          {
            type: 'chip',
            value: t({
              en: 'Brazilian Portuguese',
              'pt-BR': 'Português Brasileiro',
            }),
          },
          {
            type: 'text',
            value: t({
              en: ' Native',
              'pt-BR': ' Nativo',
            }),
          },
        ],
        en: [
          {
            type: 'chip',
            value: t({
              en: 'English',
              'pt-BR': 'Inglês',
            }),
          },
          {
            type: 'text',
            value: t({
              en: ' Proficient',
              'pt-BR': ' Proficiente',
            }),
          },
        ],
        ch: [
          {
            type: 'chip',
            value: t({
              en: 'Chinese',
              'pt-BR': 'Chinês',
            }),
          },
          {
            type: 'text',
            value: t({
              en: ' Basic',
              'pt-BR': ' Básico',
            }),
          },
        ],
      },
    },
    nav: {
      cv: t({
        en: 'resume',
        'pt-BR': 'currículo',
      }),
      education: t({
        en: 'Education',
        'pt-BR': 'Formação',
      }),
    },
    aliases: t({
      en: 'Gabriel Gaboardi,Gabo,me',
      'pt-BR': 'Gabriel Gaboardi,Gabo,Gábo?,Gabô?,mim',
    }),
    contact: t({
      en: 'Get in touch!',
      'pt-BR': 'Entre em contato!',
    }),
  },
} satisfies Dictionary;

export default aboutContent;
