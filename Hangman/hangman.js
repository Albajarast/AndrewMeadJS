// 1. Create a constructor function for the hangman game
// 2. Setup two attributes. One for the word itself, another for the number of guesses allowed
// 3. Create two instances of it and print both to the console

const Hangman = function (word, remainingGuesses) {
  // Modified as for challenge 1 requirement 1
  this.word = word.toLowerCase()
  this.remainingGuesses = remainingGuesses
  // Added as for challenge 1 requirement 2
  this.guessedLetters = []
}

// const game2 = new Hangman('piruleta', 20)

// console.log(game1, game2)

// Challenge 1
// 1. Set up the word instance property as an array of lower case letters
// 2. Set up another instance property to store guessed letters
// 3. Create a method that gives you the word puzzle

// Method to provide the puzzle

Hangman.prototype.getPuzzle = function () {
  puzzleWord = ''
  for (let char of this.word) {
    this.guessedLetters.includes(char) || char === ' '
      ? (puzzleWord += char)
      : (puzzleWord += '*')
  }
  console.log(puzzleWord)
}

// Challenge 2 - Create a method for making a guess
// Should accept a character for guessing
// Should add unique guesses to the list of guesses
// Should decrement the remainingGuesses if a unique guess isn't a match

Hangman.prototype.makeGuess = function (char) {
  char = char.toLowerCase()
  const isUnique = !this.guessedLetters.includes(char)
  const isBadGuess = !this.word.includes(char)

  if (isUnique) {
    this.guessedLetters.push(char)
  }

  if (isUnique && isBadGuess) {
    this.remainingGuesses--
  }
  console.log(`Guessed letter: ${char}`)
  console.log(`Remaining Guesses: ${this.remainingGuesses}`)
}

const game1 = new Hangman('Cat', 2)

game1.getPuzzle()
console.log(`Remaining Guesses: ${game1.remainingGuesses}`)

window.addEventListener('keypress', (e) => {
  const inputLetter = String.fromCharCode(e.charCode)
  game1.makeGuess(inputLetter)
  game1.getPuzzle()
})
