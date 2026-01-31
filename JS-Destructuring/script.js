// Destructuring Example
// ============================================

// Numbers array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// Old way accessing values manually using index
// const one = numbers[0];
// const two = numbers[1];
// const three = numbers[2];
// const four = numbers[3];
// const five = numbers[4];
// const six = numbers[5];
// const seven = numbers[6];
// const eight = numbers[7];
// const nine = numbers[8];
// const ten = numbers[9];

// Modern way – Array Destructuring
const [one, two, three, four, five, six, seven, eight, nine] = numbers;

console.log(one); // 1
console.log(two); // 2
console.log(three); // 3
console.log(four); // 4
console.log(five); // 5
console.log(six); // 6
console.log(seven); // 7
console.log(eight); // 8
console.log(nine); // 9

// Object with Nested Object
// ============================================

const userInfo = {
  username: "Nagu Mulampaka",
  age: 26,
  course: "Java Full Stack Development",
  city: "Visakhapatnam",
  education: {
    PG: "Master of Computer Applications - (MCA)",
    Degree: "Computer Science - (MPC)",
    intermediate: "MPC (Mathematics, Physics, Chemistry)",
    SSC: "Secondary School Certificate",
  },
};

// print full object
console.log(userInfo);

// Old way manual property access
/*
const name = userInfo.username;
const age = userInfo.age;
const course = userInfo.course;
const city = userInfo.city;

console.log(name);
console.log(age);
console.log(course);
console.log(city);
*/

// Another old way direct access each time
/*
console.log(userInfo.username);
console.log(userInfo.age);
console.log(userInfo.course);
console.log(userInfo.city);
*/

// Object Destructuring with Default Value, and Nested Destructuring

// Destructuring main object properties
// Also destructuring nested object (education)
// Providing default value for "state"
const {
  username, // userInfo.username
  age, // userInfo.age
  course, // userInfo.course
  city, // userInfo.city
  state = "Andhra Pradesh", //add new property
  education: { PG, Degree, intermediate, SSC }, // nested destructuring
} = userInfo;

// Logging destructured values
console.log(username);
console.log(age);
console.log(course);
console.log(city);
console.log(state);
console.log(PG);
console.log(Degree);
console.log(intermediate);
console.log(SSC);
