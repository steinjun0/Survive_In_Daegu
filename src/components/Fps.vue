<template>
  <div class="d-flex justify-center" style="width: 100%">
    <!-- <div>fps</div> -->
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <div id="canvas-wrapper" style="width: 80%">
          <canvas
            id="fps-canvas"
            style="background-color: rgba(0, 0, 0, 0.5)"
          ></canvas>
        </div>
      </v-col>
      <v-col cols="12" class="d-flex align-center">
        <span style="font-size: 24px; margin-bottom: -4px"> LIFE: </span>
        <v-icon
          v-for="index in life"
          :key="index"
          size="36"
          style="margin-bottom: -4px"
          color="red"
          >mdi-heart</v-icon
        >
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { Mouse } from "./Fps/mouse.js";
import { Monster } from "./Fps/monster.js";
// import { Circle } from "./circle.js";
export default {
  data() {
    let imgs = [];
    for (let i = 0; i < 23; i++) {
      imgs[i] = new Image(); // Create new img element
      imgs[i].src = require(`@/assets/shuckshushuck/shuckshushuck-${i}.png`);
    }
    return {
      canvas: "",
      ctx: "",
      pixelRatio: 1,
      stageWidth: 100,
      stageHeight: 100,
      monsters: [],
      monsterNum: 10,
      monsterPositions: [],
      monsterDestinationPositions: [],
      monsterVelocities: [],
      imgs,
      life: 3,
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

    // this.monster = new Monster(this.stageWidth, this.stageHeight);
    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    window.requestAnimationFrame(this.animate.bind(this));

    document.addEventListener(
      "pointerdown",
      this.eliminateEnemy.bind(this),
      false
    );

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
    this.monsterPositions = [
      [Math.random() * 1000 - 500, -300],
      [Math.random() * 1000 - 500, -600],
      [Math.random() * 1000 - 500, -90000],
      [Math.random() * 1000 - 500, -500],
      [Math.random() * 1000 - 500, -900],
      [Math.random() * 1000 - 500, -900],
      [Math.random() * 1000 - 500, -1500],
      [Math.random() * 1000 - 500, -5000],
      [Math.random() * 1000 - 500, -1000],
      [Math.random() * 1000 - 500, -750],
    ];
    this.monsterDestinationPositions = [
      [Math.random() * this.stageWidth - 500, -300],
      [Math.random() * this.stageWidth - 500, -600],
      [Math.random() * this.stageWidth - 500, -90000],
      [Math.random() * this.stageWidth - 500, -500],
      [Math.random() * this.stageWidth - 500, -900],
      [Math.random() * this.stageWidth - 500, -900],
      [Math.random() * this.stageWidth - 500, -1500],
      [Math.random() * this.stageWidth - 500, -5000],
      [Math.random() * this.stageWidth - 500, -1000],
      [Math.random() * this.stageWidth - 500, -750],
    ];

    this.monsterVelocities = [
      0.005, 0.005, 0.015, 0.005, 0.005, 0.005, 0.015, 0.005, 0.015, 0.005,
    ];
    // this.monsterPositions = this.monsterPositions.slice(2);

    for (let i = 0; i < this.monsterNum; i++) {
      this.monsters[i] = new Monster(
        this.stageWidth,
        this.stageHeight,
        this.monsterPositions[i][0],
        this.monsterPositions[i][1]
      );
      this.monsters[i].velocity = 3;
    }
  },
  watch: {
    life() {
      if (this.life === 0) {
        console.log("죽음");
      }
    },
  },
  methods: {
    resize() {
      this.wrapper = document.getElementById("canvas-wrapper");
      this.stageWidth = this.wrapper.clientWidth;
      this.stageHeight = this.wrapper.clientWidth * (9 / 16);
      this.canvas.width = this.stageWidth;
      this.canvas.height = this.stageHeight;
      this.mouse.resize(this.stageWidth, this.stageHeight);
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

      for (let i = 0; i < this.monsterNum; i++) {
        this.ctx.beginPath();
        this.ctx.fillStyle = "#ffff0055";
        this.ctx.drawImage(
          this.imgs[this.monsters[i].gifIndex],
          this.monsters[i].pos.x - this.monsters[i].size / 2,
          this.monsters[i].pos.y - this.monsters[i].size / 2,
          this.monsters[i].size,
          this.monsters[i].size
        );
        this.ctx.arc(
          this.monsters[i].pos.x,
          this.monsters[i].pos.y,
          this.monsters[i].size / 8,
          0,
          2 * Math.PI
        );
        this.ctx.fill();
        // this.monsters[i].size += 1;
        this.monsters[i].move(this.stageWidth / 2, this.stageHeight);
        if (this.monsters[i].pos.y > this.stageHeight * 0.8) {
          this.monsters[i].eliminated = true;
          if (this.life > 0) this.life -= 1;
          console.log(Math.floor(255 * (1 - this.life / 3)).toString(16));
          this.canvas.style.backgroundColor = `#ff0000${Math.floor(
            255 * (1 - this.life / 3)
          ).toString(16)}`;
        }
      }
      this.ctx.strokeStyle = "#FF0000";
      this.ctx.beginPath();
      this.ctx.moveTo(0, this.stageHeight * 0.8);
      this.ctx.lineTo(this.stageWidth, this.stageHeight * 0.8);
      this.ctx.stroke();
      this.ctx.fillStyle = "#00ff00";
      this.ctx.beginPath();
      this.ctx.arc(
        this.mouse.mousePos.x,
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
    eliminateEnemy(e) {
      for (let i = 0; i < this.monsterNum; i++) {
        if (
          this.monsters[i].isClicked(e.clientX - this.stageWidth / 8, e.clientY)
        ) {
          this.monsters[i].eliminated = true;
        }
      }
    },
  },
};
</script>

<style></style>
