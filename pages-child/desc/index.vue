<template>
  <div class="wrapper">
    <div class="center_wraper"></div>
    <ul class=" descicon  layer m-auto clearfix">
      <li class="item">
        <div class="icon i0">
        </div>
        <div class="word">
          <p class="word__titile">技术VC</p>
          <p class="word__desc">(技术支持、企业资源整合)</p>
        </div>
      </li>
      <li class="item">
        <div class="icon i1">
        </div>
        <div class="word">
          <p class="word__titile">10年+</p>
          <p class="word__desc">(技术沉淀团队 )</p>
        </div>
      </li>
      <li class="item">
        <div class="icon  i2">
        </div>
        <div class="word">
          <p class="word__titile">100人+</p>
          <p class="word__desc">(人精英团队 )</p>
        </div>
      </li>
      <li class="item">
        <div class="icon i3">
        </div>
        <div class="word">
          <p class="word__titile">行业口碑</p>
          <p class="word__desc">(评价极佳)</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang='scss'>
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
