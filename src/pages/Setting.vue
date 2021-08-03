<template>
  <div>
    <v-row>
      <v-col cols="12">
        <div id="back">
          <router-link to="/" style="text-decoration: none">
            <v-icon>mdi-arrow-left-circle</v-icon>
          </router-link>
        </div>
        <div id="set">
          <div>타이핑 효과</div>
          <div>폰트크기 조절</div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Setting",
};
</script>

<style scoped>
#set {
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#back {
  text-align: left;
  padding: 10px;
}
</style>