window.addEventListener("load", () => {
  const audio = document.getElementById("myAudio");

  audio.play().catch(() => {
    console.log("Autoplay blocked. Waiting for user interaction.");

    document.body.addEventListener(
      "click",
      () => {
        audio.play();
      },
      { once: true },
    );
  });
});
const button = document.getElementById("surpriseButton");
const messageDiv = document.getElementById("message");

const messageText =
  "SURPRISEEEEE!!!!🎉🥳 HAPPYY HAPPYYYY 19TH🎂🧁BIRTHDAY KURDAPSSSS!!💜💜 same na tayoo😆💚 matanda ka na rin💚😆😆 WSHAHAHAHAHAHAHA💚💜. Wish ko sa birthday mo, ay matupad ang mga wish mo at maging masaya ka, celebrate and enjoy your day💜💜😸 and I wish na bigyan ka ulit ng napakaraming energy, strength, courage, and self trust for this another chapter of your life💚💜. And again I want you to be proud of yourself sa lahat ng pinagdaanan mo throughout the years💚 at wag na wag susuko for your dreamsss💜💜 Always remember that I'm here to cheer and support you Luluu!💚. Again, HAPPYY HAPPYYY BIRTHDAYYY KURDAPSS KOO!!💚💚💜💜😸 ";

button.addEventListener("click", () => {
  button.style.opacity = 0;

  setTimeout(() => {
    button.style.display = "none";

    messageDiv.style.display = "block";

    requestAnimationFrame(() => {
      messageDiv.style.opacity = 1;
    });

    typeMessage(messageText, messageDiv, 0);
    createConfettiInfinite(200);
  }, 600);
});

function typeMessage(text, element, index) {
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    setTimeout(() => typeMessage(text, element, index + 1), 60);
  }
}

function createConfettiInfinite(count) {
  for (let i = 0; i < count; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.backgroundColor = getRandomColor();

    // Confetti
    const minSize = Math.max(3, window.innerWidth * 0.005);
    const maxSize = Math.min(15, window.innerWidth * 0.015);
    const size = Math.random() * (maxSize - minSize) + minSize;
    confetti.style.width = confetti.style.height = `${size}px`;

    // Position
    confetti.style.left = Math.random() * window.innerWidth + "px";

    const minDuration = 2;
    const maxDuration = 5;
    const duration = Math.random() * (maxDuration - minDuration) + minDuration;
    confetti.style.animationDuration = `${duration}s`;

    document.body.appendChild(confetti);

    // Loops
    confetti.addEventListener("animationiteration", () => {
      confetti.style.left = Math.random() * window.innerWidth + "px";
    });
  }
}

function getRandomColor() {
  const colors = ["#ffffff", "#d9a1f0", "#f3c6f1", "#ffb6c1", "#ee82ee"];
  return colors[Math.floor(Math.random() * colors.length)];
}

window.addEventListener("resize", () => {
  document.querySelectorAll(".confetti").forEach((c) => {
    const minSize = Math.max(3, window.innerWidth * 0.005);
    const maxSize = Math.min(15, window.innerWidth * 0.015);
    const size = Math.random() * (maxSize - minSize) + minSize;
    c.style.width = c.style.height = `${size}px`;

    // Reposition
    c.style.left = Math.random() * window.innerWidth + "px";
  });
});
