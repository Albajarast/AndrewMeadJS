const todos = [{
    text: 'todo 1',
    completed: false
}, {
    text: 'todo 2',
    completed: true
}, {
    text: 'todo 3',
    completed: false
}, {
    text: 'todo 4',
    completed: true
}, {
    text: 'todo 5',
    completed: false
}];

const deleteTodo = function (list, text) {
    const index = list.findIndex(function (list) {
        return list.text.toLowerCase() === text.toLowerCase(); // to make it no case sensitve
    });

    if (index != -1) {
        list.splice(index, 1);
    }
};

const showList = function (todoArray) {
    console.log('\n This is are the items in your To-Do list:')
    todoArray.forEach((element, index) => {
        const num = index + 1;
        let status = ''
        if (element.completed === true) {
            status = ' - Completed'
        }
        console.log(`\t ${num}.  ${element.text}${status}`);
    });
};

const completed = function (todoArray) {
    return todoArray.filter(function (todo) {
        return todo.completed === true;
    });
}

const todoList = function (todoArray) {
    return todoArray.filter(function (todo) {
        return todo.completed === false;
    });
}

const sortTodos = function (todoArray) {
    todoArray.sort(function (a, b) {
        if (a.completed > b.completed) {
            return 1;
        } else if (a.completed < b.completed) {
            return -1;
        } else {
            return 0;
        }
    })
}

showList(todos);
console.log('---------------------------------' + '\n Sorting Todos list by completed' + '\n---------------------------------');
sortTodos(todos);
showList(todos);


// showList(todos);
// const toDelete = 'todo 1'
// // console.log('\n You are going to delete:' + toDelete)
// // deleteTodo(todos, toDelete);
// showList(todos);
// showList(completed(todos));
// showList(todoList(todos));

// const removeComlpeted = function (todos)