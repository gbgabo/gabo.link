import { t, type Dictionary } from 'intlayer';

const usesContent = {
  key: 'uses',
  content: {
    subtitle: t({
      en: 'A list of software and tools I use as my daily setup',
      'pt-BR': 'Uma lista de softwares e ferramentas que eu uso como setup diário',
    }),

    content: t({
      en: "Currently we have access to tools that enable new and improved ways to create, interact and experience the real and digital world. The level of power current software offer made being creative and productive a matter of mastering the tools we have available right now. This page is created to show the tools I use to code, write and everything included in a web developer cozy setup. It's inspired by <a href='https://uses.tech/'>uses.tech</a>, a website created by <a href='https://github.com/wesbos/awesome-uses'>Wes Bos</a> in which agregates pages, like this one, from many people and incentivises developers and creators to share their own daily configurations and toolbox.",
      'pt-BR':
        "Hoje em dia temos acesso à ferramentas que permitem jeitos novos e melhores de criar, interagir e experienciar o mundo real e digital. O nível de poder que os softwares atuais oferecem fazem com que ser criativo e produtivo possa ser uma questão de dominar as ferramentas disponiveis agora. Essa página foi criada para mostrar as ferramentas que eu uso para programar, anotar e tudo incluso em um setup confortável de um desenvolvedor web. Ela é inspirada na <a href='https://uses.tech/'>uses.tech</a>, um site criado pelo <a href='https://github.com/wesbos/awesome-uses'>Wes Bos</a> que visa agregar páginas, como essa, de várias pessoas e assim incentivar desenvolvedores e criadores para compartilhar suas configurações caixas de ferramentas do dia a dia.",
    }),
  },
} satisfies Dictionary;

export default usesContent;
