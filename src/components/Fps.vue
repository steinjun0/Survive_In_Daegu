<template>
  <div>
    <div>fps</div>
    <canvas></canvas>
  </div>
</template>
<script>
export default {
  data() {
    return {
      canvas: "",
    };
  },
  mounted() {
    this.canvas = document.createElement("canvas");
  },
};
</script>

<style></style>
