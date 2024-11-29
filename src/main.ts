// Tipos de datos:

let movie: string = "El Señor de los anillos";
let duration: number = 200;
let hasOscars: boolean = true;

movie = "La Comunidad del Anillo";
// movie = 1234;

duration = 240;
// duration = "4 horas";

hasOscars = false;
// hasOscars = 1234;

let myObject: object = {
  product: "Computer",
  price: 1234,
};

myObject = {
  patata: true,
};

myObject = []; // typeof [] = object

// let myArr: [] = [10, 20, 30];
let myArr: number[] = [10, 20, 30];

myArr = [40, 50];
// myArr = ["str1", "str2"];

let data: any = 9999;

data = "ahora es un string";
data = true;
data = {};
data = [];
data = null;

console.log(movie, duration, hasOscars, data);
