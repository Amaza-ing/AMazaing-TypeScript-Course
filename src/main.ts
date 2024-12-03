// Elementos del DOM

const h1 = document.querySelector("h1");
console.log(h1?.textContent);

const title = document.querySelector(".title") as HTMLHeadingElement;
console.log(title.textContent);

const username = document.querySelector("#username") as HTMLInputElement;
console.log(username.placeholder);
