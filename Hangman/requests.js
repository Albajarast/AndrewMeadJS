const getPuzzle = (wordCount) =>
  new Promise((res, rej) => {
    const req = new XMLHttpRequest()

    req.addEventListener('readystatechange', (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        res(data.puzzle)
      } else if (e.target.readyState === 4) {
        rej('There has been an error')
      }
    })

    req.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    req.send()
  })
