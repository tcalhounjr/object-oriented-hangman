"use strict";

const Game = require('./Game.js');
const newGame = new Game('geography');

class Geography extends Game {
    setScore() {
        let score = this.numWins*3;
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
        this.initializeBoardArray();
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
        createBoard(this.cpuGuess);
        this.lettersAvail = this.cpuGuess.length - numSpaces;
        this.initializeBoardArray();
    }

    puzzleSolved() {
        if (this.lettersAvail === 0) {
            this.numWins++;
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


const thomas = new Geography('geography');
const array = thomas.getGameArray();

console.log(newGame);
console.log(array);
console.log(thomas);