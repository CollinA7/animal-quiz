var answerBtnBox = document.querySelector(".btn-box");
var quizContent = document.querySelector("#quiz-body");
var startButton = document.querySelector("#start-button");

//  These are the Arrays for the questions and the answers
var questionSelector = [
    "What orange and white fish is known for hosting in an anemone for protection?",
    "Which large cat is the fastest land mammal on the planet?",
    "Which mammal is recognized as the official small mammal for the state of Texas?"
]

var correctAnimal = [
    "Clownfish", "Cheetah", "Armadillo"
];//    0            1          2

var incorrectAnimals = [
    "Giraffe", "Rhino", "Ostrich", "Salmon", "Koi fish", "Catfish", "Goldfish", "Lion", "American Opossum", "Snapping Turtle"
]; //   0           1       2           3           4       5           6           7           8                   9


function startQuiz() {
    
    // document.getElementById("sub-prompt").innerHTML = "";
    // document.getElementById("question-prompt").innerHTML = "";
    
    clearBody();
    questionOne();
    startButton.remove();
    // Add timer to the header
    
}

var clearBody = function() {
    console.log("this is the delete fuction")
    document.getElementById("quiz-body").innerHTML = "";
    document.getElementById("btn-box").innerHTML = "";

}

var buttonHandler = function(event) {
    console.log(event.target);

    if(event.target.matches(".btn1")) {
        console.log("you freakin did it");
        
        clearBody();
        questionTwo();
    }
    if(event.target.matches(".btn2")){
        console.log("good stuff");
        clearBody();
        questionThree();
    }
    if(event.target.matches(".btn3")){
        clearBody();
        console.log("good stuff");
        // add show score function here
    }
    else if(event.target.matches(".btn")) {
        // window.alert("try again  -10 seconds")

        // add time deduction
    }

}

function questionOne() {
    
    // This is the quesiton prompt
    var questionPrompt = document.createElement("h2");
    questionPrompt.textContent = questionSelector[0];
    quizContent.appendChild(questionPrompt);
    

    //  answerOne/Four are listed here below
    var answerOne = document.createElement("button");
    answerOne.textContent = incorrectAnimals[3];
    answerOne.className ="btn";
    answerOne.id = "answer-one"
    answerBtnBox.appendChild(answerOne);
    
    var answerTwo = document.createElement("button");
    answerTwo.textContent = incorrectAnimals[6];
    answerTwo.className = "btn";
    answerTwo.id = "answer-two";
    answerBtnBox.appendChild(answerTwo);
    
    
    var answerThree = document.createElement("button");
    answerThree.textContent = correctAnimal[0];
    answerThree.className = "btn1";
    answerThree.id = "answer-three";
    answerBtnBox.appendChild(answerThree);
    
    var answerFour = document.createElement("button");
    answerFour.textContent = incorrectAnimals[4];
    answerFour.className = "btn";
    answerFour.id = "answer-four";
    answerBtnBox.appendChild(answerFour);
    
    
}

//  This is question number two
function questionTwo() {
    
    var questionPrompt = document.createElement("h2");
    questionPrompt.textContent = questionSelector[1];
    quizContent.appendChild(questionPrompt);
    
    //  answerOne/Four are listed here below
    var answerOne = document.createElement("button");
    answerOne.textContent = incorrectAnimals[7];
    answerOne.className ="btn";
    answerOne.id = "answer-one"
    answerBtnBox.appendChild(answerOne);
    
    var answerTwo = document.createElement("button");
    answerTwo.textContent = incorrectAnimals[2];
    answerTwo.className = "btn";
    answerTwo.id = "answer-two";
    answerBtnBox.appendChild(answerTwo);
    
    
    var answerFour = document.createElement("button");
    answerFour.textContent = incorrectAnimals[0];
    answerFour.className = "btn";
    answerFour.id = "answer-four";
    answerBtnBox.appendChild(answerFour);
    
    var answerThree = document.createElement("button");
    answerThree.textContent = correctAnimal[1];
    answerThree.className = "btn2";
    answerThree.id = "answer-three";
    answerBtnBox.appendChild(answerThree);
    
}

function questionThree() {
    
    var questionPrompt = document.createElement("h2");
    questionPrompt.textContent = questionSelector[2];
    quizContent.appendChild(questionPrompt);
    
    //  answerOne/Four are listed here below
    var answerOne = document.createElement("button");
    answerOne.textContent = incorrectAnimals[1];
    answerOne.className ="btn";
    answerOne.id = "answer-one"
    answerBtnBox.appendChild(answerOne);
    
    var answerThree = document.createElement("button");
    answerThree.textContent = correctAnimal[2];
    answerThree.className = "btn3";
    answerThree.id = "answer-three";
    answerBtnBox.appendChild(answerThree);
    
    
    var answerTwo = document.createElement("button");
    answerTwo.textContent = incorrectAnimals[8];
    answerTwo.className = "btn";
    answerTwo.id = "answer-two";
    answerBtnBox.appendChild(answerTwo);
    
    var answerFour = document.createElement("button");
    answerFour.textContent = incorrectAnimals[9];
    answerFour.className = "btn";
    answerFour.id = "answer-four";
    answerBtnBox.appendChild(answerFour);
    
    
}


startButton.addEventListener("click", startQuiz);
answerBtnBox.addEventListener("click", buttonHandler)