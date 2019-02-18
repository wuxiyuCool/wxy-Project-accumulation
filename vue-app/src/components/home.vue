<template>
  <div class="hello" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
    <div class="banner-warrper" @touchstart.stop="sliderTouch">
      <cube-slide :data="items" :threshold="0.3"></cube-slide>
    </div>
    <div style="height: 1000px;background: skyblue;">
      <h1>{{msg}}<br/>{{this.ptTime()}}</h1>
      <cube-button @click="showDefault">操作列表</cube-button>
      <cube-button @click="login">登录获取jwt</cube-button>
    </div>
  </div>
</template>

<script>
import { routerTransitionMode, jwt } from "@/static/js/mixing";
import localStorage from "localStorage";

import Scroll from "@/base/scroll";
export default {
  name: "home",
  mixins: [routerTransitionMode, jwt],
  data() {
    return {
      msg: "Welcome to Your Vue.js App this is Page home",
      toastTxt: "cube toast content",
      // 物品列表
      goodsList: [
        {
          actEndTime: "2019-2-24 10:00:43"
        }
      ],
      // 倒计时列表
      countDownList: [
        {
          day: "00",
          hou: "00",
          min: "00",
          sec: "00"
        }
      ],
      // 终止时间列表
      endTimeList: [],
      actEndTimeList: "",
      items: [
        {
          url: "http://www.didichuxing.com/",
          image:
            "//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png"
        },
        {
          url: "http://www.didichuxing.com/",
          image:
            "//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png"
        },
        {
          url: "http://www.didichuxing.com/",
          image:
            "//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png"
        }
      ],
      startClient: 0,
      EndClient: 0,
      isMoving: false,
      isTouchSlider: false
    };
  },
  mounted() {
    // 列表中每件抢购物品的终止时间放进终止时间列表中
    this.goodsList.forEach(o => {
      this.endTimeList.push(o.actEndTime);
    });
    // this.actEndTimeList = this.endTimeList;
    this.countDown();
  },
  methods: {
    // 倒计时函数
    timeFormat(param) {
      //小于10的格式化函数
      return param < 10 ? "0" + param : param;
    },
    countDown() {
      //倒计时函数
      // 获取当前时间，同时得到活动结束时间数组
      let newTime = new Date().getTime();
      let endTimeList = this.endTimeList;
      let countDownArr = [];

      // 对结束时间进行处理渲染到页面
      endTimeList.forEach(o => {
        let endTime = new Date(o).getTime();
        let obj = null;
        // 如果活动未结束，对时间进行处理
        if (endTime - newTime > 0) {
          let time = (endTime - newTime) / 1000;
          // 获取天、时、分、秒
          let day = parseInt(time / (60 * 60 * 24));
          let hou = parseInt((time % (60 * 60 * 24)) / 3600);
          let min = parseInt(((time % (60 * 60 * 24)) % 3600) / 60);
          let sec = parseInt(((time % (60 * 60 * 24)) % 3600) % 60);
          obj = {
            day: day,
            hou: this.timeFormat(hou),
            min: this.timeFormat(min),
            sec: this.timeFormat(sec)
          };
        } else {
          //活动已结束，全部设置为'00'
          obj = {
            day: "00",
            hou: "00",
            min: "00",
            sec: "00"
          };
        }
        countDownArr.push(obj);
      });
      // // 渲染，然后每隔一秒执行一次倒计时函数
      // this.setData({
      //     countDownList: countDownArr
      // })
      // console.log(this.countDownList);
      // 处理过的时间放进倒计时列表中
      this.countDownList = countDownArr;
      setTimeout(this.countDown, 1000);
    },
    // 倒计时格式化
    ptTime() {
      let time = this.countDownList[0];
      return `${time.day}天${time.hou}:${time.min}:${time.sec}`;
    },
    // End
    async login() {
      const data = await this.getjwt();
      console.info("home", data.token);
      this.setLocalStorage("myKey", data.token, "jwtDate");
    },
    touchEnd(e) {
      if (!this.isMoving) {
        return;
      }
      if (this.EndClient.clientX - this.startClient.clientX > 150) {
        this.$emit("openNav", "true");
      } else if (this.EndClient.clientX - this.startClient.clientX < -150) {
        this.openPage("/index/like");
      } else {
        console.log("无操作");
      }
      this.isMoving = false;
    },
    touchMove(e) {
      // this.isMoving = true
      this.EndClient = e.touches[0];

      // console.info(e.touches[0],'Move')
    },
    touchStart(e) {
      this.isMoving = true;
      this.startClient = e.touches[0];
      // console.info(e.touches[0],'start')
    },
    sliderTouch() {
      this.isMoving = false;
    },
    showDefault() {
      this.$createActionSheet({
        title: "打开页面",
        data: [
          {
            content: "openPage1",
            align: "center"
          },
          {
            content: "openPage2",
            align: "center"
          },
          {
            content: "openPage3",
            align: "center"
          }
        ],
        onSelect: (item, index) => {
          switch (index) {
            case 0:
              this.openPage("/home");
              break;
            case 1:
              this.openPage("/iframe");
              break;
            case 2:
              this.openPage("/test2");
              console.log(3);
              break;
          }
        }
      }).show();
    }
  },
  components: {
    Scroll
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background: #ccc;
  height: 93vh;
  overflow-y: auto;
}
.banner-warrper {
  height: 80px;
  width: 100%;
}
</style>
