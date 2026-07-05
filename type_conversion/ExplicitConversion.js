// ExplicitConversion.js
// Demonstrates explicit type conversion in JavaScript.

let number = "100";
let text = 500;
let value = 1;

console.log("String to Number :", Number(number));
console.log("Number to String :", String(text));
console.log("Number to Boolean :", Boolean(value));

console.log();

console.log(typeof Number(number));
console.log(typeof String(text));
console.log(typeof Boolean(value));

/*
==========================================
Explanation

Explicit Conversion means
manually converting one data
type into another.

Common Functions

Number()
Converts a value into a number.

String()
Converts a value into a string.

Boolean()
Converts a value into true or false.

Expected Output

String to Number : 100
Number to String : 500
Number to Boolean : true

number
string
boolean

==========================================
*/