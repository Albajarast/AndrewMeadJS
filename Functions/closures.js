const myFunc1 = () => {
  const message = 'This is my message 1'
  const printMessage = () => {
    console.log(message)
  }
  printMessage()
}

const myFunc2 = () => {
  const message = 'This is my message 2'
  const printMessage = () => {
    console.log(message)
  }
  return printMessage
}

myFunc1()
const myPrintMessage2 = myFunc2()
myPrintMessage2()

const createCounter = () => {
  let count = 0

  return {
    increment() {
      count++
    },
    decrement() {
      count--
    },
    get() {
      return count
    },
    set(value) {
      count = value
    }
  }
}

const counter = createCounter()
counter.increment()
counter.increment()
console.log(counter.get())
counter.decrement()
console.log(counter.get())
counter.set(10)
console.log(counter.get())

const createAdder = (a) => {
  return (b) => {
    return a + b
  }
}

const add10 = createAdder(10)

console.log(add10(-2))
console.log(add10(10))
console.log(add10(10 * 10))

// Challenge

// 1. Create createTipper which take sin the base tip (.15 for 15% tip)
// 2. Set it up to return a function that takes in the bill amount
// 3. Call createTipper to generate few functions for different percentages
// 4. Use the generated functions to calculate tips and print them

const createTipper = (baseTip) => {
  return (billAmount) => {
    return billAmount * baseTip
  }
}

const tip15 = createTipper(0.15)
const tip20 = createTipper(0.2)
const tip25 = createTipper(0.25)
console.log('The tip is: ', tip15(234))
console.log('The tip is: ', tip20(100))
console.log('The tip is: ', tip25(100))
