// var keyword Example
// ----------------------------------------------------------

// Declaring a variable using 'var' without assigning a value
var fullName;

// Assigning a value to the variable
fullName = "Mulampaka Nagu";
console.log(fullName); // Output: Mulampaka Nagu

// Reassigning a new value to the same variable
fullName = "nagu mulampaka";
console.log(fullName); // Output: nagu mulampaka

// Redeclaring the same variable using 'var' (allowed in JavaScript)
var fullName = "Nagu Mulampaka";
console.log(fullName); // Output: Nagu Mulampaka

// let keyword Example
// -------------------------------------------------------------

// Declaring and initializing a variable using 'let'
let courseName = "Java Full Stack Development";
console.log(courseName); // Output: Java Full Stack Development

// Reassigning a new value (allowed with 'let')
courseName = "JAVA FULL STACK DEVELOPMENT";
console.log(courseName); // Output: JAVA FULL STACK DEVELOPMENT

// Redeclaration using 'let' is NOT allowed
/*
let courseName = "Java Full Stack Development";
console.log(courseName);
*/

// const keyword Example
// ----------------------------------------------------------------------

// Declaring a constant variable using 'const'
// The value must be assigned at the time of declaration
const amount = 10000;
console.log("Total amount is: " + amount); // Output: Total amount is: 10000

// Reassigning a value to a 'const' variable is NOT allowed
/*
amount = 15000;
console.log(amount);
*/

// Hoisting Example with var
console.log("a value is: " + a); // Output: a value is: undefined
var a = 10;
console.log("a value is: " + a);

// Hoisting Example with let
// ReferenceError: Cannot access 'b' before initialization
console.log("b value is: " + b);
let b = 20;

// Hoisting Example with const
// ReferenceError: Cannot access 'c' before initialization
console.log("c value is: " + c);
const c = 30;

// Valid (Allowed) Variable Names
// Variable names can start with a letter
let name = "Mulampaka Nagu";

// Variable names can start with an underscore (_)
let _address = "MVP Colony, Visakhapatnam, Andhra Pradesh.";

// Variable names can start with a dollar sign ($)
let $education = "Master of Computer Applications - (MCA)";

// Variable names can include numbers, but NOT at the beginning
let collage1 = "Dr. Lankapalli Bullayya PG Collage";

// Invalid (Not Allowed) Variable Names
// Variable names cannot start with a number
// let 1name = "Mulampaka Nagu";

// Reserved keywords cannot be used as variable names
// let var = 20;
