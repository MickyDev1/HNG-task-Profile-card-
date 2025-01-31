const timeElement = document.querySelector('.time');
function updateTime() {
  const now = new Date();
  timeElement.textContent = `Current localTime: ${now.toLocaleTimeString()}`;
}
updateTime();
setInterval(updateTime, 1000); // Update time every second