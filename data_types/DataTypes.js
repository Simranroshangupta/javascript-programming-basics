// DataTypes.js
// Demonstrates different data types in JavaScript.

// String
let name = "Simran";

// Number
let age = 20;

// Boolean
let isStudent = true;

// Undefined
let city;

// Null
let address = null;

// BigInt
let population = 12345678901234567890n;

// Symbol
let uniqueId = Symbol("id");

// Object
let student = {
    rollNumber: 14,
    course: "AIML"
};

console.log("String :", name);
console.log("Number :", age);
console.log("Boolean :", isStudent);
console.log("Undefined :", city);
console.log("Null :", address);
console.log("BigInt :", population);
console.log("Symbol :", uniqueId);
console.log("Object :", student);

/*
==========================================
Explanation

A data type defines the kind
of value a variable stores.

JavaScript provides eight
different data types.

String     → Text
Number     → Numeric values
Boolean    → true or false
Undefined  → Variable declared
             but not assigned
Null       → Empty value
BigInt     → Large integers
Symbol     → Unique identifier
Object     → Collection of data

==========================================
*/