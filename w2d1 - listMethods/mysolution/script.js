"use strict";

const info = document.querySelectorAll("#info ul li");

info.forEach(displayElement);

function displayElement(element) {
  console.log(element.textContent);
}

//function listMethods() {}

//listMethods(modify);
//listMethods(info);
//listMethods(newArray);

// TODO: Create listMethods function
