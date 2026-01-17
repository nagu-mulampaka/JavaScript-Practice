// Functions Example in JavaScript

// Regular Function
function greet() {
  console.log("Hello Everyone! My Nagu is Nagu Mulampaka");
  console.log("i am from Visakhapatnam.");
}
greet(); // function calling

// function expression
let functionExpression = function () {
  console.log("I have completed my Master of Computer Applications (MCA)");
  console.log("from Dr. Lankapalli Bullayya PG College.");
};
functionExpression();

// arrow function
let arrowFunction = () => {
  console.log(
    "Currently learning JavaScript to strengthen my web development skills.",
  );
};
arrowFunction();

let arrowFun = () =>
  console.log("My aim is to become a Java Full Stack Developer.");
arrowFun();

// Global Variables
let number1 = 10;
let number2 = 20;

function add() {
  // local Scope (Variables)
  // let number1 = 40;
  // let number2 = 78;
  console.log("Addition Results is :" + (number1 + number2));
}
add();

// odd or even number function
function isEven() {
  let num = 10;
  if (num % 2 == 0) {
    console.log(`${num} is an even number`);
  } else {
    console.log(`${num} is an odd number`);
  }
}
isEven();

// function with parameters
function oddOrEven(number) {
  if (number % 2 == 0) {
    console.log(`${number} is an even number`);
  } else {
    console.log(`${number} is an odd number`);
  }
}
oddOrEven(7); // function Arguments

function addition(num1, num2, num3) {
  console.log(`${num1} + ${num2} + ${num3} = ${num1 + num2 + num3}`);
}
addition(7, 18, 45);

/* let userNumber1 = prompt("enter 1st number here");
let userNumber2 = prompt("enter 2nd number here");

function sum(a, b) {
  console.log(`${a} + ${b} = ${a + b}`);
}
sum(number1, number2); */

// default parameters
function sum(num1 = 20, num2 = 20) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
}
sum(10);

// let uname = prompt("enter your name here");
function userName(uname = "Guest") {
  console.log(`Welcome ${uname}`);
}
userName("Nagu");

// function with return statement
function additionFunction(a, b) {
  console.log("Welcome to JavaScript"); // reachable code
  return a + b;
  console.log("Welcome to JavaScript"); // Unreachable code
}
let results = additionFunction(10, 20);
let finalPrice = results + 100;
console.log(finalPrice);

let calculatePrice = (price1, price2) => price1 + price2;
let grandFinal = calculatePrice(100, 500);
let totalPrice = grandFinal + 45;
console.log("Total Price is: " + totalPrice);

// IIFE (Immediately Invoked Function Expression)
(function bannerImg() {
  console.log("Banner Image Loaded");
})();
