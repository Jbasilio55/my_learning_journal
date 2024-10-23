import { blogs } from "/blogs.js";

let start = 1;
let contentNum = 3;

const main = document.querySelector(".main");
const mainContainer = document.querySelector(".main-container");

main.style.backgroundImage = `url("${blogs[0].image}")`;
mainContainer.innerHTML = `
<p>${blogs[0].date}</p>
<h1>${blogs[0].title}</h1>
<h2>${blogs[0].heading}</h2>
`;

const blogContainer = document.querySelector(".blog-container");

let htmlString = "";

for (let i = start; i < contentNum + 1; i++) {
  htmlString += `
  <div class="card-container">
    <img src="${blogs[i].image}"/>
    <p>${blogs[i].date}</p>
    <h2>${blogs[i].title}</h2>
    <h3>${blogs[i].heading}</h3>
  </div>
  `;
}

console.log(htmlString);

blogContainer.innerHTML += htmlString;
