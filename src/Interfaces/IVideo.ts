import { Director } from "../Models/Director.js";

export interface IVideo<T> {
  title: string;
  director: Director<T>;
  getDuration(): number;
  play(): void;
}