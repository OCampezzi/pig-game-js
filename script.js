'use strict';

// DOM elements
const rollDice = document.getElementById('btn--roll');
const holdDice = document.getElementById('btn--hold');
const newGame = document.getElementById('btn--new');
const dice = document.getElementById('dice');

let score, activePlayer, playerScores, playing;

newRound();

rollDice.addEventListener('click', function () {
  if (playing) {
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
  }
});

holdDice.addEventListener('click', function () {
  if (playing) {
    playerScores[activePlayer - 1] += score;
    document.getElementById(`current--${activePlayer}`).textContent =
      playerScores[activePlayer - 1];

    if (playerScores[activePlayer - 1] >= 100) {
      document
        .getElementById(`player--${activePlayer}`)
        .classList.add('player--winner');
      playing = false;
    } else {
      switchPlayer();
    }
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

function newRound() {
  score = 0;
  activePlayer = 1;
  playerScores = [0, 0];
  playing = true;

  document.getElementById('current--1').textContent = 0;
  document.getElementById('current--2').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('score--2').textContent = 0;

  document.getElementById('player--1').classList.remove('player--winner');
  document.getElementById('player--2').classList.remove('player--winner');
  document.getElementById('player--1').classList.add('player--active');
  document.getElementById('player--2').classList.remove('player--active');

  dice.classList.add('hidden');
}

newGame.addEventListener('click', newRound);
