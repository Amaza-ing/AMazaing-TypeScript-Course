// Notes App

import { NoteList } from "./classes/NoteList";

const noteForm = document.querySelector(".note-form") as HTMLFormElement;

noteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const input = form.elements[0] as HTMLInputElement;

  NoteList.createNote(input.value);
  input.value = "";
});
