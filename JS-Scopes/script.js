// Global variable
let userName = "Mulampaka Nagu";

// Global function
function printUserName() {
  console.log("userName: ", userName);
}
printUserName();

// Another function accessing the same global variable
function welcomeUser(userName) {
  console.log("Hello,", userName, "welcome to JavaScript.");
}
welcomeUser(userName);

// Accessing global variable directly
console.log("userName: ", userName);

// Real-World Example
let appName = "Online Learning Platform";
function login() {
  console.log("welcome to", appName);
}
function logout() {
  console.log("thank you for using", appName);
}
login();
logout();

// Local Scope Example
function userProfile() {
  // Local variables (Function Scope)
  let profileName = "Nagu";
  let role = "Java Full Stack Developer";
  let experience = "Fresher";
  console.log(
    "username:",
    profileName,
    "role:",
    role,
    "experience:",
    experience,
  );
}
userProfile();

// Error: Uncaught ReferenceError: profileName is not defined
// console.log(profileName);

// Block Scope (let & const) Example
if (true) {
  let message = "my name is Nagu Mulampaka";
  const city = "i am from Visakhapatnam";
  console.log(message); // Accessible
  console.log(city); // Accessible
}

// Error (outside block)
// console.log(message);
// console.log(city);
