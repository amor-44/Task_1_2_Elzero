let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += 10) {
  if (i === exclude) {
    continue;
  }
  console.log(i);
}

//=======================================================

let startt = 10;
let endd = 0;
let stopp = 3;

for (let i = startt; i >= stopp; i--) {
  if (i < start) {
    console.log(`${endd}${i}`);
  } else {
    console.log(`${i}`);
  }
}

//=======================================================

let starttt = 1;
let enddd = 6;
let breaker = 2;

for (let i = starttt; i <= enddd; i++) {
  console.log(i);
  for (let j = breaker; j <= enddd - breaker; j += breaker) {
    console.log(`-- ${j}`);
  }
}

//=======================================================

let index = 10;
let jump = 2;

for (;;) {
  console.log(index);
  index -= jump;
  if (index === jump) {
    break;
  }
}

//=======================================================

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let num = letter.length;

for (let i = letter.indexOf(letter); i < friends.length; i++) {
  if (friends[i].startsWith(letter.toUpperCase())) {
    continue;
  }
  console.log(`"${num} => ${friends[i]}"`);
  num++;
}

//==========================================================

let start1 = 0;
let swappedName = "elZerO";

let result = swappedName.substring(start1, start1);

for (let i = start1; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toLowerCase()) {
    result += swappedName[i].toUpperCase();
  } else {
    result += swappedName[i].toLowerCase();
  }
}
console.log(`"${result}"`);

//==========================================================

let start2 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = mix[start2]; i < mix.length; i++) {
  if (typeof mix[i] === typeof mix[start2]) {
    console.log(mix[i]);
  }
}

//==========================================================

//Function ==>

  function sayHello(theName, theGender) {
  // Your Code Here
  if (theGender === "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender === "Female") {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

//====================================================

function calculate(firstNum, secondNum, operation) {
  // Your Code Here
  if (secondNum === undefined) {
    console.log(`Second Number Not Found`);
  } else if (operation === "add") {
    console.log(firstNum + secondNum);
  } else if (operation === "subtract") {
    console.log(firstNum - secondNum);
  } else if (operation === "multiply") {
    console.log(firstNum * secondNum);
  } else {
    console.log(firstNum + secondNum);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

//====================================================

function ageInTime(theAge) {
  // Your Code Here
  if (theAge < 10 || theAge > 100) {
    console.log(`Age Out Of Range`);
  } else {
    console.log(theAge * 12);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

//====================================================

function checkStatus(a, b, c) {
  // Your Code Here
  let name = a;
  let age = b;
  let status = c;
  let data = [a, b, c];
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "string") {
      name = data[i];
    } else if (typeof data[i] === "number") {
      age = data[i];
    } else if (typeof data[i] === "boolean") {
      status = data[i];
    }
  }
  let statusMessage =
    status === true
      ? "You Are Available For Hire"
      : "You Are Not Available For Hire";
  console.log(`Hello ${name}, Your Age Is ${age}, ${statusMessage}`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

//====================================================

function multiply(...numbers) {
  // Your Code Here
  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "string") {
      continue;
    }
    result *= Math.trunc(numbers[i]);
  }
  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

//Thank You