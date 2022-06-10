let randomNumber = Math.floor(Math.random() * 100 + 1);

//Collect input from the user
let guess = document.querySelector(".inputs-Values").value;
let output = document.querySelector(".final-output");
let triesOutput = document.querySelector(".tries-output");

let tries = 7;
let triesTaken = 0;

function guessNumber() {
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (guess < 1 || guess == " " || guess > 100) {
    triesOutput.innerHTML = `Number of tries: ${tries}`;
    output.innerHTML = "Please enter a number between 1 and 100";
  } else if (guess > randomNumber) {
    //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
    triesOutput.innerHTML = `Number of tries: ${tries}`;
    output.innerHTML = "Number is too high";
  } else if (guess < randomNumber) {
    //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
    triesOutput.innerHTML = `Number of tries: ${tries}`;
    output.innerHTML = "Number is too low";
  } else if (guess == randomNumber) {
    //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
    triesOutput.innerHTML = `It took you ${triesTaken} tries`;
    output.innerHTML = "Guess is correct. You win!";
  }
  tries -= 1;
  triesTaken += 1;
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button

function newGame() {
  //Your code here
  //Reset randomNumber
  randomNumber = Math.floor(Math.random() * 100 + 1);

  //Reset users input field
  document.querySelector(".inputs-Values").value = "";

  //Reset tries, and triesTaken by the user
  tries = 7;
  triesTaken = 0;
  triesOutput.innerHTML = `Number of tries: ${tries}`;
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnNewGame").addEventListener("click", newGame);

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
