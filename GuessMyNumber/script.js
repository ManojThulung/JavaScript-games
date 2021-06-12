// "use strict";
var btnCheck = document.querySelector(".check");
var messageDisplay = document.querySelector(".message");
var secretNumber = Math.floor(Math.random() * 20) + 1;
var displayScore = document.querySelector(".score");
var btnAgain = document.querySelector(".again");
var score = 20;
var gameOver = false;
var highScore = 0;

document.querySelector(".number").textContent = secretNumber;

btnCheck.addEventListener("click", function () {
  const inputNumber = Number(document.querySelector("input").value);
  inputCheck(inputNumber);
});

function inputCheck(number) {
  if (gameOver) {
    messageDisplay.textContent = "Gameover!, you loose";
  } else {
    if (!number) {
      messageDisplay.textContent = "Error! Please enter the number";
    } else if (number === secretNumber) {
      messageDisplay.textContent = "Correct guess!!";
      document.body.style.backgroundColor = "#60b347";
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    } else if (number > secretNumber) {
      messageDisplay.textContent = "The number is high";
      score--;
      if (score <= 0) {
        gameOver = true;
      }
    } else if (number < secretNumber) {
      messageDisplay.textContent = "The number is low";
      score--;
      if (score <= 0) {
        gameOver = true;
      }
    }
  }
  displayScore.textContent = score;
}

btnAgain.addEventListener("click", function () {
  again();
});

function again() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  messageDisplay.textContent = "Start guessing....";
  displayScore.textContent = "20";
  document.body.style.backgroundColor = "#222";
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector("input").value = ""; //makes the input filed empty
  score = 20;
  console.log(highScore);
}
