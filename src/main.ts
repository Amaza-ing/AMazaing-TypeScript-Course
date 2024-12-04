// Webpack

// npm init
// npm i webpack webpack-cli ts-loader typescript -D

import { HorrorMovie } from "./classes/HorrorMovie";
import { Movie } from "./classes/Movie";
import { Director } from "./Models/Director";

const director1: Director<string> = {
  name: "Peter Jackson",
  age: 60,
  data: "He is Amazing"
}

// console.log(director1);

const movie1 = new Movie("El Señor de los Anillos", 300, true, director1);
const movie2 = new Movie("Harry Potter", 120, true, director1);

// movie1.title = "Star Wars";

console.log(movie1, movie2);
movie1.play();
// console.log(movie1.getInfo());

const scream = new HorrorMovie("Scream", 90, false, director1, true);

// console.log(scream);
// scream.displayAlert()
// console.log(scream.getInfo());
