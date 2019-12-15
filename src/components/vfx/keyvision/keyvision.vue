<template>
  <div class="vfx-keyvision_main">
    <img class="vfx-keyvision_backupimg" src="@/assets/img/home.png" />
    <div class="vfx-keyvision_content">
      <canvas class="vfx-keyvision_canvas"></canvas>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.vfx-keyvision_main {
  position: relative;
}

.vfx-keyvision_backupimg {
  opacity: 0;
}

.vfx-keyvision_content {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.vfx-keyvision_canvas {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
