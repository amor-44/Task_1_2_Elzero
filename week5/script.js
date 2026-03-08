function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let names = zName.split(" ");
    return `${names[0]} ${names[1][0].toUpperCase()}.`;
  }

  function ageWithMessage(zAge) {
    let age = parseInt(zAge);
    return `Your Age Is ${age}`;
  }

  function countryTwoLetters(zCountry) {
    return `You Live In ${zCountry.substring(0, 2).toUpperCase()}`;
  }

  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
  }

  return fullDetails();
}

console.log(getDetails("Amr Hesham", "20 Is My Age", "Egypt"));

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));

let itsMe = () => `I'm A Normal Function`;
console.log(itsMe());

const urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org"));

const checker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Available`;
console.log(checker("Amr")("Available")(4000));
console.log(checker("Amr")("Not Available")());

function specialMix(...data) {
  let result = 0;

  for (let i = 0; i < data.length; i++) {
    let value = parseInt(data[i]);

    if (!isNaN(value)) {
      result += value;
    }
  }

  if (result === 0) {
    return "All Is Strings";
  }

  return result;
}

console.log(specialMix(10, 20, 30));
console.log(specialMix("10Test", "Testing", "20Cool"));
console.log(specialMix("Testing", "10Testing", "40Cool"));
console.log(specialMix("Test", "Cool", "Test"));

//==========================================================================

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let min = mix
  .map((ele) => (typeof ele === "string" ? ele : ""))
  .reduce((acc, current) => `${acc}${current}`);
// .map(function (ele) {
//   return typeof ele === "string" ? ele : "";
// })
// .reduce(function (acc, current) {
//   return `${acc}${current}`;
// });
console.log(min);

let myString = "EElllzzzzzzzeroo";

let noRepeat = myString
  .split("")
  .filter(function (ele, index, arr) {
    return arr.indexOf(ele) === index;
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });

console.log(noRepeat);

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let numRe = numsAndStrings
  .filter((ele) => typeof ele === "number")
  .map((ele) => -ele);
// .filter(function (ele) {
//   return typeof ele === "number";
// })
// .map(function (ele) {
//   return -ele;
// });

console.log(numRe);

let nums = [2, 12, 11, 5, 10, 1, 99];

let newNums = nums.reduce(function (acc, current) {
  return current % 2 === 0 ? acc * current : acc + current;
}, 1);

console.log(newNums);
