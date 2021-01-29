// 1. Create a constructor function for the hangman game
// 2. Setup two attributes. One for the word itself, another for the number of guesses allowed
// 3. Create two instances of it and print both to the console

const Hangman = function (word, remainingGuesses) {
  // Modified as for challenge 1 requirement 1
  this.word = word.toLowerCase()
  this.remainingGuesses = remainingGuesses
  // Added as for challenge 1 requirement 2H
  this.guessedLetters = []
  this.gameStatus = 'playing'
}
// ----------- //
// Challenge 1 //
// ----------- //
// 1. Set up the word instance property as an array of lower case letters
// 2. Set up another instance property to store guessed letters
// 3. Create a method that gives you the word puzzle

// Method to provide the puzzle

Hangman.prototype.getPuzzle = function () {
  let puzzleWord = ''
  for (let char of this.word) {
    this.guessedLetters.includes(char) || char === ' '
      ? (puzzleWord += char)
      : (puzzleWord += '*')
  }
  return puzzleWord
}

// ------------------------------------------------ //
// Challenge 2 - Create a method for making a guess //
// ------------------------------------------------ //
// Should accept a character for guessing
// Should add unique guesses to the list of guesses
// Should decrement the remainingGuesses if a unique guess isn't a match

Hangman.prototype.makeGuess = function (char) {
  // Added conditional as for challenge 4
  if (this.gameStatus === 'playing') {
    char = char.toLowerCase()
    const isUnique = !this.guessedLetters.includes(char)
    const isBadGuess = !this.word.includes(char)

    if (isUnique) {
      this.guessedLetters.push(char)
    }

    if (isUnique && isBadGuess) {
      this.remainingGuesses--
    }

    this.getGameStatus()
  }
}

// -------------------- //
// Challenge 3 - Part 2 //
// -------------------- //
// 1. Setup new "status" property with initial value of "playing"
// 2. Create new method for recalculating status to "playing", "finished" or "failed"
// 3. Call that method after the guess is processed
// 4. Use console.log to print the status

// Start the game and see "playing"
// Make two incorrect guesses to see "failed"
// Refresh the browser and guess "c", "a" and "t" to see "finished"

Hangman.prototype.getGameStatus = function () {
  if (this.remainingGuesses > 0 && this.getPuzzle().includes('*')) {
    this.gameStatus = 'playing'
  } else if (!this.getPuzzle().includes('*')) {
    this.gameStatus = 'finished'
  } else {
    this.gameStatus = 'failed'
  }
}

// ----------- //
// Challenge 4 //
// ----------- //
// 1. Disable new guesses unless "playing"
// 2. Setup a method to get back a status message

// Playing -> Guesses left: 3
// Failed -> Nice try! The word was "cat"
// Finished -> Great Work! You guessed the word

Hangman.prototype.getStatusMessage = function () {
  if (this.gameStatus === 'playing') {
    return `Guesses left: ${this.remainingGuesses}`
  } else if (this.gameStatus === 'finished') {
    return `Great Work! You guessed the word`
  } else {
    return `Nice try! The word was '${this.word}'`
  }
}
