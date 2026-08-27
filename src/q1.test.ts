import {describe, it, expect} from 'vitest';
import {calcularQuadradoFor, calcularQuadradoForEach} from './q1';

describe('calcularQuadradoFor', () => {
    it ('deve elevar cada elemento do array ao quadrado', () => {
        const entrada = [3, 5, 7, 3, 8, 9, 1];
        const esperado = [9, 25, 49, 9, 64, 81, 1];

        const resultado = calcularQuadradoFor(entrada);
        expect(resultado).toEqual(esperado);
    });
});

describe('calcularQuadradoForEach', () => {
    it ('deve elevar cada elemento do array ao quadrado', () => {
        const entrada = [3, 5, 7, 3, 8, 9, 1];
        const esperado = [9, 25, 49, 9, 64, 81, 1];

        const resultado = calcularQuadradoForEach(entrada);
        expect(resultado).toEqual(esperado);
    });
});
