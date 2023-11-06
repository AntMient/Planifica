function createNoteDel(note) {
  // Create element Content
  const dvnote = document.createElement('div');
  const dvinput = document.createElement('div');
  const title = document.createElement('p');
  const description = document.createElement('p');
  const dvoptions = document.createElement('div');
  const deleteNote = document.createElement('img');
  const rest = document.createElement('img');

  // Setup element Content
  dvnote.classList.add("nota", note.color, "js-note");
  dvinput.classList.add("flex-column");
  title.classList.add("text-sm", "regular", "semibold");
  title.textContent = note.title;
  description.classList.add("text-md");
  description.textContent = note.description;
  dvoptions.classList.add("flex-wrap", "align-end", "h-full");
  deleteNote.src = "images/icons/framegray.svg";
  deleteNote.classList.add("pointer");
  rest.src = "images/icons/arrow.svg";
  rest.classList.add("pointer");

  // Build Note Content
  dvinput.append(title, description);
  dvoptions.append(deleteNote, rest);
  dvnote.append(dvinput, dvoptions);

  // Event Listeners
  deleteNote.addEventListener('click', (event) => {
    event.preventDefault();
    deletNote(note);
    renderNotes(notes);
  });

  rest.addEventListener('click', (event) => {
    event.preventDefault();
    changeStatus(note);
    renderNotes(notes);
  });
  return dvnote;
}

function renderNotes(notes) {

  const trashList = document.querySelector('.js-trash');
  trashList.innerHTML = '';
  const inactivos = notes.filter(note => note.estado === false);
  inactivos.forEach((note) => {
    let noteEl = createNoteDel(note);
    trashList.append(noteEl);
  });

  if (inactivos.length === 0) {
    const noContent = document.querySelector('.layout-nocontent');
    const content = document.querySelector('.layout-content');
    noContent.classList.remove('notvisible');
    content.classList.add('notvisible');
    console.log('no hay notas');
  }

}
renderNotes(notes);