"use strict"
const $input = document.querySelector("#name-input");
const $output = document.querySelector("#name-output");

$input.addEventListener("input", (event) => {
  if (event.target.value) {
    $output.textContent = event.target.value;
    $output.textContent = input
  } else { $output.textContent = `Anonymous`};
});
