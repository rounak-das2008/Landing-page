const W = window.innerWidth;
const H = window.innerHeight

function updateAnimationTiming() {
  const animationDuration = 5 + Math.random() * 5; // [5 - 10)
  const animationDelay = 5 + Math.random() * 10; // [5 - 15)
  
  window.requestAnimationFrame(() => {
    document.documentElement.style.setProperty('--animationDuration', animationDuration + 's');
    document.documentElement.style.setProperty('--animationDelay', animationDelay + 's');
  });
  
  const timeout = (animationDuration + animationDelay) * 1000 - 100;
  
  setTimeout(updateAnimationTiming, timeout);
}

updateAnimationTiming();

document.addEventListener('mousemove', e => {
  window.requestAnimationFrame(() => {
    const X = e.clientX;
    const Y = e.clientY;

    document.documentElement.style.setProperty('--cursorX', X + 'px');
    document.documentElement.style.setProperty('--cursorY', Y + 'px');

    const X2 = X - (12 * W / 100) * (X / W - 0.5);
    const Y2 = Y - (12 * W / 100) * (Y / H - 0.5);

    document.documentElement.style.setProperty('--cursorX2', X2 + 'px');
    document.documentElement.style.setProperty('--cursorY2', Y2 + 'px');
  });
});

// For Continue button loading ------
document.getElementById("continue-btn").style.display = "none";

function showStuff() {
    document.getElementById("continue-btn").style.display = "inline";
}
// function myFunction() {
//     window.location = "index.html"
// }

// setTimeout(showStuff, 5000);
$(window).on('load', function() {
  $('.continue-button').delay(6000).fadeIn()
})


const button = document.querySelector("#music-button");
const icon = document.querySelector("#music-button > i");
const audio = document.querySelector("audio");

button.addEventListener("click", () => {
  if (audio.paused) {
    audio.volume = 0.2;
    audio.play();
    icon.classList.remove('fa-volume-up');
    icon.classList.add('fa-volume-mute');
    
  } else {
    audio.pause();
    icon.classList.remove('fa-volume-mute');
    icon.classList.add('fa-volume-up');
  }
  button.classList.add("fade");
});


const targetDiv = document.getElementById("bg-video-div");
const btn = document.getElementById("continue-btn");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};