// Importa a biblioteca readline-sync para interação com o usuário no terminal.
import rl from 'readline-sync';

// Cria um array vazio chamado 'propriedades' para armazenar as propriedades CSS.
const propriedades = [];

// Função que permite ao usuário inserir propriedades de CSS.
function propriedadePrompt() {
  // Pede ao usuário para inserir uma propriedade de CSS e converte a entrada para maiúsculas.
  let entrada = (rl.question('Digite uma propriedade de CSS (ou "SAIR" para encerrar): ')).toUpperCase();

  // Verifica se a entrada é um número.
  const naoENumero = isNaN(parseInt(entrada));
  // Verifica se a entrada é "SAIR". Se for, chama a função para ordenar e imprimir as propriedades.
  if (entrada === 'SAIR') {
    ordenarEImprimirPropriedades();
  }
  // Verifica se a entrada é uma string vazia após remover espaços em branco ou 
  // Se o usuário apertar ctrl + c
  //exibe uma mensagem de erro.
  else if (entrada.trim() === '' || !naoENumero) {
    console.log('Entrada vazia ou inválida. Por favor, insira uma propriedade válida ou digite "SAIR".');
    propriedadePrompt();
  }
  // Se a entrada não for "SAIR" e não for vazia ou inválida, adiciona a propriedade ao array 'propriedades'.
  else {
    propriedades.push(entrada);
    propriedadePrompt();
  }
}

// Função para ordenar e imprimir as propriedades inseridas.
function ordenarEImprimirPropriedades() {
  // Tatamento de erro: Verifica se não há propriedades inseridas. Se não houver, exibe uma mensagem informando.
  if (propriedades.length === 0) {
    console.log('Nenhuma propriedade foi inserida.');
  // Caso contrário, tenta ordenar as propriedades alfabeticamente e as imprime.
  } else {
    try {
      propriedades.sort(); // Ordena as propriedades em ordem alfabética.
      console.log('\nPropriedades ordenadas:');
      // Itera pelo array 'propriedades' e imprime cada propriedade.
      propriedades.forEach((propriedade) => {
        console.log(propriedade);
      });
    } catch (error) {
      // Tratamento de erro: Se ocorrer um erro durante a ordenação, exibe uma mensagem de erro com a descrição do erro.
      console.error('Erro ao ordenar propriedades:', error.message);
    }
  }
}

// Inicia o processo de inserção de propriedades chamando a função propriedadePrompt().
propriedadePrompt()
