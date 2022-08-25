'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = "🎉 Correct number!";

document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value);
*/

const secretNumFormula = Math.floor(Math.random() * 20) + 1;
let secretNumber = secretNumFormula;

const numberEl = document.querySelector('.number');
numberEl.value = secretNumber;
const highscoreEl = document.querySelector('.highscore');
const guessEl = document.querySelector('.guess');

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const displayNumber = function (num) {
    document.querySelector('.number').textContent = num;
}

const displayScore = function (num) {
    document.querySelector('.score').textContent = num;
}

const changeBackgroundColor = function (color) {
    document.querySelector('body').style.backgroundColor = color;
}

const changeNumWidth = function (width) {
    document.querySelector('.number').style.width = width;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(guessEl.value);
    console.log(guess, typeof(guess));

    if (!guess) {
        displayMessage('⛔ No number!');
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct number!');
        displayNumber(secretNumber);
        changeBackgroundColor('#60B347');
        changeNumWidth('30rem');

        if (score > highScore) {
            highScore = score;
            highscoreEl.textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too Low!');
        if (score > 1) {
            score--;
            displayScore(score);
        } else {
            displayMessage('💩 You lost!');
            displayScore(0);
        }   
    } 
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = secretNumFormula;

    displayMessage('Start guessing...');
    displayNumber('?');
    displayScore(score);
    document.querySelector('.guess').value = '';

    changeBackgroundColor('#222');
    changeNumWidth('15rem');

});