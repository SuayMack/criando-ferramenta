import rl from 'readline-sync';

const propriedades = [];

function propriedadePrompt() {

  let entrada = (rl.question('Digite uma propriedade de CSS (ou "SAIR" para encerrar): ')).toUpperCase();
  if (entrada === 'SAIR') {
    propriedades.sort().forEach((propriedade) => {
      console.log(propriedade);
    })
  } else {
    propriedades.push(entrada);
    propriedadePrompt();
  } 
}

propriedadePrompt()
