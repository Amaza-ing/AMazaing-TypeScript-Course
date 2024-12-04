// Módulos

import { Movie } from "./classes/Movie.js";

interface Director<T> {
  name: string;
  age: number;
  data: T;
}

const director1: Director<string> = {
  name: "Peter Jackson",
  age: 60,
  data: "He is Amazing"
}

// console.log(director1);




interface IVideo<T> {
  title: string;
  director: Director<T>;
  getDuration(): number;
  play(): void;
}

interface IEpisodic {
  episodes: number;
}




class Series implements IVideo<string>, IEpisodic {
  constructor (
    public title: string,
    private duration: number,
    public director: Director<string>,
    public episodes: number
  ) {}

  public getDuration(): number {
    return this.duration;
  }

  public play(): void {
    console.log("Playing a series");    
  }
}




class HorrorMovie extends Movie {
  constructor(
    title: string,
    duration: number,
    hasOscars: boolean,
    director: Director<string>,
    public hasJumpScares: boolean
  ) {
    super(title, duration, hasOscars, director);
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
