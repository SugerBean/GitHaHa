<template>
  <div class="box">
    <nav-title></nav-title>
    <msg-list class="msglist"></msg-list>
  </div>
</template>

<script>
import navTitle from './Title_vue/MessageTitle'
import msglist from './container/banner-container'
export default {
  data () {
    return {
    }
  },
  components:{
    "nav-title":navTitle,
    "msg-list":msglist,
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
</style>
