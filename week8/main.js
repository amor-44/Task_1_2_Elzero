//Local Storage

let fontBox = document.getElementById("font");
let colorBox = document.getElementById("color");
let sizeBox = document.getElementById("size");

if (localStorage.getItem("pageFont")) {
  document.body.style.fontFamily = localStorage.getItem("pageFont");
  fontBox.value = localStorage.getItem("pageFont");
}

if (localStorage.getItem("pageColor")) {
  document.body.style.color = localStorage.getItem("pageColor");
  colorBox.value = localStorage.getItem("pageColor");
}

if (localStorage.getItem("pageSize")) {
  document.body.style.fontSize = localStorage.getItem("pageSize");
  sizeBox.value = localStorage.getItem("pageSize");
}

fontBox.addEventListener("change", function () {
  document.body.style.fontFamily = fontBox.value;
  localStorage.setItem("pageFont", fontBox.value);
});

colorBox.addEventListener("change", function () {
  document.body.style.color = colorBox.value;
  localStorage.setItem("pageColor", colorBox.value);
});

sizeBox.addEventListener("change", function () {
  document.body.style.fontSize = sizeBox.value;
  localStorage.setItem("pageSize", sizeBox.value);
});

//2

// const user = document.getElementById("username");
// const email = document.getElementById("email");
// const phone = document.getElementById("phone");
// const country = document.getElementById("country");

// if (sessionStorage.getItem("user_name")) {
//   user.value = sessionStorage.getItem("user_name");
// }
// if (sessionStorage.getItem("user_email")) {
//   email.value = sessionStorage.getItem("user_email");
// }
// if (sessionStorage.getItem("user_phone")) {
//   phone.value = sessionStorage.getItem("user_phone");
// }
// if (sessionStorage.getItem("user_country")) {
//   country.value = sessionStorage.getItem("user_country");
// }

// user.addEventListener("input", function () {
//   sessionStorage.setItem("user_name", user.value);
// });
// email.addEventListener("input", function () {
//   sessionStorage.setItem("user_email", email.value);
// });
// phone.addEventListener("input", function () {
//   sessionStorage.setItem("user_phone", phone.value);
// });
// country.addEventListener("input", function () {
//   sessionStorage.setItem("user_country", country.value);
// });

const fields = ["username", "email", "phone", "country"];

fields.forEach(function (id) {
  let element = document.getElementById(id);
  if (sessionStorage.getItem(id)) {
    element.value = sessionStorage.getItem(id);
  }
  element.addEventListener("input", function () {
    sessionStorage.setItem(id, element.value);
  });
});

// =======================================================

//One

// let myNumbers = [1, 2, 3, 4, 5];

// let [a, , , , e] = myNumbers;

// console.log(a * e); // 5

//Two

// let mySkills = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   ["PHP", "Python", ["Django", "Laravel"]],
// ];

// // Write Your Destructuring Assignment Here
// let [a, b, c, [d, e, [f, g]]] = mySkills;

// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// Three

// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];

// let allArr = [arr3, arr2, arr1];

// let [[, a, b], , [c]] = allArr;
// console.log(`My Best Frind: ${a}, ${b}, ${c}`); // My Best Friends: Shady, Mahmoud, Ahmed

//Four

const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

const {
  age: a,
  working: w,
  country: c,
  hobbies: [h1, , h3],
} = member;

console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);

console.log(`I Live in ${c}`);

console.log(`My Hobbies: ${h1} And ${h3}`);

//five

// const game = {
//   title: "YS",
//   developer: "Falcom",
//   releases: {
//     "Oath In Felghana": ["USA", "Japan"],
//     "Ark Of Napishtim": {
//       US: "20 USD",
//       JAP: "10 USD",
//     },
//     Origin: "30 USD",
//   },
// };

// // Write Your Destructuring Assignment/s Here
// const { title: t, developer: d } = game;
// const [o, a] = Object.keys(game.releases);
// const {
//   "Oath In Felghana": [u, j],
//   "Ark Of Napishtim": { US: u_price, JAP: j_price },
//   Origin: or,
// } = game.releases;
// console.log(`My Favourite Games Style Is ${t} Style`);
// // My Favourite Games Style Is YS Style

// console.log(`And I Love ${d} Games`);
// // And I Love Falcom Games

// console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// // My Best Release Is Oath In Felghana It Released in USA & Japan

// console.log(`Although I Love ${a}`);
// // Although I Love Ark Of Napishtim

// console.log(`${a} Price in USA Is ${u_price}`);
// // Ark Of Napishtim Price in USA Is 20 USD

// console.log(`${a} Price in Japan Is ${j_price}`);
// // Ark Of Napishtim Price in Japan Is 10 USD

// console.log(`Origin Price Is ${or}`);
// // Origin Price Is 30 USD

//six

// let chosen = 1;

// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];

// // Write Your Code Here
// let {
//   title,
//   age,
//   available,
//   skills: [, twoSkills],
// } = myFriends[chosen - 1];

// console.log(title);
// console.log(age);
// console.log(available ? "Available" : "Not Available");
// console.log(twoSkills);

// // If chosen === 1

// ("Osama");
// 39;
// ("Available");
// ("CSS");

// // If chosen === 2

// ("Ahmed");
// 25;
// ("Not Available");
// ("Django");

// // If chosen === 3

// ("Sayed");
// 33;
// ("Available");
// ("Laravel");
