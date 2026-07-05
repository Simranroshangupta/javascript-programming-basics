// ImplicitConversion.js
// Demonstrates implicit type conversion in JavaScript.

let result1 = "10" + 5;
let result2 = "10" - 5;
let result3 = "10" * 5;
let result4 = "10" / 5;
let result5 = true + 1;

console.log('"10" + 5 =', result1);
console.log('"10" - 5 =', result2);
console.log('"10" * 5 =', result3);
console.log('"10" / 5 =', result4);
console.log('true + 1 =', result5);

/*
==========================================
Explanation

Implicit Conversion means
JavaScript automatically converts
one data type into another.

Examples

"10" + 5  → "105"
"10" - 5  → 5
true + 1  → 2

JavaScript decides the conversion
based on the operator used.

==========================================
*/