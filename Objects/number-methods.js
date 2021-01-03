let num = 103.941;

console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(Math.random() * 100));

let min = 10;
let max = 20;
let = randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNum);

// Challenge area
// 1-5 true if correct - false if not correct

let makesGuess = function (num) {
    let min = 1;
    let max = 5;
    let = randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    if (num === randomNum) {
        return { guess: true, num: num, randomNum: randomNum };
    } else {
        return { guess: false, num: num, randomNum: randomNum };
    }
};

let result = makesGuess(1);
console.log(`The number generated was: ${result.randomNum} and you said it was: ${result.num}. The result is: ${result.guess}`);