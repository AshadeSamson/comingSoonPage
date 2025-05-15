// Countdown logic
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 30);

function updateCountdown() {
  const now = new Date();
  const diff = launchDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // You can create an element like <div id="countdown"></div> to display this
  // document.getElementById('countdown').innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Notification form logic
document.querySelector('.notify-button').addEventListener('click', () => {
  const email = prompt("Enter your email to be notified when we launch:");
  if (email) {
    alert("Thank you! We'll notify you when we're ready.");
    // Send to backend here
  }
});
