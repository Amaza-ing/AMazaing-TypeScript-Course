// Genéricos

// function getFirstElement(array: number[]) {
//   return array[0];
// }

function getFirstElement<T>(array: T[]) {
  return array[0];
}

const numArr = [10, 20, 30];
const firstNum = getFirstElement(numArr);

const strArr = ["a", "b", "c"];
const firstStr = getFirstElement<string>(strArr);

console.log(firstNum, firstStr);


const username = document.querySelector<HTMLInputElement>("#username");
console.log(username?.placeholder);


