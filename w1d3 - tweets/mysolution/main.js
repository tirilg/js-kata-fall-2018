//https://kea-alt-del.dk/twitter/api/?hashtag=word&?count=50
"use strict";
window.addEventListener("load", () => {
  const tweetTemp = document.querySelector(".tweetTemp").content;
  const tweetList = document.querySelector("main");

  fetch("https://kea-alt-del.dk/twitter/api/?hashtag=javascript&?count=60")
    .then(e => e.json())
    .then(showTweets);

  function showTweets(data) {
    console.log(data);
    data.statuses.forEach(showTweet);
  }

  function showTweet(aTweet) {
    const clone = tweetTemp.cloneNode(true);
    clone.querySelector("h1").textContent = aTweet.text;
    clone.querySelector("p").textContent = aTweet.user.screen_name;
    clone.profile_background_image_url;
    tweetList.appendChild(clone);
  }
});
