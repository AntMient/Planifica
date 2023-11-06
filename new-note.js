const form = document.querySelector('.js-note-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const { title, description } = event.target.elements;
  const newNote = {
    title: title.value,
    description: description.value,
    estado: true,
  };
  if (newNote.title === "" && newNote.description === "") { return }
  if (newNote.title === "") { newNote.title = "No Title" };
  if (newNote.description === "") { newNote.description = "No Description" };

  createNote(newNote);
  location.assign("/");
});