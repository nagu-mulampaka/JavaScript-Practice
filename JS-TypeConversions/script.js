// Type Conversions in JavaScript

/* 1. implicit type Conversion (Type coercion)
      -> automatically done by the JavaScript engine */

// String + Number → String
let number1 = "5" + 1;
console.log(number1); // 51

let val = true + "1";
console.log(val); // true1

// String - Number → Number
let number2 = "10" - 2;
let number3 = "10" * 2;
let number4 = "10" / 2;

console.log(number2); // 8
console.log(number3); // 20
console.log(number4); // 5

// Boolean + Number
let a = true + 1;
console.log(a); // 2 (true becomes 1)

// Comparison with coercion
let b = "5" == 5;
console.log(b); // true (string "5" converted to number 5)

// Strict comparison (no coercion)
let c = "5" === 5;
console.log(c); // false

/* 2. Explicit type conversion (Type Conversion)
      -> Manually done by the developers*/

// String to Number
let n1 = "10";
console.log(typeof n1); // string

let n2 = Number(n1);
console.log(n2); // 10
console.log(typeof n2); // number

// Number to String
let x = 100;
console.log(typeof x); // number

let y = String(x);
console.log(y); // 100
console.log(typeof y); // string

// Boolean to Number
let isActive = true;
console.log(typeof isActive); // boolean

let num = Number(isActive);
console.log(num); // 1
console.log(typeof num); // number

// Number to Boolean
let value = 0;
console.log(typeof value); // number

let res = Boolean(value);
console.log(res); // false
console.log(typeof res); // boolean

// String to Boolean
let userName = "Nagu";
console.log(typeof userName); // string

let check = Boolean(userName);
console.log(check); // true
console.log(typeof check); // boolean
