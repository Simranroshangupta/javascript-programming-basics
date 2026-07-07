/*
==========================================
Project : Counter App

Description

A simple counter application.

Features

• Increase Count
• Decrease Count
• Reset Count

Concepts Used

• Variables
• DOM Manipulation
• Event Listeners

==========================================
*/

let count = 0;

const countValue = document.getElementById("count");

document.getElementById("increase").addEventListener("click", function () {

    count++;

    countValue.textContent = count;
});

document.getElementById("decrease").addEventListener("click", function () {

    count--;

    countValue.textContent = count;
});

document.getElementById("reset").addEventListener("click", function () {

    count = 0;

    countValue.textContent = count;
});