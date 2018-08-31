window.addEventListener("load", function findBTN() {
  const cookieBox = document.querySelector(".cookieBox");
  const acceptBTN = document.querySelector(".acceptBTN");
  cookieBox.classList.add("slideIn");

  removeCookies();
  function removeCookies() {
    acceptBTN.addEventListener("click", function removeCookieDiv() {
      cookieBox.classList.remove("slideIn");
    });
  }
});
