<template>
  <div class="map-controller">

    <gmap-map
      :center="{lat: 10, lng: 10}"
      :zoom="7"
      style="width: 100%; height: 100%" />
    
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="scss">
  @import '~scss/defines';

  .map-controller {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: calc(100% - #{$side-bar-width});
  }
</style>
