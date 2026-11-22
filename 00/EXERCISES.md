## Exercise 1.4

```js
function plus(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}
function a_plus_abs_b(a, b) {
  return (b >= 0 ? plus : minus)(a, b);
}
```

If b is positive or 0, we add a and b. Otherwise b is a negative number and we subtract a and b which is the equivalent to taking the absolute value of b then adding a to it.

## Exercises 1.6

```js
function sqrt_iter(guess, x) {
  return conditional(
    is_good_enough(guess, x),
    guess,
    sqrt_iter(improve(guess, x), x),
  );
}
```

This program will run indefinitely because both the then-clause and else-clause are evaluated before the conditional function is applied. So even if we have a good enough guess, we continue evaluating sqrt_iter on an improved guess. The improved guess will be a good enough guess but we still evaluate the sqrt_iter and so on.
