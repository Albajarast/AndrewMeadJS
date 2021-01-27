// ----------- //
// Challenge 3 //
// ----------- //
// 1. Display the puzzle to the browser instead of the console
// 2. Display the guesses left to the browser instead of the console
// 3. Separate the Hangman definition from the rest of the app code (use app.js)

const puzzleWordDisplay = document.querySelector('#puzzle-word')
const guessesDisplay = document.querySelector('#remaining-guesses')
const gameStatusDisplay = document.querySelector('#game-status')
const game1 = new Hangman('cat', 2)

puzzleWordDisplay.textContent = game1.getPuzzle()
guessesDisplay.textContent = game1.remainingGuesses
gameStatusDisplay.textContent = game1.gameStatus

// -------------------- //
// Challenge 3 - Part 2 //
// -------------------- //
// 1. Setup new "status" property with initial value of "playing"
// 2. Create new method for recalculating status to "playing", "finished" or "failed"
// 3. Call that method after the guess is processed
// 4. Use console.log to print the status - NOTE: I will use a <p> to display the status

// Start the game and see "playing"
// Make two incorrect guesses to see "failed"
// Refresh the browser and guess "c", "a" and "t" to see "finished"

window.addEventListener('keypress', (e) => {
  const inputLetter = e.key
  game1.makeGuess(inputLetter)
  game1.getPuzzle()
  gameStatusDisplay.textContent = game1.gameStatus
  puzzleWordDisplay.textContent = game1.getPuzzle()
  guessesDisplay.textContent = game1.remainingGuesses
})
