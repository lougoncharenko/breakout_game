/* eslint-disable import/extensions */
import Sprite from './Sprite.js';

class Ball extends Sprite {
  radius: number;
  dx: number;
  dy: number;
  constructor(x = 0, y = 0, radius = 10, color = '#0095DD') {
    super(x, y, 0, 0, color);
    this.radius = radius;
    this.dx = 2;
    this.dy = -2;
  }

  move(x:number, y:number) {
    this.x = x;
    this.y = y;
    this.x += this.dx;
    this.y += this.dy;
    return [this.x, this.y];
  }

  draw(ctx: CanvasRenderingContext2D) { // Overrides the existing render method!
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Ball;
