// Módulos
import { Movie } from "./classes/Movie.js";
const director1 = {
    name: "Peter Jackson",
    age: 60,
    data: "He is Amazing"
};
class Series {
    constructor(title, duration, director, episodes) {
        this.title = title;
        this.duration = duration;
        this.director = director;
        this.episodes = episodes;
    }
    getDuration() {
        return this.duration;
    }
    play() {
        console.log("Playing a series");
    }
}
class HorrorMovie extends Movie {
    constructor(title, duration, hasOscars, director, hasJumpScares) {
        super(title, duration, hasOscars, director);
        this.hasJumpScares = hasJumpScares;
    }
    displayAlert() {
        console.log("This movie is really scary");
    }
    getInfo() {
        return "Some movie info";
    }
}
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
