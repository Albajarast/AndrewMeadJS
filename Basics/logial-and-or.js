// let temp = 65

// if (temp >= 60 && temp <= 90) {
//     console.log('It is pretty nice out');

// }

let isGuestTwoVegan = false
let isGuestOneVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('We have this vegan dishes');
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('We have some vegan options for one of you');
} else {
    console.log('You can choose anything from the menu');
}