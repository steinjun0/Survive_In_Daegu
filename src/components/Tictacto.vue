<template>
  <div>
    <v-row class="d-flex flex-column" style="margin: 100px">
      <v-col class="d-flex flex-row">
        <div>
          <div class="block" @click="changeState(0, 0, 1)">
            {{ map[0][0] }}
          </div>
          <div class="block" @click="changeState(0, 1, 1)">
            {{ map[0][1] }}
          </div>
          <div class="block" @click="changeState(0, 2, 1)">
            {{ map[0][2] }}
          </div>
        </div>
        <div>
          <div class="block" @click="changeState(1, 0, 1)">
            {{ map[1][0] }}
          </div>
          <div class="block" @click="changeState(1, 1, 1)">
            {{ map[1][1] }}
          </div>
          <div class="block" @click="changeState(1, 2, 1)">
            {{ map[1][2] }}
          </div>
        </div>
        <div>
          <div class="block" @click="changeState(2, 0, 1)">
            {{ map[2][0] }}
          </div>
          <div class="block" @click="changeState(2, 1, 1)">
            {{ map[2][1] }}
          </div>
          <div class="block" @click="changeState(2, 2, 1)">
            {{ map[2][2] }}
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div v-if="winner === 1" style="font-size: 24px">승리~!</div>
        <div v-else-if="winner === 2" style="font-size: 24px">패배!</div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      trun: "o",
      winner: 0,
    };
  },
  methods: {
    changeState(i, j, state) {
      if (this.map[i][j] !== 0 || this.winner !== 0) {
        return;
      }
      console.log("i, j, state", i, j, state);
      this.$set(this.map[i], j, state);
      // 사람이 둔 것을 체크
      let isFinishResult;
      isFinishResult = this.isFinish();
      if (isFinishResult) {
        this.winner = 1;
        return;
      }
      // this.winner = this.isFinish(); // 사람이 위너가 되거나(1) 아무것도 아니거나(0)
      // 로봇이 수를 둠
      this.doRobot();
      // 로봇이 둔 것을 체크
      isFinishResult = this.isFinish();
      if (isFinishResult) {
        this.winner = 2;
      }
      // this.winner = this.isFinish(); // 로봇이 위너가 되거나(2) 아무것도 아니거나 (0)
    },
    changeState2(i, j, state) {
      // console.log("i, j, state", i, j, state);
      this.$set(this.map[i], j, state);
    },
    isFinish() {
      for (let i = 0; i <= 2; i++) {
        if (
          this.map[i][0] == this.map[i][1] &&
          this.map[i][1] == this.map[i][2] &&
          this.map[i][0] == this.map[i][2] &&
          this.map[i][0] !== 0
        ) {
          console.log("aa1");
          return true;
        }
      }
      for (let i = 0; i <= 2; i++) {
        if (
          this.map[0][i] == this.map[1][i] &&
          this.map[1][i] == this.map[2][i] &&
          this.map[0][i] == this.map[2][i] &&
          this.map[0][i] !== 0
        ) {
          console.log("aa2");
          return true;
        }
      }
      if (
        this.map[0][0] == this.map[1][1] &&
        this.map[1][1] == this.map[2][2] &&
        this.map[0][0] == this.map[2][2] &&
        this.map[0][0] !== 0
      ) {
        console.log("aa3");
        return true;
      }
      if (
        this.map[0][2] == this.map[1][1] &&
        this.map[1][1] == this.map[2][0] &&
        this.map[0][2] == this.map[2][0] &&
        this.map[1][1] !== 0
      ) {
        console.log("aa4");
        return true;
      }
      return false;
    },
    //    decide() {
    //      this.isFinish()
    //        if (state == 1 == true)
    //          you win
    //    }
    doRobot() {
      let arr = [];

      for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
          if (this.map[i][j] == 0) {
            arr.push([i, j]);
          }
        }
      }

      let k = arr.length;
      let x = Math.floor(Math.random() * k);
      let y = arr[x];
      console.log("y: ", y);
      this.changeState2(y[0], y[1], 2);

      // Math.random(); // 0~1 난수 발생
      // Math.ceil(data); // 1.4 => 2
      // Math.floor(data); // 1.4 => 1
      // arr.length(); //
    },

    // 게임이 끝났다
    // if(){
    //   return true
    // },

    // 게임이 안끝남
    // else {
    //   return false
    // },
  },
};
</script>

<style>
.block {
  border: 3px solid gray;
  padding: 30px;
  cursor: pointer;
}
</style>