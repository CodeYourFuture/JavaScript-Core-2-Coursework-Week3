let randomNumber = Math.floor(Math.random() * 100 + 1);

function guessNumber() {
  let guess = document.querySelector(".inputs-Values").value;
  let output = document.querySelector(".final-output");
  let tries = document.querySelector(".Tries-output");
  if (!guess || guess > 100 || guess < 1) {
    tries.innerText = "Please enter a number between 1 and 100";
    output.innerText = "";
  }
  else if (guess > randomNumber) {
    output.innerText = "Number is too high, try again";
    tries.innerText = "";
  }
  else if (guess < randomNumber) {
    output.innerText = "Number is too low, try again";
    tries.innerText = "";
  }
  else {
    output.innerText = `${randomNumber} Guess is correct. You win!`;
    tries.innerText = "";
  }
}

function newGame() {
  window.location.reload();
}

function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
document.querySelector(".btnNewGame").addEventListener("click", newGame)
