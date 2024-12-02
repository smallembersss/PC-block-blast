// script.js
const gameContainer = document.getElementById('game-container');
const rows = 5;
const cols = 5;
const blockValues = ['1', '2', '3', '4', '5']; // Sample values for blocks

// Create blocks
function createBlocks() {
    for (let i = 0; i < rows * cols; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.textContent = blockValues[Math.floor(Math.random() * blockValues.length)];

        block.addEventListener('click', () => {
            handleBlockClick(block);
        });

        gameContainer.appendChild(block);
    }
}

// Handle block click event
function handleBlockClick(clickedBlock) {
    const value = clickedBlock.textContent;
    clickedBlock.classList.add('clicked');
    clickedBlock.textContent = '';

    // Find and remove adjacent blocks with the same value
    const blocks = Array.from(gameContainer.getElementsByClassName('block'));
    for (let block of blocks) {
        if (block.textContent === value && block !== clickedBlock) {
            block.classList.add('clicked');
            block.textContent = '';
        }
    }

    // Remove empty blocks
    setTimeout(() => {
        document.querySelectorAll('.clicked').forEach(block => block.remove());
        refillBlocks();
    }, 500);
}

// Refill blocks to fill the grid
function refillBlocks() {
    const blocks = Array.from(gameContainer.children);
    for (let block of blocks) {
        if (!block.textContent) {
            block.textContent = blockValues[Math.floor(Math.random() * blockValues.length)];
            block.classList.remove('clicked');
        }
    }
}

createBlocks();
