/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
import Brickfield from './classes/Brickfield.js';
import Ball from './classes/Ball.js';
import Paddle from './classes/Paddle.js';

// DOM variables
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const scoreBoard = document.getElementById('scoreboard');
const startButton = document.getElementById('startbutton');
const pauseButton = document.getElementById('pausebutton');
// Variables
let score = 0;
let x = canvas.width / 2;
let y = canvas.height - 30;
const ballRadius = 10;
let paddleX = (canvas.width - 75) / 2;

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
function mouseMoveHandler(e) {
  paddle.mouseMoveHandler(e, canvas.offsetLeft, canvas.width);
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
function collisionDetection() {
  for (let c = 0; c < brickfield.brickColumnCount; c += 1) {
    for (let r = 0; r < brickfield.brickRowCount; r += 1) {
      const brick = brickfield.bricks[c][r];
      if (brick.status === 1) {
        if (
          ball.x > brick.x
          && ball.x < brick.x + brick.width
          && ball.y > brick.y
          && ball.y < brick.y + brick.height
        ) {
          ball.dy = -ball.dy;
          brick.status = 0;
          score += 1;
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
  const cordinates = ball.move(x, y);
  x = cordinates[0];
  y = cordinates[1];
  if (x + ball.dx > canvas.width - ballRadius || x + ball.dx < ballRadius) {
    ball.dx = -ball.dx;
  }
  if (y + ball.dy < ballRadius) {
    ball.dy = -ball.dy;
  } else if (y + ball.dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + 75) {
      ball.dy = -ball.dy;
    } else {
      scoreBoard.innerHTML = `Game Over! Score: ${score}`;
      document.location.reload();
    }
  }
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
