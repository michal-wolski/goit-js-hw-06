"use strict"
// Napisz skrypt, który zmienia kolor tła elementu <body> poprzez style inline po 
// kliknięciu na button.change-color i wprowadza wartość koloru do span.color.
// Aby wygenerować losowy kolor użyj funkcji getRandomHexColor.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const $body = document.body;
const $span = document.querySelector('.color')
const $changeBgColor = document.querySelector('.change-color')

$changeBgColor.addEventListener('click', ()=> {
  const newColor = getRandomHexColor();
  $span.textContent = newColor;
  $body.style.backgroundColor = newColor;
})


