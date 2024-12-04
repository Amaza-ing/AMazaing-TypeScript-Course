export class Movie {
    constructor(title, duration, hasOscars, director) {
        this.title = title;
        this.duration = duration;
        this.hasOscars = hasOscars;
        this.director = director;
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
