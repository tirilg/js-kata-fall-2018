"use strict";

function findAll(arr, search) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
      console.log(i);
      console.log(arr[i]);
    }
  }
}

const animals = [
  "dog",
  "cat",
  "horse",
  "cat",
  "mouse",
  "dog",
  "cat",
  "cat",
  "dog"
];

const catsAt = findAll(animals, "cat");
//console.log(catsAt);
