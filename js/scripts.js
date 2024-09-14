document.getElementById('start-game').addEventListener('click', startGame);

let gameActive = false;

function startGame() {
    if (!gameActive) {
        gameActive = true;
        createTargets();
    }
}

function createTargets() {
    const targetArea = document.getElementById('target-area');
    targetArea.innerHTML = ''; // Clear any existing targets

    // Create 5 targets as an example
    for (let i = 0; i < 5; i++) {
        const target = document.createElement('div');
        target.classList.add('target');
        target.style.left = `${Math.random() * 90}%`;
        target.style.top = `${Math.random() * 90}%`;

        target.addEventListener('click', hitTarget);
        targetArea.appendChild(target);
    }
}

function hitTarget(event) {
    event.target.remove();
    // Add score logic or progress tracking here
}

/* Target styles and position animation */
const targetStyles = `
    .target {
        width: 50px;
        height: 50px;
        background-color: #ff0000;
        border-radius: 50%;
        position: absolute;
        cursor: pointer;
        transition: transform 0.2s ease;
    }
    .target:hover {
        transform: scale(1.2);
    }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = targetStyles;
document.head.appendChild(styleSheet);
