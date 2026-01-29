// JavaScript Array Methods Example

// Creating an array with numbers from 1 to 10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ---------- Normal for loop ----------
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// ---------- Sum using for loop ----------
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = numbers[i] + sum;
}
console.log(`The sum of 1 to 10 is ${sum}.`);

// ---------- forEach() method ----------
console.log("----- forEach method Example ------");
numbers.forEach((item, index) => {
  console.log(`The value at position ${index} is ${item}.`);
});

// ---------- map() method ----------
console.log("----- map method example -----");
const multiply = numbers.map((item) => {
  return item * 2;
});
// Original array (unchanged)
console.log(numbers);
// new Array
console.log(multiply);

// ---------- filter() method ----------
console.log("----- filter method example -----");
const evenNumbers = numbers.filter((item) => {
  return item % 2 == 0;
});
console.log("Original Array:", numbers);

console.log("even numbers:", evenNumbers);

// ---------- reduce() method ----------
console.log("----- reduce method example -----");
const sumArray = numbers.reduce((item, acc) => {
  return acc + item;
}, 0);
console.log(sumArray);

// ---------- some() method ----------
console.log("----- some method example -----");
const someArray = numbers.some((item) => {
  // return item < 0; // false
  return item <= 5; // true
});
console.log(someArray);

// ---------- every() method ----------
console.log("----- every method example -----");
const everyArray = numbers.every((item) => {
  return item >= 5;
});
console.log(everyArray); // false

// ---------- forEach with string array ----------
let technologies = ["Java", "Spring", "React"];
technologies.forEach((tech) => console.log(`Learning: ${tech}`));
