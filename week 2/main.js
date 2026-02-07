// Replace ? With Arithmetic Operators
//console.log(10 ? 20 ? 15 ? 3 ? 190 ? 10 ? 400); // 0
console.log(10 * 20 + (15 % 3) + 190 + 10 - 400); // 0

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log((num += num)); // 6

// Soultion Three
console.log(num * true); // 6

// Soultion Four
console.log(num); // 6

let num2 = "10";

// Solution One
console.log(+num2 + +num2); // 20

// Solution Two
console.log(Number(num2) * (true + true)); // 20

// Solution Three
console.log(Number(num2) + Number(num2)); // 20

let points = 10;

// Write Your Code Here

console.log((points += 3)); // 13

// Write Your Code Here

console.log((points -= 5)); // 8;

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(Math.pow(10, 5)); // 100000
console.log(1e5); // 100000
console.log(parseInt("100000.25")); // 100000
console.log(parseInt(100000)); // 100000
console.log(Math.round(100000.4)); // 100000
console.log(Math.trunc(100000.66)); // 100000
console.log(Math.floor(100000.96)); // 100000
console.log(Math.ceil(99999.5)); // 100000
console.log(Number(100000)); // 100000

//     ----------------------------
console.log(Number.MIN_SAFE_INTEGER * -1);
//
console.log(Number.MAX_SAFE_INTEGER.toString().length); //16

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

let num3 = 10;

console.log(Number.isInteger(num3) + Number.isInteger(num3)); // 2

let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10

console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4

// -----------------------------------------------------------------------
let userName = "Elzero";
console.log(userName[3]); // e
console.log(userName.charAt(3)); // e
console.log(userName.slice(3, 4)); // e
console.log(userName.substring(3, 4)); // e
console.log(userName.charAt(3).repeat(3)); // eee

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True
