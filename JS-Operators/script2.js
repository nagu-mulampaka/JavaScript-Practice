// Comparison Operators Example
let n1 = 10;
let n2 = "10";
let n3 = 5;

console.log("n1 == n1 :", n1 == n2); // true
console.log("n1 === n1 :", n1 === n2); // false

console.log("n1 != n3 :", n1 != n2); // false
console.log("n1 !== n2 :", n1 !== n2); // true

console.log("n1 > n3 :", n1 > n3); // true
console.log("n1 < n3 :", n1 < n3); // false

console.log("n1 >= 10 :", n1 >= 10); // true
console.log("n3 <= 5 :", n3 <= 5); // true

// Logical Operators Example

let p = 10;
let q = 20;
let r = 5;

// Logical AND (&&)
console.log("p > r && q > p :", p > r && q > p); // true

// Logical OR (||)
console.log("p > q || q > r :", p > q || q > r); // true

// Logical NOT (!)
console.log("!(p > r) :", !(p > r)); // false

// Ternary Operator Example

let age = 20;

// Using if-else
if (age >= 18) {
  console.log("Eligible to Vote");
} else {
  console.log("Not Eligible to Vote");
}

// Using Ternary Operator
let result = age >= 18 ? "Eligible to Vote" : "Not Eligible to Vote";
console.log(result);

// BODMAS Rule Example
let res = 10 + 2 * (6 - 4);
console.log(res); // 14
