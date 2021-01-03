const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const butttonElement = document.querySelector('#remove-note');
const id = location.hash.substring(1);
const lastUpdated = document.querySelector('#last-updated');



let notes = getSavedNotes();
let note = notes.find(function (note) {
    return note.id === id;
});

// If the note wasn't found it redirects to index.html
if (note === undefined) {
    location.assign(index.html);
}

titleElement.value = note.title;

lastUpdated.textContent = generateLastEdited(note.updatedAt);

bodyElement.value = note.body;

titleElement.addEventListener('input', function (e) {
    note.title = e.target.value;
    note.updatedAt = moment().valueOf();
    lastUpdated.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes);
});

bodyElement.addEventListener('input', function (e) {
    note.body = e.target.value;
    note.updatedAt = moment().valueOf();
    lastUpdated.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes);
});

butttonElement.addEventListener('click', function (e) {
    removeNote(note.id);
    saveNotes(notes);
    location.assign('index.html');
});

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        note = notes.find(function (note) {
            return note.id === id;
        });

        if (note === undefined) {
            location.assign(index.html);
        }

        titleElement.value = note.title;
        bodyElement.value = note.body;
        lastUpdated.textContent = generateLastEdited(note.updatedAt);
    }
})