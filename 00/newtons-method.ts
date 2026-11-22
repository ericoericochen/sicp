import { square, abs } from "./shared.ts";

function sqrt(x: number): number {
  return sqrtIter(1, x);
}

function sqrtIter(guess: number, x: number): number {
  return isGoodEnough(guess, x) ? guess : sqrtIter(improve(guess, x), x);
}

function isGoodEnough(guess: number, x: number) {
  return abs(square(guess) - x) <= 1e-6;
}

function improve(guess: number, x: number): number {
  return (guess + x / guess) / 2;
}

console.log(sqrt(5));
console.log(sqrt(0.0001));

type Improve = (guess: number, x: number) => number;
function approximateIter(guess: number, x: number, improve: Improve): number {
  return isGoodEnough(guess, x)
    ? guess
    : approximateIter(improve(guess, x), x, improve);
}

function approximateSqrt(x: number): number {
  return approximateIter(1, x, improve);
}

console.log(`The sqrt of ${5} is ${approximateSqrt(5)}`);
