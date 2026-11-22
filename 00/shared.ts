export const square = (x: number) => x * x;
export const sumOfSquares = (x: number, y: number) => square(x) + square(y);
export const f = (a: number) => sumOfSquares(a + 1, a * 2);
export const abs = (x: number) => (x >= 0 ? x : -x);
export const average = (x: number, y: number) => (x + y) / 2;
