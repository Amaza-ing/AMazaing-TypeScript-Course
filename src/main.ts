// Funciones

function sum(n1: number, n2: number) : number {
  return n1 + n2;
}

// let result: string;
let result: number;

result = sum(3, 4);
console.log(result);


const toUpper = (str: string) => {
  return str.toUpperCase();
}

toUpper("Hola!");


function sayHello(){
  console.log("Hello!");  
}

sayHello();