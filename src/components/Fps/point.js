export class Point {
  constructor(stageWidth, stageHeight, centerDx, centerDy) {
    this.x = stageWidth / 2 + centerDx;
    this.y = stageHeight / 2 + centerDy;
    this.centerDx = centerDx;
    this.centerDy = centerDy;
  }
  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    this.x = stageWidth / 2 + this.centerDx;
    this.y = stageHeight / 2 + this.centerDy;
  }
  setPos(x, y) {
    this.x = x;
    this.y = y;
    this.centerDx = x - this.stageWidth / 2;
    this.centerDy = y - this.stageHeight / 2;
  }
  setCenterPos(centerDx, centerDy) {
    this.x = stageWidth / 2 + centerDx;
    this.y = stageHeight / 2 + centerDy;
    this.centerDx = centerDx;
    this.centerDy = centerDy;
  }
}
