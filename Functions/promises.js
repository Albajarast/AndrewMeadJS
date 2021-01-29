// Callback
// Function Declaration
const getDataCallback = (callback) => {
  setTimeout(() => {
    // callback(undefined, 'This is the data')
    callback('This is the callback error', undefined)
  }, 1000)
}

const getDataCallback2 = (num, callback) => {
  setTimeout(() => {
    if (typeof num === 'number') {
      callback(undefined, num * 2)
    } else {
      callback('A number must be provided')
    }
  }, 1000)
}
// Function call
// getDataCallback((err, data) => {
//   if (err) {
//     console.log('There has been an error: ', err)
//   } else {
//     console.log(data)
//   }
// })

getDataCallback2(2, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    getDataCallback2(data, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        console.log(data)
      }
    })
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

const myPromiseFunc2 = (num) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      typeof num === 'number' ? res(num * 2) : rej('A number must be provided')
    }, 3000)
  })

myPromiseFunc2(2)
  .then((data) => {
    myPromiseFunc2(data)
      .then((result) => {
        console.log(`Promise data: ${data}`)
      })
      .catch((err) => {
        console.log(err)
      })
  })
  .catch((err) => {
    console.log(err)
  })

myPromiseFunc2('10')
  .then((data) => {
    return myPromiseFunc2(data)
  })
  .then((data) => {
    return myPromiseFunc2(data)
  })
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log('Message from myPromiseFunc2: ', err)
  })
