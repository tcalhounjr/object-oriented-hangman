"use strict";

const Game = require('./Game.js');
const newGame = new Game('nintendo');

class Nintendo extends Game {
    setScore() {
        let score = this.numWins*2;
        return score;
    }

    initializeGame() {
        this.guesses = [];
        this.maxGuesses = 10;
        this.boardArray = [];
        // $(guessesLeft).text(this.maxGuesses);
        this.cpuGuess = getCPUGuess(0,this.gameArray.length,this.gameArray);
        console.log("there are " + this.cpuGuess.length + " letters in the random word");
        createBoard(this.cpuGuess);
        this.lettersAvail = this.cpuGuess.length - numSpaces;
        console.log("you have " + this.lettersAvail + " letters remaining at the beginning");
    }

    playAgain() {
        // $(userGuess).text("NEW GAME");
        // $(guessHistory).text("none");
        // $(blanks).text("");
        this.boardArray = [];
        numSpaces = 0;
        this.guesses = [];
        this.maxGuesses = 10;
        $(guessesLeft).text(this.maxGuesses);
        this.cpuGuess = getCPUGuess(0,this.gameArray.length,this.gameArray);
        this.createBoard(this.cpuGuess);
        this.lettersAvail = this.cpuGuess.length - numSpaces;
    }

    puzzleSolved() {
        if (this.lettersAvail === 0) {
            this.numWins++;
            console.log(this.setScore());
            return true;
            // writeToScreen(userWins,this.numWins);
            // writeToScreen(cpuWord,this.cpuGuess);
            
            // let gameOn = confirm("Congratulations; You solved the puzzel! Play again?");
            // if (gameOn) {
            //     this.playAgain(); 
            // }
            // else {
            //     this.initializeGame();
            // }
        }
        else { 
            return false;
        }
    }
}

module.exports = Nintendo;

// const user = new Nintendo('nintendo');
// const array = user.getGameArray();

// let index = user.getRandomInt(0,array.length);
// let word = array[index];

// console.log(newGame);
// console.log(array);
// console.log(user);
// console.log('this is your word: ',word);