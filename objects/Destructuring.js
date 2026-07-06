// Destructuring.js
// Demonstrates object destructuring.

const student = {

    name: "Simran",
    age: 20,
    course: "AIML"
};

const { name, age, course } = student;

console.log("Name :", name);
console.log("Age :", age);
console.log("Course :", course);

/*
==========================================
Explanation

Destructuring extracts
properties from an object
into individual variables.

When to Use

Use destructuring to write
cleaner and shorter code.

Expected Output

Name : Simran
Age : 20
Course : AIML

Time Complexity

O(1)

Space Complexity

O(1)

==========================================
*/