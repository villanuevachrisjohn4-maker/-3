const envelope = document.querySelector(".envelope");
const flap = document.querySelector(".envelope-flap");
const music = document.getElementById("bg-music");
const textBox = document.getElementById("typed-text");

let opened = false;

envelope.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  envelope.classList.add("open");

  // Start music gently
  music.volume = 0.6;
  music.play();

  // Delay typing until envelope opens
  setTimeout(startTyping, 900);
});

function startTyping() {
  const fullText = textBox.dataset.text.trim();
  textBox.innerHTML = "";
  textBox.classList.add("type-cursor");

  let index = 0;
  const speed = 28; // soft cinematic pace

  function type() {
    if (index < fullText.length) {
      if (fullText[index] === "\n") {
        textBox.innerHTML += "<br><br>";
      } else {
        textBox.innerHTML += fullText[index];
      }
      index++;
      setTimeout(type, speed);
    } else {
      textBox.classList.remove("type-cursor");
    }
  }

  type();
}

/* FLOATING HEARTS */
const hearts = document.getElementById("hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 10 + 14 + "px";
  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 700);
