const heartsContainer = document.querySelector(".hearts");

const heartSymbols = [
    "❤️",
    "💕",
    "💗",
    "💖",
    "💓",
    "💘"
];


// ==============================
// Floating Hearts
// ==============================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML =
        heartSymbols[
            Math.floor(Math.random() * heartSymbols.length)
        ];

    // Random position
    heart.style.left =
        Math.random() * 100 + "vw";

    // Random size
    const size =
        Math.random() * 20 + 15;

    heart.style.fontSize =
        size + "px";

    // Random animation duration
    const duration =
        Math.random() * 5 + 5;

    heart.style.animationDuration =
        duration + "s";

    heartsContainer.appendChild(heart);

    // Remove after animation
    setTimeout(() => {

        heart.remove();

    }, duration * 1000);
}


// Create hearts continuously
setInterval(createHeart, 500);


// ==============================
// Forgive Button
// ==============================

function forgiveMe() {

    const message =
        document.getElementById("finalMessage");

    message.innerHTML =
        "Thank you for giving me a chance ❤️<br>" +
        "It really means a lot to me.";

    // Create extra hearts
    for (let i = 0; i < 15; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 100);
    }

    // Change question
    document.querySelector("h2").innerHTML =
        "Thank you ❤️";

    // Hide buttons
    document.querySelector(".buttons").style.display =
        "none";
}


// ==============================
// Not Yet Button
// ==============================

let moveCount = 0;

function moveButton() {

    const button =
        document.getElementById("noButton");

    moveCount++;

    if (moveCount < 4) {

        const x =
            Math.random() * 160 - 80;

        const y =
            Math.random() * 80 - 40;

        button.style.transform =
            `translate(${x}px, ${y}px)`;

    } else {

        button.innerHTML =
            "Okay, I'll wait 🥺";

        button.style.transform =
            "none";
    }
}


// ==============================
// Mouse / Touch Heart Effect
// ==============================

document.addEventListener("click", function(event) {

    // Don't create extra effect for the buttons
    if (event.target.tagName === "BUTTON") {
        return;
    }

    const heart =
        document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left =
        event.clientX + "px";

    heart.style.top =
        event.clientY + "px";

    heart.style.fontSize = "22px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "100";

    heart.style.transition =
        "all 1s ease";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform =
            "translateY(-80px) scale(1.5)";

        heart.style.opacity = "0";

    }, 50);

    setTimeout(() => {

        heart.remove();

    }, 1100);

});