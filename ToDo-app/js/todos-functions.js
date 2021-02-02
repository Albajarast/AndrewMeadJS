// Load saved data from localStorage
const getSavedToDos = () => {
  const todosJSON = localStorage.getItem('todos')

  try {
    return todosJSON ? JSON.parse(todosJSON) : []
  } catch (e) {
    return []
  }
}

// Save todos to localStorage
const saveToDos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters
const renderToDos = (todoList, filters) => {
  const filteredToDos = todoList.filter((toDo) => {
    const searchTextMatch = toDo.text
      .toLowerCase()
      .includes(filters.text.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !toDo.completed

    return searchTextMatch && hideCompletedMatch
  })

  const todoEl = document.querySelector('#todos')

  // Returns an array with the ToDo's with the completed property equal to false
  const incompleteToDos = filteredToDos.filter((todo) => !todo.completed)

  // Remove all the content of the div with id="summary"
  const summary = document.querySelector('#summary')
  summary.innerHTML = ''

  if (filteredToDos.length > 0) {
    generateSummaryDOM(incompleteToDos)
  } else {
    summary.textContent = 'No to-dos to show'
    summary.classList.add('empty-message')
  }

  // Remove all the content from the div with id="todos"
  todoEl.innerHTML = ''

  // Add all the filtered ToDo's as <p> in the div with id="todos"
  filteredToDos.forEach((toDo) => {
    todoEl.appendChild(generateToDoDOM(toDo))
  })
}

// Remove a todo from the list
const removeToDo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id)

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
}

// Set completed as true when the checkbox is checked
const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id)

  // if (todo !== undefined) {
  if (todo) {
    todo.completed = !todo.completed
  }
}

// Get the DOM elements for an individual todo
const generateToDoDOM = (toDo) => {
  const todoEl = document.createElement('label')
  const containerEl = document.createElement('div')
  const removeButton = document.createElement('button')
  const todoText = document.createElement('span')
  const checkbox = document.createElement('input')

  checkbox.setAttribute('type', 'checkbox')
  checkbox.checked = toDo.completed
  containerEl.appendChild(checkbox)
  checkbox.addEventListener('change', function () {
    toggleTodo(toDo.id)
    saveToDos(todos)
    renderToDos(todos, filters)
  })

  todoText.textContent = toDo.text
  containerEl.appendChild(todoText)
  todoEl.appendChild(containerEl)

  removeButton.textContent = 'Delete'
  removeButton.classList.add('button', 'button--text')
  todoEl.appendChild(removeButton)
  removeButton.addEventListener('click', function () {
    removeToDo(toDo.id)
    saveToDos(todos)
    renderToDos(todos, filters)
  })

  todoEl.classList.add('list-item')
  containerEl.classList.add('list-item__container')

  return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteToDos) => {
  // Show number of the filtered ToDo's that are uncompleted(incompleteToDos.length)
  const summary = document.createElement('h2')
  summary.classList.add('list-title')
  const plural = incompleteToDos.length === 1 ? '' : 's'
  summary.textContent = `You have ${incompleteToDos.length} ToDo${plural} left`
  document.querySelector('#summary').appendChild(summary)
}
