/*
==========================================
Project : Expense Tracker

Description

Track expenses and
calculate the total.

Features

• Add Expense
• Delete Expense
• Total Amount

Concepts Used

• Arrays
• DOM Manipulation
• Event Listeners

==========================================
*/

const expenseName = document.getElementById("expenseName");

const expenseAmount = document.getElementById("expenseAmount");

const addExpense = document.getElementById("addExpense");

const expenseList = document.getElementById("expenseList");

const total = document.getElementById("total");

let totalAmount = 0;

addExpense.addEventListener("click", function () {

    const name = expenseName.value.trim();

    const amount = Number(expenseAmount.value);

    if (name === "" || amount <= 0) {

        alert("Enter valid expense details.");

        return;
    }

    totalAmount += amount;

    total.textContent = totalAmount;

    const listItem = document.createElement("li");

    listItem.innerHTML = `
        <span>${name} - ₹${amount}</span>
    `;

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.className = "delete";

    deleteButton.addEventListener("click", function () {

        totalAmount -= amount;

        total.textContent = totalAmount;

        listItem.remove();

    });

    listItem.appendChild(deleteButton);

    expenseList.appendChild(listItem);

    expenseName.value = "";

    expenseAmount.value = "";

});