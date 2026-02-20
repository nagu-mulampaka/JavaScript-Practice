// JavaScript Events Example

const h2 = document.querySelector("h2");

/*
// DOM Property events
//=======================================
h2.onclick = () => {
  console.log("clicked");
  console.log("clicked again");
  h2.style.color = "red";
};
*/

// addEventListener method
//=========================================
/* h2.addEventListener("click", () => {
  console.log("clicked");
  h2.style.color = "red";
}); */

/*
h2.addEventListener("dblclick", () => {
  console.log("double clicked");
  h2.style.color = "red";
});
*/

// Mouse Events
// ==========================================
/* h2.addEventListener("mouseover", () => {
  h2.style.color = "red";
});

h2.addEventListener("mouseleave", () => {
  h2.style.color = "black";
}); */

/* h2.addEventListener("mouseenter", () => {
  console.log("Mouse Enter");
  h2.style.backgroundColor = "red";
  h2.style.color = "white";
  h2.style.padding = "20px";
  h2.style.borderRadius = "10px";
  h2.style.fontFamily = "sans-serif";
  h2.style.fontSize = "25px";
}); 

h2.addEventListener("mouseout", () => {
  h2.style.backgroundColor = "white";
  h2.style.color = "black";
  h2.style.padding = "0px";
  h2.style.fontFamily = "none";
}); */

// Add transition style
// h2.style.transition = "all 0.5s ease";

/* const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log("button clicked");
}); */

// Keyboard Events
// =====================================================

/* window.addEventListener("click", () => {
  console.log("window clicked");
}); */

/* window.addEventListener("keydown", (event) => {
  console.log(event.target);
  console.log(event.type);
  console.log("button clicked");
}); */

/* window.addEventListener("keydown", (event) => {
  if (event.key == "e") {
    console.log("Exited from the game");
  } else {
    console.log("Your are still in the game ", event.key);
  }
}); */

// change & input events
// ================================================================================
const input = document.querySelector("input");
input.addEventListener("change", (event) => {
  h2.textContent = `Hello, ${event.target.value} welcome to the JavaScript Course`;
});

input.addEventListener("input", (event) => {
  h2.textContent = `Hello, ${event.target.value} Welcome to the JavaScript Course`;
});
