let randomNumber = Math.floor(Math.random() * 100 + 1);
let display = document.querySelector(".final-output");
let tries = document.querySelector(".Tries-output");
let countTries = 7;

  //Collect input from the user
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"

  function guessNumber() {

    let guess = document.querySelector(".inputs-Values").value;

    if (guess > randomNumber && guess <= 100) {
      display.innerText = "Number is too high, try again";
    } else if (guess < randomNumber && guess > 0) {
      display.innerText = "Number is too low, try again";
    } else if (guess === randomNumber) {
      display.innerText = "Guess is correct. You win!";
    } else {
      display.innerText = "Please enter a number between 1 and 100";
    }

    if (countTries > 1) {
      countTries--;
      tries.innerHTML = `Number of Tries: ${countTries}`;
    } else {
      tries.innerHTML = `You Lose, the number was ${randomNumber}`;
      message.innerHTML = "";
    }

  }

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button


function newGame() {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  document.querySelector(".inputs-Values").value = "";
  display.innerHTML = "Guess a number between 1 and 100";
  countTries = 7;
  tries.innerHTML = `Number of Tries: ${countTries}`;
  console.log(randomNumber);

  //Your code here
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user
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
