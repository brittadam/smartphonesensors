const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let character = {
x: canvas.width/2,
y: canvas.height/2,
width: 50,
height: 50,
speed: 5
};

function drawCharacter() {
ctx.fillStyle = "blue";
ctx.fillRect(character.x, character.y, character.width, character.height);
}

function updateCharacterPosition(x, y) {
// Update character position based on sensor data
character.x += x * character.speed;
character.y += y * character.speed;

// Keep character within canvas bounds
if (character.x < 0) {
character.x = 0;
} else if (character.x + character.width > canvas.width) {
character.x = canvas.width - character.width;
}

if (character.y < 0) {
character.y = 0;
} else if (character.y + character.height > canvas.height) {
character.y = canvas.height - character.height;
}
}

function detectCollisions() {
// Check for collisions with obstacles or enemies
}

function gameLoop() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
drawCharacter();
detectCollisions();

// Request the next frame
requestAnimationFrame(gameLoop);
}

// Set up event listeners for device orientation
window.addEventListener("deviceorientation", handleOrientation);

function handleOrientation(event) {
// Map sensor data to character position
let x = event.gamma / 90; // Range from -1 to 1
let y = event.beta / 90; // Range from -1 to 1
updateCharacterPosition(x, y);
}

// Start the game loop
gameLoop();