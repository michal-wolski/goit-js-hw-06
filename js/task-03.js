"use strict"

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const url = images.map(images => images.url);
const alt = images.map(images => images.alt);
const $ul = document.getElementsByClassName("gallery");
console.log(url);
console.log(alt);
console.log($ul);

// function createImg(element) {
//   const $ul = document.getElementsByClassName("gallery");
//   const $img = document.createElement("img");
//   $img.appendChild(document.createTextNode(element));
//   $ul.appendChild($img);
// }
// url.forEach(createImg);