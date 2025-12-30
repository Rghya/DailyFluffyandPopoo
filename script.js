// Example countdown logic
const targetDate = new Date("2026-01-01");

function updateTime() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) return;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);
  const remDays = days % 30;

  document.getElementById("time").innerHTML =
    `${years} YEAR<br>${months} MONTH<br>${remDays} DAYS`;
}

setInterval(updateTime, 1000);
updateTime();
