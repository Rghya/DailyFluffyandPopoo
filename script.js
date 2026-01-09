const timerEl = document.getElementById("timer");
const targetDate = new Date("May 16, 2028 00:00:00").getTime();

setInterval(() => {
  const now = Date.now();
  let diff = targetDate - now;
  if (diff < 0) diff = 0;

  const totalSeconds = Math.floor(diff / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);
  const hours = totalHours % 24;
  const totalDays = Math.floor(totalHours / 24);

  const years = Math.floor(totalDays / 365);
  const months = Math.floor((totalDays % 365) / 30);
  const days = (totalDays % 365) % 30;

  timerEl.innerHTML = `
    Time Left :
    ${years}Y ${months}M ${days}D
    ${hours}H ${minutes}M ${seconds}S
  `;
}, 1000);

function loadSpotifyEmbed(spotifyLink) {
  const embedLink = spotifyLink.replace(
    "open.spotify.com/",
    "open.spotify.com/embed/"
  );
  document.getElementById("spotifyEmbed").src = embedLink;
}

/* 🔥 USE IT */
loadSpotifyEmbed(
  "https://open.spotify.com/playlist/4D7zAhFPy0AYyMDWotStb2?si=c29ed4TOTi62C_15-PtUqA"
);