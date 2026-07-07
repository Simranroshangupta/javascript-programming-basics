/*
==========================================
Project : Stopwatch

Description

A stopwatch that can
start, stop and reset
the timer.

Features

• Start
• Stop
• Reset

Concepts Used

• setInterval()
• clearInterval()
• DOM Manipulation
• Event Listeners

==========================================
*/

let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

const display = document.getElementById("display");

function updateDisplay() {

    const h = String(hours).padStart(2, "0");
    const m = String(minutes).padStart(2, "0");
    const s = String(seconds).padStart(2, "0");

    display.textContent = `${h}:${m}:${s}`;
}

function startStopwatch() {

    if (timer !== null) return;

    timer = setInterval(function () {

        seconds++;

        if (seconds === 60) {

            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {

            minutes = 0;
            hours++;
        }

        updateDisplay();

    }, 1000);
}

function stopStopwatch() {

    clearInterval(timer);

    timer = null;
}

function resetStopwatch() {

    stopStopwatch();

    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();
}

document.getElementById("start").addEventListener("click", startStopwatch);

document.getElementById("stop").addEventListener("click", stopStopwatch);

document.getElementById("reset").addEventListener("click", resetStopwatch);