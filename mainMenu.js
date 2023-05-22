// Hmangna: A Hangman Randomizer


const input = require('readline-sync');
const gameWords = require('./addingWords.js');

// variables:
let wordArray = [];
let wordLength = '';
let newWord = '';

const numArray = [ '0',
  '1', '2', '3',
  '4', '5', '6',
  '7', '8', '9'];


// Menu functions:

// Displays start menu with options
function startMenu(){
  let mainMenu = input.question("Elhlo! Welcome to Hmangna, the Hangman randomizer!\n\nPlease choose an option:\n1. Start Game!\n2. Add words to the game\n\n");
  // console.log(mainMenu);
  if (mainMenu == '1') { 
    console.log("Running game!");
    return
  }
  else if (mainMenu == '2') { 
    console.log("Let's add words!")
    gameWords.addWords();
  }
  else {
    console.log("Please select an option.");
    startMenu();
       };
}





module.exports = startMenu;
