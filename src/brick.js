import { objectColor } from './constants';

const brickWidth = 75;
const brickHeight = 30;

class Brick {
    constructor(
      x,
      y,
      color = objectColor,
      width = brickWidth,
      height = brickHeight,
    ) {
      this.x = x;
      this.y = y;
      this.status = 1;
      this.color = color;
      this.width = width;
      this.height = height;
    }
    render(ctx) {
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }
  }
  
export default Brick