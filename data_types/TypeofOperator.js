// TypeofOperator.js
// Demonstrates the typeof operator.

let name = "Simran";
let age = 20;
let isStudent = true;
let city;
let address = null;
let population = 12345678901234567890n;
let uniqueId = Symbol("id");
let student = {
    course: "AIML"
};

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof city);
console.log(typeof address);
console.log(typeof population);
console.log(typeof uniqueId);
console.log(typeof student);

/*
==========================================
Explanation

The typeof operator is used
to find the data type of a
variable or value.

Example Outputs

string
number
boolean
undefined
object
bigint
symbol
object

Note

typeof null returns "object".

This is a well-known behavior
in JavaScript.

==========================================
*/