// TemplateLiterals.js
// Demonstrates template literals.

const name = "Simran";
const course = "AIML";
const age = 20;

const message = `Name: ${name}
Course: ${course}
Age: ${age}`;

console.log(message);

/*
==========================================
Explanation

Template literals use
backticks (` `) instead
of quotes.

${} is used to insert
variables into a string.

When to Use

Use template literals
when creating dynamic
or multi-line strings.

Expected Output

Name: Simran
Course: AIML
Age: 20

Time Complexity

O(n)

Space Complexity

O(n)

==========================================
*/