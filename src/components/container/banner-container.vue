<template>
  <mt-tab-container v-model="action">
    <mt-tab-container-item id="msgList">
      <div class="content w-100" v-for="(item , i) of usemsg" :key="i">
        <div class="title">
          <div class="header">
            <img class="w-100" :src="item.header" />
          </div>
          <p class="name">{{ item.uname }}</p>
          <button class="btn">
            <img class="w-100" src="../../../static/public/images/icon/button.png" />
          </button>
        </div>
        <div class="message">{{ item.textMsg }}</div>
        <div class="downBtn" :class="isShow(i) ? '' : 'show'">
          <div  @click="down($event,i)">更多</div>
          <div class="show" @click="up($event,i)">收起</div>
        </div>
      </div>
    </mt-tab-container-item>
  </mt-tab-container>
</template>

<script>
export default {
  data() {
    return {
      action: "msgList",
      downBtnTop: 0,
      usemsg: [
        {
          header: "../../../static/public/images/icon/header.png",
          uname: "㊣国际辣条协会会长",
          textMsg: `有一美人兮，见之不忘。一日不见兮，思之如狂。凤飞翱翔兮，四海求凰。无奈佳人兮，不在东墙。将琴代语兮，聊写衷肠。`
        },
        {
          header: "../../../static/public/images/icon/header.png",
          uname: "㊣国际辣条协会会长",
          textMsg: `有一美人兮，见之不忘。一日不见兮，思之如狂。凤飞翱翔兮，四海求凰。无奈佳人兮，不在东墙。将琴代语兮，聊写衷肠。有一美人兮，见之不忘。一日不见兮，思之如狂。凤飞翱翔兮，四海求凰。无奈佳人兮，不在东墙。将琴代语兮，聊写衷肠。有一美人兮，见之不忘。一日不见兮，思之如狂。凤飞翱翔兮，四海求凰。无奈佳人兮，不在东墙。将琴代语兮，聊写衷肠。`
        },
        {
          header: "../../../static/public/images/icon/header.png",
          uname: "㊣国际辣条协会会长",
          textMsg: `有一美人兮，见之不忘。一日不见兮，思之如狂。凤飞翱翔兮，四海求凰。无奈佳人兮，不在东墙。将琴代语兮，聊写衷肠。有一美人兮，见之不忘。一日不见兮，思之如狂。凤飞翱翔兮，四海求凰。无奈佳人兮，不在东墙。将琴代语兮，聊写衷肠。有一美人兮，见之不忘。一日不见兮，思之如狂。凤飞翱翔兮，四海求凰。无奈佳人兮，不在东墙。将琴代语兮，聊写衷肠。`
        },
        {
          header: "../../../static/public/images/icon/header.png",
          uname: "㊣国际辣条协会会长",
          textMsg: `有一美人兮，见之不忘。一日不见兮，思之如狂。凤飞翱翔兮，四海求凰。无奈佳人兮，不在东墙。将琴代语兮，聊写衷肠。有一美人兮，见之不忘。一日不见兮，思之如狂。凤飞翱翔兮，四海求凰。无奈佳人兮，不在东墙。将琴代语兮，聊写衷肠。有一美人兮，见之不忘。一日不见兮，思之如狂。凤飞翱翔兮，四海求凰。无奈佳人兮，不在东墙。将琴代语兮，聊写衷肠。`
        }
      ]
    };
  },
  methods: {
    isShow(j) {
      var bool = "";
      var height = 0;
      if (this.usemsg[j].textMsg.length > 100) {
        bool = true;
      } else {
        bool = false;
      }
      return bool;
    },
    down(event,f) {
      var message = document.getElementsByClassName("message")[f];
      var msgHeight = message.offsetHeight; //获取当前点击的文本框的高度
      message.style.maxHeight = "270px";
      event.target.classList.add("show");//让更多按钮隐藏
      message.nextElementSibling.lastElementChild.classList.remove("show")//收起按钮显示
    },
    up(event,f) {
      var message = document.getElementsByClassName("message")[f];
      message.style.maxHeight = "167px"
      event.target.classList.add("show");//让更多按钮隐藏
      message.nextElementSibling.firstElementChild.classList.remove("show")//收起按钮显示
    }
  },
  created: function() {}
};
</script>

<style scoped>

.content {
  box-sizing: border-box;
  padding: 0 10px;
  padding-top: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.content > .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.content > .title > .header {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.content > .title > .name {
  font-size: 16px;
  font-weight: 700;
  position: absolute;
  left: 45px;
}
.content > .title > .btn {
  width: 22px;
  height: 22px;
  border: none;
  outline: none;
  background: none;
}
.content > .message {
  width: 86%;
  max-height: 172px;
  text-align: left;
  font-size: 16px;
  overflow: hidden;
  margin-left: 10%;
  text-align: justify;
  transition: all 0.3s linear;
}
.show {
  display: none;
}
.content > .downBtn {
  width: 100%;
  margin-top: 0px;
  clear: both;
}
.w-100 {
  width: 100%;
}
.h-100 {
  height: 100%;
}
</style>
