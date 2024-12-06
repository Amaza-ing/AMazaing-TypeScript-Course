// Notes App

import { Note } from "./classes/Note";
import { NoteList } from "./classes/NoteList";

const createNote = (title: string) => {
  const id = Date.now().toString(36) + Math.random().toString(36).slice(2);

  return new Note(id, title);
};

const notes: Note[] = [];

const noteForm = document.querySelector(".note-form") as HTMLFormElement;

noteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e);
  const form = e.target as HTMLFormElement;
  const input = form.elements[0] as HTMLInputElement;

  const newNote = createNote(input.value);
  notes.unshift(newNote);
  NoteList.createNoteCards(notes);
});
