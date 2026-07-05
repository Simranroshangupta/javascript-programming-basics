// ForInLoop.js
// Demonstrates the for...in loop.

const student = {

    name: "Simran",
    age: 20,
    course: "AIML"
};

for (const key in student) {

    console.log(key + " :", student[key]);
}

/*
==========================================
Explanation

The for...in loop is used
to iterate over the
properties of an object.

It returns the property
names (keys), which can
be used to access values.

When to Use

Use for...in when working
with objects and their
properties.

Expected Output

name : Simran
age : 20
course : AIML

==========================================
*/