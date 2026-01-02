// Primitive Datatypes Examples

// String - Example
// ----------------------------------------------------------

// Example 1: Simple string using double quotes
console.log("Hello Everyone, My Name is Nagu Mulampaka");

// String with single quotes inside (using quotes double outside)
console.log('I am from "Visakhapatnam."');

// String with double quotes inside (using single quotes outside)
console.log("I completed my 'Master's in Computer Applications' - (MCA)");
console.log("From Dr. Lankapalli Bullayya PG College");

// Using newline character (\n) to print text on multiple lines
console.log("Currently\nIam\nLearning\nJavaScript.");

// Multiline string using template literals (backticks ` `)
console.log(`Currently
I am 
Learning
Java Script
Course`);

// Simple statement using template literal
console.log(
  `My goal is to establish myself as a skilled Java Full Stack Developer.`
);

let fullName = "My Name is Nagu Mulampaka";
console.log(fullName);
// Use the typeof operator to check the data type of 'fullName'
// It returns "string" because the value is text
console.log(typeof fullName);

// number - Datatype EXample
// ----------------------------------------------------------------

console.log(2 + 5);

// Integer number
let num1 = 10;
console.log(num1);
console.log(typeof num1);

// Large Integer number
let num2 = 1000000;
console.log(num2); // ouput : number

// Decimal (floating-point) number
let num3 = 1000.89;
console.log(num3);
console.log(typeof num3); // output : number

// BigInt (used for very large integers)
let num4 = 100000000000000000n;
console.log(num4);
console.log(typeof num4); // output : bigint

// boolean - Datatype Example
// ------------------------------------------------------------------

var isLoggedIn = true;
console.log(isLoggedIn);

var isLoggedIn = false;
console.log(isLoggedIn);

// Check the data type of isLoggedIn
console.log(typeof isLoggedIn); // output : boolean

// undefined & null - Datatype Example
// -----------------------------------------------------------------

let value;
console.log(typeof value); // output: undefined

let cart = null;
console.log(typeof cart); // output: object
