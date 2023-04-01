import { sum } from "./sum";

describe('testando operações Matemáticas', () => {
    it('testando a soma de dois números', () => {
        expect(sum(5, 5)).toBe(10);
        expect(sum(5, -5)).toBe(0);
        expect(sum('5', 5)).toBe('Digite apenas valores numéricos');
        expect(sum('5', '5')).toBe('Digite apenas valores numéricos');
        expect(sum(-5, -5)).toBe(-10);
        expect(sum('', '')).toBe('Digite os valores');

    })
});