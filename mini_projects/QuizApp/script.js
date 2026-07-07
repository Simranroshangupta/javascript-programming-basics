/*
==========================================
Project : Quiz App

Description

A multiple-choice quiz
application with score
tracking.

Features

• Multiple Questions
• Correct/Wrong Answer Highlight
• Score Tracking
• Restart Quiz

Concepts Used

• Arrays
• Objects
• DOM Manipulation
• Event Listeners

==========================================
*/

const quiz = [

    {
        question: "Which language is used for web development?",
        options: ["Python", "JavaScript", "C++", "Java"],
        answer: "JavaScript"
    },

    {
        question: "Which keyword declares a constant?",
        options: ["let", "const", "var", "static"],
        answer: "const"
    },

    {
        question: "Which company created JavaScript?",
        options: ["Microsoft", "Google", "Netscape", "Oracle"],
        answer: "Netscape"
    }

];

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const options = document.getElementById("options");
const next = document.getElementById("next");
const scoreText = document.getElementById("score");

function loadQuestion() {

    next.style.display = "none";

    options.innerHTML = "";

    question.textContent = quiz[currentQuestion].question;

    quiz[currentQuestion].options.forEach(function(option){

        const button = document.createElement("button");

        button.textContent = option;

        button.addEventListener("click", function(){

            checkAnswer(button, option);

        });

        options.appendChild(button);

    });

}

function checkAnswer(selectedButton, selectedAnswer){

    const buttons = document.querySelectorAll("#options button");

    buttons.forEach(function(button){

        button.disabled = true;

        if(button.textContent === quiz[currentQuestion].answer){

            button.style.backgroundColor = "green";

        }

    });

    if(selectedAnswer === quiz[currentQuestion].answer){

        score++;

    }else{

        selectedButton.style.backgroundColor = "red";

    }

    next.style.display = "block";

}

next.addEventListener("click", function(){

    currentQuestion++;

    if(currentQuestion < quiz.length){

        loadQuestion();

    }else{

        question.textContent = "Quiz Completed 🎉";

        options.innerHTML = "";

        scoreText.textContent =
        `Your Score : ${score} / ${quiz.length}`;

        next.textContent = "Restart";

        next.style.display = "block";

        next.onclick = function(){

            location.reload();

        };

    }

});

loadQuestion();