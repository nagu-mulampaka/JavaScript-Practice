// Arrays Example Program in JavaScript

// Creating Array Using Square Brackets
let technologies = ["HTML", "CSS", "JavaScript", "ReactJS"];
console.log(technologies);

/* Accessing Array Elements ->
   You can access array elements using their index */
console.log("First Technologie: ", technologies[0]); // HTML
console.log("Second Technologie: ", technologies[1]); // CSS
console.log("Third Technologie: ", technologies[2]); // JavaScript
console.log("Fourth Technologie: ", technologies[3]); // ReactJS

// Creating Array Using the Array Constructor
let fruits = new Array("Apple", "Banana", "Orange", "Grapes", "Mango");
console.log(fruits);

// Accessing Array Elements
console.log("First fruit: ", fruits[0]); // Apple
console.log("Second fruit: ", fruits[1]); // Banana
console.log("Third fruit: ", fruits[2]); // Orange
console.log("Fourth fruit: ", fruits[3]); // Grapes
console.log("Fifth fruit: ", fruits[4]); // Mango

// push() -> adds element at the end
technologies.push("Java");
// ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Java']
console.log("after add element: ", technologies);

fruits.push("Papaya");
// ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango', 'Papaya']
console.log("after add element: ", fruits);

// pop() -> removes element from the end
technologies.pop();
// ['HTML', 'CSS', 'JavaScript', 'ReactJS']
console.log("after remove element: ", technologies);

// ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango']
fruits.pop();
console.log("after remove element: ", fruits);

// Printing array elements using loops
console.log("=== All Technologies ===");
for (let i = 0; i < technologies.length; i++) {
  console.log(technologies[i]);
}

console.log("=== All Fruits ===");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// JavaScript Array Methods

// length - Returns the number of elements in the array
console.log("Technologies Array length: ", technologies.length); // 4
console.log("Fruits Array length: ", fruits.length); // 5

// push() – Add to the end of an array
// ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'SpringBoot']
technologies.push("SpringBoot");
console.log("after add element: ", technologies);

// pop() – Remove from the end of an array
// ['HTML', 'CSS', 'JavaScript', 'ReactJS']
technologies.pop();
console.log("after remove element: ", technologies);

// unshift() – Add to the beginning of an array
// ['Java', 'HTML', 'CSS', 'JavaScript', 'ReactJS']
technologies.unshift("Java");
console.log(technologies);

// shift() – Remove from the beginning of an array
// ['HTML', 'CSS', 'JavaScript', 'ReactJS']
technologies.shift();
console.log("Remove first element: ", technologies);

// indexOf()
// Index of JavaScript:  2
console.log("Index of JavaScript: ", technologies.indexOf("JavaScript"));

// includes()
// Includes ReactJS?:  true
console.log("Includes ReactJS?: ", technologies.includes("ReactJS"));

// slice()
// after slice : (2) ['HTML', 'CSS']
let newArray = technologies.slice(0, 2);
console.log("after slice :", newArray);

// join()
// after join():  HTML | CSS | JavaScript | ReactJS
let results = technologies.join(" | ");
console.log("after join(): ", results);

// ['ReactJS', 'JavaScript', 'CSS', 'HTML']
technologies.reverse();
console.log("after reverse: ", technologies);

// ['CSS', 'HTML', 'JavaScript', 'ReactJS']
technologies.sort();
console.log("after sort: ", technologies);

// ['CSS', 'HTML', 'JavaScript', 'ReactJS', 'Java', 'Spring Boot', 'MySQL']
let backend = ["Java", "Spring Boot", "MySQL"];
let fullStack = technologies.concat(backend);
console.log("After concat: ", fullStack);

// printing full stack array
console.log("=== FullStack Array ===");
for (let i = 0; i < fullStack.length; i++) {
  console.log(fullStack[i]);
}

// splice() – add/remove
// After splice(): (4) ['HTML', 'CSS', 'Node.js', 'ReactJS']
technologies.splice(2, 1, "Node.js");
console.log("After splice():", technologies);

// It can store different types of values in the same array
let mixedValues = [
  "HTML",
  "CSS",
  "JavaScript",
  123456,
  true,
  false,
  15.56,
  null,
  undefined,
  (names = ["Nagu", "Hemanth", "Shiva"]),
  {
    name: "Mulampaka Nagu",
    age: 26,
    email: "nagumulampaka@gmail.com",
    course: "Java Full Stack Development",
    city: "Visakhapatnam",
  },
];
console.log("MixedValues Array: ", mixedValues);
