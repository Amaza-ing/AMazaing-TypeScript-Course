import { IVideo } from "../Interfaces/IVideo";
import { Director } from "../Models/Director";

export class Movie implements IVideo<string> {
  constructor(
    public title: string,
    private duration: number,
    readonly hasOscars: boolean,
    public director: Director<string>
  ) {}

  getDuration(): number {
    return this.duration;
  }

  geTHoursMinutes(): string {
    const mins = this.duration % 60;
    const hours = (this.duration - mins) / 60;

    return `${hours}h ${mins}m`;
  }

  getInfo() {
    return `Title: ${this.title} - Duration: ${this.duration} - Has Oscars: ${this.hasOscars}`;
  }

  play(): void {
    console.log(`Playing ${this.title}`);
  }
}
