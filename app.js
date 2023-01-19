/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
// import Brick from './classes/Brick.js';
import Brickfield from './classes/Brickfield.js';

// variables
const canvas = document.getElementById('myCanvas');
const scoreBoard = document.getElementById('scoreboard');
const startButton = document.getElementById('startbutton');
const pauseButton = document.getElementById('pausebutton');
let score = 0;
const ctx = canvas.getContext('2d');
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
const ballRadius = 10;
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;
// brick variables
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;
// brick field
// const bricks = [];
// for (let c = 0; c < brickColumnCount; c++) {
//   bricks[c] = [];
//   for (let r = 0; r < brickRowCount; r++) {
//     bricks[c][r] = { x: 0, y: 0, status: 1 };
//   }
// }
const brickfield = new Brickfield();
brickfield.drawBrickField();

let isPaused = false;
const interval = setInterval(() => {
  if (!isPaused) {
    playGame();
  }
}, 10);

// functions
function keyDownHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  }
}
function keyUpHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = false;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = false;
  }
}
function mouseMoveHandler(e) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}
function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
     if (bricks[c][r].status === 1) {
        const brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
        const brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
        ctx.fill(); 
        ctx.closePath();
      }
    }
  }
}
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
}
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(194,249,112)';
  ctx.fill();
  ctx.closePath();
}
function collisionDetection() {
  // eslint-disable-next-line no-plusplus
  for (let c = 0; c < brickColumnCount; c++) {
    // eslint-disable-next-line no-plusplus
    for (let r = 0; r < brickRowCount; r++) {
      const b = bricks[c][r];
      if (b.status === 1) {
        if (
          x > b.x
          && x < b.x + brickWidth
          && y > b.y
          && y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0;
          // eslint-disable-next-line no-plusplus
          score++;
          if (score === brickColumnCount * brickRowCount) {
            scoreBoard.innerText = `Congratulations! You win! Score: ${score}`;
            document.location.reload();
            // clearInterval(interval) // chrome ends the game
          }
        }
      }
    }
  }
}
function playGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  scoreBoard.innerText = `Score: ${score}`;
  collisionDetection();
  x += dx;
  y += dy;
  // Bouncing off the left and right
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  // Ball bounces off top and game is over when ball hits the bottom
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      scoreBoard.innerHTML = `Game Over! Score: ${score}`;
      document.location.reload();
      // clearInterval(interval); // this causes chrome tp end the game
    }
  }
  // moving paddle logic
  if (rightPressed) {
    paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
  } else if (leftPressed) {
    paddleX = Math.max(paddleX - 7, 0);
  }
}
function startGame() {
  // setInterval(interval);
  isPaused = false;
}

function pauseGame() {
  // clearInterval(interval);
  isPaused = true;
}

// event listeners
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('mousemove', mouseMoveHandler, false);
startButton.addEventListener('click', startGame);
pauseButton.addEventListener('click', pauseGame);

// ball moves ever ten seconds
// const interval = setInterval(playGame,10)
