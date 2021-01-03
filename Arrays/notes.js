const notes = [{}, {
    title: 'My next trip',
    body: 'I would like to go to Berlin'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}];

// console.log(notes[1]);

// for (var i = 0; i < notes.length; i++) {
//     console.log(notes[i]);
// }

notes.forEach(element => console.log(element));

// notes.forEach(function (element) {
//     console.log(element);
// });

// notes.pop();
// notes.push('My new note!');

// console.log(' ');
// console.log('------------');
// console.log(' ');
// notes.forEach(element => console.log(element));

// notes.shift();

// console.log(' ');
// console.log('------------');
// console.log(' ');
// notes.forEach(element => console.log(element));

// notes.unshift('This is my new first note');

// console.log(' ');
// console.log('------------');
// console.log(' ');
// notes.forEach(element => console.log(element));

// notes.splice(1, 1);

// console.log(' ');
// console.log('------------');
// console.log(' ');
// notes.forEach(element => console.log(element));

// notes.splice(1, 0, 'This is the new second item');

// console.log(' ');
// console.log('------------');
// console.log(' ');
// notes.forEach(element => console.log(element));

// notes.splice(1, 1, 'This is the new second second item');

// console.log(' ');
// console.log('------------');
// console.log(' ');
// notes.forEach(element => console.log(element));

// console.log(notes.indexOf({}));

const index = notes.findIndex((note, index) => {
    console.log(note);
    return note.title === 'Habbits to work on'
});

console.log(index);
