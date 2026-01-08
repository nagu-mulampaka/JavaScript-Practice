// String Declaration Double quotes
let Greetings = "Hello Everyone!";

// String Declaration Single quotes 
let userName = 'My Name is Nagu Mulampaka';

// string Declaration using Template Literals
let address = `i am from Visakhapatnam, Andhra Pradesh.`;

// String Concatenation using + Operator
let aboutMe = Greetings + " " + userName + " " + address;
console.log(aboutMe);

// String Concatenation using .concat() method
let word1 = "Hello";
let word2 = 'World!';
let res = word1.concat(" ", word2);
console.log(res); // Hello World!

// Mixing String and Number with +
let age = 26;
let message = "i am " + age + " years old.";
console.log(message); // "I am 26 years old."

// Example: Number + Number + String
console.log(10 + 15 + "px"); // 25px

// But if the string comes first
console.log("px" + 10 + 15); // "px1015"

// Use Template Literals for Cleaner Syntax
let user = "Mulampaka Nagu";
let city = "Visakhapatnam";
// Hello Everyone! My name is Mulampaka Nagu and i am from Visakhapatnam
let msg = `Hello Everyone! My name is ${user} and i am from ${city}`;
console.log(msg);

// JavaScript String Methods
let course = "Java Full Stack Development";

// charAt(index) -> Returns the character at a specific index.
console.log(course.charAt(2)); // "V"

// toUpperCase() / toLowerCase() -> Converts a string to uppercase or lowercase
console.log(course.toUpperCase()); // JAVA FULL STACK DEVELOPMENT
console.log(course.toLowerCase()); // java full stack development

/* indexOf(substring) / lastIndexOf(substring)
Returns the position of the first/last occurrence of a substring. */
console.log(course.indexOf("v")); // 2
console.log(course.lastIndexOf("v")); // 18

// includes(substring) -> Checks if a string contains a substring.
console.log(course.includes("Java")); // true

// slice(start, end) -> Extracts a portion of a string and returns it as a new string.
console.log(course.slice(5, 9)); // Full

// substring(start, end) -> Similar to slice, but doesn't accept negative indexes.
console.log(course.substring(5, 9)); // Full

// concat() -> Joins two or more strings.
let firstName = "Mulampaka";
let lastName = "Nagu";
console.log(firstName.concat(" ", lastName)); // Mulampaka Nagu

/* trim(), trimStart(), trimEnd()
Removes whitespace from both ends or one end of a string. */
let collage = "   Dr Lankapalli Bullayya PG Collage   ";
console.log(collage); //   Dr Lankapalli Bullayya PG Collage   
console.log(collage.trim()); // Dr Lankapalli Bullayya PG Collage
console.log(collage.trimStart()); // Dr Lankapalli Bullayya PG Collage   
console.log(collage.trimEnd()); //   Dr Lankapalli Bullayya PG Collage

// replace(old, new) / replaceAll(old, new) -> Replaces part(s) of a string.
let greet = "Hi John";
console.log(greet.replace("John", "Mike")); // Hi Mike

let languages = "html, css, Java Script, html";
console.log(languages.replaceAll("html", "HTML")); // HTML, css, Java Script, HTML

// split(separator) -> Splits a string into an array.
let items = "apple,banana,mango";
console.log(items); // apple,banana,mango

let fruits = items.split(",");
console.log(fruits); // ['apple', 'banana', 'mango']

// repeat(count) -> Repeats the string multiple times.
let js = "JavaScript" 
console.log(js.repeat(3)); // JavaScriptJavaScriptJavaScript

/* startsWith(substring) / endsWith(substring)
Checks whether a string starts or ends with a given substring. */
let currentCourse = "Learning Java Script";
console.log(currentCourse.startsWith("Learning")); // true
console.log(currentCourse.endsWith("Script")); // true

/* padStart(length, char) / padEnd(length, char)
Pads the string to a specified length with a character. */
let number = "7";
console.log(number.padStart(3, "0")); // 007
console.log(number.padEnd(3, "*")); // 7**
 
// Masking Sensitive Information (Real-World Use Case)
let card = "123456789123456789";
let masked = card.slice(0, 4) + "********" + card.slice(-4);
console.log(masked); // 1234********6789
 