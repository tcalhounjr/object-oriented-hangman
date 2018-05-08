"use strict";

class Game {
    constructor(gameType) {
        this.maxguesses = 10;
        this.numWins = 0;
        this.numLosses = 0;
        this.lettersAvail = 0;
        this.cpuGuess = '';
        this.guesses = [];
        this.boardStr = '';
        this.boardArray = [];
        this.gameArray = [];
        this.selectedGame = gameType;
    }

    getRandomInt(min, max) {
        return this.selectWordArrayIndex(min, max);
    }

    getGameArray() {
        return this.selectWordArray(this.selectedGame);
    }

    selectWordArrayIndex(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        var randomInt = Math.floor(Math.random() * (max - min)) + min;
        return randomInt;
    }

    buildGuessArray(min, max, array) {
        let index = getRandomInt(min, max);
        let guessStr = array[index];
        let guessArray = [];
        for (i = 0; i < guessStr.length; i++) {
            if (guessStr.charAt(i) === " ") {
                guessArray.push(" ");
            }
            else {
                guessArray.push(guessStr.charAt(i));
            }
        }
        return guessArray;
    }

    selectWordArray(game) {
        if (game === 'Geography') {
            this.gameArray = ["SENEGAL", "GUINEA", "SIERRA LEONE", "IVORY COAST", "GHANA", "MAURITANIA", "BURKINA", "NIGER", "NIGERIA", "CHAD", "MALI", "WESTERN SAHARA", 
            "MOROCCO", "ALGERIA", "TUNISIA", "LIBYA", "EGYPT", "SUDAN", "ETHIOPIA", "SOMALIA", "KENYA", "UGANDA", "DEMOCRATIC REPUBLIC OF THE CONGO",
            "CENTRAL AFRICAN REPUBLIC", "CAMEROON", "CONGO", "GABON", "TANZANIA", "MALAWI", "ZAMBIA", "ANGOLA", "NAMIBIA", "BOTSWANA", "ZIMBABWE", 
            "MOZAMBIQUE","MADAGASCAR", "SOUTH AFRICA"];
        }
        else if (game === 'Nintendo') {
            this.gameArray = ["RING KING", "TECMO BOWL", "TECMO SUPER BOWL", "EXCITEBIKE", "BASES LOADED", "ARCH RIVALS", "DOUBLE DRIBBLE", "BLADES OF STEEL",
            "RBI BASEBALL", "PUNCH OUT", "SUPER MARIO", "TETRIS", "DONKEY KONG", "LEGEND OF ZELDA", "CONTRA", "KID ICARUS", "STREET FIGHTER", 
            "NINJA GAIDEN", "KUNG FU", "BATMAN", "DOUBLE DRAGON", "RC PRO AM", "MEGA MAN"]
        }

        return this.gameArray;
    }

    createBoard (randomPhrase) {
        let numSpaces = 0;
        for (var i = 0; i < randomPhrase.length; i++) { 
            if (randomPhrase.charAt(i) === " ") {
                this.boardArray.push(' ');
                numSpaces++
            }
            else {
                this.boardArray.push('- ');
            }
        }
        this.lettersAvail = randomPhrase.length - numSpaces;
        console.log('you have ', this.lettersAvail, ' letters left');
        console.log(this.boardArray.join(' '));
    }

    updateBoard (occurrenceArray, correctLetter) {
        for (var i = 0; i < occurrenceArray.length; i++) {
            console.log(occurrenceArray[i]);
            this.boardArray[occurrenceArray[i]] = correctLetter;
        }
        console.log('you have ', this.lettersAvail, ' letters left');
        console.log(this.boardArray.join(' '));
    }

    goodGuess (newGuess, randomWord) {   
        let letterOccurrences = [];
        for (var i = 0; i < randomWord.length; i++){
            if (newGuess === randomWord.charAt(i)){
                letterOccurrences.push(i); //push the indices of all the correctly-guessed letter occurences
            }
        }
        if (letterOccurrences.length > 0) {
            this.lettersAvail -= letterOccurrences.length;
            this.updateBoard(letterOccurrences, newGuess);
        }
    }//Take in user input; compare it to the computer's guess; return true if it's correct; return false if not.
}

module.exports = Game;
