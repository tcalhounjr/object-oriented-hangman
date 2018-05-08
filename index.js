"use strict";
const Geography = require('./Geography.js');
const Nintendo = require('./Nintendo.js');
var inquirer = require("inquirer");
var userName = '';

function manageGame (game) {

  const array = game.getGameArray();
  let index = game.getRandomInt(0,array.length);
  let word = array[index];
  game.lettersAvail = word.length;

  console.log("==============================================");
  console.log('this is your word: ', word);
  console.log('is the puzzle solved ', game.puzzleSolved());
  game.createBoard(word);
  promptUserForGuess(word, game);
}

function promptUserToPlayAgain(game) {
  inquirer.prompt([
    {
      type: "confirm",
      name: "gameOn",
      message: userName + ", would you like to play again?"
    }
  ]).then(function(user) {
    if (user.gameOn === 'Y' || user.gameOn === 'y') {
      manageGame(game);
    }
  })
}

function promptUserForGuess(word, game) {
  inquirer.prompt([
    {
      type: "input",
      name: "letter",
      message: "Guess a letter!"
    }
  ]).then(function(user) {
    console.log(user.letter.toUpperCase());
    game.goodGuess(user.letter.toUpperCase(), word);
    if (!game.puzzleSolved()) {
      promptUserForGuess(word, game);
    }
    else {
      promptUserToPlayAgain(game);
    }
  })
}

function selectGame() {
  
  // Created a series of questions
  inquirer.prompt([

    {
      type: "input",
      name: "name",
      message: "Who are you???"
    },
  
    {
      type: "list",
      name: "whichGame",
      message: "Which game do you want to play?",
      choices: ['Nintendo', 'Geography']
    }
  
  //   {
  //     type: "checkbox",
  //     name: "carryingWhat",
  //     message: "What are you carrying in your hands??",
  //     choices: ["TV", "Slice of Toast", "Butter Knife"]
  //   },
  
  //   {
  //     type: "confirm",
  //     name: "canLeave",
  //     message: "Can you leave now?"
  //   },
  
  //   {
  //     type: "password",
  //     name: "myPassword",
  //     message: "Okay fine. You can stay. But only if you say the magic password."
  //   }
  
  ]).then(function(user) {
    userName = user.name;
    // If the user chooses to play the geography word game...
    if (user.whichGame === "Geography") {
      const geography = new Geography(user.whichGame);    
      manageGame(geography);
    }
    // If the user chooses to play the nintendo word game...
    else {
      const nintendo = new Nintendo(user.whichGame);
      manageGame(nintendo);
    }
  
  });
}
selectGame();