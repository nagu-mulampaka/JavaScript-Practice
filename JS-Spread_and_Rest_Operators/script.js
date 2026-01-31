// Spread Operator Examples
// ===============================

// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Array of names
const names = ["Nagu", "Hemanth", "Shiva"];

// Logs the entire numbers array as a single array
console.log(numbers);

// Spread operator expands the array into individual values
// Output: 1 2 3 4 5
console.log(...numbers);

// Normal Math.max usage with individual values
console.log(Math.max(10, 20, 90)); // 90

// Spread converts array values into individual values for Math.max
console.log(Math.max(...numbers)); // 5

// Combining arrays using concat() method
const newArray = numbers.concat(names);
console.log(newArray);

// Combining arrays using spread operator (modern approach)
const resArray = [...numbers, ...names];
console.log(resArray);

// Object example
const profile = {
  userName: "Nagu Mulampaka",
  age: 26,
  course: "Java Full Stack Development",
  phoneNumber: "9876543210",
};

// Creating a new object by copying profile and adding a new property (city)
const updatedProfile = { ...profile, city: "Visakhapatnam" };

// Original object remains unchanged
console.log(profile);

// New object with additional property
console.log(updatedProfile);

// Rest Parameter Examples
// ===============================

// Array with mixed values
const array = [1, 2, 3, 4, 5, "Nagu"];

// Destructuring with rest operator
// first → 1
// second → 2
// third → 3
// remaining → [4, 5, "Nagu"]
const [first, second, third, ...remaining] = array;

console.log(first);
console.log(second);
console.log(third);
console.log(remaining);

// Spread remaining values into individual outputs
console.log(...remaining);

// Object destructuring with rest operator
const { userName, age, ...details } = profile;

console.log(userName);
console.log(age);
console.log(details);

// Two separate objects
const person = {
  userName: "Nagu",
  age: 26,
};

const city = {
  city: "Visakhapatnam",
};

// Merging objects using spread operator
const combinedObj = { ...person, ...city };
console.log(combinedObj);

// String example
const myName = "Nagu Mulampaka";

// Spread operator breaks string into individual characters
// Output: N a g u   M u l a m p a k a
console.log(...myName);
