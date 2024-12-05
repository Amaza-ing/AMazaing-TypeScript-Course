// HTML & Eventos

import { HorrorMovie } from "./classes/HorrorMovie";
import { Movie } from "./classes/Movie";
import { Director } from "./Models/Director";

const director1: Director<string> = {
  name: "Peter Jackson",
  age: 60,
  data: "He is Amazing",
};

const movie1 = new Movie("El Señor de los Anillos", 300, true, director1);
const movie2 = new Movie("Harry Potter", 120, true, director1);
const scream = new HorrorMovie("Scream", 90, false, director1, true);

const movieArr: Movie[] = [movie1, movie2, scream];

const btn = document.querySelector(".btn") as HTMLButtonElement;
const movieList = document.querySelector(".movie-list") as HTMLUListElement;

const addMovie = (movie: Movie) => {
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const h4 = document.createElement("h4");
  const p = document.createElement("p");

  h3.classList.add("title");
  h3.textContent = movie.title;

  h4.classList.add("duration");
  h4.textContent = `${movie.getDuration()} min.`;

  p.textContent = `Director: ${movie.director.name}`;

  li.classList.add("movie-card");
  li.append(h3);
  li.append(h4);
  li.append(p);

  movieList.append(li);
};

btn.addEventListener("click", () => {
  movieArr.forEach((movie) => addMovie(movie));
});
