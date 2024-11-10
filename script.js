'use strict';

// DOM elements
const rollDice = document.getElementById('btn--roll');
const holdDice = document.getElementById('btn--hold');

const dice = document.getElementById('dice');

const player1 = document.getElementById('player--1');
const player2 = document.getElementById('player--2');

let score = 0;
let activePlayer = 1;
let playerScores = [0, 0];

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

holdDice.addEventListener('click', function () {
  playerScores[activePlayer - 1] += score;
  document.getElementById(`current--${activePlayer}`).textContent =
    playerScores[activePlayer - 1];

  if (playerScores[activePlayer - 1] >= 100) {
    document
      .getElementById(`player--${activePlayer}`)
      .classList.add('player--winner');
  } else {
    switchPlayer();
  }
});

function switchPlayer() {
  score = 0;
  document.getElementById(`score--${activePlayer}`).textContent = 0;
  document
    .getElementById(`player--${activePlayer}`)
    .classList.toggle('player--active');
  activePlayer = activePlayer === 1 ? 2 : 1;
  document
    .getElementById(`player--${activePlayer}`)
    .classList.toggle('player--active');
}
