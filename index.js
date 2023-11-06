function createNoteEl(note) {
  // Create element Content
  const dvnote = document.createElement('div');
  const dvinput = document.createElement('div');
  const title = document.createElement('p');
  const description = document.createElement('p');
  const dvoptions = document.createElement('div');
  const color = document.createElement('img');
  const random = document.createElement('img');
  const deleteNote = document.createElement('img');

  // Setup element Content
  dvnote.classList.add("nota", note.color, "js-note");
  dvinput.classList.add("flex-column");
  title.classList.add("text-sm", "regular", "semibold");
  title.textContent = note.title;
  description.classList.add("text-md");
  description.textContent = note.description;
  dvoptions.classList.add("flex-wrap", "align-end", "h-full");
  color.src = "images/icons/palette.svg";
  color.classList.add("pointer");
  random.src = "images/icons/random.svg";
  random.classList.add("pointer");
  deleteNote.src = "images/icons/framegray.svg";
  deleteNote.classList.add("pointer");

  // Build Note Content
  dvinput.append(title, description);
  dvoptions.append(color, random, deleteNote);
  dvnote.append(dvinput, dvoptions);
  // Build Note NoContent

  // Event Listeners
  deleteNote.addEventListener('click', (event) => {
    event.preventDefault();
    changeStatus(note);
    renderNotes(notes);
  });

  random.addEventListener('click', (event) => {
    event.preventDefault();
    selectionColor(note);
    renderNotes(notes);
  });

  return dvnote;
}



function renderNotes(notes) {

  const noteList = document.querySelector('.js-notes');
  noteList.innerHTML = '';

  const activos = notes.filter(note => note.estado === true);

  activos.forEach((note) => {
    let noteEl = createNoteEl(note);
    noteList.append(noteEl);
  });

  if (activos.length === 0) {
    const noContent = document.querySelector('.layout-nocontent');
    const content = document.querySelector('.layout-content');
    noContent.classList.remove('notvisible');
    content.classList.add('notvisible');
    console.log('no hay notas');
  }

}
renderNotes(notes);