// DefaultParameters.js
// Demonstrates default parameters in JavaScript.

function greetUser(name = "Guest") {

    console.log("Welcome,", name + "!");
}

greetUser();

greetUser("Simran");

/*
==========================================
Explanation

Default parameters provide
a default value if no
argument is passed.

When to Use

Use default parameters to
avoid undefined values and
make functions more flexible.

Expected Output

Welcome, Guest!
Welcome, Simran!

==========================================
*/