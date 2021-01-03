const todo = ['Order food', 'Make laundry', 'Study Javascript', 'Call Hernan', 'Clear out the to-do list',];

console.log(`You still have ${todo.length} todos!`);

var showList = function (todoArray) {
    console.log('\n This is are the items in your To-Do list:')
    todoArray.forEach((element, index) => {
        const num = index + 1;
        console.log(`\t ${num}.  ${element}`);
    });
};

showList(todo);

// Delte the third item (index is 2)
todo.splice(2, 1);

// Add a new item onto the end
todo.push('I will not ever close this todo list');

// Remove the first item from the list
todo.shift();

showList(todo)