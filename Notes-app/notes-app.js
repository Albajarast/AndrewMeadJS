let notes = getSavedNotes()

const filters = {
  searchText: '',
  sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#add-note').addEventListener('click', (event) => {
  const noteID = uuidv4()
  const timestamp = moment().valueOf()

  notes.push({
    id: noteID,
    title: '',
    body: '',
    createdAt: timestamp,
    updatedAt: timestamp
  })
  saveNotes(notes)
  location.assign('edit.html#' + noteID)
})

document.querySelector('#search-text').addEventListener('input', (event) => {
  filters.searchText = event.target.value
  renderNotes(notes, filters)
})

document.querySelector('#filterBy').addEventListener('change', (event) => {
  filters.sortBy = event.target.value
  renderNotes(notes, filters)
})

window.addEventListener('storage', function (e) {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue)
    renderNotes(notes, filters)
  }
})
