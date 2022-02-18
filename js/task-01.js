"use strict"

const $liWithClass = document.querySelectorAll('li.item');
const $title = document.querySelectorAll("h2")
const $allUL = document.querySelectorAll('ul')


console.log(`Number of categories: ${$liWithClass.length}`);
console.log(`Category: ${$title[0].textContent}
Elements: ${$allUL[1].children.length}

Category: ${$title[1].textContent}
Elements: ${$allUL[2].children.length}

Category: ${$title[2].textContent}
Elements: ${$allUL[3].children.length}`)