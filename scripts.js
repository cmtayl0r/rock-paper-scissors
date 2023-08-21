'use strict';

/* 
---------------------------------
1. SELECTING ELEMENTS
---------------------------------
*/

// Display values
const scorePEl = document.querySelector('.score__pla');
const scoreCEl = document.querySelector('.score__com');
const updateEl = document.querySelector('.update');
const resultEl = document.querySelector('.result');
const choicePEl = document.querySelector('.choice__pla');
const choiceCEl = document.querySelector('.choice__com');
// Buttons
const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');
const btnReset = document.querySelector('.btn__reset');

/* 
---------------------------------
2. STARTING CONDITIONS
---------------------------------
*/

// empty global variables
let scores, playerChoice;
// - choices array (rock 0, paper 1, scissor 2)
const choices = ['🪨', '📄', '✂️'];

const init = function () {
    // function to set starting condition values, AND on new game
    // scores array (player 0, Computer 1)
    scores = [0, 0];

    scorePEl.textContent = scores[0];
    scoreCEl.textContent = scores[1];
    // Set update to generic start statement
    updateEl.textContent = '🧑 You vs 🤖 The Computer';
    resultEl.textContent = 'First to 5 points wins';
    // Set display choices to ?
    choicePEl.textContent = '?';
    choiceCEl.textContent = '?';
    // Button states
    btnReset.classList.add('hidden');
    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;
};

// Execute reset function on start
init();

/* 
---------------------------------
3. COMPUTER CHOICE
---------------------------------
*/

const getComputerChoice = function () {
    // generate random number between 1 and 3
    let comNum = Math.trunc(Math.random() * 3);
    // connect number to array value (choices)
    let comChoice = choices[comNum];
    // return array value
    return comChoice;
};

/* 
---------------------------------
4. PLAYER CHOICE
---------------------------------
*/

// - add event listeners to the 3 button DOM choices
// - getPlayerChoice [Function] to eliminate repeating code on 3 buttons
// - connect choice selection to array value (choices)
// - trigger game function [Function]
// - return user choice

// PLAYER CHOICE
// const getPlayerChoice = function () {};

/* 
---------------------------------
4. PLAY ROUND
---------------------------------
*/
// - "Rock' paper, Scissors" countdown - https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/

const playRound = function (pChoice, cChoice) {
    // Show both selections
    choicePEl.textContent = pChoice;
    choiceCEl.textContent = cChoice;

    // Logic to determine winner of round
    // rock > scissors, scissors > paper, paper > rock
    if (
        (pChoice === choices[0] && cChoice === choices[2]) ||
        (pChoice === choices[1] && cChoice === choices[0]) ||
        (pChoice === choices[2] && cChoice === choices[1])
    ) {
        updateEl.textContent = '🧑 Wins this round!';
        resultEl.textContent = `${pChoice} beats ${cChoice}`;
        scores[0]++;
        scorePEl.textContent = scores[0];
    } else if (
        (cChoice === choices[0] && pChoice === choices[2]) ||
        (cChoice === choices[1] && pChoice === choices[0]) ||
        (cChoice === choices[2] && pChoice === choices[1])
    ) {
        updateEl.textContent = '🤖 Wins this round!';
        resultEl.textContent = `${cChoice} beats ${pChoice}`;
        scores[1]++;
        scoreCEl.textContent = scores[1];
    } else {
        updateEl.textContent = '✋🏽 This round is a draw';
        resultEl.textContent = `${cChoice} matches ${pChoice}`;
    }
    // Track if a score hits 5
    if (scores[0] === 5) {
        winner('Player');
    } else if (scores[1] === 5) {
        winner('Computer');
    }
};

/* 
---------------------------------
4. WINNER FUNCTION
---------------------------------
*/
const winner = function (win) {
    btnReset.classList.remove('hidden');
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;

    if (win === 'Player') {
        console.log('BOOOOOOOO PLAY');
    } else if (win === 'Computer') {
        console.log('BAAAAAAAA COMP');
    }
};

/* 
---------------------------------
5. PLAYER BUTTONS
---------------------------------
*/

btnRock.addEventListener('click', function () {
    playerChoice = choices[0];
    playRound(playerChoice, getComputerChoice());
});
btnPaper.addEventListener('click', function () {
    playerChoice = choices[1];
    playRound(playerChoice, getComputerChoice());
});
btnScissors.addEventListener('click', function () {
    playerChoice = choices[2];
    playRound(playerChoice, getComputerChoice());
});
// Reset game function
btnReset.addEventListener('click', init);

console.log(scores);
