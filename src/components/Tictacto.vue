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
      winner: "",
    };
  },
  methods: {
    changeState(i, j, state) {
      console.log("i, j, state", i, j, state);
      this.$set(this.map[i], j, state);
    },
    // isFinish() {
    //   for (let ) {

    //   }
    // },
    //   line() {
    //     this.map (
    //       [i][j]
    //     )
    //   },
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