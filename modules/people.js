// import getName from "./names.js";
// import getHobbies from "./hobbies.js";
const getName = require("./names.js");
const getHobbies = require("./hobbies.js");

function getPerson() {
  const name = getName("Pippo", "Bianchi");
  const hobby = getHobbies("leggere", "giocare", "guardare film");

  return {
    fullName: name,
    hobbies: hobby,
  };
}

const myVar = "Ciao";

module.exports = { getPerson, myVar };
