<template>
  <div>
    <v-row>
      <v-col
        style="margin-top: 100px; margin-bottom: 50px"
        class="d-flex flex-column align-center"
        cols="12"
      >
        <h1>당신은 사망하셨습니다.</h1>
      </v-col>
      <v-col
        class="d-flex flex-column align-center justify-space-between"
        style="height: 200px; font-size: 25px"
      >
        <router-link to="/Story" style="text-decoration: none; color: black"
          >부활하기(<v-icon>mdi-medical-bag</v-icon>)</router-link
        >
        <router-link to="/" style="text-decoration: none; color: black">
          메인화면(<v-icon>mdi-home</v-icon>)</router-link
        >
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
