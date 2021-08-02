<template>
  <div>
    <h1 class="title">대구 아일랜드</h1>
    <div class="menu">
      <div><router-link to="/Story">게임시작</router-link></div>
      <div><router-link to="/information">게임설명</router-link></div>
      <div><router-link to="/Credit">크레딧</router-link></div>
    </div>
    <div><router-link to="/Setting">설정</router-link></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.title {
  font-size: 46px;
  color: red;
  line-height: 300px;
}
.menu {
  font-size: 30px;
}
</style>