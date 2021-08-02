<template>
  <div>
    <v-row>
      <v-col class="d-flex justify-end">
        <router-link to="/Setting" style="text-decoration: none">
          <v-icon>mdi-cog</v-icon>
        </router-link>
      </v-col>
      <v-col
        style="margin-top: 100px; margin-bottom: 50px"
        cols="12"
        class="d-flex justify-center"
      >
        <h1 style="font-size: 60px">대구 아일랜드</h1>
      </v-col>

      <v-col
        cols="12"
        class="d-flex flex-column align-center justify-space-between"
        style="height: 200px; font-size: 24px"
      >
        <router-link
          to="/Story"
          style="text-decoration: none; color: black"
          :style="time === 'night' ? 'color: white' : 'color: black'"
          >게임시작
        </router-link>
        <router-link
          to="/information"
          style="text-decoration: none; color: black"
        >
          게임설명
        </router-link>
        <router-link to="/Credit" style="text-decoration: none; color: black">
          크레딧
        </router-link>
      </v-col>
    </v-row>

    <!-- <div class="menu">
      <div><router-link to="/Story">게임시작</router-link></div>
      <div><router-link to="/information">게임설명</router-link></div>
      <div><router-link to="/Credit">크레딧</router-link></div>
    </div>
    <div><router-link to="/Setting">설정</router-link></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: "day",
    };
  },
};
</script>

<style>
.title {
  font-size: 100px;
  color: red;
  line-height: 260px;
}
.menu {
  font-size: 50px;
}
</style>
