// Clases

class Movie {
  title: string;
  duration: number;
  hasOscars: boolean;

  constructor(title: string, duration: number, hasOscars: boolean) {
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

console.log(movie1, movie2);

