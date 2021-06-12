"use strict";

// Selecting elements
var player0 = document.querySelector(".player--0");
var player1 = document.querySelector(".player--1");
var scoreP0 = document.getElementById("score--0");
var scoreP1 = document.getElementById("score--1");
var dice = document.querySelector(".dice");
var btnNew = document.querySelector(".btn--new");
var btnRoll = document.querySelector(".btn--roll");
var btnHold = document.querySelector(".btn--hold");
var currentP0 = document.getElementById("current--0");
var currentP1 = document.getElementById("current--1");

// Starting conditions
var curScore, scores, active, winner;

function init() {
  scoreP0.textContent = 0;
  scoreP1.textContent = 0;
  dice.classList.add("hidden");
  curScore = 0;
  scores = [0, 0];
  active = 0;
  winner = false;
}

// Function to switch the player
function nextPlayer() {
  document.getElementById(`current--${active}`).textContent = 0;
  active = active === 0 ? 1 : 0; // Conditional ternary operator'
  curScore = 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
}

init();

// Dice rolling functionality
btnRoll.addEventListener("click", function () {
  console.log(winner);
  if (!winner) {
    // Get random dice number
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    console.log(diceNumber);

    // Display the dice number
    dice.src = `dice-${diceNumber}.png`;
    dice.classList.remove("hidden");

    // check for the dice number 1
    if (diceNumber !== 1) {
      curScore += diceNumber;
      document.getElementById(`current--${active}`).textContent = curScore;
    } else {
      //next player
      nextPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (!winner) {
    // Add and display the player score
    scores[active] += curScore;
    document.getElementById(`score--${active}`).textContent = scores[active];

    // Check if player score is greater or equal to 100 or not
    if (scores[active] >= 100) {
      document.querySelector(".player--active").classList.add("player--winner");
      dice.classList.add("hidden");
      winner = true;
    }

    //next player
    nextPlayer();
  }
});

btnNew.addEventListener("click", function () {
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
  init();
});
