var timeLeft = 100
var startBtn = document.getElementById("startQuiz")
var questions = document.getElementById("question")
var startingPage = document.getElementById("startingPageMl")
var questionNum = 0
var content = document.getElementById("quizContent")
// var addQuestion 
var addedButtons = document.getElementsByTagName("button")
var answerButtons = document.getElementById("answer")
var index = 0

//object of questions, answers, and correct answers
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
    "answers": ["commas", "curly brackets", "quotes", "parentheses"],
    "correct": "quotes"
},
{
    "question": "A very useful tool used during development and debugging for printing content to the debugger is:",
    "answers" :["JavaScript", "terminal/bash", "for loops", "console.log"],
    "correct": "console.log"
},
]

//starts quiz and deletes starting content
startBtn.addEventListener("click", begin);

    function begin() {
    startingPage.setAttribute("style", "display: none");
    console.log("starting page is hidden");
    addNextAnswer ();
    addQuestions ();
}
    // adds the next answer
    
        function addNextAnswer () {
        answerButtons.innerHTML=""
    for (var i = 0; i < 4; i++){
        var addAnswers = document.createElement("button");
        addAnswers.className ="btn-primary btn-block text-left"
        addAnswers.textContent = questionArray[index].answers[i];
        answerButtons.appendChild(addAnswers);
        
    };
    index++
};
    //adds the next question
    function addQuestions () {
        // console.log(index)
        // console.log(addQuestions)
        questions.innerHTML = "";
        var newQuestions = questionArray[index].question;
        questions.append(newQuestions);
        
            
            
        
        };
        //event listeners to go through array and add content after button press
        answerButtons.addEventListener("click", addNextAnswer); answerButtons.addEventListener("click",  addQuestions); 
   
       

  
// THEN a timer starts and I am presented with a question

// }
// WHEN I answer a question

// THEN I am presented with another question

// WHEN I answer a question incorrectly

// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0

// THEN the game is over

// WHEN the game is over

// THEN I can save my initials and score