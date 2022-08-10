var startButton = document.querySelector("#start-button");
var quizContent = document.querySelector("#quiz-body");


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


function startQuiz() {
    
    document.getElementById("sub-prompt").innerHTML = "";
    document.getElementById("question-prompt").innerHTML = "";
    
    startButton.remove();
    
    questionOne();
    // Add timer to the header
    
}

var buttonHandler = function(event) {
    console.log(event.target);

    if(event.target.matches(".btn1", ".btn2", ".btn3")) {
        console.log("you freakin did it")
    }
    
    else if(event.target.matches(".btn")) {
        window.alert("try again")

        // add time deduction
    }

}

function questionOne() {
    
    var questionPrompt = document.createElement("h2");
    questionPrompt.textContent = questionSelector[0];
    quizContent.appendChild(questionPrompt);
    
    //  Answer one options
    var answerOne = document.createElement("button");
    answerOne.textContent = incorrectAnimals[3];
    answerOne.className ="btn";
    answerOne.id = "answer-one"
    quizContent.appendChild(answerOne);
    
    // -------
    var answerTwo = document.createElement("button");
    answerTwo.textContent = incorrectAnimals[6];
    answerTwo.className = "btn";
    answerTwo.id = "answer-two";
    quizContent.appendChild(answerTwo);
    
    
    var answerThree = document.createElement("button");
    answerThree.textContent = correctAnimal[0];
    answerThree.className = "btn1";
    answerThree.id = "answer-three";
    quizContent.appendChild(answerThree);
    
    var answerFour = document.createElement("button");
    answerFour.textContent = incorrectAnimals[4];
    answerFour.className = "btn";
    answerFour.id = "answer-four";
    quizContent.appendChild(answerFour);
    
    
}


startButton.addEventListener("click", startQuiz);
quizContent.addEventListener("click", buttonHandler)