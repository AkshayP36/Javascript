const fs = require("fs");
const utils = require("./utils.js");

console.log("This is Sparta!");
fs.writeFileSync("akshay.txt", "This is Sparta!");
fs.appendFileSync("akshay.txt","   Akshay is on target again!");
var data = fs.readFileSync("akshay.txt");
console.log(data);

console.log(utils);
console.log("goal = " +utils.go);
console.log("age = " +utils.age);
