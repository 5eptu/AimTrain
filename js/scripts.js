document.getElementById('start-game').addEventListener('click', startGame);

// Game state variable
let gameActive = false;

// Function to start the game
function startGame() {
    if (!gameActive) {
        gameActive = true;

        // Play the start sound (warn3.mp3)
        document.getElementById('start-sound').play();

        // Create targets
        createTargets();
    }
}

// Function to create targets in the target area
function createTargets() {
    const targetArea = document.getElementById('target-area');
    targetArea.innerHTML = ''; // Clear any existing targets

    // Create 5 random targets
    for (let i = 0; i < 5; i++) {
        const target = document.createElement('div');
        target.classList.add('target');
        target.style.left = `${Math.random() * 90}%`; // Position target randomly
        target.style.top = `${Math.random() * 90}%`;

        // Add click event to each target
        target.addEventListener('click', hitTarget);
        targetArea.appendChild(target);
    }
}

// Function to handle target clicks
function hitTarget(event) {
    // Remove clicked target
    event.target.remove();

    // Play the click sound (wii-start-click-page-shift-sound.mp3)
    document.getElementById('click-sound').play();
}
