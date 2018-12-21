<template>
  <div class="hello" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
    <div class="banner-warrper" @touchstart.stop="sliderTouch">
      <cube-slide :data="items" :threshold="0.3"></cube-slide>
    </div>
    <div style="height: 1000px;background: skyblue;">
      <h1>{{msg}}</h1>
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
  mounted() {},
  methods: {
    async login() {
      const data = await this.getjwt();
      console.info('home',data.token)
      this.setLocalStorage("myKey", data.token, 'jwtDate');
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
