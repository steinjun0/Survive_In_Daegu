<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        style="border-bottom: 1px solid black; padding: 25px"
        class="d-flex justify-space-between"
      >
        <div id="bag" class="d-flex justify-start">
          <v-icon>mdi-purse</v-icon>
        </div>
        <div id="money" class="d-flex justify-end">
          <v-icon>mdi-currency-usd</v-icon>
          <v-icon>mdi-currency-usd</v-icon>
          <v-icon>mdi-currency-usd</v-icon>
          <v-icon>mdi-cards-heart</v-icon>
          <v-icon>mdi-cards-heart</v-icon>
          <v-icon>mdi-cards-heart</v-icon>
        </div>
      </v-col>
    </v-row>

    <v-row style="height: 400px">
      <v-col cols="12">
        <div
          v-for="(text, tIndex) in storyText[paragraphIndex]"
          :key="tIndex"
          style="white-space: pre; font-size: 25px"
          class="d-flex justify-center"
        >
          {{ text }}
        </div>
      </v-col>
      <v-col cols="12">
        <div
          style="white-space: pre; font-size: 25px"
          class="d-flex justify-center"
        >
          {{ resultText }}
        </div>
      </v-col>
    </v-row>
    <v-row style="border-top: solid gray 4px; height: 260px">
      <v-col cols="12" class="d-flex flex-start align-center">
        <v-btn
          style="margin-left: 48px; font-size: 24px"
          @click="selectBelonging(firstItem)"
          >선택지 1. {{ firstItem }}
        </v-btn>
      </v-col>
      <v-col cols="12" class="d-flex flex-start align-center">
        <v-btn
          style="margin-left: 48px; font-size: 24px"
          @click="selectBelonging(secondItem)"
          >선택지 2. {{ secondItem }}</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Game",
  data() {
    return {
      firstItem: "",
      secondItem: "",
      belongings: ["총", "핫팩", "구급약"],
      belonging: "",
      storyText: [
        [
          `좀비와 외계인 침략이 생긴지 한달후,\n 집에 먹을것이 떨어진 당신은\n 집을 벗어나서 먹을것을 찾아야만 합니다.\n`,
        ],
      ],
      resultText: `당신은 여행을 떠나기전에 ... 을 챙겼습니다.`,
      paragraphIndex: 0,
    };
  },
  mounted() {
    let random = Math.ceil(Math.random() * 9) % 3;
    this.firstItem = this.belongings[random];
    let nextRandom = Math.ceil(Math.random() * 9) % 3;
    while (random === nextRandom) {
      nextRandom = Math.ceil(Math.random() * 9) % 3;
    }
    this.secondItem = this.belongings[nextRandom];
  },
  methods: {
    moveNextParagraph() {
      if (this.paragraphIndex < 1) {
        this.paragraphIndex += 1;
      }
    },
    selectBelonging(item) {
      console.log("item", item);
      this.belonging = item;
      this.resultText = `당신은 여행을 떠나기전에 ${this.belonging}을 챙겼습니다.`;
    },
  },
};
</script>

<style>
</style>