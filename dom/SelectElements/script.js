// script.js
// Demonstrates selecting HTML elements.

const heading = document.getElementById("heading");

const message = document.querySelector(".message");

console.log(heading);

console.log(message);

/*
==========================================
Explanation

The DOM (Document Object Model)
represents an HTML page as
objects.

getElementById()
Selects an element using its id.

querySelector()
Selects the first element
matching a CSS selector.

When to Use

Use these methods whenever
you need to access HTML
elements using JavaScript.

==========================================
*/