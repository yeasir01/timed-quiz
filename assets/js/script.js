//Get elements from HTML Document & Intialize
const startWindowEl = document.getElementById('start-panel')
const gameWindowEl = document.getElementById('game-panel')
const resultEl = document.getElementById('result');
const questionEl = document.getElementById('question');
const timerEl = document.getElementById('timer');
const scoreEl = document.getElementById('score');
const answrOneEl = document.getElementById('a1');
const answrTwoEl = document.getElementById('a2');
const answrThreeEl = document.getElementById('a3');
const answrFourEl = document.getElementById('a4');
const startEl = document.getElementById('start-btn')
const highScoreEl = document.getElementById('high-btn');
const restartEl = document.getElementById('restart-btn');

var time = 60;
var intitalCount = 0;

//Button event listeners
startEl.addEventListener('click', startGame)
highScoreEl.addEventListener('click', highScores)
restartEl.addEventListener('click', restart)


function startGame() {
    startWindowEl.className += ' ' + 'hide';  //takes exsisting classes & adds [space + "hide"]
    gameWindowEl.classList.remove('hide');   //removes ["hide"] from class list
    startTimer()
}

function skipQuestion(){
    
}

function selectAnwser(){

}

function highScores(){
    
}

function restart(){
    gameWindowEl.className += ' ' + 'hide';  //takes exsisting classes & adds [space + "hide"]
    startWindowEl.classList.remove('hide');   //removes ["hide"] from class list
}

function startTimer(){
    timerEl.innerHTML = 2 + ":" + 50;   //Set intital time & format
}

function correctAnwser(){
    resultEl.innerHTML += '<i class="far fa-check-circle correct"></i>';
}

function wrongAnwser(){
    resultEl.innerHTML += '<i class="far fa-times-circle wrong"></i>';
}