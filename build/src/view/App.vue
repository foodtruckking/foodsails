<template>
  <div id="app">

    <map-controller />

    <div class="side-bar-wrapper">
      <side-bar />
    </div>

  </div>
</template>

<script>
  import SideBar       from 'comp/SideBar.vue'
  import MapController from 'comp/MapController.vue'

  export default {
    components: {
      SideBar,
      MapController,
    },
  }
</script>

<style scoped lang="scss">
  @import '~scss/defines';

  #app {
    width: 100%;
    height: 100%;
  }

  .side-bar-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: $side-bar-width;
  }
</style>
