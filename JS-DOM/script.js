// Selecting Elements by ID
// ============================================
/*
const title = document.getElementById("title");
console.log(title);
console.log(title.textContent);
console.log(title.innerHTML);
console.log(title.innerText);
*/

// Selecting Elements by Class Name
// ====================================================
/*
const liItems = document.getElementsByClassName("item");
console.log(liItems);

const liArray = Array.from(liItems);
liArray.map((item) => {
  console.log(item.textContent);
});
*/

// Selecting Elements by Tag Name
// ==================================================
/*
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

const paraArray = Array.from(paragraphs);
paraArray.map((para) => {
  console.log(para.textContent);
});
*/

// querySelector / querySelectorAll
// ===========================================
/*
const title = document.querySelector("#title");
console.log(title);

const tag = document.querySelectorAll("p");
console.log(tag);

const liItems = document.querySelectorAll(".item");
console.log(liItems);
liItems.forEach((item) => {
  console.log(item.textContent);
});
*/

// Changing Text Content
// ======================================================
const title = document.querySelector("h1");
title.textContent = "Welcome to JavaScript DOM Tutorial";
// title.innerText = "Welcome to JavaScript DOM Tutorial";
// title.innerHTML = "Welcome to JavaScript DOM Tutorial";

// Add HTML inside h1
// title.innerHTML = `<span>This is Span Tag</span>`;

/*
const body = document.querySelector("body");
// console.log(body);
console.log(body.parentElement); // element
console.log(body.parentNode); // node -> element, text, comments
*/

const body = document.querySelector("body");
console.log(body.children);
console.log(body.children[0].textContent);
console.log(body.childNodes);

console.log(
  body.children[0].nextElementSibling.nextElementSibling.nextElementSibling
    .previousElementSibling,
);

// console.log(body.firstElementChild);
// console.log(body.lastElementChild);

// UL First & Last Child
// ============================================
const ulElement = document.querySelector("ul");
console.log(ulElement.firstElementChild);
console.log(ulElement.lastElementChild);

// Creating New Paragraph
// =============================================
const p = document.createElement("p"); // create
p.textContent = "This is Paragraph created by using javascript";
body.append(p);
console.log(p);

// Creating & Adding LI Elements
// =====================================
const ul = document.querySelector("ul");
// append() → adds at end
const li = document.createElement("li");
li.textContent = "ReactJS";
ul.append(li);

// prepend() → adds at beginning
const li2 = document.createElement("li");
li2.textContent = "NodeJS";
ul.prepend(li2);

// before() & after()
const li3 = document.createElement("li");
li3.textContent = "FrontEnd Programming Languages";
// ul.children[0].after(li3);
ul.children[0].before(li3);

// Styling Elements
// =====================================
const h1 = document.querySelector("h1");
// h1.style.color = "red";
// h1.style.backgroundColor = "lightgray";
// h1.style.borderRadius = "10px";
// h1.style.padding = "10px";
// h1.style.textAlign = "center";

// Add CSS class
h1.classList.add("color");

// ul.classList.add("list", "font");
// ul.classList.remove("font");

// console.log(ul.classList.contains("font")); // false

// ul.classList.toggle("list");
// ul.classList.toggle("list");

// Button Click Event
// ==========================================
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  ul.classList.toggle("list", "font");
});

// insertAdjacentHTML Examples
// ==========================================================================
/*
const div = document.querySelector("div");
div.insertAdjacentHTML("beforebegin", "<p>This is beforebegin Paragraph</p>");
div.insertAdjacentHTML("afterbegin", "<p>This is afterbegin Paragraph</p>");
div.insertAdjacentHTML("beforeend", "<p>This is beforeend Paragraph</p>");
div.insertAdjacentHTML("afterend", "This is afterend Paragraph");
*/

// insertAdjacentElement Example
// ==========================================
/*
const div = document.querySelector("div");
const para1 = document.createElement("p");
para1.textContent = "This is another Paragraph";

div.insertAdjacentElement("beforebegin", para1);
div.insertAdjacentElement("afterbegin", para1);
div.insertAdjacentElement("beforeend", para1);
div.insertAdjacentElement("afterend", para1);
*/

// Attributes Handling
// ===============================================
const inputEle = document.querySelector("input");
// console.log(inputEle.getAttribute("type"));
// console.log(inputEle.getAttribute("name"));
// console.log(inputEle.getAttribute("placeholder"));

inputEle.setAttribute("type", "password");
console.log(inputEle.hasAttribute("placeholder")); // true

const anchorTag = document.querySelector("a");
console.log(anchorTag.getAttribute("href"));
console.log(anchorTag.href);
