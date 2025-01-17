
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const scoreDisplay = document.getElementById('score');
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const basketWidth = 80;
    const basketHeight = 20;
    const objectSize = 20;
    let basketX = (canvasWidth - basketWidth) / 2;
    let basketY = canvasHeight - basketHeight - 10;
    let basketSpeed = 7;

    let fallingObjects = [];
    let score = 0;
    let gameOver = false;

    // Listen for arrow key presses
    document.addEventListener('keydown', function(event) {
      if (gameOver) return;
      if (event.key === 'ArrowLeft' && basketX > 0) {
        basketX -= basketSpeed;
      } else if (event.key === 'ArrowRight' && basketX < canvasWidth - basketWidth) {
        basketX += basketSpeed;
      }
    });

    // Function to create new falling objects
    function createFallingObject() {
      const x = Math.random() * (canvasWidth - objectSize);
      fallingObjects.push({ x: x, y: -objectSize });
    }

    // Function to update the game state
    function updateGame() {
      if (gameOver) return;

      // Clear the canvas
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Draw the basket
      ctx.fillStyle = '#4CAF50';
      ctx.fillRect(basketX, basketY, basketWidth, basketHeight);

      // Update and draw falling objects
      for (let i = 0; i < fallingObjects.length; i++) {
        const object = fallingObjects[i];
        object.y += 5; // Fall speed

        ctx.fillStyle = '#FF5733';
        ctx.fillRect(object.x, object.y, objectSize, objectSize);

        // Check if the object hits the basket
        if (object.y + objectSize >= basketY && object.y + objectSize <= basketY + basketHeight) {
          if (object.x + objectSize > basketX && object.x < basketX + basketWidth) {
            score++; // Player catches the object
            fallingObjects.splice(i, 1); // Remove the object
            i--; // Adjust the index after removal
          }
        }

        // If the object falls below the canvas, the game is over
        if (object.y > canvasHeight) {
          gameOver = true;
        }
      }

      // Display the score
      scoreDisplay.textContent = `Score: ${score}`;

      if (!gameOver) {
        // Create a new falling object randomly
        if (Math.random() < 0.02) {
          createFallingObject();
        }

        // Repeat the game update
        requestAnimationFrame(updateGame);
      } else {
        // Display Game Over message
        ctx.font = '30px Arial';
        ctx.fillStyle = '#D32F2F';
        ctx.fillText('GAME OVER!', canvasWidth / 3, canvasHeight / 2);
        ctx.font = '20px Arial';
        ctx.fillText(`Final Score: ${score}`, canvasWidth / 3 + 10, canvasHeight / 2 + 40);
      }
    }

// Start the game
updateGame();

function changeText() {document.getElementById("textChange").innerHTML="Thanks for liking my Webpage";}

var space = " ";
var pos = 0;
var msg = "User 19";

function Scroll(){
document.title = msg.substring(pos, msg.length) + space +msg.substring(0,pos);

pos++;
if (pos > msg.length) pos = 0;
window.setTimeout("Scroll()", 0);
}
Scroll();