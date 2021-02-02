const todos = getSavedToDos()

const filters = {
  text: '',
  hideCompleted: false
}

renderToDos(todos, filters)

// Add an eventListener to the input for filtering the ToDo's
document.querySelector('#filter-text').addEventListener('input', (event) => {
  filters.text = event.target.value // add the text value of the input to the property text of the filter object
  renderToDos(todos, filters) // render all the todos with the filtered text
})

document.querySelector('#new-todo-form').addEventListener('submit', (event) => {
  event.preventDefault()
  const todoText = event.target.todoText.value.trim()

  if (todoText.length > 0) {
    todos.push({
      id: uuidv4(),
      text: todoText,
      completed: false
    })
    event.target.todoText.value = ''
    saveToDos(todos)
    renderToDos(todos, filters)
  }
})

document
  .querySelector('#hide-completed')
  .addEventListener('change', (event) => {
    filters.hideCompleted = event.target.checked
    renderToDos(todos, filters)
  })
