const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const aboutButton = document.querySelector(".about-button");
const hideButton = document.querySelector(".hide-button");
const introText = document.querySelector(".intro-text");

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
  if (position <= cardList.length) {
    document.querySelector(`.${cardList[position]}`).classList.toggle("hidden");
    document
      .querySelector(`.${cardList[position + 1]}`)
      .classList.toggle("hidden");
    position = position + 1;
  }
}

function previousCard() {
  if (position > 0) {
    document.querySelector(`.${cardList[position]}`).classList.toggle("hidden");
    document
      .querySelector(`.${cardList[position - 1]}`)
      .classList.toggle("hidden");
    position = position - 1;
  }
}
next.addEventListener("click", nextCard);
previous.addEventListener("click", previousCard);
