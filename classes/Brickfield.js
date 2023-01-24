/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
import Brick from './Brick.js';

class Brickfield {
  constructor(
    brickRowCount = 3,
    brickColumnCount = 5,
    brickPadding = 10,
    brickOffsetTop = 30,
    brickOffsetLeft = 30,
  ) {
    this.brickRowCount = brickRowCount;
    this.brickColumnCount = brickColumnCount;
    this.brickPadding = brickPadding;
    this.brickOffsetTop = brickOffsetTop;
    this.brickOffsetLeft = brickOffsetLeft;
    this.brickWidth = 75;
    this.brickHeight = 20;
    this.bricks = this.initializeBricks();
  }

  initializeBricks() {
    const bricks = [];
    for (let c = 0; c < this.brickColumnCount; c++) {
      bricks[c] = [];
      for (let r = 0; r < this.brickRowCount; r++) {
        bricks[c][r] = new Brick();
        if (bricks[c][r].status === 1) {
          const brickX = (c * (this.brickWidth + this.brickPadding)) + this.brickOffsetLeft;
          const brickY = (r * (this.brickHeight + this.brickPadding)) + this.brickOffsetTop;
          bricks[c][r] = new Brick(brickX, brickY);
        }
      }
    }
    return bricks;
  }

  drawBrickField(ctx) {
    for (let c = 0; c < this.brickColumnCount; c++) {
      for (let r = 0; r < this.brickRowCount; r++) {
        if (this.bricks[c][r].status === 1) {
          ctx.beginPath();
          ctx.rect(
            this.bricks[c][r].x,
            this.bricks[c][r].y,
            this.bricks[c][r].width,
            this.bricks[c][r].height,
          );
          ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }
}

export default Brickfield;
