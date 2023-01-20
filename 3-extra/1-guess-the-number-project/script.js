let randomNumber = Math.floor(Math.random() * 100 + 1);
let triesOutput = document.querySelector(".Tries-output");
let finalOutput = document.querySelector(".final-output");
let triesNum = 5;
triesOutput.innerText = `number of tries : ${triesNum}`;

function guessNumber() {
  
  let guess = Number(document.querySelector(".inputs-Values").value);
  if (guess < 1 || guess > 100 || guess === "" || !guess) {
    finalOutput.innerText = "Please enter a number between 1 and 100";

  } else if (guess === randomNumber) {
    finalOutput.textContent = `${guess} "is correct, You Win!`;
    finalOutput.style.color = "green"
    triesOutput.innerText = `It took you ${triesNum} tries`;

  } else if (guess > randomNumber) {

    if (triesNum > 1) {
      finalOutput.textContent = "Numbers is too high, try again";
      finalOutput.style.color = "orange"
      triesNum--;
      triesOutput.innerText = `number of tries : ${triesNum}`;
    } 

    else {
      triesOutput.innerText = `You Lose, the number was ${randomNumber}`;
      triesOutput.style.color = "red"
      finalOutput.innerText = "";
    }
  } 
  else if (guess < randomNumber) {
    if (triesNum > 1) {
      finalOutput.textContent = "Numbers is too low, try again";
      finalOutput.style.color = "blue"
      triesNum--;
      triesOutput.innerText = `number of tries : ${triesNum}`;
    } 
    else {
      triesOutput.innerText = `You Lose, the number was ${randomNumber}`;
      triesOutput.style.color = "red"
      finalOutput.innerText = "";
      
    }
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user
  randomNumber = Math.floor(Math.random() * 100 + 1);
  document.querySelector(".inputs-Values").value = "";
  triesNum = 5;
  finalOutput.innerHTML = "Guess a number between 1 and 100";
  triesOutput.innerHTML = `Number of Tries: ${triesNum}`;
  finalOutput.style.color = "black"
  triesOutput.style.color = "black"
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

let NewGameBtn = document.querySelector(".btnNewGame");
NewGameBtn.addEventListener("click", newGame);

document.querySelector(".btnGuess").addEventListener("click", guessNumber);

document.addEventListener("keypress", keyBoardEvents);
