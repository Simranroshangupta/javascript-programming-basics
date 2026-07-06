// ArrayFilter.js
// Demonstrates the filter() method.

const numbers = [12, 25, 8, 40, 17];

const greaterThanTwenty = numbers.filter((number) => number > 20);

console.log("Original Array :", numbers);

console.log("Filtered Array :", greaterThanTwenty);

/*
==========================================
Explanation

The filter() method creates
a new array containing only
the elements that satisfy
a condition.

It does not modify
the original array.

When to Use

Use filter() to remove
unwanted elements from
an array.

Expected Output

Original Array : [ 12, 25, 8, 40, 17 ]
Filtered Array : [ 25, 40 ]

Time Complexity

O(n)

Space Complexity

O(n)

==========================================
*/