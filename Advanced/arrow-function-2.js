// Regular function declarations can access to arguments whereas arrow functions can not

// const add = function (a, b) {
//   console.log(arguments);
// };

// console.log(add(4, 6, 17, 20, 30));

const add = function (a, b) {
  return arguments[0] + arguments[1]
}

console.log(add(4, 6, 17, 20, 30))

const add2 = (a, b) => {
  return arguments[0] + arguments[1]
}

// This will return an error as mentioned above, it can access the arguments
// console.log(add2(4, 6, 17, 20, 30))

// The keyword this is only accessible with normal function declarations

const car = {
  color: 'Red',
  getSummary: function () {
    return `The car is ${this.color}`
  }
}

console.log(car.getSummary())

const car2 = {
  color: 'Green',
  getSummary: () => {
    return `The car is ${this.color}`
  }
}

console.log(car2.getSummary())

// We can also declare a method as follow without the function keyword
const car3 = {
  color: 'Red',
  getSummary() {
    return `The car is ${this.color}`
  }
}

console.log(car3.getSummary())
