"use strict"
// Napisz skrypt, który przy utracie fokusu na polu input (zdarzenie blur) sprawdza jego zawartość na prawidłową liczbę wprowadzonych symboli.
// Informacja o liczbie symboli, która powinna znajdować się w polu input, pokazuje się w jego atrybucie data-length.
// Jeśli wprowadzono odpowiednią liczbę symboli, to border pola input staje się zielone, a jeśli liczba jest nieprawidłowa - czerwone.
// Aby dodać style, używaj klas CSS valid i invalid, które już dodaliśmy do plików źródłowych zadania.


const $input = document.querySelector("#validation-input");

$input.addEventListener("input", (validation));

function validation(e) {
  if (e.target.value.length >= e.target.dataset.length) {
    e.target.classList.add("valid");
    e.target.classList.remove("invalid")
  } else {
    e.target.classList.add("invalid");
  }
}
