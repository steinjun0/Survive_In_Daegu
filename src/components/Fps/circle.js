export class Circle {
  constructor(stageWidth, stageHeight, centerPoint, radius) {
    this.maxRadius = radius;
    this.radius = 1;
    const diameter = this.radius * 2;
    this.centerPoint = centerPoint;
    this.x = centerPoint.x;
    this.y = centerPoint.y;
    this.scale = 1;
    this.finishScaleUp = false;
    this.finishMoveOn = false;
  }
  draw(ctx) {
    this.growUp();
    // ctx.strokeStyle = "#FBE7C6";
    ctx.fillStyle = "#ff523b";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
    // ctx.stroke();
  }
  resize(stageWidth, stageHeight) {
    this.centerPoint.resize(stageWidth, stageHeight);
    this.x = this.centerPoint.x;
    this.y = this.centerPoint.y;
  }
  growUp() {
    if (this.radius < this.maxRadius) {
      this.radius += this.radius * 0.15;
    }
  }
  isGrowingUp() {
    if (this.radius < this.maxRadius) return true;
    else return false;
  }
  isClicked(e, stageWidth, stageHeight) {
    function distance(x1, y1, x2, y2) {
      return (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
    }
    console.log(
      "isClicked",
      distance(
        e.clientX - stageWidth / 2,
        e.clientY - stageHeight / 2,
        this.x,
        this.y
      )
    );
    // console.log("this.x", this.x);
    // console.log(
    //   "(e.clientX - this.x) * (e.clientX - this.x) + (e.clientY - this.y) * (e.clientY - this.y)",
    //   (e.clientX - this.x) * (e.clientX - this.x) +
    //     (e.clientY - this.y) * (e.clientY - this.y)
    // );
    // console.log(this.radius * this.radius);
    // console.log(
    //   "isClicked",
    //   (e.clinetX - this.x) * (e.clinetX - this.x) +
    //     (e.clinetY - this.y) * (e.clinetY - this.y)
    // );

    if (
      distance(e.clientX, e.clientY, this.x, this.y) <
      this.radius * this.radius
    ) {
      return true;
    } else return false;
  }
  focusOn(ctx, stageWidth, stageHeight) {
    console.log("focusOn");
    // console.log(stageWidth);
    // console.log(this.radius * 2);
    // console.log(stageWidth < this.radius * 2);

    // for (
    //   let scale = 1;
    //   this.radius * 2 * ctx.getTransform().a * 2 < stageWidth;
    //   scale = 1.1
    // ) {
    //   console.log(scale);
    //   ctx.translate(stageWidth / 2, stageHeight / 2);
    //   ctx.scale(scale, scale);
    //   ctx.translate(-stageWidth / 2, -stageHeight / 2);
    // }
    function scaleUP(scale, x, y, radius) {
      scale *= 1.03;
      ctx.translate(x, y);
      ctx.scale(scale, scale);
      ctx.translate(-x, -y);
      return radius * 2 * ctx.getTransform().a * 2 < stageWidth;
    }
    // console.log("stageWidth / 2", stageWidth / 2);
    // console.log("this.x", this.x);

    let absoluteCenterX =
      (stageWidth / 2 - ctx.getTransform().e) / ctx.getTransform().d;
    let absoluteCenterY =
      (stageHeight / 2 - ctx.getTransform().f) / ctx.getTransform().d;
    // console.log("absoluteCenterX", absoluteCenterX);
    // console.log("x", this.x);
    // console.log(
    //   "Math.abs(absoluteCenterX - x) < 0.1 || Math.abs(absoluteCenterY - y) < 0.1",
    //   Math.abs(absoluteCenterX - this.x) < 0.1 ||
    //     Math.abs(absoluteCenterY - this.y) < 0.1
    // );
    function moveOn(absoluteCenterX, absoluteCenterY, x, y, ctx) {
      ctx.translate((absoluteCenterX - x) / 10, (absoluteCenterY - y) / 10);
      return (
        Math.abs(absoluteCenterX - x) > 0.1 ||
        Math.abs(absoluteCenterY - y) > 0.1
      );
    }
    let finishRecur = true;
    if (this.radius * 2 * ctx.getTransform().a * 2 < stageWidth) {
      this.finishScaleUp = !scaleUP(this.scale, this.x, this.y, this.radius);
    }
    if (absoluteCenterX !== this.x || absoluteCenterY !== this.y) {
      this.finishMoveOn = !moveOn(
        absoluteCenterX,
        absoluteCenterY,
        this.x,
        this.y,
        ctx
      );
    }
    if (!this.finishScaleUp || !this.finishMoveOn) {
      setTimeout(() => {
        this.focusOn(ctx, stageWidth, stageHeight);
      }, 17);
    } else {
      this.scale = 1;
    }
  }
}
