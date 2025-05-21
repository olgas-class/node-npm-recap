// import getPerson from "../modules/people.js";
// import getName from "../modules/names.js";
// import chalk from "chalk";

const { getPerson } = require("../modules/people.js");
const getName = require("../modules/names.js");

console.log("Ciao, sono log");

console.log(getPerson());

const name = process.argv[2];
const lastname = process.argv[3];
console.log(getName(name, lastname));
