// ArraySort.js
// Demonstrates sorting arrays in JavaScript.

const numbers = [40, 10, 70, 20, 50];

console.log("Original Array :", numbers);

// Ascending Order
numbers.sort((first, second) => first - second);

console.log("Ascending Order :", numbers);

// Descending Order
numbers.sort((first, second) => second - first);

console.log("Descending Order :", numbers);

/*
==========================================
Explanation

The sort() method arranges
the elements of an array.

By default, JavaScript
sorts values as strings.

To sort numbers correctly,
provide a comparison function.

Ascending

first - second

Descending

second - first

When to Use

Use sort() whenever you
need to arrange data in
ascending or descending order.

Expected Output

Original Array : [ 40, 10, 70, 20, 50 ]
Ascending Order : [ 10, 20, 40, 50, 70 ]
Descending Order : [ 70, 50, 40, 20, 10 ]

Time Complexity

O(n log n)

Space Complexity

O(1)

==========================================
*/