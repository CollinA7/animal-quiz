document.getElementById("start-button").addEventListener("click", startQuiz);
var startButton = document.querySelector("#start-button");
var quizContent = document.querySelector("#quiz-body");
var buttonIdCounter = 0;

//  These are the Arrays for the questions and the answers
var questionSelector = [
    "What orange and white fish is known for hosting in an anemone for protection?",
    "Which large cat is the fastest land mammal on the planet",
    "What is the state animal for the state of Texas?"
]

var correctAnimal = [
    "Clownfish", "Cheetah", "Armadillo"
];

var incorrectAnimals = [
    "Giraffe", "Rhino", "Ostrich", "Salmon", "Koi fish", "Catfish", "Goldfish", "Lion", "American Opossum"
];

var buttonHandler = function(event) {
    console.log(event.target);

    if (event.target.matches(".btn")) {
        var buttonIdCounter = event.target.getAttribute("answer-btn-id");
        console.log(buttonIdCounter);
    }
}

function startQuiz() {
    
    document.getElementById("sub-prompt").innerHTML = "";
    document.getElementById("question-prompt").innerHTML = "";
    
    startButton.remove();

    questionOne();
    // Add timer to the header


    function questionOne() {
        // document.getElementById("buttonIdCounter").addEventListener("click", console.log("yes"))

        // This variable adds the question to the body
        var firstQuestion = document.getElementById("quiz-body");

        var questionPrompt = document.createElement("h2");
        questionPrompt.textContent = questionSelector[0];
        firstQuestion.appendChild(questionPrompt);

        //  Answer one options
        var questionAnswer = document.createElement("button");
        questionAnswer.textContent = incorrectAnimals[3];
        questionAnswer.className = ("btn");
        questionAnswer.setAttribute("answer-btn-id", buttonIdCounter++);
        firstQuestion.appendChild(questionAnswer);
        
        var questionAnswer = document.createElement("button");
        questionAnswer.textContent = incorrectAnimals[6];
        questionAnswer.className = ("btn");
        questionAnswer.setAttribute("answer-btn-id", buttonIdCounter++);
        firstQuestion.appendChild(questionAnswer);

        var questionAnswer = document.createElement("button");
        questionAnswer.textContent = correctAnimal[0];
        questionAnswer.className = ("btn");
        questionAnswer.setAttribute("answer-btn-id", buttonIdCounter++);
        firstQuestion.appendChild(questionAnswer);

        var questionAnswer = document.createElement("button");
        questionAnswer.textContent = incorrectAnimals[4];
        questionAnswer.className = ("btn");
        questionAnswer.setAttribute("answer-btn-id", buttonIdCounter++);
        firstQuestion.appendChild(questionAnswer);
    }

}