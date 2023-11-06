const colors = ["color1", "color2", "color3", "color4", "color5", "color6", "color7", "color8", "color9", "color10"];
const initialNotes = [
  {
    estado: true,
    title: 'My next trip',
    description: 'I would like to go to Spain',
    color: colors[2],
  },
  {
    estado: false,
    title: 'Habbits to work on',
    description: 'Exercise. Eating a bit better.',
    color: colors[3],
  },
  {
    estado: false,
    title: 'Office modification',
    description: 'Get a new seat',
    color: colors[8],
  },
  {
    estado: true,
    title: 'Work Office',
    description: 'New office',
    color: colors[4],
  },
  {
    estado: true,
    title: 'Day Exercise',
    description: 'Muscle exercise',
    color: colors[5],
  },

];

const notesFrom = JSON.parse(localStorage.getItem('notes'));
const notes = notesFrom || initialNotes;


function createNote(note) {
  notes.push(note);
  localStorage.setItem('notes', JSON.stringify(notes));
}

function changeStatus(note) {
  note.estado = !(note.estado);
  localStorage.setItem('notes', JSON.stringify(notes));
}
function deletNote(note) {
  console.log('delete');
  const index = notes.indexOf(note);
  notes.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notes));
}

function selectionColor(note) {
  note.color = colors[Math.floor(Math.random() * colors.length)];
  localStorage.setItem('notes', JSON.stringify(notes));
}