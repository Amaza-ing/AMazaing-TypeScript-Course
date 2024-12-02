// Tipos de datos:

let id: number | string = 123456;
id = "abcde";

type id = number | string;
let userId: id = "abc123";

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

let myArr: (number | string | boolean)[] = [10, 20, 30];
myArr = [40, 50, "str1", "str2", true, false];

console.log(id, esdla, myArr);
