/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
import Brickfield from './classes/Brickfield.js';
import Ball from './classes/Ball.js';
import Paddle from './classes/Paddle.js';

// DOM variables
const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const scoreBoard = document.getElementById('scoreboard') as HTMLElement    ;
const startButton = document.getElementById('startbutton') as HTMLButtonElement;
const pauseButton = document.getElementById('pausebutton') as HTMLButtonElement;
// Variables
let score:number = 0;
let x:number = canvas.width / 2;
let y: number = canvas.height - 30;
const ballRadius:number = 10;
let paddleX:number = (canvas.width - 75) / 2;
// Instantiations
const brickfield = new Brickfield();
const ball = new Ball();
const paddle = new Paddle(paddleX);

// functions
function keyDownHandler(e: KeyboardEvent) {
  paddle.keyDownHandler(e);
}
function keyUpHandler(e: KeyboardEvent) {
  paddle.keyUpHandler(e);
}
function mouseMoveHandler(e: MouseEvent) {
  paddle.mouseMoveHandler(e, canvas.offsetLeft, canvas.width);
}
function drawBricks() {
  brickfield.drawBrickField(ctx);
}
function drawPaddle() {
  paddle.draw(ctx, canvas.height, paddleX);
}
function drawBall() {
  ball.draw(ctx);
}
function moveBall() {
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
}
function movePaddle() {
  paddleX = paddle.move(canvas.width);
  return paddleX;
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
function calculateScore() {
  scoreBoard.innerText = `Score: ${score}`;
}
function playGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  calculateScore();
  collisionDetection();
  moveBall();
  movePaddle();
}
let isPaused = false;
const interval = setInterval(() => {
  if (!isPaused) {
    playGame();
  }
}, 10);
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
