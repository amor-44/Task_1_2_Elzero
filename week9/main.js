// One

// let setOfNumbers = new Set([10]);

// setOfNumbers.add(20).add(setOfNumbers.size);

// console.log(setOfNumbers);
// console.log([...setOfNumbers].pop());

// //two

// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// console.log([...new Set(myFriends)].sort());

// //three

// let myInfo = {
//   username: "Amr",
//   role: "Admin",
//   country: "Egypt",
// };

// let myMap = new Map(Object.entries(myInfo));

// console.log(myMap);
// console.log(myMap.size);
// console.log(myMap.has("role"));

// //four

// let theNumber = 100020003000;

// console.log(+[...new Set(theNumber.toString())].sort().slice().join(""));
// 123;

// //five

// let theName = "Elzero";

// // Needed Output
// console.log([...theName]);
// console.log(Array.from(theName));
// console.log(theName.split(""));
// console.log(Object.values(theName));
// console.log(Object.assign([], theName));
// [("E", "l", "z", "e", "r", "o")];

// //six

// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];

// console.log([...numsOne, ...numsTwo]);
// console.log(numsOne.concat(numsTwo));
// console.log([numsOne, numsTwo].flat());
// [1, 2, 3, 4, 5, 6];

// //seven

// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];

// // Needed Output
// console.log(Math.max(...n1) * [...n1, ...n2].length);
// 210;

// console.log("#".repeat(50));

//=========================================================================

// Regular Expression

//one

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipRe = /(\w+:){7}\w+/gi;
console.log(ip.match(ipRe));

//two;

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let spRe = /\bos\d*o\b/gi;
console.log(specialNames.match(spRe));

//three

let phone = "+(995)-123 (4567)";
let phRe = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/gi;
console.log(phone.match(phRe));

//four

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d{2}[\s\/-]+\d{2}[\s\/-]+\d{2,4}/gi;

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"

// five

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let ree = /(https?:\/\/)?(www\.)?\w+\.\w+.*/gi; // Write Your Pattern Here

console.log(url1.match(ree));
console.log(url2.match(ree));
console.log(url3.match(ree));
console.log(url4.match(ree));
console.log(url5.match(ree));
