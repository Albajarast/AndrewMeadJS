// ----------- //
// Challenge 3 //
// ----------- //
// 1. Display the puzzle to the browser instead of the console
// 2. Display the guesses left to the browser instead of the console
// 3. Separate the Hangman definition from the rest of the app code (use app.js)

const puzzleWordDisplay = document.querySelector('#puzzle-word')
const gameStatusDisplay = document.querySelector('#game-status')
let wordToGuess
const game1 = new Hangman('cat', 2)

puzzleWordDisplay.textContent = game1.puzzle
gameStatusDisplay.textContent = game1.statusMessage

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
  puzzleWordDisplay.textContent = game1.puzzle
  gameStatusDisplay.textContent = game1.statusMessage
})

getPuzzle('5')
  .then((puzzle) => {
    wordToGuess = puzzle
    console.log(puzzle)
  })
  .catch((err) => {
    console.log(`Error: ${err}`)
  })
