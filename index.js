"use strict";
var inquirer = require("inquirer");
const Geography = require('./Geography.js');
const Nintendo = require('./Nintendo.js');

function manageGame (game) {

    const array = game.getGameArray();
    let index = game.getRandomInt(0,array.length);
    let word = array[index];
    game.lettersAvail = word.length;

    console.log("==============================================");
    console.log('this is your word: ', word);
    game.createBoard(word);
   
      inquirer.prompt([
          {
            type: "input",
            name: "letter",
            message: "Guess a letter!"
          }
      ]).then(function(user) {
        console.log(user.letter.toUpperCase());
        game.goodGuess(user.letter.toUpperCase(), word);
      })




    console.log("==============================================");

    
}

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