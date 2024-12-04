import { Director } from "../Models/Director.js";
import { Movie } from "./Movie.js";

export class HorrorMovie extends Movie {
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
