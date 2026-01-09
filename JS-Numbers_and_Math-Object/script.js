let number = 10;
let number2 = 101.89;
let exponentialValue = 10e3;

console.log("Whole number ", number);
console.log("Decimal number ", number2);
console.log("exponentialValue ", exponentialValue);

// Basic Arithmetic Operators
let a = 10;
let b = 20;

console.log("Addition Results is: ", a + b);
console.log("Subtraction Results is: ", a - b);
console.log("Multiplication Results is: ", a * b);
console.log("Division Results is: ", a / b);
console.log("Modulus (remainder) Results is: ", a % b);
console.log("Exponentiation Results is: ", a ** b);

// toFixed(n) -> Returns a string with n decimal places.
let price = 45.8962;
console.log(price.toFixed(2)); // 45.90

// toPrecision(n) -> Formats number with a specified total number of digits.
let num = 123.456;
console.log(num.toPrecision(4)); //123.5

// Number(value) -> Converts String value to number.
let strNumber = "1234567890"; // String
console.log(Number(strNumber)); // 1234567890 -> Number

// parseInt(string) -> Parses integer from string.
let value = "123456";
let parseIntValue = parseInt(value);
console.log(parseIntValue); // 1234565

// type checking
console.log(typeof value); // string
console.log(typeof parseIntValue); // number

// parseFloat(string) -> Parses floating-point number from string.
let floatValue = "3.14";
let parseFloatValue = parseFloat(floatValue);
console.log(parseFloatValue); // 3.14

// type checking
console.log(typeof floatValue); // string
console.log(typeof parseFloatValue); // number

// Math Object Example

// Math.round(x) -> Rounds x to the nearest integer.
console.log(Math.round(4.7)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.5)); // 5

// Math.sqrt(x) -> Returns the square root.
console.log(Math.sqrt(9)); // 3

// Math.floor(x) -> Rounds x down to the nearest integer.
console.log(Math.floor(4.4)); // 4
console.log(Math.floor(4.9)); // 4

// Math.ceil(x) -> Rounds x up to the nearest integer.
console.log(Math.ceil(4.5)); // 5
console.log(Math.ceil(4.9)); // 5
console.log(Math.ceil(4.7)); // 5

// Math.trunc(x) -> Removes the decimal part.
console.log(Math.trunc(4.9)); // 4;

// Math.min(), Math.max()
console.log(Math.min(10, -45, 63)); // -45
console.log(Math.max(23, 63, 78)); // 78

// Math.abs(x) -> Returns the absolute value.
console.log(Math.abs(-10)); // 10

// Math.pow(base, exponent) -> Returns exponent value.
console.log(Math.pow(2, 5)); // 2*2*2*2*2 -> 32

// Math.sqrt(x) -> Returns the square root
console.log(Math.sqrt(25)); // 5

// Math.random()
let randomNumber = Math.random();
console.log(randomNumber); // 0.38150817745815413

// NaN (Not a Number)
let result = 10 / "abc";
console.log(result); // NaN

let value1 = NaN;
console.log(Number.isNaN(value1)); // true

console.log(Math.sqrt(-1)); //NaN
