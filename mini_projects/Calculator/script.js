/*
==========================================
Project : Calculator

Description

A basic calculator that
performs arithmetic
operations.

Features

• Addition
• Subtraction
• Multiplication
• Division
• Decimal Numbers
• Clear Display
• Delete Last Digit

Concepts Used

• Functions
• DOM Manipulation
• Events
• String Operations

==========================================
*/

const display = document.getElementById("display");

function appendValue(value) {

    display.value += value;
}

function clearDisplay() {

    display.value = "";
}

function deleteLast() {

    display.value = display.value.slice(0, -1);
}

function calculate() {

    try {

        display.value = eval(display.value);

    } catch {

        display.value = "Error";
    }
}