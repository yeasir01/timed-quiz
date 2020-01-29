//Get elements from HTML Document & intialize
const startWindowEl = document.getElementById('start-panel');
const gameWindowEl = document.getElementById('game-panel');
const scoreHeadEl = document.getElementById('score-head');
const scoreMessageEl = document.getElementById('score-message');
const scorePanelEl = document.getElementById('score-panel');
const scoreBordEl = document.getElementById('score-board');
const correctOutputEl = document.getElementById('correct-output');
const wrongOutputEl = document.getElementById('wrong-output');
const scoreOutputEl = document.getElementById('score-output');
const imageContainerEL = document.getElementById('img-container')
const loadBarEl = document.getElementById('load-bar');
const questionEl = document.getElementById('question');
const timerEl = document.getElementById('timer');
const scoreEl = document.getElementById('score');
const qCountEl = document.getElementById('q-count');
const answrOneEl = document.getElementById('a');
const answrTwoEl = document.getElementById('b');
const answrThreeEl = document.getElementById('c');
const answrFourEl = document.getElementById('d');
const startEl = document.getElementById('start-btn');
const highScoreEl = document.getElementById('high-btn');
const skipEL = document.getElementById('next-btn');

var timeLimit = 100; //<-----Sets the total game duration time in seconds
var qCount = questions.length; //Get the number of questions in the array & intialize
var loadProgress = 100 / timeLimit; //calculates how much to decrement progress bar width

var currentQuestionIndex = 0; //Index of current question
var lastQuestionIndex = questions.length - 1; //Gets the ID of the last questions index in array
var count = timeLimit; //sets count to intial time from timeLimit
var incorrectScore = 0; //set inital value of incorrect answer count
var correctScore = 0; //set inital value of correct answer count
var penalty = 15 //time penalty for wrong awnser

qCountEl.textContent = qCount; //Sets the total number of questions to the document
timerEl.textContent = timeLimit; //Sets the inital timer value (before countdown) to the document

startEl.addEventListener('click', startQuiz) //Executes startQuiz function when start button is pressed
skipEL.addEventListener('click', skipQ) //Executes wrong anwser function when skip button is pressed

function startQuiz() {
  startWindowEl.className += ' ' + 'hide'; //takes exsisting classes + adds [space + "hide"]
  gameWindowEl.classList.remove('hide'); //removes ["hide"] from class game-window element
  countDown(); // executes countDown function
  renderQuestion(); // executes renderQuestion function
}

function countDown() {
  var timerInterval = setInterval(function () {
    count--;
    timerEl.textContent = count;
    loadBarEl.style.width = count * loadProgress + "%";
    if (count <= 0) {
      clearInterval(timerInterval);
      timerEl.textContent = 0;
      loadBarEl.style.width = "0%";
      outOfTime()
    } else if (currentQuestionIndex === questions.length) {
      scoreMessage()
      clearInterval(timerInterval);
    }

  }, 1000);
}

function renderQuestion() {
  questionEl.textContent = questions[currentQuestionIndex].title; //function outputs questions from array to HTML document
  answrOneEl.textContent = questions[currentQuestionIndex].choices[0]; //function outputs first answer from array to HTML document
  answrTwoEl.textContent = questions[currentQuestionIndex].choices[1]; //function outputs second answer from array to HTML document
  answrThreeEl.textContent = questions[currentQuestionIndex].choices[2]; //function outputs third answer from array to HTML document
  answrFourEl.textContent = questions[currentQuestionIndex].choices[3]; //function outputs forth answer from array to HTML document
}

function checkAnswer(selection) {
  if (selection === questions[currentQuestionIndex].answer) {
    correctScore++;
    scoreEl.textContent = correctScore;
    currentQuestionIndex++;
    renderQuestion();
  } else {
    incorrectScore++;
    currentQuestionIndex++;
    count -= penalty;
    renderQuestion();
  }

}

function skipQ() {
  if (currentQuestionIndex <= lastQuestionIndex) {
    incorrectScore++;
    count -= penalty;
    currentQuestionIndex++;
    renderQuestion();
  }
}

function outOfTime() {
  gameWindowEl.className += ' ' + 'hide'; //takes exsisting classes + adds [space + "hide"]
  scorePanelEl.classList.remove('hide'); //removes ["hide"] from class scorePanelEL element
  imageContainerEL.innerHTML = '<img src="./assets/images/sad-dog.png" alt="a sad dog" class="dog-img">'; //inserts sad dog image
  scoreHeadEl.textContent = 'Sorry out of time'; //Heading message display
  scoreMessageEl.textContent = 'Better luck next time...'; //message display
}

function scoreMessage() {
  gameWindowEl.className += ' ' + 'hide'; //takes exsisting classes + adds [space + "hide"]
  scorePanelEl.classList.remove('hide'); //removes ["hide"] from class scorePanelEL element
  scoreBordEl.classList.remove('hide');
  imageContainerEL.innerHTML = '<img src="./assets/images/happy-dog.png" alt="a happy dog" class="dog-img">'; //inserts happy dog image
  scoreHeadEl.textContent = 'Congratulation!'; //Heading message display
  scoreMessageEl.textContent = 'You\'ve made it to the end'; //message display
  correctOutputEl.textContent = correctScore;
  wrongOutputEl.textContent = incorrectScore;
  var finalScore = (qCount * correctScore) * count;
  scoreOutputEl.textContent = finalScore;
}