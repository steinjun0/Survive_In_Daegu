<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1>당신은 사망하셨습니다.</h1>
      </v-col>
      <v-col class="d-flex justify-center align-center">
        <div id="abc">
          부활하기(구급약 사용)
          <router-link to="/" style="text-decoration: none"
            ><v-icon>mdi-home</v-icon></router-link
          >메인화면으로
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Death",
};
</script>

<style>
h1 {
  font-size: 40px;
  text-align: center;
  padding: 20px;
  margin: 0px;
  color: red;
}
</style>
