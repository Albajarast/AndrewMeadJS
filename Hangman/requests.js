const getPuzzle = (wordCount, callback) => {
  const req = new XMLHttpRequest()

  req.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      callback(undefined, data.puzzle)
    } else if (e.target.readyState === 4) {
      callback('There has been an error', undefined)
    }
  })

  req.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  req.send()
}