// Global scope (convertFahrenheitToCelsius, temp1, temp2)
// // local scope (fahrenheit, celsius)
// // // local scope (isFreezing)


let converFahrenheitToCelsius = function (tempFahrenheit) {
    let celsius = (tempFahrenheit - 32) * (5 / 9);

    if (celsius <= 0) {
        let isFreezing = true;
    }

    return celsius;
}

let temp1 = converFahrenheitToCelsius(32);
let temp2 = converFahrenheitToCelsius(68);

console.log(temp1);
console.log(temp2);

