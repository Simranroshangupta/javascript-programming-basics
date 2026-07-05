// NestedIf.js
// Demonstrates nested if statements.

let username = "admin";
let password = "12345";

if (username === "admin") {

    if (password === "12345") {

        console.log("Login Successful");

    } else {

        console.log("Incorrect Password");
    }

} else {

    console.log("Invalid Username");
}

/*
==========================================
Explanation

A nested if statement
contains another if
statement inside it.

It is useful when one
condition depends on
another condition.

Expected Output

Login Successful

==========================================
*/