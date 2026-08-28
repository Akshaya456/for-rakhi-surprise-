
function openSurprise() {

    const welcome = document.getElementById("welcomeScreen");
    const surprise = document.getElementById("surpriseScreen");

    welcome.style.display = "none";

    surprise.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ========================================
// OPEN PERSONAL MESSAGE
// ========================================

function showMessage() {

    const surprise = document.getElementById("surpriseScreen");
    const message = document.getElementById("messageScreen");

    surprise.style.display = "none";

    message.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showMemories() {

    const message = document.getElementById("messageScreen");
    const memories = document.getElementById("memoriesScreen");

    message.style.display = "none";

    memories.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function showFinalMessage() {

    const memories = document.getElementById("memoriesScreen");
    const finalScreen = document.getElementById("finalScreen");

    memories.style.display = "none";

    finalScreen.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // Start celebration
    createConfetti();
}


function createConfetti() {

    const container =
        document.getElementById("confettiContainer");

    const pieces = [
        "❤️",
        "💖",
        "💕",
        "💗",
        "✨",
        "🌸",
        "⭐"
    ];


    for (let i = 0; i < 45; i++) {

        const piece = document.createElement("span");

        piece.innerText =
            pieces[Math.floor(Math.random() * pieces.length)];


        piece.style.position = "absolute";

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.top = "-30px";

        piece.style.fontSize =
            (15 + Math.random() * 20) + "px";

        piece.style.zIndex = "2";

        piece.style.pointerEvents = "none";


        const duration =
            3 + Math.random() * 5;

        const delay =
            Math.random() * 2;


        piece.style.animation =
            `fall ${duration}s linear ${delay}s forwards`;


        container.appendChild(piece);


        // Remove after animation

        setTimeout(() => {

            piece.remove();

        }, (duration + delay) * 1000);

    }

}