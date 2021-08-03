import { Circle } from "./circle.js";
import { Point } from "./point.js";
import { Tree } from "./tree.js";
import { Mouse } from "./mouse.js";
class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.temp = 0;
    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
    this.mouse = new Mouse();
    this.curItem = null;

    this.items = [];
    this.numParent = 1;
    this.numSubTree = 7;
    this.circles = [];
    this.lines = [];
    this.trees = [];
    this.subTrees = [[]];
    let j = 0;
    this.parentNode = new Circle(
      document.body.clientWidth,
      document.body.clientHeight,
      new Point(document.body.clientWidth, document.body.clientHeight, 0, 0),
      100
    );
    for (let i = 0; i < this.numParent; i++) {
      this.trees[i] = new Tree(
        new Point(document.body.clientWidth, document.body.clientHeight, 0, 0),
        document.body.clientWidth,
        document.body.clientHeight,
        this.numSubTree,
        25,
        ((2 * Math.PI) / this.numSubTree) * i,
        Math.PI / 0.5,
        200
      );
      this.subTrees[i] = [];
      for (j = 0; j < this.numSubTree; j++) {
        this.subTrees[i][j] = new Tree(
          new Point(
            document.body.clientWidth,
            document.body.clientHeight,
            this.trees[i].childNode[j].x - document.body.clientWidth / 2,
            this.trees[i].childNode[j].y - document.body.clientHeight / 2
          ),
          document.body.clientWidth,
          document.body.clientHeight,
          3,
          12.5,
          this.trees[i].childAngle[j],
          Math.PI / 2,
          200
        );
      }
    }

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();
    window.requestAnimationFrame(this.animate.bind(this));

    document.addEventListener(
      "pointerdown",
      this.mouse.onDown.bind(this.mouse),
      false
    );
    document.addEventListener(
      "pointerdown",
      this.focusOnNode.bind(this),
      false
    );

    // for (let i = 0; i < this.numParent; i++) {
    //   for (let j = 0; j < this.numSubTree; j++) {
    //     document.addEventListener(
    //       "pointerdown",
    //       this.subTrees[i][j].checkClick(
    //         this.subTrees[i][j],
    //         this.ctx,
    //         this.stageWidth,
    //         this.stageHeight
    //       ),
    //       false
    //     );
    //   }
    // }

    document.addEventListener(
      "pointermove",
      this.mouse.onMove.bind(this.mouse, this.ctx),
      false
    );
    document.addEventListener(
      "pointerup",
      this.mouse.onUp.bind(this.mouse, this.ctx),
      false
    );
    document.addEventListener(
      "wheel",
      this.mouse.onWheel.bind(
        this.mouse,
        this.ctx,
        this.stageWidth,
        this.stageHeight
      ),
      false
    );
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.ctx.shadowOffsetX = 0;
    this.ctx.shadowOffsetY = 3;
    this.ctx.shadowBlur = 6;
    this.ctx.shadowColor = `rgba(0,0,0,0.5)`;

    this.parentNode.resize(this.stageWidth, this.stageHeight);
    for (let i = 0; i < this.trees.length; i++) {
      this.trees[i].resize(this.stageWidth, this.stageHeight);
      if (!this.trees[i].isLineGrowingUp()) {
        for (let j = 0; j < this.subTrees[i].length; j++) {
          this.subTrees[i][j].resize(this.stageWidth, this.stageHeight);
        }
      }
      // for (let j = 0; j < this.subTrees[i].length; j++) {
      //   this.subTrees[i][j].draw(this.ctx);
      // }
    }
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(
      -this.stageWidth * 2000,
      -this.stageHeight * 2000,
      this.stageWidth * 4000,
      this.stageHeight * 4000
    );

    this.parentNode.draw(this.ctx);
    for (let i = 0; i < this.trees.length; i++) {
      this.trees[i].draw(this.ctx);
      if (!this.trees[i].isLineGrowingUp()) {
        for (let j = 0; j < this.subTrees[i].length; j++) {
          this.subTrees[i][j].draw(this.ctx);
        }
      }
      // for (let j = 0; j < this.subTrees[i].length; j++) {
      //   this.subTrees[i][j].draw(this.ctx);
      // }
    }
    // console.log("e f", this.ctx.getTransform().e, this.ctx.getTransform().f);
    // console.log("ctx.getTransform()", this.ctx.getTransform());
    // console.log(
    //   -this.parentNode.x +
    //     (this.stageWidth / 2 - this.ctx.getTransform().e) /
    //       this.ctx.getTransform().d
    // );
    this.ctx.fillStyle = "#00ff00";
    this.ctx.beginPath();
    this.ctx.arc(
      (this.stageWidth / 2 - this.ctx.getTransform().e) /
        this.ctx.getTransform().d,
      (this.stageHeight / 2 - this.ctx.getTransform().f) /
        this.ctx.getTransform().d,
      10,
      0,
      2 * Math.PI
    );
    this.ctx.fill();
  }

  focusOnNode(e) {
    if (this.parentNode.isClicked(e, this.stageWidth, this.stageHeight)) {
      this.parentNode.focusOn(this.ctx, this.stageWidth, this.stageHeight);
    } else {
      for (let i = 0; i < this.numParent; i++) {
        if (
          this.trees[i].checkClick(
            e,
            this.ctx,
            this.stageWidth,
            this.stageHeight
          )
        ) {
          this.trees[i].focusOn(this.ctx, this.stageWidth, this.stageHeight);
          break;
        }
        for (let j = 0; j < this.numSubTree; j++) {
          if (
            this.subTrees[i][j].checkClick(
              e,
              this.ctx,
              this.stageWidth,
              this.stageHeight
            )
          ) {
            this.subTrees[i][j].focusOn(
              this.ctx,
              this.stageWidth,
              this.stageHeight
            );
            break;
          }
        }
      }
    }
  }
}

window.onload = () => {
  new App();
};
