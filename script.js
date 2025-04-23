let towerElement = document.getElementById("tower");
let heightSlider = document.getElementById("height-slider");
let messageElement = document.getElementById("message");

function buildTower() {
  let height = heightSlider.value;

  // Set tower height
  towerElement.style.height = height + "px";

  // Adjust message based on height
  if (height < 10000) {
    messageElement.textContent = `Your tower reaches ${height} km. Keep building!`;
  } else if (height >= 10000 && height < 384400) {
    messageElement.textContent = `Your tower reaches the Moon! 🌙`;
  } else if (height >= 384400 && height < 1000000) {
    messageElement.textContent = `Your tower reaches beyond the Moon to space! 🚀`;
  } else if (height >= 1000000) {
    messageElement.textContent = `Your tower is in orbit around Earth! 🛰️`;
  }
}

heightSlider.addEventListener("input", buildTower);
