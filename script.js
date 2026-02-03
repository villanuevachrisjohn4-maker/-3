// AUTO OPEN + MUSIC
window.addEventListener("load", () => {
  const music = document.getElementById("bg-music");
  music.volume = 0.5;

  // Mobile autoplay fix
  document.body.addEventListener("click", () => {
    music.play();
  }, { once: true });

  typeText();
  createHearts();
});

// TYPING ANIMATION
function typeText() {
  const container = document.getElementById("typed-text");
  const text = container.innerHTML;
  container.innerHTML = "";
  let i = 0;

  function typing() {
    if (i < text.length) {
      container.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 20);
    }
  }
  typing();
}

// FLOATING HEARTS
function createHearts() {
  const hearts = document.getElementById("hearts");

  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";
    hearts.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
  }, 500);
}
