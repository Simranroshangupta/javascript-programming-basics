// StringMethods.js
// Demonstrates common string methods.

const message = "JavaScript Programming";

console.log("Original String :", message);

console.log("Length :", message.length);

console.log("Uppercase :", message.toUpperCase());

console.log("Lowercase :", message.toLowerCase());

console.log("Substring :", message.substring(0, 10));

console.log("Replace :", message.replace("Programming", "Basics"));

console.log("Includes 'Java' :", message.includes("Java"));

/*
==========================================
Explanation

JavaScript provides built-in
methods to work with strings.

length       → Returns string length.

toUpperCase()→ Converts to uppercase.

toLowerCase()→ Converts to lowercase.

substring()  → Extracts part of a string.

replace()    → Replaces text.

includes()   → Checks if text exists.

When to Use

Use string methods whenever
you need to manipulate text.

Expected Output

Original String : JavaScript Programming
Length : 22
Uppercase : JAVASCRIPT PROGRAMMING
Lowercase : javascript programming
Substring : JavaScript
Replace : JavaScript Basics
Includes 'Java' : true

Time Complexity

O(n)

Space Complexity

O(n)

==========================================
*/