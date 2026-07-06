// TryCatch.js
// Demonstrates try...catch in JavaScript.

try {

    const number = 10;

    console.log(number.toUpperCase());

} catch (error) {

    console.log("An error occurred.");

    console.log(error.message);
}

/*
==========================================
Explanation

The try block contains
code that may cause an error.

If an error occurs,
the catch block executes.

This prevents the program
from crashing.

When to Use

Use try...catch whenever
there is a possibility
of runtime errors.

Expected Output

An error occurred.
number.toUpperCase is not a function

Time Complexity

O(1)

Space Complexity

O(1)

==========================================
*/