<template>
  <b-container fluid>
    <div class="panel">
      <form class="vform">
        <b-img src="https://picsum.photos/125/125/?image=58" center rounded fluid alt="Center image"
               style="margin-bottom: 20px;"></b-img>
        <div class="vinput">
          <div class="vtitle">
            <span class="title">账号</span>
            <span class="subtitle">(账号|邮箱|手机)</span>
          </div>
          <b-form-input class="input" type="text" v-model="account" placeholder="请输入您的账号"></b-form-input>
          <div class="vtitle">
            <span class="title">密码</span>
            <span class="subtitle">(文字+数字)</span>
          </div>
          <b-form-input class="input" type="password" v-model="password" placeholder="请输入您的密码"></b-form-input>
        </div>
        <b-button block variant="primary" @click="login">
          <div v-if="isLoging" class="loading">
            <BaseLoading></BaseLoading>
          </div>
          <div v-if="!isLoging">登录</div>
        </b-button>
      </form>
    </div>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        isLoging:false,
        account: '',
        password:'',
        error:''
      }
    },
    methods:{
      login(){
        this.$router.replace('/')
        console.log(this)
        this.isLoging = !this.isLoging
      }
    }
  }
</script>

<style lang='scss' scoped>
  .panel {
    background: #fff;
    width: 500px;
    /*height: 500px;*/
    border-radius: 2%;
    box-sizing: content-box;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    text-align: left;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    @media only screen and (max-width: 767px) {
      width: 90%;
    }
    .vform {
      margin: 50px auto;
      width: 80%;
      .input {
        margin: 20px 0;
      }
    }
    .vtitle {
      .title {
        font-size: 20px;
        font-weight: bold;
      }
      .subtitle {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.44);
      }
    }
  }

</style>
