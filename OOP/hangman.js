// 1. Create a constructor function for the hangman game
// 2. Setup two attributes. One for the word itself, another for the number of guesses allowed
// 3. Create two instances of it and print both to the console

const Hangman = function (word, remainingGuesses) {
  // Modified as for challenge 1 requirement 1
  this.word = word.toLowerCase()
  this.remainingGuesses = remainingGuesses
  // Added as for challenge 1 requirement 2
  this.guessedLetters = ['c', 'a', 'n', 's', 'l']
}

const game1 = new Hangman('Los Angeles', 10)
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

game1.getPuzzle()
