// Java Script Object Example Code

// Creating an object using Object Literal syntax
const userData = {
  name: "Mulampaka Nagu", // property: name
  age: 26, // property: age
  city: "Visakhapatnam", // property: city
};

// Printing the entire object
console.log(userData);

// Accessing object properties using dot notation
console.log(userData.name);
console.log(userData.age);
console.log(userData.city);

// Adding a new property to the existing object
userData.nationality = "India";
console.log(userData);
console.log(userData.nationality);

// Displaying object values using template literals
console.log("===========================");
console.log(`Username : ${userData.name}`);
console.log(`age: ${userData.age}`);
console.log(`city: ${userData.city}`);

// Creating object using Object constructor
// -------------------------------------------------

// Creating an empty object using new Object()
const bahubali = new Object();

// Adding properties to the object
bahubali.hero = "Prabhas";
bahubali.heroine = "Anushka";
bahubali.director = "Rajamouli";
bahubali.villain = "Rana";

bahubali.heroine = "Tamanna";
console.log(bahubali.heroine);

console.log(bahubali);

// Accessing object properties
console.log(bahubali.hero); // prints hero
console.log(bahubali.heroine); // prints heroine
console.log(bahubali.villain); // prints villain
console.log(bahubali.director); // prints director

// Accessing object properties using bracket notation
console.log("----------------------------------");
console.log(bahubali["hero"]);
console.log(bahubali["heroine"]);
console.log(bahubali["villain"]);
console.log(bahubali["director"]);

// Bracket Notation
const user = {
  name: "Nagu",
  "job role": "Java Full Stack Developer",
};
console.log(user["name"]); // Nagu
console.log(user["job role"]); // Java Full Stack Developer

// JavaScript Nested Object Example
const userInfo = {
  name: "Mulampaka Nagu",
  age: 26,
  city: "Visakhapatnam",
  course: "Java Full Stack Development",
  isActive: true,
  hobbies: ["Playing Cricket", "Watching Movies", "Listing Music"],

  // Nested object for education details
  educationDetails: {
    MCA: "Dr. Lankapalli Bullayya PG Collage",
    Degree: "Mahathi Degree Collage",
    Intermediate: "Dr V.S Krishna Govt Jr Collage",
    SSC: "K.D.P.M High School",
    about: function () {
      console.log(
        "Hello everyone, this is an overview of my educational background.",
      );
    },
  },

  // Method (function) inside object
  details: function () {
    console.log(
      `Here are the details of ${userInfo.name}, from ${userInfo.city}, who is actively building expertise in Java Full Stack Development.`,
    );
  },
};

// Printing the complete userInfo object
console.log(userInfo);

// Accessing simple object properties
console.log(userInfo.name);
console.log(userInfo.age);
console.log(userInfo.city);
console.log(userInfo.course);
console.log(userInfo.isActive);

// Accessing array inside object
console.log(userInfo.hobbies); // Prints all hobbies
console.log(userInfo.hobbies[0]); // Playing cricket
console.log(userInfo.hobbies[1]); // Watching Movies
console.log(userInfo.hobbies[2]); // Listing Music

// Accessing nested object properties
console.log(userInfo.educationDetails.MCA); // MCA college
console.log(userInfo.educationDetails.Degree); // Degree college
console.log(userInfo.educationDetails.Intermediate); // Intermediate college
console.log(userInfo.educationDetails.SSC); // School name

userInfo.educationDetails.about();
userInfo.details();

// Creating an array with different types of values
// It contains strings, boolean, numbers, null, undefined, and an object
const array = [
  "Orange",
  "Apple",
  "Mango",
  true,
  15000,
  78.36,
  null,
  undefined,

  // Object stored inside the array
  {
    productId: 101,
    productName: "HP Laptop",
    color: "Gray",
    price: 69000,
    isActive: true,
  },
];

console.log(array);

console.log(array[0]); // Orange

console.log(array[8].productId); // 101
console.log(array[8].productName); // HP Laptop
console.log(array[8].color); // Gray
console.log(array[8].price); // 69000
console.log(array[8].isActive); // true

const person = {
  id: 101,
  name: "Mulampaka Nagu",
  role: "Java Full Stack Developer",
  isLearning: true,
  aboutMe: function () {
    console.log(`id: ${this.id} fullName: ${this.name} role: ${this.role}`);
  },
};

person.aboutMe();
