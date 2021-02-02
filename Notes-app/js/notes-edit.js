'use strict'

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const buttonElement = document.querySelector('#remove-note')
const id = location.hash.substring(1)
const lastUpdated = document.querySelector('#last-updated')

let notes = getSavedNotes()
let note = notes.find((note) => note.id === id)

// If the note wasn't found it redirects to index.html
// if (note === undefined) {
if (!note) {
  location.assign(index.html)
}

titleElement.value = note.title

lastUpdated.textContent = generateLastEdited(note.updatedAt)

bodyElement.value = note.body

titleElement.addEventListener('input', (e) => {
  note.title = e.target.value
  note.updatedAt = moment().valueOf()
  lastUpdated.textContent = generateLastEdited(note.updatedAt)
  saveNotes(notes)
})

bodyElement.addEventListener('input', (e) => {
  note.body = e.target.value
  note.updatedAt = moment().valueOf()
  lastUpdated.textContent = generateLastEdited(note.updatedAt)
  saveNotes(notes)
})

buttonElement.addEventListener('click', (e) => {
  removeNote(note.id)
  saveNotes(notes)
  location.assign('index.html')
})

window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue)
    note = notes.find((note) => note.id === id)

    // if (note === undefined) {
    if (!note) {
      location.assign(index.html)
    }

    titleElement.value = note.title
    bodyElement.value = note.body
    lastUpdated.textContent = generateLastEdited(note.updatedAt)
  }
})
