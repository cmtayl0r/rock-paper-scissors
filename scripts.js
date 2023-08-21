'use strict';

/* 
---------------------------------
1. SELECTING ELEMENTS
---------------------------------
*/

const scorePEl = document.querySelector('.score__pla');
const scoreCEl = document.querySelector('.score__com');
const roundEl = document.querySelector('.round');
const updateEl = document.querySelector('.update');
const choicePEl = document.querySelector('.choice__pla');
const choiceCEl = document.querySelector('.choice__com');

/* 
---------------------------------
2. STARTING CONDITIONS
---------------------------------
*/

// empty global variables
let scores, round;
// - choices array (rock 0, paper 1, scissor 2)
const choices = ['Rock', 'Paper', 'Scissors'];

const init = function () {
    // Function to use on reset (try again) also
    // scores array (player 0, Computer 1)
    scores = [0, 0];
    // round #
    round = 1;

    // Reset scores
    scorePEl.textContent = `🧑 has ${scores[0]}`;
    scoreCEl.textContent = `🤖 has ${scores[0]}`;
    // Set round # to round variable
    roundEl.textContent = round;
    // Set update to generic start statement
    updateEl.textContent = 'Make a choice!';
    // Set display choices to ?
    choicePEl.textContent = '?';
    choiceCEl.textContent = '?';
};
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
console.log(getComputerChoice());

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

const playerTemp = 'Rock';

/* 
---------------------------------
4. PLAY ROUND
---------------------------------
*/
const playRound = function (pChoice, cChoice) {
    // rock > scissors, scissors > paper, paper > rock
    if (
        (pChoice === choices[0] && cChoice === choices[2]) ||
        (pChoice === choices[2] && cChoice === [1]) ||
        (pChoice === choices[1] && cChoice === choices[0])
    ) {
        console.log(`🧑 Player wins with ${pChoice} vs ${cChoice}`);
        scores[0]++;
    } else if (
        (cChoice === choices[0] && pChoice === choices[2]) ||
        (cChoice === choices[2] && pChoice === [1]) ||
        (cChoice === choices[1] && pChoice === choices[0])
    ) {
        console.log(`🤖 Computer wins with ${cChoice} vs ${pChoice}`);
        scores[1]++;
    } else {
        console.log('Its a draw 👍');
    }
};

playRound(playerTemp, getComputerChoice());
playRound(playerTemp, getComputerChoice());
playRound(playerTemp, getComputerChoice());
playRound(playerTemp, getComputerChoice());
playRound(playerTemp, getComputerChoice());
console.log(scores);

// - Input parameters for player and computer choices
// - "Rock' paper, Scissors" countdown - https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/
// - Evaluate parameters
// - display player choice
// - display computer choice

// 6. game [Function]
// - Execute playRound function
// - do while loop (round < 5)
// - when round 5 over, declare winner
