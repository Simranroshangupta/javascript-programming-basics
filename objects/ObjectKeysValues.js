// ObjectKeysValues.js
// Demonstrates Object.keys() and Object.values().

const student = {

    name: "Simran",
    age: 20,
    course: "AIML"
};

console.log("Keys :", Object.keys(student));

console.log("Values :", Object.values(student));

/*
==========================================
Explanation

Object.keys() returns
all property names.

Object.values() returns
all property values.

When to Use

Use these methods when
you need to access all
keys or values.

Expected Output

Keys : [ 'name', 'age', 'course' ]
Values : [ 'Simran', 20, 'AIML' ]

Time Complexity

O(n)

Space Complexity

O(n)

==========================================
*/