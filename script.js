const timeElement = document.querySelector('[data-testid="currentTimelocal"]');
function updateTime() {
  const now = new Date();
  timeElement.textContent = `Current localTime: ${now.toLocaleString()}`;
}
updateTime();
setInterval(updateTime, 60000); // Update every minute