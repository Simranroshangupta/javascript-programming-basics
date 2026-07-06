// DateMethods.js
// Demonstrates common Date methods.

const currentDate = new Date();

console.log("Year :", currentDate.getFullYear());

console.log("Month :", currentDate.getMonth() + 1);

console.log("Date :", currentDate.getDate());

console.log("Day :", currentDate.getDay());

console.log("Hours :", currentDate.getHours());

console.log("Minutes :", currentDate.getMinutes());

console.log("Seconds :", currentDate.getSeconds());

/*
==========================================
Explanation

The Date object provides
methods to retrieve
different parts of a date.

getFullYear() → Current year

getMonth()    → Month
                (0-11)

getDate()     → Day of month

getDay()      → Day of week
                (0 = Sunday)

getHours()    → Current hour

getMinutes()  → Current minute

getSeconds()  → Current second

When to Use

Use these methods whenever
you need individual date
or time values.

Expected Output

Year : 2026
Month : 4
Date : 20
Day : 1
Hours : 15
Minutes : 30
Seconds : 45

(Output depends on the
current date and time.)

Time Complexity

O(1)

Space Complexity

O(1)

==========================================
*/