# Chapter 01 — Building Abstractions with Functions

Processes manipulate data. A program defines the rules for what a process does.

A well structured program is modular and each part can be constructed, replaced, and debugged separately.

A programming language lets us instruct a computer what to do. It lets us organize our ideas by giving us the means to combine simple ideas into more complex ones.

- Primitive Expressions - The primitive elements of a programming language
- Means of Combination - Creating compound elements from simpler ones
- Means of Abstraction - Assigning names to compound elements

There are 2 elements in a programming language — data and functions. Data is information that can be manipulated. Functions define instructions for manipulating data.

Read evaluate print loop (REPL) - Interpreter reads statement from user, evaluates it, prints the result and repeats.

How to evaluate an expression.

1. Evaluate the operand expressions
2. Apply the function of the operator to the values of the operands

Evaluation is recursive because you have to apply the same rule to the operand expressions.

## Compound Functions

Compound operations can be given a name and be referred to by the name.

A function consists of a `name`, its `parameters` aka inputs, and body containing a return expression. You can invoke / apply a function by its name and listing out the arguments. Parameters are names for the arguments passed into a function.

To evaluate a function.

1. Evaluate the function and argument expressions.
2. Apply the function to the values of the argument expressions.

Substitution Model for function application.

Evaluate the return expression of function with each parameter replaced by the corresponding argument.

Another model is instead of evaluating the arguments first, only evaluate them when their values are needed.

Normal-Order - Fully expand then reduce
Applicative-Order - Evaluate arguments then apply

## Conditional Expressions

Run different rules depending on a predicate, a boolean expression.

```
predicate ? consequent-expression : alternative-expression
```

## Functions as Black Box Abstractions

Functions can be treated as black boxes. We don't need to concern ourselves with how the function works but rather what it does. A caller should not need to know the implementation of a function to use it.

## Linear Recursion and Iteration
