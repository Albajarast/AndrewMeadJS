// Type coercion - string, number, boolean
console.log('5' + 5)
console.log(5 + '5')
console.log('5' - 5) // There is no string subtraction as declared so will convert the string to Number

console.log(5 == '5') // double equal does not take into account the type and will parse the values to compare them

const type = typeof { value: 1223 }
console.log(type)

const value = false + 12
type = typeof value
console.log(type)
console.log(value)
