/*
==========================================
Project : Digital Clock

Description

Displays the current
system time.

Features

• Live Clock
• Updates Every Second
• 12-Hour Format

Concepts Used

• Date Object
• Functions
• setInterval()
• DOM Manipulation

==========================================
*/

const clock = document.getElementById("clock");

function updateClock() {

    const currentTime = new Date();

    let hours = currentTime.getHours();

    let minutes = currentTime.getMinutes();

    let seconds = currentTime.getSeconds();

    const period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    clock.textContent =
        `${hours}:${minutes}:${seconds} ${period}`;
}

updateClock();

setInterval(updateClock, 1000);