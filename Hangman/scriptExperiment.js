"use strict";

let wordBank = {
  0: ["succession", "game of thrones", "rupauls drag race", "family guy"],
  1: ["wyoming", "yellowstone", "the smoky mountains", "new york city"],
  2: ["sushi", "coffee", "macaroons", "hummus"],
  3: ["camping", "video games", "coding", "cooking"],
};

const categoriesArray = ["tvShows", "places", "foodAndDrinks", "hobbies"];
function getRandomKeyAndValue(max) {
  return Math.floor(Math.random() * max);
}
let randomKey = getRandomKeyAndValue(4);
let randomValue = getRandomKeyAndValue(4);

//THIS IS THE WORD THE USER IS TRYING TO GUESS
/* I am thinking of having a bank of words that let people know more 
about me and my interests, or just do like an animal list and go from there */
let Hangmanstring = wordBank[randomKey][randomValue];
const array = [...Hangmanstring]; //this breaks the string up and even dedicates an array index to the space, should be able to count spaces

if (randomKey === 0) {
  randomKey = "tvShows";
} else if (randomKey === 1) {
  randomKey = "places";
} else if (randomKey === 2) {
  randomKey = "foodAndDrinks";
} else if (randomKey === 3) {
  randomKey = "hobbies";
}
document.getElementById("hint").innerHTML = `Hint: favorite ${randomKey}`;
//CREATING THE ARRAY VISIBLE TO THE USER BASED ON WHAT THE SECRET WORD IS
const visibleArray = [..."?".repeat(array.length)]; //displays a string with # as the filler
// console.log(visibleArray.length); //will show the length of the array the player is trying to guess
// console.log(visibleArray.includes("#")); //verifying it is blanked off for the programmer

//boolean checking if we still have fillers in the string - code will run if true
let checkForBlanks = visibleArray.includes("?");
let limbCount = 0; //initializing variables - how many wrong letters the player has guessed
let checkForCorrect = 0; //initializing variables - used to edit wrong letters list and add to the limb count
let guessedLetters = []; //initializing variable

let newVisibleList = [];

function guessingLetters() {
  let guessAttempt = document.getElementById("letter").value;
  guessedLetters.push(guessAttempt); //pushes every guess into an array for code to reference in the event listener that is not refreshed
  return false;
}

let addedBlanks = document.getElementById("visibleCells");
for (let i = 0; i < visibleArray.length; i++) {
  let checkForSpaces = array[i].indexOf(" "); // returns 0 if true, -1 if false
  // console.log(checkForSpaces);
  //
  let myColumn = document.createElement("td");
  myColumn.id = "cell" + i;
  let myColumnId = `"${myColumn.id}"`;
  console.log(myColumnId);
  console.log(array[i]);
  //this works! will need to connect it throughout the rest of the code
  myColumn.innerHTML = visibleArray[i];
  // }
  //maybe try pushing to new array?
  addedBlanks.appendChild(myColumn);
  //
  //converts blanks into black squares for easier visualization
  if (checkForSpaces === 0) {
    //this is what reads as true
    visibleArray[i] = " ";
    document.getElementById("cell" + i).classList.add("blank");
    console.log(visibleArray);
  }

  //
}

document.querySelector(".submit").addEventListener("click", function () {
  guessingLetters(); //calling the function above

  function addingLimbsToHangman(limb) {
    document.getElementById(limb).classList.remove("hidden");
  }

  function endGameSetup(endGameClasses, classToAdd) {
    document.getElementById(endGameClasses).classList.add(classToAdd);
  }

  if (checkForBlanks === true) {
    let guess = guessedLetters[guessedLetters.length - 1]; //pulls the most recent guess from the guessedLetters array made above in the function
    checkForCorrect = 0; //initializing variable
    //THIS FOR LOOP IS CHECKING THE ALL OF THE ELEMENTS OF THE ARRAY AGAINST THE INITIAL GUESS

    for (let i = 0; i < visibleArray.length; i++) {
      if (guess === array[i]) {
        checkForCorrect++;
        visibleArray[i] = guess; //if the guess matches with the element in the array then it will be replaced w/the correct letter in the correct space
        addedBlanks.children[i].innerHTML = guess;
        // visibleCells.cells[i].innerHTML = guess;
      }
    }

    // function addingLimbsToHangman(limb) {
    //   document.getElementById(limb).classList.remove("hidden");
    // }

    // function endGameSetup(endGameClasses, classToAdd) {
    //   document.getElementById(endGameClasses).classList.add(classToAdd);
    // }

    //this is the logic for when a wrong letter is guessed
    if (checkForCorrect === 0) {
      limbCount++;
      console.log(`You have guessed ${limbCount} wrong letters`);
      newVisibleList.unshift(guess); //adding the current guess value to the wrong letters list
      if (limbCount === 1) {
        addingLimbsToHangman("platform");
      } else if (limbCount === 2) {
        addingLimbsToHangman("post");
        // document.getElementById("post").classList.remove("hidden");
      } else if (limbCount === 3) {
        addingLimbsToHangman("rope");
      } else if (limbCount === 4) {
        addingLimbsToHangman("head");
      } else if (limbCount === 5) {
        addingLimbsToHangman("body");
      } else if (limbCount === 6) {
        addingLimbsToHangman("leftArm");
      } else if (limbCount === 7) {
        addingLimbsToHangman("rightArm");
      } else if (limbCount === 8) {
        addingLimbsToHangman("leftLeg");
      } else if (limbCount === 9) {
        addingLimbsToHangman("rightLeg");
      } else if (limbCount > 9) {
        addingLimbsToHangman("reset");

        document.getElementById(
          "finalMessage"
        ).innerHTML = `Oh no! The correct answer was "${Hangmanstring}". Try again!`;
        endGameSetup("letter", "hidden");
        endGameSetup("submit", "hidden");
        endGameSetup("hangmanContainer", "gameLost");
      }
    }

    document.getElementById("wrongGuessContainer").innerHTML = newVisibleList;

    checkForBlanks = visibleArray.includes("?");
  }

  //THIS IS THE TEMPLATE CODE FOR WHAT WILL HAPPEN WHEN THE PLAYER WINS THE GAME
  if (checkForBlanks === false && limbCount <= 9) {
    console.log(`You guessed it! The answer was "${Hangmanstring}"`);
    document.getElementById(
      "finalMessage"
    ).innerHTML = `You guessed it! The answer is "${Hangmanstring}"`;
    document.getElementById("reset").classList.remove("hidden");
    endGameSetup("letter", "hidden");
    endGameSetup("submit", "hidden");
    endGameSetup("hangmanContainer", "gameWon");
  }
  //clearing the guess box after submit
  function clearGuess() {
    document.getElementById("letter").value = "";
  }
  clearGuess();
});

document.querySelector(".reset").addEventListener("click", function () {
  //need to write code to reset the game and pick a new word to try to solve
  location.reload(); //just reloading the page now
});

document.querySelector(".reload").addEventListener("click", function () {
  //need to write code to reset the game and pick a new word to try to solve
  location.reload(); //just reloading the page now
});
