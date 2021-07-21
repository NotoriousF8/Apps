"use strict";

//values
let counter = Number(0);

//selectors
const buttonIncrement = document.querySelector(".button1");
const buttonDecrement = document.querySelector(".button2");
const buttonReset = document.querySelector(".button3");
const counterDisplay = document.querySelector(".counter");
counterDisplay.textContent = Number(0);

//incr decr click event
buttonIncrement.addEventListener("click", function () {
  counter++;
  counterDisplay.textContent = counter;
});

buttonDecrement.addEventListener("click", function () {
  counter--;
  counterDisplay.textContent = counter;
});

//reset button
buttonReset.addEventListener("click", function () {
  counter = 0;
  counterDisplay.textContent = 0;
});
