// Hmangna: A Hangman Randomizer


const input = require('readline-sync');

function startGame(){
  let mainMenu = input.question("Elhlo! Welcome to Hmangna, the Hangman randomizer!\n\nPlease choose an option:\n1. Start Game!\n2. Add words to the game\n\n");
  // console.log(mainMenu);
  if (mainMenu == '1') { 
    console.log("Running game!");
    return
  }
  else if (mainMenu == '2') { 
    console.log("Adding words!")
  return
  }
  else {
    console.log("Please select an option.");
    startGame();
       };
}





module.exports = startGame;
