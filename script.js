const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const previous2 = document.querySelector(".previous2");
const next2 = document.querySelector(".next2");
const aboutButton = document.querySelector(".about-button");
const hideButton = document.querySelector(".hide-button");
const introText = document.querySelector(".intro-text");
const revealChad = document.querySelector(".revealChad");
const hideChad = document.querySelector(".hideChad");
const revealKink = document.querySelector(".revealKink");
const hideKink = document.querySelector(".hideKink");

const cardList = [
  "card0",
  "card1",
  "card2",
  "card3",
  "card4",
  "card5",
  "card6",
  "card7",
  "card8",
  "card9",
  "card10",
  "card11",
  "card12",
];

var position = 0;

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

function revealChadFunc() {
  document.querySelector(".chadJesus").classList.toggle("hidden");
  document.querySelector(".card1Warning").classList.toggle("hidden");
}
function revealKinkFunc() {
  document.querySelector(".kinkJesus").classList.toggle("hidden");
  document.querySelector(".card6Warning").classList.toggle("hidden");
}

next.addEventListener("click", nextCard);
previous.addEventListener("click", previousCard);

next2.addEventListener("click", nextCard);
previous2.addEventListener("click", previousCard);
hideChad.addEventListener("click", nextCard);
revealChad.addEventListener("click", revealChadFunc);

hideKink.addEventListener("click", nextCard);
revealKink.addEventListener("click", revealKinkFunc);
