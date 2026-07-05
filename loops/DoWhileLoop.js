// DoWhileLoop.js
// Demonstrates the do...while loop in JavaScript.

let number = 1;

do {

    console.log("Number :", number);

    number++;

} while (number <= 5);

/*
==========================================
Explanation

A do...while loop executes
the code first and then
checks the condition.

This means the loop
always executes at least once,
even if the condition is false.

Syntax

do {
    // Code
} while (condition);

When to Use

Use a do...while loop when
the code must execute at
least one time before
checking the condition.

Expected Output

Number : 1
Number : 2
Number : 3
Number : 4
Number : 5

==========================================
*/