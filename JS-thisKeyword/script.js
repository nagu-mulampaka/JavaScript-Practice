// this Keyword Example in JavaScript.

const userInfo = {
  username: "nagu mulampaka",
  age: 26,
  city: "visakhapatnam",
  course: "Java Full Stack Development",
  intro: function userIntro() {
    console.log(`username: ${this.username} and he is from ${this.city}`);
  },
};
userInfo.intro();

console.log(this);

// Regular function declaration
function regularFunction() {
  console.log(this);
}
regularFunction();

// Function expression
const fun1 = function () {
  console.log(this);
};
fun1();

// Arrow function
const arrowFunction = () => {
  console.log(this);
};
arrowFunction();

/* 
  const person = {
  username: "nagu mulampaka",
  greet: () => {
    console.log(this.username);
  },
};
person.greet(); // Output: undefined
*/

/* 
const person = {
  username: "nagu mulampaka",
  greet: function () {
    function innerFunction() {
      console.log(this.username);
    }
    innerFunction();
  },
};
person.greet(); // Output: undefined
*/

const person = {
  username: "nagu mulampaka",
  greet: function () {
    const innerFunction = () => {
      console.log(this.username);
    };
    innerFunction();
  },
};
person.greet(); // Output: nagu mulampaka
