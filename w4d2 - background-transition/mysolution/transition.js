"use strict";

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + r + "," + g + "," + b + ")";
  console.log(bgColor);

  document.querySelector("div").style.background = bgColor;
}

setInterval(randomColor, 2000);
