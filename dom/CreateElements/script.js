// script.js
// Demonstrates creating HTML elements.

function createParagraph() {

    const paragraph = document.createElement("p");

    paragraph.textContent = "This paragraph was created using JavaScript.";

    document.body.appendChild(paragraph);
}

/*
==========================================
Explanation

createElement()
creates a new HTML element.

appendChild()
adds the element to the page.

When to Use

Use these methods to
create dynamic content.

==========================================
*/