let name = '   David Lopez';

// Length property
console.log(name.length);

// Convert to upper case
console.log(name.toUpperCase());

// Convert to lower case
console.log(name.toLowerCase());

// Check if a 'string' is included in the original string from a position, 0 for beggining
console.log(name.includes('Lopez', 0));

// Trim the white spaces at the begginig or/and end of a string
console.log(name.trim());
console.log('//////////////////');
console.log('//////////////////');

// Challenge Area

// isValidPassword
// length more than 8 characters and it doesn't contain the word password

let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!dfsd@dfdfr'));
console.log(isValidPassword('abc123!dpassword'));