let randomNumber = Math.floor(Math.random() * 100 + 1);

let tries = 7;
let triesTaken = 0;
let playing = true;
let gameOver = false;
document.querySelector(".Tries-output").innerText = "Number of Tries: " + 7

function guessNumber()
{
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;
  

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  if(playing)
  {
    let guess = document.querySelector('.inputs-Values').value;

    if(guess > 0 && guess <= 100 && tries > 0)
    {
      if(guess == randomNumber)
      {
        tries--;
        triesTaken++;
        document.querySelector('.final-output').textContent = guess + "Guess is correct. You win!";
        numberOfTries = document.querySelector(".Tries-output").textContent = "It took you " + TriesTaken + " tries";
        playing = gameOver;
      }

      else if(guess > randomNumber)
      {
        tries--;
        triesTaken++;
        document.querySelector(".final-output").textContent = "Number is too high, try again";
        numberOfTries = document.querySelector(".Tries-output").textContent = "Number of Tries: " + tries;
      }

      else
      {
        tries--;
        triesTaken++;
        document.querySelector(".final-output").textContent = "Number is too low, try again";
        numberOfTries = document.querySelector(".Tries-output").textContent = "Number of Tries: " + tries;
      }
    }
  }

  else if(tries <= 0)
  {
    document.querySelector(".Tries-output").textContent = "You Lose, the number was " + randomNumber;
    document.querySelector(".final-output").textContent = "";
    playing = gameOver;
  }

  else
  {
    document.querySelector(".final-output").innerText = "Please enter a number between 1 and 100";
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame()
{
  //Your code here
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user
  tries = 7;
  triesTaken = 0;

  randomNumber = Math.floor(Math.random() * 100 + 1);
  guess = document.querySelector(".inputs-Values").value = "";
	numberOfTries = document.querySelector(".Tries-output").textContent = "Number of Tries: " + tries;
	document.querySelector(".final-output").textContent = "Get a number between 1 and 100";
  playing = true;
}

//keyboard exception
function keyBoardEvents(e)
{
  if (e.keyCode === 13)
  {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
