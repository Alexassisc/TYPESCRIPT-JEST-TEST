// // Este bloco principal agrupa um conjunto de testes relacionados
// describe('TESTANDO ALGUMA COISA', () => {
//   // "it" define um caso de teste individual.
//   // Pode ser lido como: "it deve fazer X"
//   it('deve validar que o número é 1', () => {
//     const number = 1;
//     expect(number).toBe(1); // Verifica se o número é igual a 1
//   });

//   // Um novo grupo de testes dentro do primeiro describe
//   describe('TESTANDO OUTRA COISA', () => {
//     // "test" é equivalente ao "it"; ambos fazem a mesma coisa.
//     // A escolha entre eles é apenas estilo.
//     test('deve validar que o nome é Alex', () => {
//       const nome = 'Alex';
//       expect(nome).toBe('Alex'); // Verifica se o nome é igual a 'Alex'
//     });
//   });
// });

import { Persistency } from './persistency';

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());

  it('deve retornar undefined', () => {
    const sut = new Persistency();
    const result = sut.saveOrder();
    expect(result).toBeUndefined();
  });

  it('deve chamar o console.log uma vez', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('deve chamar o console.log com "Pedido salvo com sucesso..."', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');
  });
});
