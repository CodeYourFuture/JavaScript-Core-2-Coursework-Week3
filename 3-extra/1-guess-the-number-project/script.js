let randomNumber = Math.floor(Math.random() * 100 + 1);

// Access to div to show message
const output = document.querySelector(".final-output");
// Accesss to div to show the number of try
const triesValue = document.querySelector(".Tries-output");
// Access to guess button
let guess = document.querySelector(".inputs-Values");
// Default try for game
let counter = 6;

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (guess >= 100 || guess >= 1 || guess === "") {
    output.textContent = "Please enter a number between 1 and 100";
  } else if (guess > randomNumber) {
    output.textContent = "Number is too high, try again";
    // decrease the number of try
    counter -= 1;
  } else if (guess < randomNumber) {
    output.textContent = "Number is too low, try again";
    // decrease the number of try
    counter -= 1;
  } else if (guess == randomNumber) {
    output.textContent = "Guess is correct. You win!";
  }
  // Show the remain number of guess
  triesValue.textContent = `Number of Tries: ${counter}`;
  // if the number of try is finished
  if (counter == 0) {
    // show message
    triesValue.textContent = `You Lose, the number was ${randomNumber}`;
    // reset value of output
    output.textContent = "";
  }
}
//If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

//If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)

//If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  // create new random number
  // create new random number
  randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber);
  // Reset guess value
  guess.value = "";
  // reset the number of try
  counter = 0;
  // reset content of try values
  triesValue.textContent = "";
  output.textContent = "Please enter a number between 1 and 100";
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}
//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
