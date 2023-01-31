let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);
let outputTries = document.querySelector(".Tries-output");
let output = document.querySelector(".final-output");
let count = 0;

function guessNumber() {
  let guess = document.querySelector(".inputs-Values").value;
  if (count > 3 && guess != randomNumber) {
    outputTries.innerHTML = "";
    output.innerHTML = `You Lose, the number was ${randomNumber}.`;
  } else {
    if (guess == 0 || guess === "" || guess > 100 || guess < 0) {
      output.innerHTML = "Please enter a number between 1 and 100";
      countTries();
    } else if (guess > randomNumber) {
      output.innerHTML = "Number is too high, try again";
      countTries();
    } else if (guess < randomNumber) {
      output.innerHTML = "Number is too low, try again";
      countTries();
    } else if (guess == randomNumber) {
      count++;
      outputTries.innerHTML = "";
      output.innerHTML =
        randomNumber +
        `! Guess is correct. You win! It took you ${count} tries!`;
    }
  }

  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
}

function countTries() {
  count++;
  outputTries.innerHTML = `You tried ${count} times.`;
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Reset randomNumber
  randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber);
  //Reset users input field
  var getValue = document.querySelector(".inputs-Values");
  if (getValue.value != "") {
    getValue.value = "";
  }
  //Reset tries, and triesTaken by the user
  outputTries.innerHTML = "";
  output.innerHTML = "Guess a number between 1 and 100";
  count = 0;
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
document.querySelector(".btnNewGame").addEventListener("click", newGame);
