var timeLeft = 100
var startBtn = document.getElementById("startQuiz")
var questions = document.getElementById("question")
var startingPage = document.getElementById("startingPageMl")
var questionNum = 0
var content = document.getElementById("quizContent")
// var addQuestion 
var answerButtons = document.getElementById("answer")
var index = 0
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

console.log("hello")
// GIVEN I am taking a code quiz

// WHEN I click the start button
startBtn.addEventListener("click", begin);
    function begin() {
    startingPage.setAttribute("style", "display: none");
    console.log("starting page is hidden");
    // addQuestion = questionArray[index]
    addQuestions ();
    // displayQuestion(addQuestion)

    for (var i = 0; i < 4; i++){
        var addAnswers = document.createElement("button");
        // var addQuestions = document.createElement("");
        addAnswers.className ="btn-primary btn-block text-left"
        addAnswers.textContent = questionArray[index].answers[i];
        answerButtons.appendChild(addAnswers)
    };

    function addQuestions () {

        questions.textContent = "";

        


    }

}; 
// function displayQuestion(addQuestion){
//     questions.innerText=questionArray.question
//     questionArray.answers.forEach(element => {
//     var button = document.createElement("button")
//     button.className="btn-primary btn-block text-left"
//     button.innerText=element
//     // questionanswers.innerHTML=""
//     questionanswers.appendChild(button)
//     button.addEventListener("click", displaynextQuestion)
//     });

// function displaynextQuestion(e){
//     index++
//     if(index < questionArray.length){
//         correction(e.target.innerText == addQuestion.answers)
//         question.innerHTML=""
//         if(index < questionsArray.length){    
//             nextQuestions= questions[index]
//             displayQuestion(nextQuestions)  
//         }else {
//             currentindex = 0
//             displayQuestion(nextQuestions)  
//         }
//     }
// THEN a timer starts and I am presented with a question
// for(var i = 0; i < questionArray.questions.length; i++) {
//     // questions.append.()
//     // question.addClass ("col-sm-3");
// }
// WHEN I answer a question
// var content = $("<h3>");
// content.textContent(questionArray[i]);
// qEl.append(h3El);
// questionArray.append(qEl)
// THEN I am presented with another question

// WHEN I answer a question incorrectly

// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0

// THEN the game is over

// WHEN the game is over

// THEN I can save my initials and score