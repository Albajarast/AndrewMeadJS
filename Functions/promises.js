// Callback

const getDataCallback = (callback) => {
  setTimeout(() => {
    // callback(undefined, 'This is the data')
    callback('This is the callback error', undefined)
  }, 1000)
}

getDataCallback((err, data) => {
  if (err) {
    console.log('There has been an error: ', err)
  } else {
    console.log(data)
  }
})

// Promise
const myPromise = new Promise((res, rej) => {
  setTimeout(() => {
    // res('This is your promise data!')
    rej('This is your promise error!')
  }, 2000)
})

myPromise.then(
  (data) => {
    console.log(data)
  },
  (err) => {
    console.log(err)
  }
)

// myPromise
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

const myPromiseFunc = (data) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(`This is your data: ${data}`)
    }, 3000)
  })

myPromiseFunc('David López Albajara').then(
  (data) => {
    console.log(data)
  },
  (err) => {
    console.log(err)
  }
)
