var timeLeft = 100
var startBtn = document.getElementById("startQuiz")
var questions = document.getElementById("question")
var startingPage = document.getElementById("startingPageMl")
var questionNum = 0
var content = document.getElementById("quizContent")

var questionArray = [
{
    "question": "Commonly used data types DO NOT Include:",
    "answers": ["strings", "booleans", "alerts", "numbers"],
    "correct": "alerts"
},
{
    "question": "The condition in an if/else statement is enclosed within _____.",
    "answers": ["quotes", "curlybrackets", "parentheses", "square brackets"],
    "correct": "parentheses"
},
{
    "question": "Arrays in JavaScript can be used to store ____.",
    "answers": ["numbers and strings", "other arrays", "booleans", "all of the above"],
    "correct": "all of the above"
},
{
    "question": "String values must be enclosed within _____ when being assigned to variables.",
    "answers": ["co mmas", "curly brackets", "quotes", "parentheses"],
    "correct": "quotes"
},
{
    "question": "A very useful tool used during development and debugging for printing content to the debugger is:",
    "answers" :["JavaScript", "terminal/bash", "for loops", "console.log"],
    "correct": "console.log"
},
]


// GIVEN I am taking a code quiz

// WHEN I click the start button
$(startBtn).on("click", function() {
    $(startingPage).html("");
});
// THEN a timer starts and I am presented with a question
for(var i = 0; i < questionArray.length; i++) {
    var qEl = $("<p>");
    // question.addClass ("col-sm-3");
}
// WHEN I answer a question
var content = $("<h3>");
content.textContent(questionArray[i]);
qEl.append(h3El);
questionArray.append(qEl)
// THEN I am presented with another question

// WHEN I answer a question incorrectly

// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0

// THEN the game is over

// WHEN the game is over

// THEN I can save my initials and score