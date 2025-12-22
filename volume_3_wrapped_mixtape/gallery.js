const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const aboutButton = document.querySelector(".about-button");
const hideButton = document.querySelector(".hide-button");
const introText = document.querySelector(".intro-text");
const galleryWall = document.querySelector(".wrapper");

let arts = [];
let mediaList = [];
let cardPosition = 0;

fetch("./media-data.json")
  .then((response) => response.json())
  .then((data) => {
    mediaList = data;

    arts = getArtOnly();
    console.log(arts);
    addArt();
  })
  .catch((error) => console.error("JSON load failed:", error));

function getArtOnly() {
  return mediaList.filter((item) => item.type === "meme-art");
}
function addArt() {
  let position = 0;
  for (const art of arts) {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
      <div class="card card${position} hidden">
          <div class="art-image"><img src="pics/gallery/${art.className}${art.filetype}"/></div>
          <div class="card-text"><div class="art-title"><p>${art.title}</p></div>
          <div class="art-media-contributers">${art.Collaborators}</div>
          <div class="art-media-description hidden"><p>${art.topicsummary}</p></div>
  
          <div class="art-media-description"><p>${art.pretentiousversion}</p></div>
                  <button class="less-pretentious">click to see less pretentious description</button>
          <button class="hidden more-pretentious">click to see more pretentious description</button></div>
          
        </div>`;
    galleryWall.appendChild(newDiv.firstElementChild);
    position = position + 1;
  }
  document.querySelector(".card0").classList.remove("hidden");
}

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
    document.querySelector(`.card${position}`).classList.add("hidden");
    document.querySelector(`.card${position + 1}`).classList.remove("hidden");
    position = position + 1;
  } else if (position + 1 < arts.length) {
    document.querySelector(`.card${position}`).classList.toggle("hidden");
    document.querySelector(`.card${position + 1}`).classList.toggle("hidden");
    position = position + 1;
  } else if (position + 1 == arts.length) {
    document.querySelector(`.card${position}`).classList.toggle("hidden");
    document.querySelector(`.card0`).classList.toggle("hidden");
    position = 0;
  }
}

function previousCard() {
  if (position == 0) {
    document.querySelector(`.card${position}`).classList.add("hidden");
    document
      .querySelector(`.card${arts.length - 1}`)
      .classList.remove("hidden");
    position = arts.length - 1;
  } else if (position - 2 > 0) {
    document.querySelector(`.card${position}`).classList.toggle("hidden");
    document.querySelector(`.card${position - 1}`).classList.toggle("hidden");
    position = position - 1;
  }
}

next.addEventListener("click", nextCard);
previous.addEventListener("click", previousCard);
