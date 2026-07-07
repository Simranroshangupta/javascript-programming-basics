/*
==========================================
Project : Password Generator

Description

Generates secure passwords
based on selected options.

Features

• Password Length
• Uppercase Letters
• Lowercase Letters
• Numbers
• Symbols
• Copy Password

Concepts Used

• Strings
• Arrays
• Math.random()
• DOM Manipulation

==========================================
*/

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+?><:{}[]";

const password = document.getElementById("password");

document.getElementById("generate")
.addEventListener("click", function () {

    let characters = "";

    if(document.getElementById("uppercase").checked)
        characters += uppercase;

    if(document.getElementById("lowercase").checked)
        characters += lowercase;

    if(document.getElementById("numbers").checked)
        characters += numbers;

    if(document.getElementById("symbols").checked)
        characters += symbols;

    if(characters === ""){

        alert("Select at least one option.");

        return;
    }

    const length =
        Number(document.getElementById("length").value);

    let generatedPassword = "";

    for(let i=0;i<length;i++){

        const randomIndex =
            Math.floor(Math.random()*characters.length);

        generatedPassword += characters[randomIndex];
    }

    password.value = generatedPassword;

});

document.getElementById("copy")
.addEventListener("click", function(){

    navigator.clipboard.writeText(password.value);

    alert("Password Copied!");
});