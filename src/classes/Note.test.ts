import { Note } from "./Note"

describe("Note testing", () => {
  it("Should return correct number of characters", () => {
    const note = new Note("abc", "Hola!");

    expect(note.getLength()).toBe(5);
  })

  it("Note should be checked", () => {
    const note = new Note("abc", "abc", true);

    expect(note.getCompleted()).toBeTruthy();
  })
})