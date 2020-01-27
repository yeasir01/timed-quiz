//Get elements from HTML Document & intialize
const startWindowEl = document.getElementById('start-panel')
const gameWindowEl = document.getElementById('game-panel')
const loadBarEl = document.getElementById('load-bar');
const questionEl = document.getElementById('question');
const timerEl = document.getElementById('timer');
const scoreEl = document.getElementById('score');
const qCountEl = document.getElementById('q-count');
const answrOneEl = document.getElementById('a1');
const answrTwoEl = document.getElementById('a2');
const answrThreeEl = document.getElementById('a3');
const answrFourEl = document.getElementById('a4');
const startEl = document.getElementById('start-btn')
const highScoreEl = document.getElementById('high-btn');
const skipEL = document.getElementById('next-btn')

const qCount = questions.length; //Get the number of questions in the array & intialize
const timeLimit = 150; //<-----Sets the total game duration time in seconds
const loadProgress = 100 / timeLimit; //calculates how much to decrement progress bar width

let currentQuestionIndex = 0; //Index of current question
let lastQuestionIndex = questions.length - 1; //Get the ID of the last questions index
let count = timeLimit; //counter starts on timeLimit & counts down
let incorrectScore = 0; //set inital value of incorrect answer count
let correctScore = 0; //set inital value of correct answer count

qCountEl.innerHTML = qCount; //Sets the total number of questions on the document
timerEl.innerHTML = timeLimit; //Sets the inital timer before countdown begins

//Button event listeners
startEl.addEventListener('click', startQuiz) //Executes startQuiz function when start button is pressed
skipEL.addEventListener('click', wrongAnwser) //Executes wrong anwser function when skip button is pressed

function startQuiz() {
  startWindowEl.className += ' ' + 'hide'; //takes exsisting classes + adds ['_' + "hide"]
  gameWindowEl.classList.remove('hide'); //removes ["hide"] from class list
  renderQuestions()
  countDown()
}

//function below outputs elements from array to HTML document
function renderQuestions() {
  questionEl.innerHTML = questions[currentQuestionIndex].title;
  answrOneEl.innerHTML = questions[currentQuestionIndex].choices[0]
  answrTwoEl.innerHTML = questions[currentQuestionIndex].choices[1]
  answrThreeEl.innerHTML = questions[currentQuestionIndex].choices[2]
  answrFourEl.innerHTML = questions[currentQuestionIndex].choices[3]
}

function countDown() {
  var timerInterval = setInterval(function () {
    count--;
    timerEl.innerHTML = count;
    loadBarEl.style.width = count * loadProgress + "%";
    if (count === 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}

function randNextQuestion() {
  var test = Math.floor(Math.random(currentQuestionIndex) * questions.length) + 0;
  console.log(test)
}

function skipQuestion() {

}

function highScores() {

}

function correctAnwser() {
  
}

function wrongAnwser() {

}