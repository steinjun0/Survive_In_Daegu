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
    this.gifIndex = 0
    this.eliminated = false
    this.velocity = 1/100
  }
  move(destinationX, destinationY){
    // console.log('destinationX',destinationX)
    // console.log('this.pos.x',this.pos.x)
    // console.log('(destinationX - this.pos.x)/5000',(destinationX - this.pos.x)/5000)
    if(!this.eliminated){
      this.pos.setPos(this.pos.x + (destinationX - this.pos.x)/Math.abs((destinationX - this.pos.x)) * this.velocity, this.pos.y + (destinationY - this.pos.y)/Math.abs((destinationY - this.pos.y))* this.velocity)
      this.size = 1*(this.pos.y)
      if(this.size > 1000) this.size = 1000
      if(this.size<0) this.size = 0
      this.gifIndex += 1
      if(this.gifIndex > 22) this.gifIndex = 0
    }else{
      this.size = 0;
      this.pos.x = 0;
      this.pos.y = 0;
    }
  }
  isClicked(x, y){
    return (this.pos.x - x)*(this.pos.x - x) + (this.pos.y - y)*(this.pos.y - y) <= (this.size / 8)*(this.size / 8)
  }

}