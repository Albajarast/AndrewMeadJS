// Javascript Classes and methods
class Person {
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

  set fullName(fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    if (names.length > 2) {
      this.lastName = `${names[1]} ${names[2]}`
    } else {
      this.lastName = names[1]
    }
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes)
    this.position = position
  }

  getBio() {
    return `${this.firstName} ${this.lastName} is a ${this.position}`
  }

  getYearsLeft() {
    const retirementAge = 65
    return retirementAge - this.age
  }
}

// 1. Create a class for students
// 2. Tack student grade: 0-100
// 3. Override bio to print a passing or failing message. 70 and above is a pass, under 70 is a fail
// 4. Create "updateGrade" that takes the amount to add or remove from the grade

class Student extends Person {
  constructor(firstName, lastName, age, grade, likes) {
    super(firstName, lastName, age, likes)
    this.grade = grade
  }

  getBio() {
    let status = this.grade >= 70 ? 'passing' : 'failing'
    return `${this.firstName} ${this.lastName} is ${status} the class with a grade of ${this.grade}`
  }

  updateGrade(credits) {
    this.grade += credits
  }
}

const student1 = new Student('David', 'López Albajara', 36, 89, ['Videogames'])
// student1.fullName = 'Perico Palotes Martinez'
console.log(student1.fullName)
// console.log(student1.getBio())
// student1.updateGrade(-20)
// console.log(student1.getBio())
