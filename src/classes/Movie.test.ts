import { Director } from "../Models/Director";
import { Movie } from "./Movie";

describe("Movie tests", () => {
  const director: Director<string> = {
    name: "Stanley Kubrick",
    age: 50,
    data: "Great director",
  };

  const movie: Movie = new Movie("La Naranja Mecánica", 100, true, director);

  it("title should be La Naranja mecánica", () => {
    expect(movie.title).toBe("La Naranja Mecánica");
  });
});
