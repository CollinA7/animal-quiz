document.getElementById("start-button").addEventListener("click", startQuiz);
var startButton = document.querySelector("#start-button");
var quizContent = document.querySelector("#quiz-body");

// user clicks on the start quiz button
// This function changes the HTML to present the user with the the first question 
function startQuiz() {
    //  This line replaces the current html with the generated question
    document.getElementById("question-prompt").innerHTML = "What orange and white fish is known for hosting in an anemone for protection?";
    //  This line hides the h4 element during the test 
    document.getElementById("sub-prompt").remove();
}

// if the user selects an answer

// the quiz determines if the answer is correct or not

// the if the answer is correct the user proceeds to the next question

// The user will gain points for the correct answers

// if the user is not correct a message will be discplayed that it was incorrect

// The user will lose points
