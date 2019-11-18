<template>
  <mt-tab-container v-model="active">
    <!-- 星球页面 Start -->
    <mt-tab-container-item id="peoples">
      星球页面
    </mt-tab-container-item>
    <!-- 星球页面 End -->
    <!-- 广场页面 Start -->
    <mt-tab-container-item id="msgList">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <p>刷新次数: {{ count }}</p>
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
        <div class="message">{{ item.textMsg }}</div> <!-- 文字显示区域 -->
        <div class="like" @click="likes">
          <div class="like_item">
            <img class="w-100 h-100" data-id="img1" src="../../../static/public/images/icon/collect.png">
          </div>
          <div class="like_item">
            <img class="w-100 h-100" data-id="img2" src="../../../static/public/images/icon/like.png">
          </div>
          <div class="like_item">
            <img class="w-100 h-100" data-id="img3" src="../../../static/public/images/icon/review.png">
          </div>
          <div class="like_item">
            <img class="w-100 h-100" data-id="img4" src="../../../static/public/images/icon/transmit.png">
          </div>
        </div>
        <div class="downBtn" :class="isShow(i) ? '' : 'show'">
          <div  @click="down($event,i)">更多</div>
          <div class="show" @click="up($event,i)">收起</div>
        </div>
      </div>
      </van-pull-refresh>
    </mt-tab-container-item>
    <!-- 广场页面 End -->
    <!-- 聊天页面 Start -->
    <mt-tab-container-item id="message">
      聊天页面
    </mt-tab-container-item>
    <!-- 聊天页面 End -->
    <!-- 我的页面 Start -->
    <mt-tab-container-item id="me">
      我的页面
    </mt-tab-container-item>
    <!-- 我的页面 End -->
  </mt-tab-container>
</template>

<script>
export default {
  data() {
    return {
      active: "msgList",
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
      ],
      count:0,
      isLoading: false,
      coltBol:false,
      likeBol:false,
    };
  },
  methods: {
    isShow(j) {// 判断更多按钮什么时候出现
      var bool = "";
      var height = 0;
      if (this.usemsg[j].textMsg.length > 100) { // 如果文字长度大于100 时就出现
        bool = true;
      } else {
        bool = false;
      }
      return bool;
    },
    down(event,f) {// 点击更多按钮时增加最大高度
      var message = document.getElementsByClassName("message")[f];
      var msgHeight = message.offsetHeight; //获取当前点击的文本框的高度
      message.style.maxHeight = "270px";
      event.target.classList.add("show");//让更多按钮隐藏
      message.nextElementSibling.nextElementSibling.lastElementChild.classList.remove("show")//收起按钮显示
      console.log(message.nextElementSibling)
    },
    up(event,f) {// 点击收起按钮时减小最大高度
      var message = document.getElementsByClassName("message")[f];
      message.style.maxHeight = "167px"
      event.target.classList.add("show");//让更多按钮隐藏
      message.nextElementSibling.nextElementSibling.firstElementChild.classList.remove("show")//收起按钮显示
    },
    addActive(val){// 接收点击tabbar按钮使传过来的参数
      this.active = val;
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    likes(even){
      if(even.target.dataset.id == "img1"){
        this.coltBol?even.target.src = "../../../static/public/images/icon/collect.png":even.target.src = "../../../static/public/images/icon/collect_selected.png";
        this.coltBol = !this.coltBol;
      }else if(even.target.dataset.id == "img2"){
        this.likeBol?even.target.src = "../../../static/public/images/icon/like.png":even.target.src = "../../../static/public/images/icon/like_selected.png";
        this.likeBol = !this.likeBol;
      }
    }
  },
  created: function() {// 绑定修改active值 的函数 [兄弟传参]
    this.bus.$on('addActive',this.addActive.bind(this));
  }
};
</script>

<style scoped>
/***用户发表动态模块 */
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
/***发表文章时用户的头像 */
.content > .title > .header {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
/***用户名 */
.content > .title > .name {
  font-size: 16px;
  font-weight: 700;
  position: absolute;
  left: 45px;
}
/***右边按钮 */
.content > .title > .btn {
  width: 22px;
  height: 22px;
  border: none;
  outline: none;
  background: none;
}
/***文章内容 */
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
/***更多按钮的样式 */
.content > .downBtn {
  width: 100%;
  margin-top: 0px;
  clear: both;
}
.like{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
}
.like_item{
  width: 20px;
  height: 20px;
}
/***公用样式 */
.w-100 {
  width: 100%;
}
.h-100 {
  height: 100%;
}
</style>
