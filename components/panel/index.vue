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
  @import "./style.scss";
</style>
