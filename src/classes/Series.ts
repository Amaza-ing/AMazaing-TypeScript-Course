import { IEpisodic } from "../Interfaces/IEpisodic";
import { IVideo } from "../Interfaces/IVideo";
import { Director } from "../Models/Director";

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
