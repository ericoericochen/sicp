import { square, sumOfSquares, f, abs } from "./shared.ts";

const main = () => {
  const result = square(5);
  const sos = sumOfSquares(3, 4);
  console.log({ result });
  console.log({ sos });
  const fResult = f(5);
  console.log({ fResult });

  const absResult = abs(-10);
  console.log({ absResult });
};

main();
