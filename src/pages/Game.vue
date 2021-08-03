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

    <v-row>
      <v-col>
        <div
          v-for="(text, tIndex) in storyText[paragraphIndex]"
          :key="tIndex"
          style="white-space: pre"
          class="d-flex justify-center"
        >
          {{ text }}
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Game",
  data() {
    return {
      storyText: [
        [
          "좀비와 외계인 침략이 생긴지 한달후,\n 집에 먹을것이 떨어진 당신은\n 집을 벗어나서 먹을것을 찾아야만 합니다.",
        ],
        ["당신은 여행을 떠나기전에", "을 챙겼습니다."],
      ],
      paragraphIndex: 0,
    };
  },
  mounted() {},
  methods: {
    moveNextParagraph() {
      if (this.paragraphIndex < 1) {
        this.paragraphIndex += 1;
      }
    },
  },
};
</script>

<style>
</style>