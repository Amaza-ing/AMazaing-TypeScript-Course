"use strict";
// Interfaces y clases
const director1 = {
    name: "Peter Jackson",
    age: 60,
    data: "He is Amazing"
};
class Movie {
    constructor(title, duration, hasOscars) {
        this.title = title;
        this.duration = duration;
        this.hasOscars = hasOscars;
    }
    getDuration() {
        return this.duration;
    }
    getInfo() {
        return `Title: ${this.title} - Duration: ${this.duration} - Has Oscars: ${this.hasOscars}`;
    }
    play() {
        console.log(`Playing ${this.title}`);
    }
}
class HorrorMovie extends Movie {
    constructor(title, duration, hasOscars, hasJumpScares) {
        super(title, duration, hasOscars);
        this.hasJumpScares = hasJumpScares;
    }
    displayAlert() {
        console.log("This movie is really scary");
    }
    getInfo() {
        return "Some movie info";
    }
}
const movie1 = new Movie("El Señor de los Anillos", 300, true);
const movie2 = new Movie("Harry Potter", 120, true);
movie1.title = "Star Wars";
console.log(movie1, movie2);
movie1.play();
// console.log(movie1.getInfo());
const scream = new HorrorMovie("Scream", 90, false, true);
// console.log(scream);
// scream.displayAlert()
// console.log(scream.getInfo());
