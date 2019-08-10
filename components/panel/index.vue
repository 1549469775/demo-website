<template>
  <div class="panel" :style="{'backgroundColor':color?color:'#ffffff'}">
    <div class="panel__wrapper layer m-auto">
      <h2>{{vtitle}}</h2>
      <div class="panel__desc">
        <div class="panel__desc__word">{{vdesc}}</div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['vtitle', 'vdesc', 'color'],

  }
</script>
<style lang="scss" scoped>
  @media screen and (min-width: 1440px) {
    @import "@/assets/pc-1920.scss";
    @import "./pc.scss";
  }
  @media screen and (min-width: 768px) and (max-width: 1440px) {
    @import "@/assets/pc-1366.scss";
    @import "./pc.scss";
  }
  @media screen and (max-width: 768px) {
    @import "@/assets/pc-768.scss";
    @import "./pc.scss";
  }
</style>
