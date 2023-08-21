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
    round = 0;
};

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
// - getPlayerChoice [Function] t eliminate repeating code on 3 buttons
// - connect choice selection to array value (choices)
// - trigger game function [Function]
// - return user choice







// PLAYER CHOICE
const getPlayerChoice = function () {};

// 5. playRound [Function]
// - Input parameters for player and computer choices
// - "Rock' paper, Scissors" countdown - https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/
// - Evaluate parameters
// - display player choice
// - display computer choice

// 6. game [Function]
// - Execute playRound function
// - do while loop (round < 5)
// - when round 5 over, declare winner
