//Get elements from HTML Document & intialize
const startWindowEl = document.getElementById('start-panel');
const gameWindowEl = document.getElementById('game-panel');
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

var timeLimit = 150; //<-----Sets the total game duration time in seconds
var qCount = questions.length; //Get the number of questions in the array & intialize
var loadProgress = 100 / timeLimit; //calculates how much to decrement progress bar width

var currentQuestionIndex = 0; //Index of current question
var lastQuestionIndex = questions.length - 1; //Gets the ID of the last questions index in array
var count = timeLimit; //sets count - intial time from timeLimit
var incorrectScore = 0; //set inital value of incorrect answer count
var correctScore = 0; //set inital value of correct answer count

qCountEl.textContent = qCount; //Sets the total number of questions to the document
timerEl.textContent = timeLimit; //Sets the inital timer value (before countdown) to the document

startEl.addEventListener('click', startQuiz) //Executes startQuiz function when start button is pressed
skipEL.addEventListener('click', skipQ) //Executes wrong anwser function when skip button is pressed

function startQuiz() {
  startWindowEl.className += ' ' + 'hide'; //takes exsisting classes + adds ['_' + "hide"]
  gameWindowEl.classList.remove('hide'); //removes ["hide"] from class list
  countDown();
  renderQuestion();
}

function countDown() {
  var timerInterval = setInterval(function () {
    count--;
    timerEl.textContent = count;
    loadBarEl.style.width = count * loadProgress + "%";
    if (count === 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}

function renderQuestion() { //function below outputs questions & anwswers from array to HTML document
  questionEl.textContent = questions[currentQuestionIndex].title;
  answrOneEl.textContent = questions[currentQuestionIndex].choices[0];
  answrTwoEl.textContent = questions[currentQuestionIndex].choices[1];
  answrThreeEl.textContent = questions[currentQuestionIndex].choices[2];
  answrFourEl.textContent = questions[currentQuestionIndex].choices[3];
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
    renderQuestion();
  }

}

function skipQ() {
  if (currentQuestionIndex < lastQuestionIndex) {
    incorrectScore++;
    currentQuestionIndex++;
    renderQuestion();
  } else {
    alert('thats all folks')
  }
}