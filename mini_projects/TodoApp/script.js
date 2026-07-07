/*
==========================================
Project : Todo App

Description

A simple task manager.

Features

• Add Tasks
• Mark Complete
• Delete Tasks

Concepts Used

• DOM Manipulation
• Event Listeners
• createElement()
• appendChild()

==========================================
*/

const input = document.getElementById("taskInput");

const addButton = document.getElementById("addTask");

const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {

    if (input.value.trim() === "") {

        return;
    }

    const listItem = document.createElement("li");

    listItem.textContent = input.value;

    listItem.addEventListener("click", function () {

        listItem.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.className = "delete";

    deleteButton.addEventListener("click", function (event) {

        event.stopPropagation();

        listItem.remove();
    });

    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    input.value = "";
});