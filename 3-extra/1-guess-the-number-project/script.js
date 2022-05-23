// let triesOutputSelector = document.querySelector(".Tries-output");
// let finalOutputElement = document.querySelector(".final-output");
// let buttonGuessSelector = document.querySelector(".btnGuess");



// let randomNumber = Math.floor(Math.random() * 100 + 1);
function generateRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

let randomNumber = generateRandomNumber();


function guessNumber() {
  //Collect input from the user
  const guessNumber = document.querySelector(".inputs-Values").value; //returning string
  console.log(typeof(guessNumber));
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (guessNumber == 0 || guessNumber == "" ||guessNumber > 100 || guessNumber < 0){
    const outputSelector = document.querySelector(".Tries-output");
    outputSelector.innerText = "Please enter a number between 1 and 100";
  }else if (guessNumber > randomNumber) {
    //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
    const finalOutputSelector = document.querySelector(".final-out");
    finalOutputElement.innerText = "Number is too high";
  }else if (guessNumber < randomNumber) {
    //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
    const finalOutputSelector = document.querySelector(".final-out");
    finalOutputElement.innerText = "Number is too low";
  }else if (guessNumber === randomNumber) {
    //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
    const finalOutputSelector = document.querySelector(".final-out");
    finalOutputElement.innerText = "Guess is correct";
  }

}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
// function reset() {
//   document.querySelector(".input-Values").reset()
// }


function newGame() {
  //Your code here
  //Reset randomNumber..done on line 12
  let randomNumber = generateRandomNumber();
  //Reset users input field
  const inputValueSelector = document.querySelector(".inputs-Values").value;
  inputValueSelector = "";
  // let resetButton = reset();
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

