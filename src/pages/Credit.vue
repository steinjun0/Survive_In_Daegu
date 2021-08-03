<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1 class="credit">크레딧</h1>
        <div id="back">
          <router-link to="/" style="text-decoration: none">
            <v-icon>mdi-arrow-left-circle</v-icon>
          </router-link>
        </div>
      </v-col>
      <v-col class="d-flex justify-center">
        <div id="scv">
          <p>기획 :</p>
          <p>개발 :</p>
          <p>디자인 :</p>
          <p>도움주신분 :</p>
          <p>플레이 해주셔서 감사합니다!</p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Credit",
};
</script>

<style scoped>
h1 {
  font-size: 40px;
  text-align: center;
  padding: 20px;
  margin: 0px;
  color: black;
}
#back {
  text-align: left;
  color: black;
  text-decoration: none;
  border-bottom: solid gray 4px;
  padding-bottom: 10px;
}
#scv {
  flex-direction: column;
  padding: 50px;
}
</style>
