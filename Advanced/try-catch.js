const getTip = (amount) => {
  if (typeof amount === 'number') {
    return amount * 0.25
  } else {
    throw Error('Argument must be a number')
  }
}

// console.log(getTip('test'))
// console.log(getTip(25))

const getTip2 = (amount) => {
  try {
    getTip(amount)
  } catch (err) {
    // console.log(err)
  }
  console.log('Try-catch done!')
}

const res = getTip2(25)
console.log(res)
