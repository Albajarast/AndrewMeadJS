let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
};

let otherBook = {
    title: 'A Peoples History',
    author: 'GHoward Zinn',
    pageCount: 723
};

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.summary);
console.log(bookSummary.pageCountSummary);

// Challenge Area 

// Create a function that takes a fahrenheit input and convert it to Celsius and Kelvin, returning and object with all three temperatures



let tempCalc = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * (5 / 9),
        kelvin: ((fahrenheit - 32) * (5 / 9)) + 273.15
    }
}

let temperature = tempCalc(68);
console.log(temperature);