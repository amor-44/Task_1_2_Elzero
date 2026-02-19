console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 > 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(-50 <= +"-40"); // true
console.log(+10 < -"-40"); // true
console.log(+"10" == 10); // true
console.log(+20 > false); // true
// --------------------------------------
let num1 = 10;
let num2 = 20;

console.log(typeof num1 == typeof num2); // true
console.log(num1 < num2); // true
console.log(num2 > num1); // true
console.log(num1 != num2); // true
console.log(num2 != num1); // true
console.log(num1 <= num2); // true
//-------------------------------------------
let a = 20;
let b = 30;
let c = 10;

console.log((a < b && a > c) || a < b);
console.log(a < b && a > c && a < b);
console.log(!(a > b) && !(a == b) && !(a < c) && !(a == c));
//---------------------------------------------------
let num = 9;
if (num < 10) {
  console.log(`00${num}`);
} else if (num >= 10 && num < 100) {
  console.log(`0${num}`);
} else if (num >= 100) {
  console.log(`${num}`);
}

let num11 = 9;
let str = "9";
let str2 = "20";
if (num11 == str) {
  console.log(`${num11} Is The Same Value As ${str}`);
  if (num1 == str && num1 !== str) {
    console.log(`${num11} Is The Same Value As ${str} But Not The Same Type`);
  }
  if (num1 !== str2 && typeof num11 !== typeof str2) {
    console.log(`${num11} Is Not The Same Value Or The Same Type As ${str2}`);
  }
  if (str != str2 && typeof str === typeof str2) {
    console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
  }
}

let numm2 = 10;
let num3 = 30;
let num4 = "30";

if (num4 > numm2 && num4 == num3 && typeof num4 !== typeof num3) {
  console.log(
    `${num4} Is Larger Than ${numm2} And Type string Not The Same Type As number`,
  );
  console.log(
    `${num3} Is Larger Than ${num1} And Value Is The Same As ${numm2} And Type string Not The Same Type As number`,
  );
} else if (num4 !== numm2 && typeof num4 !== typeof num3) {
  console.log(
    `${num4} Value And Type Is Not The Same As ${numm2} And Type Is Not The Same As ${num3}`,
  );
}

//---------------------------------------------------

//Array 

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let numm = 3;

// Method 1
console.log(myFriends.slice(myFriends.length - myFriends.length, numm)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length = numm;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//-----------------------------------------------------

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop(); //بيمسح اخر عنصر وممكن نستخدمو ف متغير
friends.shift(); //بيمسح اول عنصر وممكن نطبعو ف متغير
console.log(friends); // ["Eman", "Osama"]

//-----------------------------------------------------

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

//---------------------------------------------------------

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
  console.log("Found");
}

if (haystack.indexOf(needle) !== -1) {
  console.log("Found");
}

if (haystack.lastIndexOf(needle) !== -1) {
  console.log("Found");
}

//--------------------------------------

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

console.log(allArrs); // fxy
