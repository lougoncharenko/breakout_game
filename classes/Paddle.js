/* eslint-disable import/extensions */
import Sprite from './Sprite.js';

class Paddle extends Sprite {
  constructor(canvasWidth, x = 0, y = 0, paddleHeight = 10, paddleWidth = 75, color = '#0095DD') {
    super(x, y, 0, 0, color);
    this.paddleHeight = paddleHeight;
    this.paddleWidth = paddleWidth;
    this.paddleX = (canvasWidth - paddleWidth) / 2;
    this.rightPressed = false;
    this.leftPressed = false;
  }

  keyDownHandler(e) {
    console.log(e)
    if (e.key === 'Right' || e.key === 'ArrowRight') {
      this.rightPressed = true;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
      this.leftPressed = true;
    }
  }

  keyUpHandler(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
      this.rightPressed = false;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
      this.leftPressed = false;
    }
  }

  move() {
    if (this.rightPressed) {
        paddleX = Math.min(paddleX + 7, canvas.width - this.paddleWidth);
      } else if (leftPressed) {
        paddleX = Math.max(paddleX - 7, 0);
      }
  }

  draw(ctx, canvasHeight, paddleX) {
    ctx.beginPath();
    ctx.rect(paddleX, canvasHeight - this.paddleHeight, this.paddleWidth, this.paddleHeight);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
  }
}

export default Paddle;
