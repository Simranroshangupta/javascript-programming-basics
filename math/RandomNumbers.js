// RandomNumbers.js
// Demonstrates random number generation in JavaScript.

// Random decimal number
const randomDecimal = Math.random();

// Random integer between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

console.log("Random Decimal :", randomDecimal);

console.log("Random Number (1-10) :", randomNumber);

/*
==========================================
Explanation

Math.random() generates
a random decimal number
between 0 (inclusive)
and 1 (exclusive).

To generate a random
integer within a range,
combine Math.random()
with Math.floor().

When to Use

Use random numbers in
games, simulations,
password generators,
and quizzes.

Expected Output

Random Decimal : 0.458...
Random Number (1-10) : 7

(Output will be different
every time.)

Time Complexity

O(1)

Space Complexity

O(1)

==========================================
*/