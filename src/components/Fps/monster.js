import { Point } from "./point.js";
export class Monster {
  constructor(stageWidth, stageHeight, x, y) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    this.pos = new Point(
      stageWidth,
      stageHeight,
      x,
      y,
    );
    this.size = 10;
  }
  move(destinationX, destinationY){
    console.log('destinationX',destinationX)
    console.log('this.pos.x',this.pos.x)
    console.log('(destinationX - this.pos.x)/5000',(destinationX - this.pos.x)/5000)
    this.pos.setPos(this.pos.x + (destinationX - this.pos.x)/100, this.pos.y + (destinationY - this.pos.y)/100)
  }
}
