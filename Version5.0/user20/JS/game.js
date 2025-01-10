const gridWidth = 10;
const gridHeight = 20;
let gameGrid = [];
let currentBlock = [];
let currentPos = { x: 0, y: 0 };
let score = 0;
let highScore = localStorage.getItem('highScore') || 0;
let gameOver = false;
let blockSpeed = 500; // Speed in ms for block fall (initial speed)

// DOM Elements
const gameGridElement = document.getElementById('game-grid');
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('high-score');
const gameOverElement = document.getElementById('game-over');
const nextBlockElement = document.getElementById('next-block');

// Shape definitions
const shapes = [
    { color: 'cyan', cells: [[1, 1, 1, 1]] }, // I
    { color: 'blue', cells: [[1, 1, 0], [0, 1, 1]] }, // Z
    { color: 'orange', cells: [[0, 1, 1], [1, 1, 0]] }, // S
    { color: 'yellow', cells: [[1, 1], [1, 1]] }, // O
    { color: 'green', cells: [[1, 1, 0], [1, 0, 0]] }, // L
    { color: 'purple', cells: [[0, 1, 1], [1, 1, 0]] }, // T
    { color: 'red', cells: [[1, 0, 0], [1, 1, 1]] }, // J
];

// Initialize the game grid
function createGameGrid() {
    gameGrid = Array.from({ length: gridHeight }, () => Array(gridWidth).fill(0));
    updateGrid();
}

// Update the grid display
function updateGrid() {
    gameGridElement.innerHTML = '';
    gameGrid.forEach((row, y) => {
        row.forEach((cell, x) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('grid-cell');
            if (cell === 1) {
                cellElement.classList.add('block');
            }
            gameGridElement.appendChild(cellElement);
        });
    });
}

// Generate a random block
function generateBlock() {
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    currentBlock = randomShape.cells;
    currentPos = { x: Math.floor(gridWidth / 2) - 1, y: 0 };
    drawBlock();
}

// Draw the block on the grid
function drawBlock() {
    createGameGrid(); // Reset grid
    currentBlock.forEach(cell => {
        const x = currentPos.x + cell[0];
        const y = currentPos.y + cell[1];
        if (x >= 0 && x < gridWidth && y < gridHeight) {
            gameGrid[y][x] = 1;
        }
    });
    updateGrid();
}

// Move block down
function moveBlockDown() {
    if (!canMove(0, 1)) {
        placeBlock();
        return;
    }
    currentPos.y += 1;
    drawBlock();
}

// Move block left
function moveBlockLeft() {
    if (canMove(-1, 0)) {
        currentPos.x -= 1;
        drawBlock();
    }
}

// Move block right
function moveBlockRight() {
    if (canMove(1, 0)) {
        currentPos.x += 1;
        drawBlock();
    }
}

// Rotate the block
function rotateBlock() {
    const rotatedBlock = currentBlock[0].map((_, index) =>
        currentBlock.map(row => row[index])
    );
    currentBlock = rotatedBlock;
    drawBlock();
}

// Check if the block can move
function canMove(dx, dy) {
    return currentBlock.every(cell => {
        const x = currentPos.x + cell[0] + dx;
        const y = currentPos.y + cell[1] + dy;
        return x >= 0 && x < gridWidth && y < gridHeight && gameGrid[y][x] === 0;
    });
}

// Place the block and check for lines
function placeBlock() {
    currentBlock.forEach(cell => {
        const x = currentPos.x + cell[0];
        const y = currentPos.y + cell[1];
        if (y >= 0) {
            gameGrid[y][x] = 1;
        }
    });

    checkForLines();

    // Check for game over
    if (currentPos.y === 0) {
        gameOver = true;
        gameOverElement.style.display = 'block';
        return;
    }

    generateBlock(); // Generate next block
}

// Check for full lines and clear them
function checkForLines() {
    for (let y = 0; y < gridHeight; y++) {
        if (gameGrid[y].every(cell => cell === 1)) {
            clearLine(y);
            score += 100;
            scoreElement.textContent = score;
        }
    }
}

// Clear a line from the grid
function clearLine(y) {
    gameGrid.splice(y, 1);
    gameGrid.unshift(Array(gridWidth).fill(0));
    updateGrid();
}

// Restart the game
function restartGame() {
    score = 0;
    scoreElement.textContent = score;
    gameOver = false;
    gameOverElement.style.display = 'none';
    createGameGrid();
    generateBlock();
    setInterval(moveBlockDown, blockSpeed);
}

// Event listeners for keyboard controls
document.addEventListener('keydown', (e) => {
    if (gameOver) return;

    if (e.key === 'ArrowLeft') {
        moveBlockLeft();
    } else if (e.key === 'ArrowRight') {
        moveBlockRight();
    } else if (e.key === 'ArrowDown') {
        moveBlockDown();
    } else if (e.key === 'ArrowUp') {
        rotateBlock();
    }
});

// Start the game
createGameGrid();
generateBlock();
setInterval(moveBlockDown, blockSpeed);
