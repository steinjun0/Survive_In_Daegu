import { Point } from "./point.js";
export class Mouse {
  constructor(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    this.mousePos = new Point(
      stageWidth,
      stageHeight,
      0,
      0
    );
    this.mousePrevPos = null;
    this.mouseClickPos = new Point(
      stageWidth,
      stageHeight,
      0,
      0
    );
    this.isMouseClicked = false;
    this.ctxOrigin = { x: 0, y: 0 };
  }
  resize(stageWidth,stageHeight){
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
  }
  onDown(e) {
    this.mouseClickPos.setPos(e.clientX - this.stageWidth / 8, e.clientY);
    this.isMouseClicked = true;
  }

  onMove(ctx, e) {
    // if (this.isMouseClicked === true) {
      // if (this.mousePrevPos === null) {
      //   this.mousePrevPos = this.mouseClickPos;
      // }
      // let dx = e.clientX - this.mousePrevPos.x;
      // let dy = e.clientY - this.mousePrevPos.y;
      // dx /= ctx.getTransform().a;
      // dy /= ctx.getTransform().a;
      this.mousePos.setPos(e.clientX - this.stageWidth / 8, e.clientY);
      // console.log('mousePos', this.mousePos)
      // console.log('this.mousePrevPos.x;',this.mousePrevPos.x)
      // this.ctxOrigin = { x: this.ctxOrigin.x + dx, y: this.ctxOrigin.y + dy };
      // ctx.translate(dx, dy);
    // }
  }

  onUp() {
    this.isMouseClicked = false;
    this.mousePrevPos = null;
  }
  onWheel(ctx, stageWidth, stageHeight, e) {
    let transX = (stageWidth / 2 - ctx.getTransform().e) / ctx.getTransform().a;
    let transY =
      (stageHeight / 2 - ctx.getTransform().f) / ctx.getTransform().a;
    ctx.translate(transX, transY);
    if (e.deltaY < 0) {
      let scale = 1.1;
      ctx.scale(scale, scale);
    } else {
      let scale = 0.9;
      ctx.scale(scale, scale);
    }
    ctx.translate(-transX, -transY);
  }
}