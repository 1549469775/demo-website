<template>
  <b-container>
    {{ip}}
    <b-row>
      <b-col md="4" sm="2">1 of 3</b-col>
      <b-col md="4" sm="2">2 of 3</b-col>
      <b-col md="4" sm="8">3 of 3</b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    middleware: 'auth',
    //用于请求数据，返回的数据会作用在data上
    async asyncData({ $axios }) {
      const ip = await $axios.$get('http://icanhazip.com');
      return { ip }
    },
    //无法在内部使用this获取组件实例
    //fetch 方法用于在渲染页面前填充应用的状态树（store）数据
    //与 asyncData 方法类似，不同的是它不会设置组件的数据。
    async fetch ({ store, params,$axios }) {
      let ip = await $axios.$get('http://icanhazip.com')
      store.commit('todos/SET_IP', ip)
    },
    mounted(){
      console.log(this.$store)
    },
    data() {
      return {
        ip: '0.0.0.0'
      }
    },
    methods: {
      async fetchSomething() {
        const ip = await this.$axios.$get('http://icanhazip.com');
        this.ip = ip
      }
    }
  }
</script>

<style lang='scss'>
  @import "style";

</style>
