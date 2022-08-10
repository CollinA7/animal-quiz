var answerBtnBox = document.querySelector(".btn-box");
var quizContent = document.querySelector("#quiz-body");
var startButton = document.querySelector("#start-button");
var timerEl = document.querySelector("#timer")
var timeLeft = 0;

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


//  This is the start quiz function. this works as a handler invoking other funcitons
function startQuiz() {
    
    timeLeft = 60;

    clearBody();
    questionOne();
    startButton.remove();
    countTimer();
    
}

var clearBody = function() {
    console.log("this is the delete fuction")
    document.getElementById("quiz-body").innerHTML = "";
    document.getElementById("btn-box").innerHTML = "";

}


// --------This function handles the buttons------
var buttonHandler = function(event) {
    console.log(event.target);

    if(event.target.matches(".btn1")) {
        window.alert("Correct!!  +10 points");
        
        clearBody();
        questionTwo();
    }
    if(event.target.matches(".btn2")){
        window.alert("Correct!!  +10 points"); 
        clearBody();
        questionThree();
    }
    if(event.target.matches(".btn3")){
        window.alert("Correct!!  +10 points");
        clearBody();
        endQuiz();
        
    }
    else if(event.target.matches(".btn")) {
        window.alert("Incorrect  -10 seconds")

        timeLeft = (timeLeft - 10);
            
    }
    

}

// --------- Here in the Timer function ---------
function countTimer() {

    var timeInterval = setInterval(function () {
      
      if (timeLeft >= 0) {
        
        timerEl.textContent = timeLeft;
        
        timeLeft--;

    }

    else if(timeLeft < 0){
        clearBody()
        endQuiz();

    }

    }, 1000);
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

function endQuiz(){

    timeLeft = 0;

    
    var endPrompt = document.createElement("h2");
    endPrompt.textContent = ("You have completed the quiz, here is your final score");
    quizContent.appendChild(enterScore);

    // var displayScore = document.createElement("h4");
    // displayScore.textContent = (score = "")
    // quizContent.textContent = 

}


startButton.addEventListener("click", startQuiz);
answerBtnBox.addEventListener("click", buttonHandler)