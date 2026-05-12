// class Car {
//   constructor(name, model, price) {
//     this.name = name;
//     this.model = model;
//     this.price = price;
//   }

//   run() {
//     return `Car Is Running Now`;
//   }

//   stop() {
//     return `Car Is Stopped`;
//   }
// }

// let carOne = new Car("MG", "2022", 420000);
// let carTwo = new Car("BMW", "2023", 150000);
// let carThree = new Car("Toyota", "2021", 90000);

// console.log(
//   `Car One Name Is ${carOne.name} And Model Is ${carOne.model} And Price Is ${carOne.price}`,
// );
// console.log(carOne.run());

// //=================================================

// class Phone {
//   constructor(name, serial, price) {
//     this.name = name;
//     this.serial = serial;
//     this.price = price;
//   }
// }

// class Tablet extends Phone {
//   constructor(name, serial, price, size = "Unknown") {
//     super(name, serial, price);
//     this.size = size;
//   }

//   fullDetails() {
//     return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`;
//   }
// }

// let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
// let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
// let TabletThree = new Tablet("LG", 250450650, 650);

// console.log(`${TabletOne.fullDetails()}`);

// console.log(`${TabletTwo.fullDetails()}`);

// console.log(`${TabletThree.fullDetails()}`);

// //=====================================================

// // Edit The Class
// class User {
//   #c;
//   constructor(username, card) {
//     this.u = username;
//     this.#c = card;
//   }

//   get showData() {
//     let formatCard = this.#c
//       .toString()
//       .replace(/-/g, "")
//       .match(/.{1,4}/g)
//       .join("-");

//     return `Hello ${this.u} Your Credit Card Number Is ${formatCard}`;
//   }
// }

// let userOne = new User("Osama", "1234-5678-1234-5678");
// let userTwo = new User("Ahmed", "1234567812345678");
// let userThree = new User("Ghareeb", 1234567812345678);

// console.log(userOne.showData);
// // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userTwo.showData);
// // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userThree.showData);
// // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userOne.c); // Prevent Accessing To Card Property Here
// // Undefined

// //===================================================

// // Write Your Code Here
// String.prototype.addLove = function () {
//   return `I Love ${this} Web School`;
// };

// // Do Not Edit Below
// let myStr = "Elzero";
// console.log(myStr.addLove()); // I Love Elzero Web School

// //==========================================================

// const myObj = {
//   username: "Elzero",
//   id: 100,
//   score: 1000,
//   country: "Egypt",
// };

// // Write Your Code Here

// Object.defineProperties(myObj, {
//   score: {
//     writable: false,
//   },
//   id: {
//     enumerable: false,
//   },
// });

// delete myObj.country;

// myObj.score = 500;

// for (let prop in myObj) {
//   console.log(`${prop} => ${myObj[prop]}`);
// }

// console.log(myObj);

//============================================================

// task 1

let dateNow = new Date();
let birthDate = new Date("2006-04-15");
let dif = dateNow - birthDate;

console.log(`${Math.trunc(dif / 1000)} Seconeds`);
console.log(`${Math.trunc(dif / 1000 / 60)} Mintes`);
console.log(`${Math.trunc(dif / 1000 / 60 / 60)} Hours`);
console.log(`${Math.trunc(dif / 1000 / 60 / 60 / 24)} Dayes`);
console.log(`${Math.trunc(dif / 1000 / 60 / 60 / 24 / 30)} Months`);
console.log(`${Math.trunc(dif / 1000 / 60 / 60 / 24 / 365)} Years`);

console.log("#".repeat(60));

// task 2

let date2 = new Date(0);
date2.setFullYear(1980);
date2.setSeconds(1);

console.log(date2);

console.log("#".repeat(60));

// task 3

let date3 = new Date();
date3.setDate(0);
console.log(date3);

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log(
  `Previous Month Is ${months[date3.getMonth()]} And Last Day Is ${date3.getDate()}`,
);
console.log("#".repeat(60));

// task 4

let date4_1 = new Date("2006-04-15");
date4_1.setHours(0, 0, 0);
console.log(date4_1);

let date4_2 = new Date(2006, 3, 15);
console.log(date4_2);

let date4_3 = new Date();
date4_3.setFullYear(2006);
date4_3.setMonth(3);
date4_3.setDate(15);
date4_3.setHours(0, 0, 0);
console.log(date4_3);

console.log("#".repeat(60));
// task 5

let start = performance.now();

for (let i = 1; i <= 99999; i++) {
  // console.log(i);
}
let end = performance.now();
console.log(`Loop Took ${Math.trunc(end - start)} Milliseconds.`);

console.log("#".repeat(60));
//============================================
// task 6

function* gen() {
  let num = 14;
  let add = 140;

  yield num;

  while (true) {
    num += add;
    yield num;
    add += 200;
  }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

console.log("#".repeat(60));

// task 7

function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}
function* genAll() {
  yield* new Set(genNumbers());
  yield* new Set(genLetters());
}

let gene = genAll();

console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
//=====================================================================

import calc from "./mod-one.js";
import * as modOne from "./mod-two.js";

console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); 