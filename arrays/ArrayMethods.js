// ArrayMethods.js
// Demonstrates common array methods in JavaScript.

const fruits = ["Apple", "Banana", "Mango"];

console.log("Original Array :", fruits);

// Add an element at the end
fruits.push("Orange");
console.log("After push() :", fruits);

// Remove the last element
fruits.pop();
console.log("After pop() :", fruits);

// Add an element at the beginning
fruits.unshift("Grapes");
console.log("After unshift() :", fruits);

// Remove the first element
fruits.shift();
console.log("After shift() :", fruits);

/*
==========================================
Explanation

JavaScript provides many
built-in methods to work
with arrays.

push()      → Adds an element
               to the end.

pop()       → Removes the last
               element.

unshift()   → Adds an element
               at the beginning.

shift()     → Removes the first
               element.

When to Use

Use these methods whenever
you need to insert or
remove elements from
an array.

Expected Output

Original Array : [ 'Apple', 'Banana', 'Mango' ]
After push() : [ 'Apple', 'Banana', 'Mango', 'Orange' ]
After pop() : [ 'Apple', 'Banana', 'Mango' ]
After unshift() : [ 'Grapes', 'Apple', 'Banana', 'Mango' ]
After shift() : [ 'Apple', 'Banana', 'Mango' ]

Time Complexity

push()      : O(1)
pop()       : O(1)
unshift()   : O(n)
shift()     : O(n)

Space Complexity

O(1)

==========================================
*/