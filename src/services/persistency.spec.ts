// Este bloco principal agrupa um conjunto de testes relacionados
describe('TESTANDO ALGUMA COISA', () => {
  // "it" define um caso de teste individual.
  // Pode ser lido como: "it deve fazer X"
  it('deve validar que o número é 1', () => {
    const number = 1;
    expect(number).toBe(1); // Verifica se o número é igual a 1
  });

  // Um novo grupo de testes dentro do primeiro describe
  describe('TESTANDO OUTRA COISA', () => {
    // "test" é equivalente ao "it"; ambos fazem a mesma coisa.
    // A escolha entre eles é apenas estilo.
    test('deve validar que o nome é Alex', () => {
      const nome = 'Alex';
      expect(nome).toBe('Alex'); // Verifica se o nome é igual a 'Alex'
    });
  });
});
