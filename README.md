
# 🛠️  Ferramenta de Ordenação de Propriedades CSS

Bem-vindo(a) ao projeto de **Ferramenta de Ordenação de Propriedades CSS!** Este é um projeto desenvolvido em Node.js que oferece uma ferramenta simples e eficiente para auxiliar no trabalho com propriedades CSS.

Este projeto foi criado como requisito do curso de Formação Web Dev Fullstack - Resilia, com o intuito de colocar em prática o conteúdo estudado no módulo 4, onde o contexto é:

          Uma empresa de desenvolvimento de software precisa de uma ferramenta que vai
          receber uma lista de propriedades de CSS (ex: background-color, font-size, text-align)
          e vai devolvê-la ordenada de A-Z.

Assim, com essa ferramenta é possível inserir uma lista de propriedades CSS, ordena-la alfabeticamente e visualizar  o resultado no terminal.


## 🚀 Tecnologias

Esse projeto foi desenvolvido com a seguintes tecnologia:

- [Node.js](https://nodejs.org/en/)
- [readline-sync](https://www.npmjs.com/package/readline-sync)


## 📍 Rodando localmente

***Certifique-se de ter o Node.js instalado em seu sistema.***
 - [NodeJS - Download](https://nodejs.org/pt-br/download)

***Clone o projeto***

 - com HTTPS:
```bash
  git clone https://github.com/SuayMack/criando-ferramenta.git
```
- com chave SSH:
```bash
  git clone git@github.com:SuayMack/criando-ferramenta.git
```

***Entre no diretório do projeto***

```bash
  cd criando-ferramenta
```

***Abra com code (opcional)***

```bash
  cd code .
```

***Instale as dependências***

```bash
  npm install
```

***Inicie o servidor***

```bash
  npm run start
```
*ou*
```bash
  npm start
```

#### 🎉🎉🎉 É isso, aproveite o projeto.

## 📄 Documentação da API

#### Retorna todas as propriedades CSS em ordem alfabética

```bash
  npm start
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `propriedades` | `array` | **Obrigatório**. Uma lista de propriedades CSS a serem ordenadas. |
| `SAIR` | `string` | **Obrigatório**. Uma lista de propriedades CSS a serem ordenadas. |
| Erros | `mensagem` | **Opcional**. O sistema exibirá mensagens de erro para guiar o usuário em cenários inesperados. |



### ➡️ Entrada - ***Recebe uma lista de propriedades CSS:***

*Digite uma propriedade de CSS (ou "SAIR" para encerrar):*
```bash
 flex   
```
[enter]

*Digite uma propriedade de CSS (ou "SAIR" para encerrar):*
```bash
align-itens
```
[enter]

*Digite uma propriedade de CSS (ou "SAIR" para encerrar):*
```bash
flex-direction 
```
[enter]

*Digite uma propriedade de CSS (ou "SAIR" para encerrar):*
```bash
sair
```
[enter]

***Retorna todas as propriedades CSS em ordem alfabética:***

### ⬅️ Saída - ***Propriedades ordenadas:***

*ALIGN-ITENS*

*FLEX*

*FLEX-DIRECTION*


## ⛔ Tratamento de Erros: 

####  Exemplo de Entrada Vazia:

*Quando o programa solicitar a inserção de uma propriedade de CSS, simplesmente pressione "Enter" sem digitar nada ou durante a execução do programa, é pressionado "Ctrl+C" no terminal ou feche o terminal diretamente.*

```
Digite uma propriedade de CSS (ou "SAIR" para encerrar):

Entrada vazia. Por favor, insira uma propriedade válida ou digite "SAIR".

Digite uma propriedade de CSS (ou "SAIR" para encerrar):
```

Simula o erro tratado de entrada vazia.

Esse exemplo ilustra como os erros tratados são ativados durante a execução do código.


*Feito com 💜 por PriscilaCS*


## 📖 Referência

  - [NodeJS - documentação](https://nodejs.org/en/docs)
  - [Readline-sync - documentação](https://www.npmjs.com/package/readline-sync)