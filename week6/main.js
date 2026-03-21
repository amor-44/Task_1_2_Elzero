const { use } = require("react");

let member = {
  name: "Amr",
  age: 20,
  country: "Egypt",
  fullDetails: function () {
    return `My Name Is ${this.name}, My Age Is ${this.age}, I Live In ${this.country}`;
  },
};

console.log(member.name);
console.log(member.age);
console.log(member.country);
console.log(member.fullDetails());

let objMethodOne = {
  property: "Method One",
};

console.log(objMethodOne.property);

let objMethodTwo = new Object({
  property: "Method Two",
});

console.log(objMethodTwo.property);

let objMethodThree = Object.create({
  property: "Method Three",
});

console.log(objMethodThree.property);

let objMethodFour = Object.assign(
  {},
  {
    property: "Method Four",
  },
);

console.log(objMethodFour.property);

let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

let finalObject = Object.assign({ a }, threeNums, twoNums);

console.log(finalObject);

let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(
    `The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`,
  );
  console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);

  // Check If Nested Object Has Property (bestThree)
  if ("bestThree" in myFavGames[Object.keys(myFavGames)[i]]) {
    console.log("- Game Has Releases");
    console.log(
      `First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`,
    );
    console.log(
      `Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`,
    );
    console.log(
      `Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`,
    );
  }
  console.log("#".repeat(20));
}

//===================================================================================

// dom

let way1 = document.getElementById("elzero");
let way2 = document.getElementsByClassName("element")[0];
let way3 = document.getElementsByTagName("div")[0];
let way4 = document.getElementsByName("js")[0];
let way5 = document.querySelector("#elzero");
let way6 = document.querySelector(".element");
let way7 = document.querySelector("div");
let way8 = document.querySelector("[name='js']");
let way9 = document.querySelectorAll("#elzero")[0];
let way10 = document.querySelectorAll(".element")[0];
let way11 = document.querySelectorAll("div")[0];
let way12 = document.querySelectorAll("[name='js']")[0];
let way13 = document.body.firstElementChild;
let way14 = document.body.children[0];
let way15 = document.body.lastElementChild[0];

let myImages = document.querySelectorAll("img");
myImages.forEach((img) => {
  img.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  img.alt = "Elzero Logo";
});

let input = document.querySelector("[name='dollar']");
let result = document.querySelector(".result");

input.oninput = function () {
  let usdValue = input.value;
  let egpValue = (usdValue * 15.6).toFixed(2);
  result.innerHTML = `{${usdValue}} USD Dollar = {${egpValue}} Egyptian Pound`;
};

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let tempText = one.textContent;
let tempTitle = one.title;

one.textContent = two.textContent;
one.title = two.title;

two.textContent = `${tempText} ${two.attributes.length}`;
two.title = tempTitle;

let allImgs = document.querySelectorAll("img");

allImgs.forEach((img) => {
  if (img.hasAttribute("alt")) {
    img.alt = "Old";
  } else {
    img.setAttribute("alt", "Elzero New");
  }
});

let myForm = document.forms[0];
let inputNum = document.querySelector("[name='elements']");
let inputText = document.querySelector("[name='texts']");
let selectType = document.querySelector("[name='type']");
let results = document.querySelector(".results");

myForm.onsubmit = function (e) {
  e.preventDefault();

  results.innerHTML = "";

  for (let i = 1; i <= inputNum.value; i++) {
    let myElement = document.createElement(selectType.value);

    myElement.className = "box";
    myElement.title = "Element";
    myElement.id = `id-${i}`;

    myElement.textContent = inputText.value;

    myElement.style.display = "inline-block";
    myElement.style.width = "150px";
    myElement.style.padding = "10px";
    myElement.style.margin = "10px";
    myElement.style.backgroundColor = "#ff5722";
    myElement.style.color = "white";
    myElement.style.textAlign = "center";
    myElement.style.borderRadius = "5px";

    results.appendChild(myElement);
  }
};
