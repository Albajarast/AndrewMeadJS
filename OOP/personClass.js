// Javascript Classes and methods
class PersonClass {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
  }

  getBio() {
    let bio = `${this.firstName} is ${this.age} years old.`

    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like}.`
    })

    return bio
  }

  present() {
    return `Hello, my name is ${this.firstName} ${this.lastName} and my age is ${this.age}`
  }

  setName(fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    if (names.length > 2) {
      this.lastName = `${names[1]} ${names[2]}`
    } else {
      this.lastName = names[1]
    }
  }
}

const myPerson = new PersonClass('David', 'Lopez Albajara', 36, [
  'swimming',
  'videogames'
])

console.log(myPerson.getBio())
myPerson.setName('Pedro Cabadas')
console.log(myPerson)
myPerson.setName('Pedro Martinez Osorio')
console.log(myPerson)
