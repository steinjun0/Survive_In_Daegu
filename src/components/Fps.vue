<template>
  <div class="d-flex justify-center" style="width: 100%">
    <!-- <div>fps</div> -->
    <div id="canvas-wrapper" style="width: 80%">
      <canvas
        id="fps-canvas"
        style="background-color: rgba(0, 0, 0, 0.5)"
      ></canvas>
    </div>
  </div>
</template>
<script>
import { Mouse } from "./Fps/mouse.js";
import { Monster } from "./Fps/monster.js";
// import { Circle } from "./circle.js";
export default {
  data() {
    return {
      canvas: "",
      ctx: "",
      pixelRatio: 1,
      stageWidth: 100,
      stageHeight: 100,
      monsters: [],
      monsterPositions: [
        [0, 0],
        [100, 100],
        [500, 0],
        [250, 0],
        [300, 10],
      ],
    };
  },
  mounted() {
    this.canvas = document.getElementById("fps-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;

    this.ctx.beginPath();
    this.ctx.arc(100, 100, 10, 0, 2 * Math.PI);
    this.ctx.fill();

    this.mouse = new Mouse(this.stageWidth, this.stageHeight);

    for (let i = 0; i < 5; i++) {
      this.monsters[i] = new Monster(
        this.stageWidth,
        this.stageHeight,
        this.monsterPositions[i][0],
        this.monsterPositions[i][1]
      );
    }
    // this.monster = new Monster(this.stageWidth, this.stageHeight);
    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    window.requestAnimationFrame(this.animate.bind(this));

    document.addEventListener(
      "pointerdown",
      this.mouse.onDown.bind(this.mouse),
      false
    );

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
    // this.monster.move();
    // document.addEventListener(
    //   "wheel",
    //   this.monster.move.bind(this.monster),
    //   false
    // );
    // document.addEventListener(
    //   "wheel",
    //   this.mouse.onWheel.bind(
    //     this.mouse,
    //     this.ctx,
    //     this.stageWidth,
    //     this.stageHeight
    //   ),
    //   false
    // );
  },
  methods: {
    resize() {
      this.wrapper = document.getElementById("canvas-wrapper");
      this.stageWidth = this.wrapper.clientWidth;
      this.stageHeight = this.wrapper.clientWidth * (9 / 16);
      this.canvas.width = this.stageWidth;
      this.canvas.height = this.stageHeight;
      // this.ctx.scale(1, 1);
    },
    animate() {
      window.requestAnimationFrame(this.animate.bind(this));
      this.ctx.clearRect(
        -this.stageWidth,
        -this.stageHeight,
        this.stageWidth * 2,
        this.stageHeight * 2
      );

      for (let i = 0; i < 5; i++) {
        this.ctx.beginPath();
        this.ctx.fillStyle = "#ff0000";
        this.ctx.arc(
          this.monsters[i].pos.x,
          this.monsters[i].pos.y,
          this.monsters[i].size,
          0,
          2 * Math.PI
        );
        this.ctx.fill();
        this.monsters[i].size += 1;
        this.monsters[i].move(this.stageWidth / 2, this.stageHeight);
      }

      this.ctx.fillStyle = "#00ff00";
      this.ctx.beginPath();
      this.ctx.arc(
        this.mouse.mousePos.x - this.stageWidth / 8,
        this.mouse.mousePos.y,
        5,
        0,
        2 * Math.PI
      );
      this.ctx.arc(
        (this.stageWidth / 2 - this.ctx.getTransform().e) /
          this.ctx.getTransform().d,
        (this.stageHeight / 2 - this.ctx.getTransform().f) /
          this.ctx.getTransform().d,
        5,
        0,
        2 * Math.PI
      );
      this.ctx.fill();
    },
  },
};
</script>

<style></style>
