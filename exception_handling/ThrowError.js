// ThrowError.js
// Demonstrates throwing a custom error.

function checkAge(age) {

    if (age < 18) {

        throw new Error("You must be at least 18 years old.");
    }

    console.log("Access Granted");
}

try {

    checkAge(16);

} catch (error) {

    console.log(error.message);
}

/*
==========================================
Explanation

The throw statement is
used to create a custom error.

Execution immediately stops
and control moves to the
catch block.

When to Use

Use throw when invalid
input or unexpected
conditions occur.

Expected Output

You must be at least
18 years old.

Time Complexity

O(1)

Space Complexity

O(1)

==========================================
*/