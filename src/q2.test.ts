import {describe, it, expect} from 'vitest';
import {concatenacao} from './q2';

describe('Concatenacao', () => {
    it ('conctenar as strings do array em uma unica string', () => {
        const entrada =  ['Arrays', 'com', 'TypeScript'];
        const esperado = 'Arrays com TypeScript';

        const resultado = concatenacao(entrada);
        expect(resultado).toEqual(esperado);
    });
});