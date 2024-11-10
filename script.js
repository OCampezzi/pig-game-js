'use strict';

// DOM elements
const rollDice = document.getElementById('btn--roll');
const holdDice = document.getElementById('btn--hold');

const dice = document.getElementById('dice');

const currentScore1 = document.getElementById('current--1');
const currentScore2 = document.getElementById('current--2');
const player1 = document.getElementById('player--1');
const player2 = document.getElementById('player--2');

let score = 0;
let activePlayer = 1;

rollDice.addEventListener('click', function () {
  // Generate the random number
  const diceNumber = Math.floor(Math.random() * 5 + 1);

  // Display the dice with the generated number
  dice.classList.remove('hidden');
  dice.src = `images/dice-${diceNumber}.png`;

  // Verify if the generated number is equal to 1
  if (diceNumber !== 1) {
    // Add the generated number to the score of the active player
    score += diceNumber;
    document.getElementById(`score--${activePlayer}`).textContent = score;
  } else {
    // Switch player
    switchPlayer();
  }
});

function switchPlayer() {
  score = 0;
  document.getElementById(`score--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 1 ? 2 : 1;
  if (activePlayer === 1) {
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
  } else {
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
  }
}
