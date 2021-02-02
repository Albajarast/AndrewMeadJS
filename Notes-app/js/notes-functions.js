// Strict mode will prevent undeclared variables to leak to the global scope and will also prevent the use reserved keywords and variable name
'use strict'

// // Examples for strict mode'
// const public = true
// const processData = () => {
//   data = '123213dfsdfsdf'
// }

// processData()
// console.log(data)

// Read existing notes from localStorage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes')
  try {
    return notesJSON ? JSON.parse(notesJSON) : []
  } catch (e) {
    return []
  }
}

// Save the notes to the localStorage
const saveNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note from the list
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => note.id === id)

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
  }
}

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
  const noteElement = document.createElement('a')
  const textElement = document.createElement('p')
  const status = document.createElement('p')

  // const button = document.createElement('button')
  // Set the remove note button
  // button.textContent = 'x'
  // noteElement.appendChild(button)
  // button.addEventListener('click', () => {
  //   removeNote(note.id)
  //   saveNotes(notes)
  //   renderNotes(notes, filters)
  // })

  // Set the note title text
  if (note.title.length > 0) {
    textElement.textContent = note.title
  } else {
    textElement.textContent = 'Unnamed note'
  }

  noteElement.appendChild(textElement)

  // Setup the link
  noteElement.setAttribute('href', `edit.html#${note.id}`)
  noteElement.classList.add('list-item')

  // Setup the status message
  status.textContent = generateLastEdited(note.updatedAt)
  status.classList.add('list-item__subtitle')
  noteElement.appendChild(status)

  return noteElement
}

// Sort your notes by one of three options

const sortNotes = (notes, sortBy) => {
  if (sortBy === 'byEdited') {
    return notes.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1
      } else if (a.updatedAt < b.updatedAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === 'byCreated') {
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1
      } else if (a.createdAt < b.createdAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === 'alphabetical') {
    return notes.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1
      } else {
        return 0
      }
    })
  } else {
    return notes
  }
}

// Render APP notes
const renderNotes = (notes, filters) => {
  notes = sortNotes(notes, filters.sortBy)
  const notesEl = document.querySelector('#notes')
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  )

  notesEl.innerHTML = ''

  if (filteredNotes.length > 0) {
    filteredNotes.forEach((note) => {
      const noteElement = generateNoteDOM(note)
      notesEl.appendChild(noteElement)
    })
  } else {
    const emptyMessage = document.createElement('p')
    emptyMessage.textContent = 'There are no notes to show'
    emptyMessage.classList.add('empty-message')
    notesEl.appendChild(emptyMessage)
  }
}

// Generate the last edited message
const generateLastEdited = (timestamp) =>
  `Last edited: ${moment(timestamp).fromNow()}`
