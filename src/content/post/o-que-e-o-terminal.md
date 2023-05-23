---
publishDate: 2023-01-12T00:00:00Z
title: O que é o terminal?
description: Desmistificando a tela preta
excerpt: Desmistificando a tela preta.
image: ~/assets/images/terminal.png
category: Articles
tags:
  - linux
  - terminal
  - command line
  - guide
canonical: https://gabo.link/o-que-e-o-terminal
---

Você já deve ter visto aquelas telas pretas, com linhas pequenas pipocando sem parar. Possivelmente em um filme, onde há um super hacker escrevendo dezenas de letras por segundo com o objetivo de quebrar todas as senhas e acessar um sistema secreto do pentágono. Essa janela preta é um **terminal**.

A ideia desse texto é desmistificar e explicar **tudo que você precisa saber para conhecer o `terminal`**, além de mostrar o quanto ele pode ser divertido e útil.

# O que é o terminal, afinal?

Terminal é um equipamento que **lhe permite interagir com um computador por meio de texto**. Bem por isso, é quase sempre constituindo por uma **tela** e **teclado** para essa interface.

Mais especificamente, neste texto falaremos sobre o `vídeo terminal`, que **possui uma tela além do teclado**, em contraste com terminais mais antigos, que **interfaciavam com o computador por impressão do texto** (semelhante ao fax). Um exemplo de video terminal é o [VT100](https://pt.wikipedia.org/wiki/VT100).

E se logo de cara você está com medo, ou acha que deve ser muito difícil mexer em um terminal, quero que você me diga quão dificil é mexer nesse cara:

![2021-05-03-21_29_17.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1620088181906/hviJ5cKG4.jpeg)

É isso mesmo, um chat. Você sabe usar ele? Então você já tem metade do que precisa, acredite. De forma bem simples, o terminal é um chat... com o seu computador! Nele você escreverá algo para o computador, e ele vai lhe responder. **As mensagens que mandamos para o computador serão sempre `comandos` para ele executar.**

E antigamente isso fazia mais sentido ainda. Visto que os computadores eram caros (e enormes), a melhor solução era ter vários equipamentos menores que só pedem coisas para o único computador do local. Esses equipamentos eram literalmente os terminais, também chamados de terminais burros. Burro porque fazer algo sozinho ele não fazia. Não possuía memória, nem processador dedicado. Ele só pedia para o servidor, e o servidor devolvia na tela o que lhe foi pedido.

E hoje ainda é assim. Claro, já não precisamos de dois equipamentos, temos um só. Mas ainda falamos com o computador por um terminal, com uma pequena mudança: agora o terminal é um programa, também conhecido como `emulador de terminal`, não sendo mais aquele monitor de tubo com comunicação serial.

![terminal history](https://cdn.hashnode.com/res/hashnode/image/upload/v1620269974602/1UrRBhHnE.png)

**O terminal agora vive dentro do próprio computador, se tornando apenas uma abstração digital mantida unicamente pela conveniência de comunicação dos humanos para com as máquinas.**

E por meio de uma das interfaces mais antigas de computador, que ainda hoje vemos uma infinidade de usos e aplicações para o ambiente de desenvolvimento.

## O que o terminal tem:

Diga oi para o meu terminal.

![2021-08-22-12_14_26.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1629648793583/kAopJQuOY.png)

Ele é bem vazio de cara, porque ele é só um monitor. Ele só mostra um programa alí no topo. O `shell`!

**O shell é o interpetador de comandos do terminal**, eu vou digitar nosso primeiro comando. O `ls`.

![shell.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1629856068335/GS4CzRHud.png)

Em toda tela de terminal você vai se deparar com duas coisas:

- O `prompt`: Indica onde você começa o seu comando, sua "mensagem". Nele costuma conter algumas informações úteis como **o diretório (pasta) que você está** ou **usuário que vocês está logado**, além de várias outras coisas que você mesmo pode adicionar.

- A `linha de comando`: Espaço onde se escreve o comando em si.

O `$` é um indicador que tudo que vem depois dele deve ser interpretado como um comando. Quando você está logado como root, o símbolo muda para um `#`. Em sistemas baseados no DOS, como o windows, esse símbolo pode ser um `>`

Por sinal, tem várias opções de shell. O shell que eu mostrei é o mais comum, o `bash`, mas no dia a dia eu uso o `zsh`, bem famoso pelas suas customizações.

![zsh.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1629860866026/IGjri2orv.png)

Mais estiloso, né. E sim, eu curto roxo.

Quando um comando é enviado, o sistema retornará a resposta logo embaixo, sendo possível 3 opções:

- **o que você pediu:** Quando o seu comando solicita alguma informação, isso aparecerá logo abaixo a linha de comando;
- **Uma mensagem de erro:** Para quando o comando feito não for executado corretamente. Seja por erro do programa ou por erro do usuário ao digitar o que precisava;
- **Nada:** Nos casos que o computador executa o comando e nada precisa ser devolvido;

# Usando o terminal

O comando do exemplo é o `ls`. Ele serve para `listar os arquivos` e subpastas presentes no diretório que você se encontra.

Notou o `~` logo no final do prompt? Ele simboliza a sua pasta `home`, a pasta inicial do seu usuário, onde as suas coisas ficam no sistema. O comando `ls` me listou todas as pastas e arquivos da minha home.

Para irmos numa pasta especifica, o comando `cd` (_change directory_) servirá para `mudar a pasta` que você se encontra.

Note que ao mudarmos onde estamos, o prompt atualizará o caminho do diretório atual.

![2021-08-22-17_54_24.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1629665683655/qhvBHCWbq.png)

Para voltarmos para o diretório anterior, podemos escrever `cd ..`, onde `..` sempre se refere ao diretório pai do que você se encontra.

Os comandos por texto podem receber `parâmetros`, mensagens a mais que informam formas específicas que o comando deve ser executado. No comando `ls` por exemplo, podemos informar o parâmetro `--colors` para termos uma lista formatada por cor, diferenciando pastas, arquivos e atalhos.

![2021-08-22-18_12_10.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1629666757550/w4etREUEn.png)

Isso pode parecer lento, mas é exatamente o contrário. Em grande parte das vezes, o ambiente de linha de comando será muito mais rápido que com mouse (e já descorrerei mais sobre isso).

Esse estilo por "chat" de interação é chamado de `CLI` (do inglês, `interface de linha de comando`).

![man.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1629855694681/qBx3q_EsC.png)

![cat.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1629855512180/vteLN-dqt.png)

E por interagir por texto, não quer dizer que tudo se resume à essa troca de mensagem. Aplicações para o terminal também podem ter interfaces visuais próprias bem ricas.

Como por exemplo o `vim` e `nvim` (editores de texto), `htop` e `bpytop` (gerenciadores de tarefas), players de música como `moc`, entre outros vários para email, calendário e até navegar pela web. Se usa muito o termo TUI (Text User Interface) para descrever esse tipo de programa.

![2021-08-22-20_29_04.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1629674966105/4kky1z0-7.png)

[O projeto awesome-cli-apps](https://github.com/agarrharr/awesome-cli-apps) tem uma lista enorme de programas interssantes para o terminal.

E não, eles não podem competir em tudo com aplicações GUI (Graphical User Interface). Quando você entende as utilidades do terminal, você tira o melhor proveito dele.

## Por que usar o terminal

Recaptulando, há duas formas principais de se interagir com o computador:

- **Por aplicações gráficas (GUI)**, que desenham e processam livremente os pixels na tela, esperando que você navegue pela tela com o mouse;
- **Por aplicações de terminal (CLI, TUI)**, apresentando informações basedas em texto;

Muitos dos programas que se usa por interface gráfica também tem para o terminal.

![2021-08-22-01_47_19.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1629669618913/qeANutksd.png)
_Gerenciador de arquivos - pcmanfm e nnn_

![2021-08-22-20_18_54.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1629674379234/rna1AtHZP.png)
_Editores de texto - vscodium e nvim_

Não se pode concluir uma forma como _a_ melhor, mas há muitas situações onde de fato o terminal se destaca.

### ⚡ Velocidade

Como já dito, ao se usar o terminal, você se verá navegando muito pelos diretórios do seu sistema. E, sem muito tempo de uso, você já pode estar navegando super rápido. Me acompanha: se você for uma pessoa que já se dá bem digitando no computador, imagina usar essa velocidade pra navegar por ele. Essa velocidade não precisa ficar só na navegação de arquivos e não se resume à digitação de palavras. Ter macros e comandos no teclado para controlar o programa é comum. **Para uma aplicação com bom suporte ao teclado, toda interação pode ser feita na velocidade que sua digitação alcançar**, e isso lhe permite ir melhorando com a prática.

Os benefícios são claros também pra quem não digita rápido. Entre **navegar mais de uma tela**/menu ou digitar/**copiar uma única frase** no seu terminal, você pode ganhar tempo com a segunda opção. **Você não está refém do que a tela lhe mostra para clicar.** Como exemplo, pense o caminho que você faz para instalar um programa novo: você pesquisa o nome dele na internet, acha o site correto, segue os passos para baixar algum arquivo para aí então clicá-lo para instalar. Um jeito mais rápido é caso já se procure numa loja de aplicativos do sistema, mas mesmo assim, como isso se compara com apenas digitar no terminal "apt install _nome-do-programa_" ou semelhante?

### 🎯 Precisão

Uma coisa que a linha de comando permite de forma natural é a chance de lidarmos com o computador de forma muito específica. Sabe quando você pede uma pizza num aplicativo, **clicando** em cada sabor, sem muito problema? Se você quer pedir para tirar algum ingrediente específico de algum sabor, uma área para escrever um comentário resolveria, né?

Você nunca terá **todas** as opções possíveis de pedido numa tela, por isso há disponível o que é mais comum. Mas para qualquer outra opção mais específica, há uma forma mais aberta para você definir: escrevendo.

É dessa forma que interface gráfica e linha de comando se completam. Elas se diferenciam pela **densidade de informações** que uma situação demanda. O quanto é possível dar de informações ao dar um comando:

- Em GUI recebemos informações mais bem apresentadas, mas o _input_ do usuário é mais simples e menos denso, como um prato _a la carte_ no cardápio.
- Em CLI você possui uma gama de opções disponíveis que podem ser declaradas todas de uma vez, do seu jeito. Como seu prato do _buffet_, que tem muito mais batata frita que deveria.

### 🔗 Integração

Lembre-se que nessa conversa com o computador, as palavras são literalmente programas ou dados para programas. Um comando no terminal pode ser só uma palavra, mas também uma frase. A informação que um comando devolve pode ser usada para o próximo comando, e assim por diante. Visto que tudo é baseado em texto, montar comandos obedecendo uma sintaxe simples faz com que natualmente integrações sejam feitas.

```bash
$ ls | grep
```

Uma coisa se conecta na outra tomando consideração de relativamente poucas coisas. A natureza baseada em texto dos programas de terminal permitem uma consistência na forma que se mexe no computador, criando uma experiência unificada. Até para programas de interface gráfica, é possivel chamar comandos que fazem o mesmo que se faz clicando, e vocẽ acaba estendendo os programas do dia a dia para a sua necessidade.

### 🤖 Automação

- muitas dessas coisas vem por meio de scripts, imagine como uma carta, uma receita que vc já fala tudo que tem que pedir

## Não tenha medo do terminal

- Não é dificil, é diferente
- TUI não precisa ser feio
- Não tem oq temer pois ele faz apenas o que vc manda, e não é tão facil fazer algo que faça mal
- novos comandos, como girias, que lhe permitem fazer coisas diferentes

terminal burro: http://www.linfo.org/dumb_terminal.htm
