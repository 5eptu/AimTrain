// Audio Elements
const clickSound = new Audio('assets/sounds/wii-start-click-page-shift-sound.mp3');
const startSound = new Audio('assets/sounds/warn3.mp3');

// DOM Elements
const startBtn = document.getElementById('start-game');
const homepage = document.getElementById('homepage');
const gameContainer = document.getElementById('game-container');
const target = document.getElementById('target');

// Function to Start the Game
function startGame() {
    startSound.play();  // Play the start sound

    homepage.style.display = 'none';  // Hide homepage
    gameContainer.style.display = 'flex';  // Show game container
}

// Function for Target Click
function clickTarget() {
    clickSound.play();  // Play click sound when target is clicked
    moveTarget();  // Move target to new position
}

// Function to Randomly Move Target
function moveTarget() {
    const randomX = Math.floor(Math.random() * 80);  // Get random position within 80% of viewport
    const randomY = Math.floor(Math.random() * 80);
    target.style.top = randomY + '%';
    target.style.left = randomX + '%';
}

// Event Listeners
startBtn.addEventListener('click', startGame);  // Start game when button is clicked
target.addEventListener('click', clickTarget);  // Play sound and move target when clicked
