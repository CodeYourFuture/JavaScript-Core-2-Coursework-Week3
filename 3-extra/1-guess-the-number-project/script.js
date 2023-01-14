let randomNumber = Math.floor(Math.random() * 100 + 1);
let triesOutput = document.querySelector(".Tries-output");
let finalOutput = document.querySelector(".final-output");
let triesNum = 5;
triesOutput.innerText = `number of tries : ${triesNum}`;

function guessNumber() {
  //Collect input from the user

  let guess = Number(document.querySelector(".inputs-Values").value);
  if (guess < 1 || guess > 100 || guess === "" || !guess) {
    finalOutput.innerText = "Please enter a number between 1 and 100";
  } else if (guess === randomNumber) {
    finalOutput.textContent = `${guess} "is correct, You Win!`;
    triesOutput.innerText = `It took you ${triesNum} tries`;
  } else if (guess > randomNumber) {
    if (triesNum > 1) {
      finalOutput.textContent = "Numbers is too high, try again";
      triesNum--;
      triesOutput.innerText = `number of tries : ${triesNum}`;
    } else {
      triesOutput.innerText = `You Lose, the number was ${randomNumber}`;
      finalOutput.innerText = "";
    }
  } else if (guess < randomNumber) {
    if (triesNum > 1) {
      finalOutput.textContent = "Numbers is too low, try again";
      triesNum--;
      triesOutput.innerText = `number of tries : ${triesNum}`;
    } else {
      triesOutput.innerText = `You Lose, the number was ${randomNumber}`;
      finalOutput.innerText = "";
    }
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button

let NewGameBtn = document.querySelector(".btnNewGame");
NewGameBtn.addEventListener("click", newGame);

function newGame() {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  document.querySelector(".inputs-Values").value = "";
  triesNum = 5;
  finalOutput.innerHTML = "Guess a number between 1 and 100";
  triesOutput.innerHTML = `Number of Tries: ${triesNum}`;
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
