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
        <v-btn style="margin-left: 48px; font-size: 24px" :to="'/fps'">
          이 서늘한 감각... 오랜만이구만!
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
          '당신은 무기고에서 총을 획득했습니다.\n기쁜마음으로 경찰서를 나올려는 순간\n좀비들이 에워싸기 시작합니다!\n"따뜻한 아이스아메리카노오오오"\n헛소리를 하는거보니 좀비가 맞습니다.\n경찰서를 거점으로 수비해야합니다.',
        ],
      ],
      paragraphIndex: 0,
    };
  },
};
</script>

<style>
</style>