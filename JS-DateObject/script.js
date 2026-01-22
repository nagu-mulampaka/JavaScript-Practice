// Data Object Example in Java Script

// Creating Date Object (Current Date & Time)
/* const date = new Date();

console.log(date);
console.log(date.getFullYear()); // 2026
console.log(date.getDay()); // (0 - 6) 4 -> Thursday
console.log(date.getHours()); // (0 - 23 format)
console.log(date.getMonth()); // 0 - 11
console.log(date.getMinutes()); // 0 - 59
console.log(date.getTime()); */

//  Creating Date Using Parameters
// new Date(year, month, day, hour, minute, second, millisecond)
// Month is 0-based → 6 = July
const date1 = new Date(2021, 6, 5, 19, 59, 59, 59);
console.log(date1);

// Modifying Date using set() Methods
date1.setFullYear(2024);
console.log(date1);
date1.setHours(14);
console.log(date1);
date1.setMonth(1);
console.log(date1);
date1.setMinutes(48);
console.log(date1);
date1.setSeconds(12);
console.log(date1);

// Creating Date using String Format
const date3 = new Date("January 22, 2026 11:30:59"); // January 22, 2026
console.log(date3);

// Date Format and it's Methods
const date = new Date();

// console.log(date.toString()); -> default
console.log(date.toDateString()); // Thu Jan 22 2026
console.log(date.toTimeString()); // 20:29:07 GMT+0530 (India Standard Time)
console.log(date.toLocaleDateString()); // 1/22/2026
console.log(date.toLocaleTimeString()); // 8:28:41 PM
console.log(date.toUTCString()); // Thu, 22 Jan 2026 14:59:07 GMT

// Unix Epoch Time Example

// Creates Date object at Unix Epoch time (0 milliseconds)
// Represents: Jan 1, 1970, 00:00:00 UTC
// console.log(new Date(0));
