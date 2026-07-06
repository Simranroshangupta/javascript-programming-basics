// ArrayMap.js
// Demonstrates the map() method.

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map((number) => number * number);

console.log("Original Array :", numbers);

console.log("Squared Array :", squares);

/*
==========================================
Explanation

The map() method creates
a new array by applying
a function to every element.

It does not modify
the original array.

When to Use

Use map() when you want
to transform each element
into another value.

Expected Output

Original Array : [ 1, 2, 3, 4, 5 ]
Squared Array : [ 1, 4, 9, 16, 25 ]

Time Complexity

O(n)

Space Complexity

O(n)

==========================================
*/