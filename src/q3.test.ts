import { describe, it, expect } from 'vitest';
import { ordenarDecrescente} from './q3';

describe('ordenacaoDecrescente', () => {
  it('deve ordenar o array de forma decrescente', () => {
    const entrada = ['carro', 'boneco', 'ave', 'lapis'];
    const esperado = ['lapis', 'carro', 'boneco', 'ave'];

    const resultado = ordenarDecrescente(entrada);

    expect(resultado).toEqual(esperado);
  });
});