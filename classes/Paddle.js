/* eslint-disable import/extensions */
import Sprite from './Sprite.js';

class Paddle extends Sprite {
  constructor(x = 0, y = 0, paddleHeight = 10, paddleWidth = 75, color = '#0095DD') {
    super(x, y, 0, 0, color);
    this.paddleHeight = paddleHeight;
    this.paddleWidth = paddleWidth;
  }

  //   move() {

  //   }

  draw(ctx, canvasWidth, canvasHeight, paddleX) {
    ctx.beginPath();
    ctx.rect(paddleX, canvasHeight - this.paddleHeight, this.paddleWidth, this.paddleHeight);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
  }
}

export default Paddle;
