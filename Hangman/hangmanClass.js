class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.gameStatus = 'playing'
  }

  getPuzzle() {
    let puzzleWord = ''
    for (let char of this.word) {
      this.guessedLetters.includes(char) || char === ' '
        ? (puzzleWord += char)
        : (puzzleWord += '*')
    }
    return puzzleWord
  }

  makeGuess(char) {
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

  getGameStatus() {
    if (this.remainingGuesses > 0 && this.getPuzzle().includes('*')) {
      this.gameStatus = 'playing'
    } else if (!this.getPuzzle().includes('*')) {
      this.gameStatus = 'finished'
    } else {
      this.gameStatus = 'failed'
    }
  }

  getStatusMessage() {
    if (this.gameStatus === 'playing') {
      return `Guesses left: ${this.remainingGuesses}`
    } else if (this.gameStatus === 'finished') {
      return `Great Work! You guessed the word`
    } else {
      return `Nice try! The word was '${this.word}'`
    }
  }
}
