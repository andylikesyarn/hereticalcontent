const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const previous2 = document.querySelector(".previous2");
const next2 = document.querySelector(".next2");
const aboutButton = document.querySelector(".about-button");
const hideButton = document.querySelector(".hide-button");
const introText = document.querySelector(".intro-text");
const galleryWall = document.querySelector(".wrapper");

let arts = [];
let mediaList = [];
fetch("./media-data.json")
  .then((response) => response.json())
  .then((data) => {
    mediaList = data;

    pics = getPicsOnly();
    console.log(arts);
    //addPics();
  })
  .catch((error) => console.error("JSON load failed:", error));

function getPicsOnly() {
  return mediaList.filter((item) => item.type === "pic");
}
function addPics() {
  for (const pic of pics) {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
      <div class="card card">
          <div class="art-image"><img src="pics/gallery/${pic.className}.png"/></div>
          <div class="art-title">${pic.title}</div>
          <div class="art-media-type"></div>
          <div class="art-media-contributers"></div>
          <div class="art-media-description"></div>
        </div>`;
    galleryWall.appendChild(newDiv.firstElementChild);
    console.log("looped");
  }
}

var position = 0;
/*
hideButton.addEventListener("click", (e) => {
  hideButton.classList.toggle("hidden");
  aboutButton.classList.toggle("hidden");
  introText.classList.toggle("hidden");
});

aboutButton.addEventListener("click", (e) => {
  hideButton.classList.toggle("hidden");
  aboutButton.classList.toggle("hidden");
  introText.classList.toggle("hidden");
});

function nextCard() {
  if (position == 0) {
    document.querySelector(`.${cardList[position]}`).classList.add("hidden");
    document
      .querySelector(`.${cardList[position + 1]}`)
      .classList.toggle("hidden");
    previous.classList.remove("hidden");
    previous2.classList.remove("hidden");
    position = position + 1;
  } else if (position + 2 < cardList.length) {
    document.querySelector(`.${cardList[position]}`).classList.toggle("hidden");
    document
      .querySelector(`.${cardList[position + 1]}`)
      .classList.toggle("hidden");
    position = position + 1;
  } else if (position + 2 == cardList.length) {
    document.querySelector(`.${cardList[position]}`).classList.toggle("hidden");
    document
      .querySelector(`.${cardList[position + 1]}`)
      .classList.toggle("hidden");
    position = position + 1;
    next.classList.toggle("hidden");
    next2.classList.toggle("hidden");
  }
}

function previousCard() {
  if (position == cardList.length - 1) {
    document.querySelector(`.${cardList[position]}`).classList.toggle("hidden");
    document
      .querySelector(`.${cardList[position - 1]}`)
      .classList.toggle("hidden");

    next.classList.toggle("hidden");
    next2.classList.toggle("hidden");
    position = position - 1;
  } else if (position - 1 > 0) {
    document.querySelector(`.${cardList[position]}`).classList.toggle("hidden");
    document
      .querySelector(`.${cardList[position - 1]}`)
      .classList.toggle("hidden");

    position = position - 1;
  } else if (position - 1 == 0) {
    previous.classList.toggle("hidden");

    previous2.classList.toggle("hidden");
    document.querySelector(`.${cardList[position]}`).classList.toggle("hidden");
    document
      .querySelector(`.${cardList[position - 1]}`)
      .classList.toggle("hidden");
    position = position - 1;
  }
}

next.addEventListener("click", nextCard);
previous.addEventListener("click", previousCard);

next2.addEventListener("click", nextCard);
previous2.addEventListener("click", previousCard);
*/
