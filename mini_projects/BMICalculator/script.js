/*
==========================================
Project : BMI Calculator

Description

Calculates Body Mass Index
using height and weight.

Features

• BMI Calculation
• BMI Category
• Input Validation

Concepts Used

• DOM Manipulation
• Event Listeners
• Math Operations
• Conditional Statements

==========================================
*/

const button = document.getElementById("calculate");

button.addEventListener("click", function () {

    const height = Number(document.getElementById("height").value);

    const weight = Number(document.getElementById("weight").value);

    if (height <= 0 || weight <= 0) {

        alert("Please enter valid values.");

        return;
    }

    const bmi = weight / ((height / 100) ** 2);

    document.getElementById("result").textContent =
        `BMI : ${bmi.toFixed(2)}`;

    let category = "";

    if (bmi < 18.5) {

        category = "Underweight";

    } else if (bmi < 25) {

        category = "Normal Weight";

    } else if (bmi < 30) {

        category = "Overweight";

    } else {

        category = "Obese";
    }

    document.getElementById("category").textContent =
        `Category : ${category}`;
});