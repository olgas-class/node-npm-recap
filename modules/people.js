import getName from "./names.js";
import getHobbies from "./hobbies.js";

function getPerson() {
  const name = getName("Pippo", "Bianchi");
  const hobby = getHobbies("leggere", "giocare", "guardare film");

  return {
    fullName: name,
    hobbies: hobby,
  };
}

export default getPerson;
