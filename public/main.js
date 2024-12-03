"use strict";
// Clases
class Movie {
    // public title: string;
    // private duration: number;
    // readonly hasOscars: boolean;
    constructor(title, duration, hasOscars) {
        this.title = title;
        this.duration = duration;
        this.hasOscars = hasOscars;
    }
    getInfo() {
        return `Title: ${this.title} - Duration: ${this.duration} - Has Oscars: ${this.hasOscars}`;
    }
}
const movie1 = new Movie("El Señor de los Anillos", 300, true);
const movie2 = new Movie("Harry Potter", 120, true);
movie1.title = "Star Wars";
// movie1.duration = 200;
// movie1.hasOscars = false;
console.log(movie1, movie2);
console.log(movie1.getInfo());
