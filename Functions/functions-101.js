let getUser = function () {
    console.log('Welcome user!');
}

getUser();

function square(num) {
    return num * num;
}
console.log(square(4));

// Challenga Area

function converFahrenheitToCelsius(tempFahrenheit) {
    let result = (tempFahrenheit - 32) * (5 / 9);
    return result;
}

console.log(converFahrenheitToCelsius(32));
console.log(converFahrenheitToCelsius(68));
