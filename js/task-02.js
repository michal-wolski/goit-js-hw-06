"use strict"
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const fragment = document.createDocumentFragment();
const $ul = document.getElementById("ingredients")
function createLi(element) {
  const $li = document.createElement("li");
  $li.appendChild(document.createTextNode(element));
  $li.setAttribute("class", "item");
  fragment.appendChild($li);
}

ingredients.forEach(createLi);


$ul.append(fragment)
