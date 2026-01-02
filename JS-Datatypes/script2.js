// Non-Primitive Data Types

// Arrays Example
// -------------------------------

// Array containing programming languages
let languages = ["Java", "Python", ".NET", "C", "C++"];
// Print the entire array
console.log(languages);

// Accessing array elements using index
console.log(languages[0]); //Java
console.log(languages[1]); // Python
console.log(languages[2]); //.NET
console.log(languages[3]); // C
console.log(languages[4]); // C++

// Array containing mixed data types
let mixedValues = ["HTML", "CSS", "JavaScript", 10, 20, 30, true, 10.56];
// Print the entire array
console.log(mixedValues);

// Accessing array elements using index
console.log(mixedValues[0]);
console.log(mixedValues[1]);
console.log(mixedValues[2]);
console.log(mixedValues[3]);
console.log(mixedValues[4]);
console.log(mixedValues[5]);
console.log(mixedValues[6]);

// Object Example
// --------------------------------------------------------------

// Object storing user information
const UserData = {
  name: "Mulampaka Nagu",
  age: 26,
  Gender: "Male",
  email: "nagumulampaka@gmail.com",
  Course: "Java Full Stack Development",
  address: "Visakhapatnam.",
};

// Print the entire object
console.log(UserData);

// Accessing object properties using dot notation
console.log(UserData.name);
console.log(UserData.age);
console.log(UserData.Gender);
console.log(UserData.email);
console.log(UserData.Course);
console.log(UserData.address);

// function Example
// -------------------------------------------------------

// Function to display a greeting message
function sayHello() {
  console.log("Hello Eveyone, My Name is Nagu Mulampaka");
  console.log("Welcome to Java Script Course");
}
// Calling the function
sayHello();
sayHello();
