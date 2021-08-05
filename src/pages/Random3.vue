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

    <v-row style="height: 400px" class="align-center">
      <v-col cols="12">
        <div
          v-for="(text, tIndex) in storyText[paragraphIndex]"
          :key="tIndex"
          style="white-space: pre; font-size: 40px"
          class="d-flex justify-center"
        >
          {{ text }}
        </div>
      </v-col>
      <v-col cols="12">
        <div
          style="white-space: pre; font-size: 25px"
          class="d-flex justify-center"
        ></div>
      </v-col>
    </v-row>
    <v-row style="border-top: solid gray 4px; height: 260px">
      <v-col cols="12" class="d-flex flex-start align-center">
        <v-btn style="margin-left: 48px; font-size: 24px" :to="'/gugudan'">
          구구단 문제?
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Random",
  data() {
    return {
      storyText: [
        [
          "당신은 텅 비어있는 경찰서를 발견했습니다.\n좀비와 상대할려면 총이 필요할거같습니다. \n당신은 경찰서에서 잠겨있는 무기고를 발견합니다.\n잠겨있는 무기고를 열려면 보안실 컴퓨터 퀴즈를 풀어야합니다...",
        ],
      ],
      paragraphIndex: 0,
    };
  },
};
</script>

<style>
</style>