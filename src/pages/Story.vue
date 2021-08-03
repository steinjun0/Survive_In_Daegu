<template>
  <v-row id="background" style="height: 800px" v-on:click="moveNextParagraph">
    <v-col
      cols="12"
      class="d-flex flex-column align-start"
      style="margin-top: 300px; font-size: 25px; padding-left: 100px"
    >
      <!-- <div v-for="(paragraph, pIndex) in storyText" :key="pIndex"></div> -->
      <div
        v-for="(text, tIndex) in storyText[paragraphIndex]"
        :key="tIndex"
        style="white-space: pre"
      >
        {{ text }}
      </div>
    </v-col>
    <v-col
      class="d-flex justify-end"
      style="font-size: 20px; padding-right: 20px"
      >게임 시작하기
      <router-link to="/Game" style="text-decoration: none"
        ><v-icon large>mdi-google-controller</v-icon></router-link
      >
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Story",
  data() {
    return {
      storyText: [
        [
          "평화로운 대구도시에 어느날..",
          "좀비 바이러스가 창궐했습니다!",
          "다행히 정부는 빠른 대처로 대구를 봉쇄하여 확산을 막았습니다.",
        ],
        [
          "그러나 엎친데 덮친격으로\n 금성 외계인들이 침범했지 뭐에요!",
          "외계인들은 지구의 공전을 멈추게 하여\n 대구를 365일 한여름으로 만들었답니다.",
        ],
        [
          "좀비는 엄청난 더위때문에 밤에만 활동합니다.\n 외계인은 더위를 좋아하여 낮에만 활동합니다.",
          "여러분은 대구에서 수단과 방법을 가리지말고\n 생존하는것이 목표입니다.",
          "행운을 빕니다.",
        ],
      ],
      paragraphIndex: 0,
    };
  },
  mounted() {},
  methods: {
    moveNextParagraph() {
      if (this.paragraphIndex < 2) {
        this.paragraphIndex += 1;
      }
    },
  },
};
</script>

<style>
</style>