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
        <v-btn style="margin-left: 48px; font-size: 24px" :to="'/tictacto'">
          틱택토..?
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
          '당신은 지나가다가 외계인을 마주칩니다.\n"대구 여름 따뜻하다 대구 여름 따뜻하다." \n대구 사람은 알아들을수 없는 외계어입니다.\n아무래도 게임에서 이겨야 지나갈수 있을거같습니다.',
        ],
      ],
      paragraphIndex: 0,
    };
  },
};
</script>

<style>
</style>