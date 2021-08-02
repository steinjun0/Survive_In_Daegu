<template>
  <div>
    <div>
      <div><router-link to="/">뒤로가기</router-link></div>
      <h1>게임설명</h1>
    </div>
    <div id="abc">
      <p>가 0이 되면 사망합니다.</p>
      <p>
        는 돈입니다. 0이 돼도 사망하진 않지만, 빈털터리가 살아가기에 삭막한
        세상입니다.
      </p>
      <p>보유한 소지품과 특성을 확인할 수 있습니다.</p>
    </div>
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
  padding: 40px;
  color: black;
}
#abc {
  flex-direction: column;
}
</style>