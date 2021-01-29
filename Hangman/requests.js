//Using Fetch API

// Using promises with .then() .catch()

// const getPuzzle = (wordCount) => {
//   return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json()
//       } else {
//         throw new Error('Unable to fetch puzzle')
//       }
//     })
//     .then((data) => {
//       return data.puzzle
//     })
// }

// Async-await

const getPuzzle = async (wordCount) => {
  const response = await fetch(
    `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  )
  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to fetch puzzle')
  }
}

// Using XMLHttpRequest()

// const getPuzzle = (wordCount) =>
//   new Promise((res, rej) => {
//     const req = new XMLHttpRequest()

//     req.addEventListener('readystatechange', (e) => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         res(data.puzzle)
//       } else if (e.target.readyState === 4) {
//         rej('There has been an error')
//       }
//     })

//     req.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     req.send()
//   })
