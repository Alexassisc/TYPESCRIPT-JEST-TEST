import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('deve retornar undefined', () => {
    const sut = createSut();
    const result = sut.sendMessage('teste');
    expect(result).toBeUndefined();
  });

  it('deve chamar o console.log uma vez', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('Olá Mundo!');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('deve chamar console.log com "Mensagem enviada: msg"', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('ABC');
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'ABC');
  });
});
