// Load saved data from localStorage
const getSavedToDos = function () {
    const todosJSON = localStorage.getItem('todos');

    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    } else {
        return [];
    }
}

// Save todos to localStorage
const saveToDos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}


// Render application todos based on filters
const renderToDos = function (todoList, filters) {
    let filteredToDos = todoList.filter(function (toDo) {
        return toDo.text.toLowerCase().includes(filters.text.toLowerCase());
    });

    filteredToDos = filteredToDos.filter(function (toDo) {
        return !filters.hideCompleted || !toDo.completed;
    })

    // Returns an array with the ToDo's with the completed property equal to false
    const incompleteToDos = filteredToDos.filter(function (todo) {
        return !todo.completed;
    });

    // Remove all the content of the div with id="summary"
    document.querySelector('#summary').innerHTML = '';

    generateSummaryDOM(incompleteToDos);

    // Remove all the content from the div with id="todos"
    document.querySelector('#todos').innerHTML = '';

    // Add all the filtered ToDo's as <p> in the div with id="todos"
    filteredToDos.forEach(function (toDo) {
        document.querySelector('#todos').appendChild(generateToDoDOM(toDo));
    });
};

// Remove a todo from the list
const removeToDo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id;
    });

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }
}

// Set completed as true when the checkbox is checked
const toggleTodo = function (id) {
    const todo = todos.find(function (todo) {
        return todo.id === id;
    })

    if (todo !== undefined) {
        todo.completed = !todo.completed;
    }
}

// Get the DOM elements for an individual todo
const generateToDoDOM = function (toDo) {
    const todoDiv = document.createElement('div');
    const removeButton = document.createElement('button');
    const todoText = document.createElement('span');
    const checkbox = document.createElement('input')

    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = toDo.completed;
    todoDiv.appendChild(checkbox);
    checkbox.addEventListener('change', function () {
        toggleTodo(toDo.id);
        saveToDos(todos);
        renderToDos(todos, filters);
    })

    todoText.textContent = toDo.text;
    todoDiv.appendChild(todoText);

    removeButton.textContent = 'Delete';
    todoDiv.appendChild(removeButton);
    removeButton.addEventListener('click', function () {
        removeToDo(toDo.id);
        saveToDos(todos)
        renderToDos(todos, filters);
    })

    return todoDiv;
}

// Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteToDos) {
    // Show number of the filtered ToDo's that are uncompleted(incompleteToDos.length)
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteToDos.length} ToDos left`;
    document.querySelector('#summary').appendChild(summary);
}
