// Interfaces y clases

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




interface IVideo {
  title: string;
  // duration: number; // Only Public methods and properties
  getDuration(): number;
  play(): void;
}




class Movie implements IVideo{
  constructor(
    public title: string,
    private duration: number,
    readonly hasOscars: boolean
  ) {}

  getDuration(): number {
    return this.duration;
  }

  getInfo() {
    return `Title: ${this.title} - Duration: ${this.duration} - Has Oscars: ${this.hasOscars}`;
  }

  play(): void {
    console.log(`Playing ${this.title}`);    
  }
}

class HorrorMovie extends Movie {
  constructor(
    title: string,
    duration: number,
    hasOscars: boolean,
    public hasJumpScares: boolean
  ) {
    super(title, duration, hasOscars);
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
