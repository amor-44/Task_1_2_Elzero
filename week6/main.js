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
