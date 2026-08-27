import { describe, it, expect } from 'vitest';
import { sliceArray } from './q4';

describe('sliceArray', () => {
  it('deve retornar os dois primeiros elementos do array', () => {
    const entrada = [2, 4, 6, 2, 8, 9, 5];
    const resultado = sliceArray(entrada);

    expect(resultado).toEqual([2, 4]);
  });
});