// Javascript Objects and methods
// Constructor method for JS Object 'Person'
const Person = function (firstName, lastName, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}

// Object method definitions

Person.prototype.present = function () {
  return `Hello, my name is ${this.firstName} ${this.lastName} and my age is ${this.age}`
}

Person.prototype.setName = function (fullName) {
  const names = fullName.split(' ')
  this.firstName = names[0]
  this.lastName = names[1]
}

const me = new Person('David', 'Lopez Albajara', 36)

console.log(me.present())

me.setName('Benito Camelas')

console.log(me)
