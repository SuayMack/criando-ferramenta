// Importa a biblioteca readline-sync para interação com o usuário no terminal.
import rl from 'readline-sync';

// Cria um array vazio chamado 'propriedades' para armazenar as propriedades CSS.
const propriedades = [];

// Função que permite ao usuário inserir propriedades de CSS.
function propriedadePrompt() {
  // Pede ao usuário para inserir uma propriedade de CSS e converte a entrada para maiúsculas.
  let entrada = (rl.question('Digite uma propriedade de CSS (ou "SAIR" para encerrar): ')).toUpperCase();

  // Tratamento de erro: Verifica se a entrada é "SAIR". Se for, chama a função para ordenar e imprimir as propriedades.
  if (entrada === 'SAIR') {
    ordenarEImprimirPropriedades();
    //  Tratamento de erro: Verifica se a entrada é uma string vazia após remover espaços em branco. Se for, exibe uma mensagem de erro.
  } else if (entrada.trim() === '') {
    console.log('Entrada vazia. Por favor, insira uma propriedade válida ou digite "SAIR".');
    // Chama a função propriedadePrompt() novamente para obter uma nova entrada válida.
    propriedadePrompt();
    // Se a entrada não for "SAIR" e não for vazia, adiciona a propriedade ao array 'propriedades'.
  } else {
    propriedades.push(entrada);
    // Chama a função propriedadePrompt() novamente para obter a próxima entrada.
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

// Tratamento de Cancelamento: Se o usuário pressionar Ctrl+C ou fechar o terminal durante a interação
//permite que o usuário encerre o programa de maneira mais controlada.
process.on('SIGINT', () => {
  console.log('\nPrograma encerrado pelo usuário.');
  process.exit(0);
});

// Inicia o processo de inserção de propriedades chamando a função propriedadePrompt().
propriedadePrompt()
