import { sumOfSquares, abs, average, square } from "./shared.ts";

// Exercise 1.3
function largestSumOfSquares(a: number, b: number, c: number) {
  return a >= c && b >= c
    ? sumOfSquares(a, b)
    : b >= a && c >= a
      ? sumOfSquares(b, c)
      : sumOfSquares(a, c);
}

console.log(largestSumOfSquares(1, 2, 3));
console.log(largestSumOfSquares(5, 2, 1));
console.log(largestSumOfSquares(5, 1, 6));

// Exercise 1.7
function sqrt(x: number) {
  return sqrtNewton(1, 0, x);
}

function sqrtNewton(guess: number, prev: number, x: number): number {
  return isGoodEnoughGuess(guess, prev)
    ? guess
    : sqrtNewton(improve(guess, x), guess, x);
}

function isGoodEnoughGuess(guess: number, prev: number) {
  return abs(guess - prev) <= 1e-5;
}

function improve(guess: number, x: number): number {
  return average(guess, x / guess);
}

console.log(sqrt(5));
console.log(sqrt(0.01));
console.log(sqrt(55555555555));

// Exercise 1.8
function cubeRoot(x: number): number {
  return cubeRootNewton(1, 0, x);
}

function cubeRootNewton(guess: number, prev: number, x: number): number {
  return isGoodEnoughGuess(guess, prev)
    ? guess
    : cubeRootNewton(improveCubeRootGuess(guess, x), guess, x);
}

function improveCubeRootGuess(y: number, x: number) {
  return (x / square(y) + 2 * y) / 3;
}

console.log(cubeRoot(2));
