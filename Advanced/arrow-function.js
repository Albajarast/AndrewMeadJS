const square = function (num) {
  return num * num
}
console.log(square(5))

const square_long = (num) => {
  return num * num
}

const square_short = (num) => num * num

console.log(square_long(3))
console.log(square_short(3))

const people = [
  {
    name: 'David',
    age: 36
  },
  {
    name: 'Pepe',
    age: 22
  },
  {
    name: 'Vikram',
    age: 22
  },
  {
    name: 'Jess',
    age: 27
  }
]

const under30 = people.filter(function (person) {
  return person.age < 30
})

const under30_2 = people.filter((person) => person.age < 30)

console.log(under30)
console.log(under30_2)

// 1. Find the person with age 22
// 2. Print that person's name

const age22 = people.find((person) => person.age === 22)

console.log(age22.name)

const myFunc = () => {
  console.log('Test')
}
