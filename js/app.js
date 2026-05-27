import {
  chillPlaylist,
  energyPlaylist,
  happyPlaylist,
  sadPlaylist,
} from "./data.js";

const playlists = {
  happy: happyPlaylist,
  sad: sadPlaylist,
  chill: chillPlaylist,
  energy: energyPlaylist,
};

const buttons = document.querySelectorAll(".mood");
const playlistElement = document.getElementById("list-songs");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const value = button.getAttribute("value");
    renderPlaylist(playlists[value]);
  });
  button.addEventListener("click", () => {
    const value = button.getAttribute("value");
    const backgroundColor = document.getElementById("background");
    if (value === "happy") {
      backgroundColor.style.backgroundColor = "hsl(48, 100%, 65%)";
    } else if (value === "chill") {
      backgroundColor.style.backgroundColor = "hsl(170, 45%, 80%)";
    } else if (value === "sad") {
      backgroundColor.style.backgroundColor = "hsl(220, 25%, 35%)";
    } else if (value === "energy") {
      backgroundColor.style.backgroundColor = "hsl(100, 100%, 55%)";
    } else {
      backgroundColor.style.backgroundColor = "white";
    }
  });
});

function renderPlaylist(data) {
  playlistElement.innerHTML = "";
  data.forEach((song) => {
    const li = document.createElement("li");
    li.textContent = `${song.title} - ${song.artist}`;
    playlistElement.appendChild(li);
  });
}
