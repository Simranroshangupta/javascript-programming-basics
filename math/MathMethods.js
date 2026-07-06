// MathMethods.js
// Demonstrates common Math methods in JavaScript.

const number = 25.67;

console.log("Original Number :", number);

console.log("Rounded :", Math.round(number));

console.log("Floor :", Math.floor(number));

console.log("Ceil :", Math.ceil(number));

console.log("Square Root :", Math.sqrt(number));

console.log("Power :", Math.pow(5, 2));

console.log("Absolute Value :", Math.abs(-20));

console.log("Maximum :", Math.max(10, 25, 15, 30));

console.log("Minimum :", Math.min(10, 25, 15, 30));

/*
==========================================
Explanation

The Math object provides
built-in mathematical
functions.

Math.round()  → Rounds to nearest integer.

Math.floor()  → Rounds down.

Math.ceil()   → Rounds up.

Math.sqrt()   → Square root.

Math.pow()    → Power.

Math.abs()    → Absolute value.

Math.max()    → Largest value.

Math.min()    → Smallest value.

When to Use

Use Math methods for
calculations in JavaScript.

Expected Output

Original Number : 25.67
Rounded : 26
Floor : 25
Ceil : 26
Square Root : 5.066...
Power : 25
Absolute Value : 20
Maximum : 30
Minimum : 10

Time Complexity

O(1)

Space Complexity

O(1)

==========================================
*/