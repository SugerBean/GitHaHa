<template>
  <div class="box">
    <nav-title></nav-title>
    <msg-list class="msglist"></msg-list>
    <botm-btn id="btns"></botm-btn>
  </div>
</template>

<script>
import navTitle from './Title_vue/MessageTitle'
import msglist from './container/banner-container'
import botmBtn from './bottomBtn/bottomBtn'

export default {
  data () {
    return {
    }
  },
  components:{
    "nav-title":navTitle,
    "msg-list":msglist,
    "botm-btn":botmBtn,
  }
}
</script>

<style scoped>
  .box{
    overflow: hidden;
  }
  .msglist{
    margin-top: 100px;
  }
  #btns{
    position: fixed;
  }
</style>
