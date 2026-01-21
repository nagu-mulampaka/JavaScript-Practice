// JavaScript Loops Example

// for loop example to print numbers from 1 to 10
console.log("------ for loop Example------");

for (let i = 1; i <= 10; i++) {
  console.log("Number: ", i);
}

// for loop example to print a message 10 times
for (let i = 1; i <= 10; i++) {
  console.log("Hello, Welcome to Java Script");
}

console.log("------ while loop Example ------");
let num = 1; // initialize the variable
while (num <= 10) {
  console.log("Number: ", num);
  num++; // increment num to avoid infinite loop
}

console.log("------ do... while loop Example ------");
let i = 1; // initialize the variable
// do block executes at least once
do {
  console.log("Hello Everyone, My name is Nagu Mulampaka"); // prints message
  i++; // increment i
} while (i > 10); // condition is false, so loop runs only once

// Array of fruits
let fruits = ["Apple", "Banana", "Mango", "Grapes", "Orange"];

// Using for loop to iterate fruits array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Using while loop to iterate fruits array
let index = 0;
while (index < fruits.length) {
  console.log(fruits[index]);
  index++;
}

// Array of profiles (names)
let profiles = ["Nagu", "Ashok", "Hemanth", "Sai Babu", "Narendra", "Praveen"];

// Using for...of loop to access each value in the array
for (profile of profiles) {
  console.log(profile);
}

// Object example
const person = {
  username: "Mulampaka Nagu",
  age: 26,
  city: "Visakhapatnam",
  greet: function () {
    console.log(`Hello ${this.username} and you are ${this.age} years old.`);
  },
};

// Using for...in loop to iterate over object properties
for (key in person) {
  console.log(`${key}: ${person[key]}`);
}
