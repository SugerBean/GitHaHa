<template>
<div>
  <div id="nav" class="w-100">
    <div class="headImg">
      <van-image is-link @click="showPopup" round width="40px" height="40px" src="../../../static/public/images/icon/header.png"/>
    </div>
    <ul class="nav_text">
      <div class="bg h-100 " :style="`left:${left}px`">
        <div class="linear"></div>
      </div>
      <li class="h-100">
        <a href="javascript:;" class="w-100 h-100" :class="aValue=='关注'?'trani':''" @click="isfocus($event,0)" data-id="关注">关注</a>
      </li>
      <li class="h-100">
        <a href="javascript:;" class="w-100 h-100" :class="aValue=='推荐'?'trani':''" @click="isfocus($event,1)" data-id="推荐">推荐</a>
      </li>
      <li class="h-100">
        <a href="javascript:;" class="w-100 h-100" :class="aValue=='最新'?'trani':''" @click="isfocus($event,2)" data-id="最新">最新</a>
      </li>
    </ul>
    <div class="musicImg">
      <img class="w-100" src="../../../static/public/images/icon/music.png">
    </div>
    <div class="search w-100">
      <input @blur="unblur" type="text" class="w-100">
      <img src="../../../static/public/images/icon/search.png">
    </div>
  </div>
  <!-- <div id="leftList" class="w-100">
    <div class="left h-100">
      <ul class="list">
        <li>我的信息</li>
        <li>我的关注</li>
        <li>我的收藏</li>
        <li>我的点赞</li>
        <li>我的歌单</li>
      </ul>
    </div>
  </div> -->
  <!-- <van-cell >展示弹出层</van-cell> -->
  <van-popup v-model="show" position="left" :style="{ height: '100%',width:'80%'}">内容</van-popup>
</div>
</template>

<script>
  export default{
    data(){
      return{
        aValue:'推荐',
        left:66,
        bool:false,
        ismin:false,
        leftListShow:false,
        show:false,
      }
    },
    methods :{
      showPopup(){
        this.show = !this.show;
      },
      isfocus(e,i){
        // 获取当前被点击元素的自定义属性
        this.aValue = e.target.getAttribute('data-id');
        this.left = 67*i;
        this.bool = true;
      },
      getScrollTop() { // 获取当前滚动条的高度函数
          var scroll_top = 0;
          if (document.documentElement && document.documentElement.scrollTop) {
              scroll_top = document.documentElement.scrollTop;
          }
          else if (document.body) {
              scroll_top = document.body.scrollTop;
          }
          return scroll_top;
      },
      scrollEven(even){// 滚动条事件处理函数
        var scrollHeight = this.getScrollTop();
        var search = document.querySelector('.search');
        if(scrollHeight>=25){ // 当滚动条高度高于25时输入框缩小
          search.style.width = "8%";
          search.style.left = "300px";
          this.ismin=!this.ismin;
          search.lastElementChild.onclick = ()=>{// 为放大镜添加点击事件
            if(!this.ismin){// 判断当前状态 为false 搜索框展开
              search.style.width = "100%";
              search.style.left = "-10px";
              search.firstElementChild.focus();
            }else{ // 为true 搜索框缩小
              if(scrollHeight>=25){ // 只有当滚动条高度大于25时才能点击缩小
                search.style.width = "8%";
                search.style.left = "300px";
              }
            }
            this.ismin=!this.ismin;
          }
        }else{// 如果滚动条高度大于25 则缩小 同时改变搜索框状态
          search.style.width = "100%";
          search.style.left = "-10px";
          this.ismin=!this.ismin;
        }
      },
      unblur(){// 输入框失去焦点时缩小
        var search = document.querySelector('.search');
        if(this.ismin){
        search.style.width = "8%";
        search.style.left = "300px";
        }
      },
      showLeftList(){
        var leftList = document.getElementById('leftList');
        if(this.leftListShow){
          leftList.style.left = "-414px";
        }else{
          leftList.style.left = 0;
        }
        this.leftListShow = !this.leftListShow;
      }
    },
    created (){
      window.onscroll = this.scrollEven;// 为窗口添加滚动事件
    }
  }
</script>

<style scoped>
/* 整个头部导航栏  设置弹性布局 */
  #nav{
    height: 60px;
    box-sizing: border-box;
    padding: 0 10px;
    background: #fff;
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: fixed;
    border-bottom: 1px solid rgba(0, 0, 0, 0.164);
    z-index: 10;
  }
  /* 左边用户头像 */
  #nav>.headImg{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
  }
  /* 中间导航 */
  #nav>.nav_text{
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  #nav>.nav_text>li{
    width: 60px;
    margin: 0 3px;
    line-height: 60px;
    text-align: center;
    z-index: 1;
  }
  #nav>.nav_text>.bg{
    width: 60px;
    z-index: 0;
    border-radius: 8px;
    /* background: rgba(0, 0, 0, .2); */
    position: absolute;
    left: 67px;
    transition: all .1s linear;
  }
  #nav>.nav_text>.bg>.linear{
    width: 20px;
    height: 0px;
    margin: 0 auto;
    margin-top:45px;
    border: 2px solid #05f;
    border-radius: 5px;
  }
  #nav>.nav_text a{
    display: inline-block;
    font-size: 1.1rem;
    color:black;
    transition: all .1s linear;
  }
  #nav>.nav_text a:hover{
    text-decoration: none;
  }
  #nav>.nav_text a:active{
    background: #fff;
  }
  .trani{
    font-size: 1.4rem !important;
  }
  /* 右边音乐播放 */
  #nav>.musicImg{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
  }
  /* 搜索框 */
  #nav>.search{
    padding: 0 10px;
    position: fixed;
    top: 64px;
    left: -10px;
    transition: all .3s linear;
    border-radius: 20px;
    z-index: 9;
  }
  #nav>.search>input{
    height: 38px;
    box-sizing: border-box;
    border-radius: 20px;
    border: none;
    outline: none;
    padding-left: 50px;
    font-size: 16px;
    background: rgba(233, 232, 232, 0.575);
  }
  #nav>.search>img{
    width: 28.39px;
    position: absolute;
    left: 20px;
    top: 5px;
  }
  .van-overlay{
    z-index: 9 !important;
  }
  /**左边列表 */
  /* #leftList{
    z-index: 10;
    height: 92%;
    position: absolute;
    top:8%;
    left: -414px;
    background: rgba(0, 0, 0, 0.274);
    transition: all .2s linear;
    position: fixed;
  }
  #leftList>.left{
    width: 50%;
    background: #fff;
  }
  #leftList>.left>.list{
    height: 100%;
  }
  #leftList>.left>.list>li{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(165, 164, 164, 0.486);
  }
  #leftList>.left>.list>li:hover{
    background: rgba(165, 164, 164, 0.486);
  } */
  /** 公共样式*/
  .h-100{
    height: 100%;
  }
  .w-100{
    width: 100%;
  }
</style>
