// VariableScope.js
// Demonstrates variable scope in JavaScript.

let globalVariable = "I am a Global Variable";

function displayScope() {

    let localVariable = "I am a Local Variable";

    if (true) {

        let blockVariable = "I am a Block Variable";

        console.log(blockVariable);
    }

    console.log(localVariable);
    console.log(globalVariable);
}

displayScope();

// console.log(localVariable);   // Error
// console.log(blockVariable);   // Error

/*
==========================================
Explanation

Scope determines where a
variable can be accessed.

Global Scope
Accessible throughout the program.

Local Scope
Accessible only inside a function.

Block Scope
Accessible only inside a block
such as if, for or while.

The 'let' keyword follows
block scope.

==========================================
*/