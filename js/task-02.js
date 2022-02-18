"use strict"
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


function createLi(element) {
  const $ul = document.getElementById("ingredients")
  const $li = document.createElement("li");
  $li.appendChild(document.createTextNode(element));
  $li.setAttribute("class", "item");
  $ul.appendChild($li);
}
ingredients.forEach(createLi);

