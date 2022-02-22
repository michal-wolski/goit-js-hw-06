"use strict"
let $counterValue = document.querySelector("#value");
const $btnDecrement = document.querySelector('button[data-action="decrement"]')
const $btnIncrement = document.querySelector('button[data-action="increment"]');


let counterValue = 0;

const increment = () => {
    counterValue += 1;
    $counterValue.textContent = counterValue;
  }
  const decrement = () => {
    counterValue -= 1;
    $counterValue.textContent = counterValue;
  };


  $btnDecrement.addEventListener("click", decrement);
  $btnIncrement.addEventListener("click", increment);