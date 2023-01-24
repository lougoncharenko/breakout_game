/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
import Brickfield from './classes/Brickfield.js';
import Ball from './classes/Ball.js';
import Paddle from './classes/Paddle.js';

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
let paddleX = (canvas.width - 75) / 2;
let rightPressed = false;
let leftPressed = false;

const brickfield = new Brickfield();
const ball = new Ball();
const paddle = new Paddle(paddleX);

let isPaused = false;
const interval = setInterval(() => {
  if (!isPaused) {
    playGame();
  }
}, 10);

// functions
function keyDownHandler(e) {
  paddle.keyDownHandler(e);
}

function keyUpHandler(e) {
  paddle.keyUpHandler(e);
}

// function keyDownHandler(e) {
//   if (e.key === 'Right' || e.key === 'ArrowRight') {
//     rightPressed = true;
//   } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
//     leftPressed = true;
//   }
// }
// function keyUpHandler(e) {
//   if (e.key === 'Right' || e.key === 'ArrowRight') {
//     rightPressed = false;
//   } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
//     leftPressed = false;
//   }
// }
function mouseMoveHandler(e) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}
function drawBricks() {
  brickfield.drawBrickField(ctx);
}
function drawPaddle() {
  paddle.draw(ctx, canvas.height, paddleX);
}
function drawBall() {
  ball.draw(ctx, x, y);
}
// TO DO FIx this
function collisionDetection() {
  for (let c = 0; c < brickfield.brickColumnCount; c++) {
    for (let r = 0; r < brickfield.brickRowCount; r++) {
      const b = brickfield.bricks[c][r];
      if (b.status === 1) {
        if (
          x > b.x
          && x < b.x + b.Width
          && y > b.y
          && y < b.y + b.Height
        ) {
          dy = -dy;
          b.status = 0;
          score++;
          if (score === brickfield.brickColumnCount * brickfield.brickRowCount) {
            scoreBoard.innerText = `Congratulations! You win! Score: ${score}`;
            document.location.reload();
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
    }
  }
  // moving paddle logic
  // if (rightPressed) {
  //   paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
  // } else if (leftPressed) {
  //   paddleX = Math.max(paddleX - 7, 0);
  // }
  paddleX = paddle.move(canvas.width);
  return paddleX;
}
function startGame() {
  isPaused = false;
}

function pauseGame() {
  isPaused = true;
}

// event listeners
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('mousemove', mouseMoveHandler, false);
startButton.addEventListener('click', startGame);
pauseButton.addEventListener('click', pauseGame);
