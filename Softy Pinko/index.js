let valueDisplays = document.querySelectorAll(".num");
let interval = 2000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

window.addEventListener("load", function () {
  document.body.classList.add("fade-in");
});

function showLoadingOverlay() {
  const overlay = document.createElement("div");
  overlay.classList.add("loading-overlay");
  document.body.appendChild(overlay);

  // Trigger a reflow to force the browser to apply the initial styles
  void overlay.offsetWidth;

  overlay.style.opacity = "1";
  overlay.style.pointerEvents = "auto";
}

// Function to show the loading overlay
function showLoadingOverlay() {
  const overlay = document.createElement("div");
  overlay.classList.add("loading-overlay");
  document.body.appendChild(overlay);

  // Trigger a reflow to force the browser to apply the initial styles
  void overlay.offsetWidth;

  overlay.style.opacity = "1";
  overlay.style.pointerEvents = "auto";
}

// Function to show the loading overlay
function showLoadingOverlay() {
  const overlay = document.querySelector(".loading-overlay");
  overlay.style.opacity = "1";
  overlay.style.pointerEvents = "auto";
}

// Function to hide the loading overlay
function hideLoadingOverlay() {
  const overlay = document.querySelector(".loading-overlay");
  overlay.style.opacity = "0";
  overlay.style.pointerEvents = "none";
  setTimeout(() => {
    overlay.style.display = "none";
  }, 1500); // Adjust the time (in milliseconds) to match your transition duration
}

// Show the overlay when the page starts loading
document.body.onload = function () {
  const overlay = document.querySelector(".loading-overlay");
  overlay.style.opacity = "1";
  overlay.style.pointerEvents = "auto";
  setTimeout(hideLoadingOverlay, 1000); // Show the overlay for 1 second before hiding
};
