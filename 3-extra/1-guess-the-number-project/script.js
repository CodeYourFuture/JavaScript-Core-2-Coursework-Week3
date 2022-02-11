// Compare with https://waba-tron.github.io/Guess-The-Number-Game/Hi-lo.html 

const triesOutputSelector  = document.querySelector(".Tries-output");
const buttonGuessSelector  = document.querySelector(".btnGuess");
const finalOutputSelector  = document.querySelector(".final-output");
const inputsValuesSelector = document.querySelector(".inputs-Values")
const maxNumberOfTries = 7

let randomNumber = Math.floor(Math.random() * 100 + 1);
let userTriesTaken;
let guessButtonEnabled = false;

function guessNumber() {
  let message = finalOutputSelector;
 

  // Collect input from the user
  let guess = inputsValuesSelector.value;
 
 
  // If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero 
  //  Print "Please enter a number between 1 and 100"
  let usersGuess = Number(guess);
  if (usersGuess === randomNumber) {
      // !!! USER AS GUESSED THE NUMBER !!!                  
      // If the user has guessed the random number correctly print out the randomNumber with a message 
      // "Guess is correct. You win!"
      userTriesTaken = maxNumberOfTries - userTriesTaken + 1;
      let successMessage = "It took you " + userTriesTaken + " "
      successMessage += (userTriesTaken === 1) ? "try" : "tries"

      triesOutputSelector.innerText = successMessage;
      message.innerText = "Guess is correct. You win!"
  
      buttonGuessSelector.removeEventListener("click", guessNumber); // Disable Guess Button
      return
  }

  if (Number.isNaN(usersGuess) || usersGuess < 1 || usersGuess > 100)
  {
                  message.innerText = "Please enter a number between 1 and 100"
  }

  else
  // If the users guess is higher than the random number print Number is too high, try again 
  if (usersGuess > randomNumber)
  {
                  message.innerText = "Number is too high, try again"
                  --userTriesTaken; // subtract one from number of user's attempts
  }

  else
  // If the users guess is lower than the random number print Number is too low, try again  
  {
                  message.innerText = "Number is too low, try again"
                  --userTriesTaken; // subtract one from number of user's attempts
  }
  
  if (userTriesTaken !== 0) {
           //alert(triesOutputSelector)
           triesOutputSelector.innerText = "Number of Tries: " + userTriesTaken;
           return
  }

  // USER HAS LOST!
  triesOutputSelector.innerText = "You lose, the number was " + randomNumber;
  message.innerText = "";  
  buttonGuessSelector.removeEventListener("click", guessNumber); // Disable Guess Button
  guessButtonEnabled = false;
  return;
}


// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  // Reset randomNumber
   randomNumber = Math.floor(Math.random() * 100 + 1); //  between 1-100 inclusive
  // Reset users input field
   inputsValuesSelector.value = "" //  reset the input field to blank 

  // Reset tries, and triesTaken by the user
   triesOutputSelector.innerText = "Number of Tries: " + maxNumberOfTries;
   finalOutputSelector.innerText = "Guess a number between 1 and 100";
   userTriesTaken = maxNumberOfTries;
   if (!guessButtonEnabled)
             buttonGuessSelector.addEventListener("click", guessNumber);
}

/*
According to MDN, the .keyCode property is deprecated:

https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
// keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}
*/

function keyBoardEvents(event) {
  if (event.keyCode === 13) {
        guessNumber();
  }
}


function setup() {   
   document.querySelector(".btnNewGame").addEventListener("click", newGame);
   document.addEventListener("keypress", keyBoardEvents);
   triesOutputSelector.innerText = "Number of Tries: " + maxNumberOfTries;
   finalOutputSelector.innerText = "Guess a number between 1 and 100";
   buttonGuessSelector.addEventListener("click", guessNumber);
   userTriesTaken = maxNumberOfTries;
   guessButtonEnabled = true;
}


setup()