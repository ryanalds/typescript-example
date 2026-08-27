import { describe, it, expect } from 'vitest';
import { apenasOsPares } from './q5';

describe('apenasOsPares', () => {
  it('deve retornar apenas os números pares do array', () => {
    const entrada = [8, 3, 9, 5, 6, 12];
    const resultado = apenasOsPares(entrada);

    expect(resultado).toEqual([8, 6, 12]);
  });
});