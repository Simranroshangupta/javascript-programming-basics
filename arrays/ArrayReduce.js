// ArrayReduce.js
// Demonstrates the reduce() method.

const numbers = [10, 20, 30, 40];

const sum = numbers.reduce((total, number) => {

    return total + number;

}, 0);

console.log("Array :", numbers);

console.log("Sum :", sum);

/*
==========================================
Explanation

The reduce() method combines
all elements of an array
into a single value.

It processes one element
at a time and returns the
final result.

When to Use

Use reduce() for calculations
such as sum, average,
maximum, minimum or totals.

Expected Output

Array : [ 10, 20, 30, 40 ]
Sum : 100

Time Complexity

O(n)

Space Complexity

O(1)

==========================================
*/