import { describe, it, expect } from 'vitest';
import { Pinguim, Pombo } from './q6';

describe('Ave - Pinguim e Pombo', () => {
  it('deve retornar mensagem de que o pinguim não voa, usando sua velocidade de natação', () => {
    const pinguim = new Pinguim('Pingu', 6);

    expect(pinguim.voar()).toBe('Pingu não consegue voar, mas nada a 6 km/h');
  });

  it('deve atualizar a mensagem do pinguim após alterar velocidadeNatacao', () => {
    const pinguim = new Pinguim('Pingu', 6);

    pinguim.velocidadeNatacao = 10;

    expect(pinguim.voar()).toBe('Pingu não consegue voar, mas nada a 10 km/h');
  });

  it('deve retornar mensagem de voo do pombo com sua altitude', () => {
    const pombo = new Pombo('Pombinaldo', 50);

    expect(pombo.voar()).toBe('Pombinaldo está voando a 50 metros de altitude');
  });

  it('deve atualizar a mensagem do pombo após alterar altitudeMaxima', () => {
    const pombo = new Pombo('Pombinaldo', 50);

    pombo.altitudeMaxima = 120;

    expect(pombo.voar()).toBe('Pombinaldo está voando a 120 metros de altitude');
  });
});