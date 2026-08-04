// Floating Balloons
const colors = ["red", "blue", "yellow", "green", "purple"];

for (let i = 0; i < 25; i++) {

    const balloon = document.createElement("div");

    balloon.classList.add("balloon");
    balloon.classList.add(colors[Math.floor(Math.random() * colors.length)]);

    balloon.style.left = Math.random() * 100 + "%";
    balloon.style.animationDuration = (8 + Math.random() * 8) + "s";
    balloon.style.animationDelay = Math.random() * 5 + "s";

    document.body.appendChild(balloon);
}

// Popup
const btn = document.getElementById("surpriseBtn");
const popup = document.getElementById("birthdayPopup");
const close = document.querySelector(".close");

btn.addEventListener("click", () => {
    popup.style.display = "flex";
    createConfetti();
});

close.addEventListener("click", () => {
    popup.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});

// Confetti
function createConfetti() {

    for (let i = 0; i < 250; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";

        confetti.style.background =
            `hsl(${Math.random() * 360},100%,50%)`;

        confetti.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}