// ObjectMethods.js
// Demonstrates object methods.

const student = {

    name: "Simran",

    greet() {

        console.log("Welcome,", this.name + "!");
    }
};

student.greet();

/*
==========================================
Explanation

An object can contain
functions called methods.

The 'this' keyword refers
to the current object.

When to Use

Use methods when an object
needs to perform actions.

Expected Output

Welcome, Simran!

Time Complexity

O(1)

Space Complexity

O(1)

==========================================
*/