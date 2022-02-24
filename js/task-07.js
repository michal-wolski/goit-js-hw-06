"use strict"

// // Napisz skrypt, który reaguje na zmianę wartości input#font-size-control (zdarzenie input) i zmienia styl 
// inline span#text aktualizując właściwość font-size. W rezultacie, podczas przeciągania paska przesuwania będzie 
// zmieniał się rozmiar tekstu.

const $input = document.querySelector("#font-size-control");
const $text = document.querySelector("#text");

$input.addEventListener("input", () => {
    $text.style.fontSize = `${$input.value}px`;
})