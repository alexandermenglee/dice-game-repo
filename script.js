//create player object
let player = {
  score: 0
}

// initialize the dice and stores them in an array
let dice4 = Math.floor(Math.random() * 4) + 1;
let dice6 = Math.floor(Math.random() * 6) + 1;
let dice8 = Math.floor(Math.random() * 8) + 1;
let dice10 = Math.floor(Math.random() * 10) + 1;
let dice12 = Math.floor(Math.random() * 12) + 1;
let dice20 = Math.floor(Math.random() * 20) + 1;
let diceArray = [dice4, dice6, dice8, dice10, dice12, dice20];

// initializes the game
function init() {
  
  console.log("Your oponent has a score of "  + opponentScore);
  dealDice(diceArray);
  generateDice();
}

// generates initial score for user
function dealDice(arr) {
  for(let i = 0; i < 2; i++) {
    let randomDie = Math.floor(Math.random() * 7) + 0;
    player.score += arr[randomDie];
  }
  console.log("Your initial score is " + player.score);
}

// when player wants to generate a new dice to roll
function generateDice() {
  // create a random number
    
  // the random number becomes the index for the dice we take out of the dice array
  
  // return the dice 
  let x = randomNum();
  console.log(randomNum());
  console.log(diceArray[x]);
}

// used to grab random index in dice array
function randomNum() {
  return Math.floor(Math.random() * 7) + 0;
}

init();