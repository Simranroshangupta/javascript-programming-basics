// RestParameters.js
// Demonstrates rest parameters in JavaScript.

function calculateSum(...numbers) {

    let sum = 0;

    for (const number of numbers) {

        sum += number;
    }

    return sum;
}

console.log("Sum :", calculateSum(10, 20, 30, 40));

/*
==========================================
Explanation

The rest parameter (...) allows
a function to accept multiple
arguments as an array.

When to Use

Use rest parameters when
the number of arguments
is not fixed.

Expected Output

Sum : 100

==========================================
*/