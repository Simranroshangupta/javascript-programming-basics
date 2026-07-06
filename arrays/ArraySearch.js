// ArraySearch.js
// Demonstrates searching elements in an array.

const numbers = [10, 20, 30, 40, 50];

console.log("Array :", numbers);

console.log("includes(30) :", numbers.includes(30));

console.log("indexOf(40) :", numbers.indexOf(40));

console.log("indexOf(100) :", numbers.indexOf(100));

/*
==========================================
Explanation

Searching means checking
whether an element exists
in an array.

includes()

Returns true if the element
is found.

indexOf()

Returns the index of the
element.

If the element is not found,
it returns -1.

When to Use

Use includes() when you
only need to know if an
element exists.

Use indexOf() when you
also need the position.

Expected Output

Array : [ 10, 20, 30, 40, 50 ]
includes(30) : true
indexOf(40) : 3
indexOf(100) : -1

Time Complexity

O(n)

Space Complexity

O(1)

==========================================
*/