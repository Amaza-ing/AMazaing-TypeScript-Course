import { IEpisodic } from "../Interfaces/IEpisodic.js";
import { IVideo } from "../Interfaces/IVideo.js";
import { Director } from "../Models/Director.js";

export class Series implements IVideo<string>, IEpisodic {
  constructor(
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
