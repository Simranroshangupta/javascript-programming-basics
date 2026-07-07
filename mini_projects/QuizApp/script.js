/*
==========================================
Project : Quiz App

Description

A simple multiple-choice quiz.

Features

• Multiple Questions
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
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "Oracle"],
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

    options.innerHTML = "";

    question.textContent = quiz[currentQuestion].question;

    quiz[currentQuestion].options.forEach(function(option){

        const button = document.createElement("button");

        button.textContent = option;

        button.onclick = function(){

            if(option === quiz[currentQuestion].answer){

                score++;
            }

            next.disabled = false;

            document.querySelectorAll("#options button")
            .forEach(function(btn){

                btn.disabled = true;
            });

        };

        options.appendChild(button);

    });

    next.disabled = true;
}

next.addEventListener("click",function(){

    currentQuestion++;

    if(currentQuestion < quiz.length){

        loadQuestion();

    }else{

        question.textContent = "Quiz Completed";

        options.innerHTML = "";

        scoreText.textContent =
            `Your Score : ${score} / ${quiz.length}`;

        next.textContent = "Restart";

        next.onclick = function(){

            location.reload();
        };
    }

});

loadQuestion();