// 1.if statement example
/* let age = 18;
if (age >= 18) {
  console.log("Congratulations! You are now eligible to vote.");
} */

// 2.if-else statement example
/* let age = +prompt("please enter your age here");
if (age >= 18) {
  console.log("Congratulations! You are now eligible to vote.");
} else {
  console.log("Sorry, You are not eligible to vote.");
} */

// 3.Nested if Statements
/* let nationality = prompt("please enter your nationality here");
if (nationality === "india") {
  let age = +prompt("please enter your age here");
  console.log("Congratulations! You are an Indian citizen.");
  if (age >= 18) {
    console.log("Congratulations! You are now eligible to vote.");
  } else {
    console.log("Sorry, You are not eligible to vote.");
  }
} else {
  console.log("Sorry, you are not an Indian citizen.");
} */

// 4. if-else-if lader Statement example
/* let marks = +prompt("enter your marks here");
if (marks >= 90 && marks <= 100) {
  console.log("Congratulations! You have achieved an 'A+' grade.");
} else if (marks >= 80) {
  console.log("Congratulations! You have achieved an 'A' grade.");
} else if (marks >= 70) {
  console.log("Congratulations! You have achieved a 'B' grade.");
} else if (marks >= 60) {
  console.log("Congratulations! You have achieved a 'C' grade.");
} else if (marks >= 50) {
  console.log("Congratulations! You have achieved a 'D' grade.");
} else if (marks >= 40) {
  console.log("Congratulations! You have achieved an 'E' grade.");
} else if (marks >= 0) {
  console.log("Sorry, you have failed the examination.");
} else {
  console.log("Please enter valid marks.");
} */

// 5. switch statement example
/* let marks = Number(prompt("Enter your marks"));
switch (true) {
  case marks >= 90 && marks <= 100:
    console.log("Congratulations! You have achieved an 'A+' grade.");
    break;
  case marks >= 80:
    console.log("Congratulations! You have achieved an 'A' grade.");
    break;
  case marks >= 70:
    console.log("Congratulations! You have achieved a 'B' grade.");
    break;
  case marks >= 60:
    console.log("Congratulations! You have achieved a 'C' grade.");
    break;
  case marks >= 50:
    console.log("Congratulations! You have achieved a 'D' grade.");
    break;
  case marks >= 40:
    console.log("Congratulations! You have achieved an 'E' grade.");
    break;
  case marks >= 0:
    console.log("Sorry, you have failed the examination.");
    break;
  default:
    console.log("Please enter valid marks.");
} */

// 6. Ternary Operator (? :)
let age = 20;
let results =
  age >= 18 ? "You are eligible to vote." : "You are not eligible to vote.";
console.log(results);
