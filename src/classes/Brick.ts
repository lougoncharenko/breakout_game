/* eslint-disable import/extensions */
import Sprite from './Sprite.js';

class Brick extends Sprite {
  status: number;
  constructor(x:number, y:number, width = 75, height = 20, color = '#0095DD') {
    super(x, y, width, height, color); // pass arguments to Sprite!
    this.status = 1; // adds a new property
  }
}

export default Brick;
