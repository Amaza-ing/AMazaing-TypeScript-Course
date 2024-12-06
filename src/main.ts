// Notes App

import { Note } from "./classes/Note";
import { NoteList } from "./classes/NoteList";

const createNote = (title: string) => {
  const id = Date.now().toString(36) + Math.random().toString(36).slice(2);

  return new Note(id, title);
};

const note1 = createNote("Ir a por el Pan");
const note2 = createNote("Contraseña del WiFi: 123456");

const notes: Note[] = [];

notes.push(note1);
notes.push(note2);

const btn = document.querySelector(".btn") as HTMLButtonElement;

btn.addEventListener("click", () => NoteList.createNoteCards(notes));

const noteForm = document.querySelector(".note-form") as HTMLFormElement;

noteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e);
  const form = e.target as HTMLFormElement;
  const input = form.elements[0] as HTMLInputElement;

  const newNote = createNote(input.value);
  notes.push(newNote);
  NoteList.createNoteCards(notes);
});
