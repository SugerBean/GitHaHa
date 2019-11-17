<template>
  <mt-tabbar v-model="active">
    <mt-tab-item id="peoples">
      <img slot="icon" :src="active=='people'?'../../../static/public/images/icon/PeopleSelected.png':'../../../static/public/images/icon/People.png'"/>
      芸芸众生
    </mt-tab-item>
    <mt-tab-item id="msgList">
      <img slot="icon" :src="active=='messageList'?'../../../static/public/images/icon/messageListSelected.png':'../../../static/public/images/icon/messageList.png'" />
      文会
    </mt-tab-item>
    <div id="sendMessage">
      <div class="sendBtn">
        <button class="btn">
          发表
          <br>
          言论
        </button>
      </div>
    </div>
    <mt-tab-item id="message">
      <img slot="icon" :src="active=='chat'?'../../../static/public/images/icon/chatSelected.png':'../../../static/public/images/icon/chat.png'" />
      会友
    </mt-tab-item>
    <mt-tab-item id="me">
      <img slot="icon" :src="active=='me'?'../../../static/public/images/icon/MeSelected.png':'../../../static/public/images/icon/Me.png'" />
      自己
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  data(){
    return{
      active:"msgList",
    }
  },
  methods :{

  },
  watch:{
    active(){
      this.bus.$emit('addActive',this.active);
    }
  }
}
</script>

<style scoped>
  #sendMessage{
    width: 20%;
    height: 56px;
    position: relative;
    border-top: 1px solid rgba(0, 0, 0, 0.164);
  }
  #sendMessage>.sendBtn{
    width: 60.4%;
    height: 30px;
    position: absolute;
    top: -13px;
    left: 50%;margin-left: -27.5%;
    /* border-top: 1px solid #000; */
    box-shadow: 0px -1px 0.7px 0px #999;
    background: rgb(250,250,250);
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
  }
  #sendMessage>.sendBtn>.btn{
    display: inline-block;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 15%;
    left: 0%;
    background: rgba(32, 217, 241, 0.733);
    border-radius: 50%;
    outline: none;
    border: none;
    font-size: 0.8rem;
  }
  .mint-tab-item{
    border-top: 1px solid rgba(0, 0, 0, 0.164);
  }
</style>
