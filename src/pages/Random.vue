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
        <v-btn style="margin-left: 48px; font-size: 24px">들어간다. </v-btn>
      </v-col>
      <v-col cols="12" class="d-flex flex-start align-center">
        <v-btn style="margin-left: 48px; font-size: 24px"
          >무시하고 지나간다.</v-btn
        >
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
        ["지나가다가 병원을 발견하였습니다.\n구급약을 구할수있을거같습니다."],
      ],
      paragraphIndex: 0,
    };
  },
};
</script>

<style>
</style>