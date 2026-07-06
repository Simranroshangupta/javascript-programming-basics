// StringSearch.js
// Demonstrates string searching methods.

const message = "Welcome to JavaScript Programming";

console.log("indexOf('JavaScript') :", message.indexOf("JavaScript"));

console.log("startsWith('Welcome') :", message.startsWith("Welcome"));

console.log("endsWith('Programming') :", message.endsWith("Programming"));

console.log("includes('Java') :", message.includes("Java"));

/*
==========================================
Explanation

JavaScript provides methods
to search text inside strings.

indexOf()     → Returns position.

startsWith()  → Checks beginning.

endsWith()    → Checks ending.

includes()    → Checks existence.

When to Use

Use these methods to
find text inside strings.

Expected Output

indexOf('JavaScript') : 11
startsWith('Welcome') : true
endsWith('Programming') : true
includes('Java') : true

Time Complexity

O(n)

Space Complexity

O(1)

==========================================
*/