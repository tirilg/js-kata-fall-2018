"use strict";

const modal = document.querySelector("#modal_container");
const modalBTN = document.querySelectorAll(".modalText");
const closeBTN = document.querySelector("#closebutton");

modalBTN.forEach(showModal => {
  showModal.addEventListener("click", function(openModal) {
    modal.style.display = "block";
  });
});

closeBTN.addEventListener("click", function(closeModal) {
  modal.style.display = "none";
});
