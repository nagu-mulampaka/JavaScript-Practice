/* const person = {
  userName: "Mulampaka Nagu",
  age: 26,
  course: "Java Full Stack Development",
  city: "Visakhapatnam",
};
console.log(person); */
// const person = new Object();

// Map Object() and it's methods Example
// ------------------------------------------------------

// Creating a new Map object with initial key–value pairs
const person = new Map([
  ["userName", "Mulampaka Nagu"],
  ["age", 26],
]);
console.log(person);

// size() → Returns number of key–value pairs
console.log("initial Map size: ", person.size);

// get(key) → Retrieve value using key
console.log(person.get("userName"));
console.log(person.get("age"));

// set(key, value) → Add or update entries
person.set("city", "Visakhapatnam");
console.log(person);
console.log("Map size after adding a new entry:", person.size);
console.log(person.get("city"));

// delete(key) → Remove a specific entry
console.log(person.delete("city"));
console.log(person);
console.log("Map size after deletion:", person.size);

// has(key) → Check if a key exists
console.log(person.has("userName")); // true
console.log(person.has("city")); // false

// clear() → Remove all entries
// person.clear();
console.log(person);

for ([key, value] of person) {
  console.log(`${key} : ${value}`);
}
