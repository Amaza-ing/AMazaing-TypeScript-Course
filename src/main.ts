// Tipos de datos:

// Union

let id: number | string = 123456;
id = "abcde";

type id = number | string;

let userId: id = "abc123";

let myArr: (number | string | boolean)[] = [10, 20, 30];
myArr = [40, 50, "str1", "str2", true, false];


// Literal

type stateLoading = "loading";
type stateError = "error";

const loading: stateLoading = "loading";
const error: stateError = "error";

type state = stateLoading | stateError;

let state: state = "loading";

type movie = {
  title: string;
  duration: number;
  hasOscars: boolean;
};

const esdla: movie = {
  title: "El Señor de los anillos",
  duration: 200,
  hasOscars: true,
};

console.log(id, esdla, myArr);


// Intersection

type book = {
  title: string;
  pages: number;
}

type bookAdaptation = movie & book;

const harryPotter: bookAdaptation = {
  title: "Harry Potter",
  duration: 120,
  hasOscars: true,
  pages: 400
}


type numStr = number & string;

let a: numStr;