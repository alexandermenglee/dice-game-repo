// DOM IDs
let DOMstrings = {
  opponentScore: document.getElementById('opponent-score'),
  playerScore: document.getElementById('current-score'),
  rolled: document.getElementById('rolled'),
  hit: document.getElementById('hit'),
  compare: document.getElementById('compare'),
  result: document.getElementById('result')
}

// player object
// die array stores all die that the player has generated
// score is the sum of all rolled die
let player = {
  die: [],
  score: 0
}

let opponentScore = Math.floor(Math.random() * 4) + 28;

// Dice constructor
function Dice(sides) {
  this.sides = sides;
}

// roll method for all dice
Dice.prototype.roll = function() {
  let randomNumber = Math.floor(Math.random() * this.sides) + 1;
  DOMstrings.rolled.innerHTML += `With the ${this.sides} sided die, you rolled a ${randomNumber} <br><br>`;
  console.log(`With the ${this.sides} sided die you rolled a ${randomNumber}`);
  return randomNumber;
}

// create Dice objects
let dice4 = new Dice(4);
let dice6 = new Dice(6);
let dice8 = new Dice(8);
let dice10 = new Dice(10);
let dice12 = new Dice(12);
let dice20 = new Dice(20);

// store all dice into an array
let diceArray = [dice4, dice6, dice8, dice10, dice12, dice20];

function generateDie() {
  // picks a random dice from diceArray
  let randomDie = Math.floor(Math.random() * 6) + 0;

  switch(randomDie) {
    case 0:
      randomDie = 0;
      console.log("You generated a 4 sided die");
      DOMstrings.rolled.innerHTML += "You generated a 4 sided die <br>";
      player.die.push(diceArray[randomDie]);
      player.score += diceArray[randomDie].roll();
      break;
    case 1:
      randomDie = 1;
      console.log("You generated a 6 sided die");
      DOMstrings.rolled.innerHTML += "You generated a 6 sided die <br>";
      player.die.push(diceArray[randomDie]);
      player.score += diceArray[randomDie].roll();
      break;
    case 2:
      randomDie = 2;
      console.log("You generated a 8 sided die");
      DOMstrings.rolled.innerHTML += "You generated a 8 sided die <br>";
      player.die.push(diceArray[randomDie]);
      player.score += diceArray[randomDie].roll();
      break;
    case 3:
      randomDie = 3;
      console.log("You generated a 10 sided die");
      DOMstrings.rolled.innerHTML += "You generated a 10 sided die <br>";
      player.die.push(diceArray[randomDie]);
      player.score += diceArray[randomDie].roll();
      break;
    case 4:
      randomDie = 4;
      console.log("You generated a 12 sided die");
      DOMstrings.rolled.innerHTML += "You generated a 12 sided die <br>";
      player.die.push(diceArray[randomDie]);
      player.score += diceArray[randomDie].roll();
      break;
    case 5:
      randomDie = 5;
      console.log("You generated a 20 sided die");
      DOMstrings.rolled.innerHTML += "You generated a 20 sided die <br>";
      player.die.push(diceArray[randomDie]);
      player.score += diceArray[randomDie].roll();
      break;
  }
}

DOMstrings.hit.addEventListener('click', () => {
  if(player.score < 32) {
    generateDie();
    DOMstrings.playerScore.innerText = `${player.score}`;
  } else {
    DOMstrings.result.innerText = 'Loser';
  }
});

DOMstrings.compare.addEventListener('click', () => {
  if(player.score > 32 || player.score < opponentScore) {
    DOMstrings.result.innerText = 'Loser';
  } else {
    DOMstrings.result.innerText = 'You win!';
  }
});

function init() {
  // opponent always has a score within the range of 28 and 31
  console.log(`Your opponent's score is ${opponentScore}`);
  DOMstrings.opponentScore.innerText = `${opponentScore}`;

  //create initial score for player
  generateDie();
  generateDie();
  DOMstrings.playerScore.innerText = `${player.score}`;
  console.log(`Your current score is ${player.score}`);
}


init();