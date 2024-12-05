// HTML & Eventos

import { HorrorMovie } from "./classes/HorrorMovie";
import { Movie } from "./classes/Movie";
import { Director } from "./Models/Director";

const director1: Director<string> = {
  name: "Peter Jackson",
  age: 60,
  data: "He is Amazing"
}

const movie1 = new Movie("El Señor de los Anillos", 300, true, director1);
const movie2 = new Movie("Harry Potter", 120, true, director1);
const scream = new HorrorMovie("Scream", 90, false, director1, true);

