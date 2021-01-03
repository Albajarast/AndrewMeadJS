// Multiple arguments
let add = function (a, b, c) {
    return a + b + c;
}

let result = add(10, 1, 5);
console.log(result);

// Default arguments

let getScore = function (name = 'Anonymous', score = 0) {
    // return 'Name: ' + name + ' - Score: ' + score;
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScore(undefined, 99);
console.log(scoreText);

// Challenge area

// total, tipPercent with a default value of 20%
let getTip = function (total, tipPercent = .2) {
    return { total: total, percent: tipPercent * 100, result: total * tipPercent };
}

// 10% tip
let tip1 = getTip(300, .20);
let tip2 = getTip(100); // it will use the default tip
// console.log(tip1);
// console.log(tip2);

// Challenge return a string message with the tip

console.log(`A ${tip1.percent}% tip on $${tip1.total} would be $${tip1.result}`)

let getTip2 = function (total, tipPercent = 0.2) {
    let percent = tipPercent * 100;
    let tip = total * tipPercent;
    return `A ${percent}% tip on $${total} would be $${tip}`;
}

let tip3 = getTip2(40, 0.25);
console.log(tip3);
