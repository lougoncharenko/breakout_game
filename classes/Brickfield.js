import Brick from './Brick';


class Brickfield extends Brick {
  constructor(x, y, width = 75, height = 20, color = '#0095DD') {
    super(x, y, width, height, color);
    this.brickRowCount = 3;
    this.brickColumnCount = 5;
    this.brickPadding = 10;
    this.brickOffsetTop = 30;
    this.brickOffsetLeft = 30;
  }
}

export default Brickfield;
