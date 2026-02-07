document.writeln("<h1>Elzero</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "Arial";

console.log(
  "%cElzero %cWeb %cSchool",
  "color:red; font-size:40px",
  "color:green; font-size:40px; font-weight:bold",
  "color:white; font-size:40px; background-color:blue",
);

console.table(["elzero", "elzero", "elzero", "elzero", "elzero"]);

//console.log("Iam In Console");
//document.write("Iam In Page");

/*
console.log("Iam In Console");
document.write("Iam In Page");
*/

//Task 2=>  10 to 17
let numberOne = 10;
let numberTwo = 20;
console.log(numberOne + "" + numberTwo);
console.log(typeof "numberOne + numberTwo");
console.log(`${numberOne}${numberTwo}`);
console.log(typeof `${numberOne}${numberTwo}`);

console.log(numberTwo + "\n" + numberOne);
console.log(`${numberTwo}
${numberOne}`);

console.log(elzero.innerHTML);
console.log(typeof elzero);

console.log(
  ' `i\'m In \n \\\\ \n Love \\\\ """ \'\'\' \n ++ with ++ \n \\"""\\""" \n ""javaScript""\`\` ',
);
