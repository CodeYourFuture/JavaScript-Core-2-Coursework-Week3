let randomNumber = Math.floor(Math.random() * 100 + 1);
let messageOutput = document.querySelector(".final-output");
document.querySelector(".Tries-output").textContent ="Number Of Tries : 7";
let tryCount =7 ;

function guessNumber() {
  tryCount--;
  document.querySelector(".Tries-output").textContent = `Number Of Tries : ${tryCount}`;
  if(tryCount<=0){
    messageOutput.textContent = `You Lose, the number was ${randomNumber}` ;
    document.querySelector(".Tries-output").textContent=" ";
    exit;
  }
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if(Number(guess)<=0 || Number(guess)>100 ){
      messageOutput.textContent = "Please enter a number between 1 and 100";
  }
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  if(Number(guess)>randomNumber){
    messageOutput.textContent = "Number is too high, try again";
  }
  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  if(Number(guess)<randomNumber){
    messageOutput.textContent = "Number is too low, try again";
  }
  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  if(Number(guess)===randomNumber){
    messageOutput.textContent = "Guess is correct. You win!";
  }
  
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  randomNumber = Math.floor(Math.random() * 100 + 1);
  // //Reset users input field
  document.querySelector(".inputs-Values").value= " ";
  // //Reset tries, and triesTaken by the user
  tryCount =7;
  document.querySelector(".Tries-output").textContent = `Number Of Tries : ${tryCount}`;
  document.querySelector(".final-output").textContent ="Get a number between 1 and 100";


}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.querySelector(".btnNewGame").addEventListener("click",newGame);
document.addEventListener("keypress", keyBoardEvents);
