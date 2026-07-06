// FinallyBlock.js
// Demonstrates the finally block.

try {

    console.log("Program Started");

    throw new Error("Something went wrong.");

} catch (error) {

    console.log(error.message);

} finally {

    console.log("Finally block executed.");
}

/*
==========================================
Explanation

The finally block always
executes whether an error
occurs or not.

It is commonly used for
cleanup tasks such as
closing files or releasing
resources.

When to Use

Use finally when some
code must always execute.

Expected Output

Program Started
Something went wrong.
Finally block executed.

Time Complexity

O(1)

Space Complexity

O(1)

==========================================
*/