document.getElementById("start-button").addEventListener("click", startQuiz);
var startButton = document.querySelector("#start-button");
var quizContent = document.querySelector("#quiz-body");

var correctAnimal = ["Clownfish", "Cheetah", "Armadillo"];

function startQuiz() {
    
    document.getElementById("sub-prompt").remove();
    
    questionOne();
}

var questionOne = function() {
    document.getElementById("question-prompt").innerHTML = "What orange and white fish is known for hosting in an anemone for protection?";
    

}

