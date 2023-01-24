/* eslint-disable import/extensions */
import Sprite from './Sprite.js';

class Paddle extends Sprite {
  constructor(paddleX, x = 0, y = 0, paddleHeight = 10, paddleWidth = 75, color = '#0095DD') {
    super(x, y, 0, 0, color);
    this.paddleHeight = paddleHeight;
    this.paddleWidth = paddleWidth;
    this.rightPressed = null;
    this.leftPressed = null;
    this.paddleX = paddleX;
  }

  keyDownHandler(e) {
    // console.log(e)
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

  move(canvasWidth) {
    if (this.rightPressed) {
      this.paddleX = Math.min(this.paddleX + 7, canvasWidth - this.paddleWidth);
    } else if (this.leftPressed) {
      this.paddleX = Math.max(this.paddleX - 7, 0);
    }
    return this.paddleX;
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
