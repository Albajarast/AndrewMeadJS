let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
};

console.log(myBook);
console.log(`${myBook.title} was written by ${myBook.author} and has an average of ${myBook.pageCount} pages`);

myBook.title = 'Animal Farm';
console.log(`${myBook.title} was written by ${myBook.author} and has an average of ${myBook.pageCount} pages`);

// Challenge are 

// name, age, location
// Andrew is 27 and lives in Philadelphia.

let person = {
    name: 'David',
    age: 35,
    location: 'Gijón'
};

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

// Increase age by 1 and print message again

person.age += 1;
console.log(`${person.name} is ${person.age} and lives in ${person.location}`);