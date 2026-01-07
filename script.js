// TIMER
const targetDate = new Date("May 16, 2028").getTime();
const timerEl = document.getElementById("timer");

setInterval(() => {
  const now = new Date().getTime();
  let diff = targetDate - now;

  if (diff < 0) diff = 0;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);
  const remDays = (days % 365) % 30;

  timerEl.textContent =
    `Time Left : ${years} Years ${months} Months ${remDays} Days`;
}, 1000);


// SPOTIFY READY FUNCTION (future)
function loadSpotifySong({ image, name, preview }) {
  document.getElementById("songImg").src = image;
  document.getElementById("songName").textContent = name;

  const audio = new Audio(preview);
  document.getElementById("playBtn").onclick = () => audio.play();
}
