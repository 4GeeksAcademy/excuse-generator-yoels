/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  console.log("Hello Rigo from the console!");
  document.querySelector(".theExcuse").innerHTML = excuseGenerator();
};

let excuseGenerator = () => {
  let who = ["the dog", "my sister", "my cat", "the plumber"];
  let action = ["ate", "scratched", "poop", "broke"];
  let what = ["my homeword", "my project", "the card", "the keys"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
};
