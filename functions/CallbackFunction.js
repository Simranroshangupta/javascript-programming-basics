// CallbackFunction.js
// Demonstrates callback functions in JavaScript.

function greetUser(name, callback) {

    console.log("Hello,", name + "!");

    callback();
}

function sayGoodbye() {

    console.log("Goodbye!");
}

greetUser("Simran", sayGoodbye);

/*
==========================================
Explanation

A callback function is a
function passed as an
argument to another function.

The callback is executed
after the main function
completes its task.

When to Use

Use callbacks when one
function depends on another,
especially in asynchronous
operations.

Expected Output

Hello, Simran!
Goodbye!

==========================================
*/