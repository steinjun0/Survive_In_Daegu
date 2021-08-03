<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1>게임설명</h1>
        <div id="back">
          <router-link to="/" style="text-decoration: none"
            ><v-icon>mdi-arrow-left-circle</v-icon></router-link
          >
        </div>
      </v-col>
      <v-col class="d-flex justify-center">
        <div id="abc">
          <p>
            <v-icon>mdi-cards-heart</v-icon>는 목숨으로, 0이 되면 사망합니다.
          </p>
          <p>
            <v-icon>mdi-currency-usd</v-icon>는 돈입니다. 0이 돼도 사망하진
            않지만, 빈털터리가 살아가기에 삭막한 세상입니다.
          </p>
          <p>
            <v-icon>mdi-purse</v-icon>는 보유한 소지품과 특성을 확인할 수
            있습니다.
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Information",
};
</script>

<style>
h1 {
  font-size: 40px;
  text-align: center;
  padding: 20px;
  margin: 0px;
  color: black;
}
#abc {
  flex-direction: column;
  padding: 50px;
}
#back {
  text-align: left;
  border-bottom: solid gray 4px;
  padding: 10px;
}
</style>
