// Hmangna: A Hangman Randomizer

const input = require('readline-sync');
const startGame = require('./mainMenu.js');

// variables:
let wordArray = [];
let wordLength = '';
let newWord = '';

const numArray = [ '0',
  '1', '2', '3',
  '4', '5', '6',
  '7', '8', '9'];


// Word Functions:

// Adds word to game use, first asking for the length of the word.
function addWords(){
  wordLength = input.question("\nHow many letters are in the word you want to add? \nNote: single-digit length words only.\n");
  // console.log(wordLength, typeof wordLength);
  validateNum(wordLength);
  addNewWord();
}


// Checks that a valid number was entered for wordLength using numArray; in service of addWords function
function validateNum(string){
  if (numArray.includes(wordLength)) {
    console.log(`\nThank you. Your new word will be ${wordLength} letters long.\n`);
    // newWord();
    return;
  } else {
    console.log(`\n${wordLength} is not a valid single-digit number. Please try again.\n`);
    addWords();
  }
}


// Prompts player for newWord, checking that length of newWord equals wordLength 
function addNewWord(string) {
  newWord = input.question("\nWhat word would you like to add?\n")
  if ( !newWord.length.toString == wordLength) {
    console.log(`${newWord} does not have ${wordLength} characters. Let's try again.`);
    addWords();
  } else {
    isWordUsed(newWord);
  }
}


// Checks to see if word being added is already in the wordArray
function isWordUsed(string){
  if (!wordArray.includes(newWord)){
    wordArray.push(newWord);
    console.log(`${newWord} has been added to the game!`);
    startMenu();
  } else {
    console.log("This word is already in the game. Thank you.");
    startMenu();
  }
}





module.exports = {
  addWords: addWords,
  validateNum: validateNum,
  addNewWord: addNewWord,
  isWordUsed: isWordUsed
}