import { Circle } from "./circle.js";
import { Line } from "./line.js";
import { Point } from "./point.js";

export class Tree {
  constructor(
    centerPoint,
    stageWidth,
    stageHeight,
    numChild,
    size,
    rotateAngle,
    maxAngle,
    radius
  ) {
    this.centerPoint = centerPoint;
    this.numChild = numChild;
    this.rotateAngle = rotateAngle;
    this.maxAngle = maxAngle;
    this.childBetweenAngle = maxAngle / numChild;
    this.parentNode = new Circle(
      stageWidth,
      stageHeight,
      this.centerPoint,
      size
    );
    this.lines = [];
    this.childNode = [];
    this.childAngle = [];
    for (let i = 0; i < numChild; i++) {
      this.childAngle[i] = this.rotateAngle - this.childBetweenAngle * (i - 1);
      let childNodeX =
        this.centerPoint.centerDx + radius * Math.cos(this.childAngle[i]);
      let childNodeY =
        this.centerPoint.centerDy + radius * Math.sin(this.childAngle[i]);

      if (rotateAngle === 0) {
        // console.log("i - numChild / 2", i - numChild / 2);
        // console.log("this.centerPoint.centerDy", this.centerPoint.centerDy);
        // console.log("childNodeY", childNodeY);
        // console.log("rotateAngle", rotateAngle);
        // console.log("this.childBetweenAngle", this.childBetweenAngle);
      }
      // console.log("this.childAngle[i]", i, this.childAngle[i]);

      let tempPosition = new Point(
        stageWidth,
        stageHeight,
        childNodeX,
        childNodeY
      );
      this.childNode[i] = new Circle(
        stageWidth,
        stageHeight,
        tempPosition,
        size / 2
      );
      this.lines[i] = new Line(2, this.centerPoint, tempPosition);
    }
  }
  draw(ctx) {
    for (let i = 0; i < this.childNode.length; i++) {
      this.lines[i].draw(ctx);
    }
    // this.parentNode.draw(ctx);
    for (let i = 0; i < this.childNode.length; i++) {
      if (!this.lines[i].isGrowingUp()) {
        this.childNode[i].draw(ctx);
      }
    }
  }
  resize(stageWidth, stageHeight) {
    for (let i = 0; i < this.childNode.length; i++) {
      this.lines[i].resize(stageWidth, stageHeight);
      this.childNode[i].resize(stageWidth, stageHeight);
    }
  }
  getLineTimeFunction(t) {
    let dx = this.endPoint.x - this.startPoint.x;
    let dy = this.endPoint.y - this.startPoint.y;
    let x = this.startPoint.x + dx * t;
    let y = this.startPoint.y + dy * t;
    return [x, y];
  }
  isGrowingUp() {
    return (
      this.childNode[this.childNode.length - 1].isGrowingUp() ||
      this.lines[this.childNode.length - 1].isGrowingUp()
    );
  }
  isLineGrowingUp() {
    return this.lines[this.childNode.length - 1].isGrowingUp();
  }
  checkClick(e, ctx, stageWidth, stageHeight) {
    console.log("checkClick", e.clientX);
    for (let i = 0; i < this.childNode.length; i++) {
      if (!this.lines[i].isGrowingUp()) {
        if (this.childNode[i].isClicked(e)) {
          this.childNode[i].focusOn(ctx, stageWidth, stageHeight);
        }
      }
    }
  }
}
