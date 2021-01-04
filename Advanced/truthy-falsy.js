const products = [{ name: 'computer' }]
const product = []

if (product !== undefined) {
  console.log('Product found')
} else {
  console.log('Product not found')
}

// Truthy - values that resolve to true in a boolean context
// Falsy - values that resolve to false in a boolean context
// Falsy values - false, 0, empty string, null, undefined, NaN
// Note : empty objects or arrays resolve as Truthy values

if ('testing') {
  console.log('Product found')
} else {
  console.log('Product not found')
}
// Will return : Product not found

if (undefined) {
  console.log('Product found')
} else {
  console.log('Product not found')
}
// Will return : Product not found

if (null) {
  console.log('Product found')
} else {
  console.log('Product not found')
}
// Will return : Product not found

if (product) {
  console.log('Product found')
} else {
  console.log('Product not found')
}
