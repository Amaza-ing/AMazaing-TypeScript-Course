// Notes App

import { Note } from "./classes/Note";

// npm install -g typescript
//
// tsconfig.json:
//   "module": "ESNext",
//   "rootDir": "./src",
//   "outDir": "./public",
//   "include": ["src"]
//
// npm init
// npm i webpack webpack-cli ts-loader typescript webpack-dev-server -D
// webpack.config.js
// package.json
//
// npm i jest babel-jest @babel/core @babel/preset-env @babel/preset-typescript @types/jest -D
// babel.config.js
// package.json

const createNote = (title: string) => {
  const id = Date.now().toString(36) + Math.random().toString(36).slice(2);

  return new Note(id, title);
};

const note1 = createNote("Ir a por el Pan");
const note2 = createNote("Contraseña del WiFi: 123456");

const notes: Note[] = [];

notes.push(note1);
notes.push(note2);

const createNoteCards = (notes: Note[]) => {
  const noteList = document.querySelector(".note-list") as HTMLUListElement;

  notes.forEach((note) => {
    const li = document.createElement("li");
    const input = document.createElement("input");
    const checkbox = document.createElement("input");

    input.classList.add("title");
    input.value = note.getTitle();

    checkbox.type = "checkbox";

    li.classList.add("note-card");
    li.append(input);
    li.append(checkbox);

    noteList.append(li);
  });
};

const btn = document.querySelector(".btn") as HTMLButtonElement;

btn.addEventListener("click", () => createNoteCards(notes));
