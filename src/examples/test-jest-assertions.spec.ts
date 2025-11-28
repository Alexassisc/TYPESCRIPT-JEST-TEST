// Testes relacionados a valores primitivos (números, strings, boolean, etc.)
describe('Valores primitivos', () => {
  it('deve testar várias asserções do Jest', () => {
    const number = 10;

    // Verifica se o número é exatamente 10 (igualdade estrita ===)
    expect(number).toBe(10);

    // Verifica se NÃO é falsy (0, null, undefined, '', false, NaN)
    expect(number).not.toBeFalsy();

    // Verifica se o valor é truthy (qualquer valor que não seja falsy)
    expect(number).toBeTruthy();

    // Verifica se é maior que 9
    expect(number).toBeGreaterThan(9);

    // Verifica se é maior ou igual a 10
    expect(number).toBeGreaterThanOrEqual(10);

    // Verifica se é menor ou igual a 10
    expect(number).toBeLessThanOrEqual(10);

    // Verifica se o valor é "aproximado" de 10.0001 (aceita casas decimais)
    expect(number).toBeCloseTo(10.0001);

    // Verifica se é "aproximado" de 9.996
    expect(number).toBeCloseTo(9.996);

    // Garante que number NÃO é null
    expect(number).not.toBeNull();

    // Verifica se o objeto possui a propriedade "toString"
    // (todo number tem esse método herdado do prototype)
    expect(number).toHaveProperty('toString');
  });
});

// Testes com objetos (deep equality e propriedades)
describe('Valores em objetos', () => {
  it('deve testar asserções com objetos', () => {
    const pessoa = { nome: 'Alex', idade: 27 };

    // Compara a estrutura e valores do objeto (não funciona com toBe)
    expect(pessoa).toEqual({ nome: 'Alex', idade: 27 });

    // Verifica se o objeto possui a propriedade "idade"
    expect(pessoa).toHaveProperty('idade');

    // Verifica se possui a propriedade "idade" com valor 27
    expect(pessoa).toHaveProperty('idade', 27);

    // Garante que o objeto NÃO possui a propriedade "age"
    expect(pessoa).not.toHaveProperty('age');

    // Aqui estamos acessando pessoa.nome (que é uma string: 'Alex')
    // Strings não têm uma propriedade chamada 'Alex' → então deve ser not
    expect(pessoa.nome).not.toHaveProperty('Alex');
  });
});
