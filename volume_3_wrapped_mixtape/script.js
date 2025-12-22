const previous = document.querySelector(".tv-button-down");
const next = document.querySelector(".tv-button-up");
const aboutButton = document.querySelector(".about-button");
const hideButton = document.querySelector(".hide-button");
const introText = document.querySelector(".intro-text");
const staticRemove = document.getElementById("static-image");
const videoPlayer = document.getElementById("video-player-id");
const videoSource = document.getElementById("video-source");
const cassettePlayer = document.querySelector(".cassette-player");
const musicCard = document.querySelector(".card1");
const detailsButton = document.querySelector(".tv-button-details");
const detailsPopup = document.querySelector(".details-popup");
const channelNumber = document.querySelector(".tv-channel-number");
const bookReportPopup = document.querySelector(".book-popup");
const bookReport = document.querySelector("#book-report-text");
const scythe = document.querySelector(".scythe");
const thePower = document.querySelector(".the-power");
const SOTR = document.querySelector(".sunrise-on-the-reaping");
const artemisFowl = document.querySelector(".artemis-fowl");
const brokenEarth = document.querySelector(".broken-earth");
const hungerGames = document.querySelector(".hunger-games");
const closeButton = document.querySelector(".close-button");
const allChannelsDiv = document.querySelector(".all-channels");
const cassetteLabel = document.querySelector(".cassette-label");

let mediaList = [];
let books = [];
let videos = [];
let photos = [];
let art = [];
let songs = [];
var position = 0;

fetch("./media-data.json")
  .then((response) => response.json())
  .then((data) => {
    mediaList = data;
    books = getBooksOnly();
    videos = getVideosOnly();
    art = getArtOnly();
    songs = getSongsOnly();
    console.log(books);
  })
  .catch((error) => console.error("JSON load failed:", error));

function getBooksOnly() {
  return mediaList.filter((item) => item.type === "book");
}

function getVideosOnly() {
  return mediaList.filter((item) => item.type === "video");
}

function getSongsOnly() {
  return mediaList.filter((item) => item.type === "song");
}

function getArtOnly() {
  return mediaList.filter((item) => item.type === "art");
}

function hideElementAfterDelay(varName) {
  // Set a timer to execute a function after 30000 milliseconds (30 seconds)
  setTimeout(function () {
    if (varName) {
      varName.classList.add("hidden");
    }
  }, 3000); //3 seconds
}

//goes to next video in list
function nextVideo() {
  position = position + 1 == videos.length ? 0 : position + 1;
  // this part will reset the z-level for .all-channels conditional on position
  allChannelsDiv.style.opacity = position == 0 ? "1" : "0";
  videoSource.src =
    //evaluates to next item in arry, unless you're already at the end of it
    // in that case, evalates to first item in list
    videos[position == videos.length ? 0 : position].path;
  //loads new vid
  videoPlayer.load();

  videoPlayer.play();
  //turns channel number back on
  channelNumber.classList.remove("hidden");
  //removes static visibility
  staticRemove.classList.add("hidden");
  //updates notes
  detailsPopup.innerHTML = `Notes: ${videos[position].notes}`;
  //assigns channel number
  channelNumber.innerHTML = videos[position].channelNumber;
  //runs function to hide channel number aft  er 3 seconds
  hideElementAfterDelay(channelNumber);
}

function previousVideo() {
  //allChannelsDiv.style.opacity = position - 1 == 0 ? 1 : 0;
  position = position === 0 ? videos.length - 1 : position - 1;
  allChannelsDiv.style.opacity =
    //(position - 1 + videos.length) % videos.length
    position === 0 ? "1" : "0";
  videoSource.src = videos[position == 0 ? videos.length - 1 : position].path;
  videoPlayer.load();
  videoPlayer.play();
  staticRemove.classList.add("hidden");
  channelNumber.classList.remove("hidden");
  detailsPopup.innerHTML = `Notes: ${videos[position].notes}`;
  channelNumber.innerHTML = videos[position].channelNumber;
  hideElementAfterDelay(channelNumber);
}

function changeButtonText() {
  detailsButton.innerHTML =
    detailsButton.innerHTML == "hide details"
      ? "click here for details"
      : "hide details";
  detailsPopup.classList.toggle("hidden");
}

function addChannels() {
  allChannelsDiv.classList.remove("hidden");
  for (const video of videos) {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
      <div class="channel-box">
        <div class="channel-number">${video.channelNumber}</div>
        <div class="channel-label">${video.title}</div>
        <div class="marquee-container">
          <div class="marquee-content">${video["marquee-description"]}</div>
        </div>
      </div></div></div>`;
    allChannelsDiv.appendChild(newDiv);
    console.log("all channels");
  }
}

staticRemove.addEventListener("click", (e) => {
  staticRemove.classList.add("hidden");
  addChannels();
});

cassettePlayer.addEventListener("click", (e) => {
  musicCard.classList.toggle("hidden");
});

cassetteLabel.addEventListener("click", (e) => {
  musicCard.classList.toggle("hidden");
});

detailsButton.addEventListener("click", changeButtonText);

musicCard.addEventListener("click", (e) => {
  musicCard.classList.add("hidden");
});

next.addEventListener("click", nextVideo);
previous.addEventListener("click", previousVideo);

//SCYTHE

function populateBook(bookClass) {
  const bookNotes = books.filter(
    (item) => item.className === `${bookClass}`
  )[0];
  document.getElementById(
    "book-report-text"
  ).innerHTML = `<h2 class="book-report-title">${bookNotes.title}</h2><br><h3 class="book-report-artist">${bookNotes.Artist}</h3><br><a href="${bookNotes.link}"><img src="pics/${bookNotes.className}-cover.png" style="max-height:300px;"/></a>
  <br> ${bookNotes.whyThis} <br> ${bookNotes.evaluation}`;
}

scythe.addEventListener("click", (e) => {
  bookReportPopup.classList.remove("hidden");
  /*const scytheBook = books.filter((item) => item.className === "scythe")[0];

  document.getElementById(
    "book-report-text"
  ).innerHTML = `${scytheBook.whyThis} <br> 
  ${scytheBook.evaluation}`;*/
  populateBook("scythe");
});

//THE POWER
thePower.addEventListener("click", (e) => {
  bookReportPopup.classList.remove("hidden");
  populateBook("the-power");
});

//SUNRISE ON THE REAPING
SOTR.addEventListener("click", (e) => {
  bookReportPopup.classList.remove("hidden");
  populateBook("sunrise");
});

//ARTEMIS FOWL
artemisFowl.addEventListener("click", (e) => {
  bookReportPopup.classList.remove("hidden");
  populateBook("artemis-fowl");
});

//HUNGER GAMES
hungerGames.addEventListener("click", (e) => {
  populateBook("hunger-games");
});

//BROKEN EARTH
brokenEarth.addEventListener("click", (e) => {
  populateBook("broken-earth");
});

closeButton.addEventListener("click", (e) => {
  bookReportPopup.classList.add("hidden");
});

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
