"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let scoreCard = document.querySelector(".score");
let number = document.querySelector(".number");
let body = document.querySelector("body");
let highScore = 0;
let highScoreCard = document.querySelector(".highscore");

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (score > 1) {
    //When there is no input
    if (!guess) {
      displayMessage("⛔️ No number!");
      //When player wins
    } else if (guess === secretNumber) {
      displayMessage("🎉 Correct Number!");
      body.style.backgroundColor = "#60b347";
      number.textContent = secretNumber;
      number.style.width = "30rem";
      if (score > highScore) {
        highScore = score;
        highScoreCard.textContent = highScore;
      }
      //When guess wrong
    } else if (guess !== secretNumber) {
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      scoreCard.textContent = score;
    }
  } else {
    displayMessage("💥 You lost the game!");
    score = 0;
    scoreCard.textContent = score;
  }
});
//Restart Game
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  scoreCard.textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start Guessing...");
  body.style.backgroundColor = "#222";
  number.textContent = "?";
  number.style.width = "15rem";
  document.querySelector(".guess").value = "";
});
