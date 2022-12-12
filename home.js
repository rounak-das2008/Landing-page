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
