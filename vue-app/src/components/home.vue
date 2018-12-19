<template>
  <div class="hello" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
    <div class="banner-warrper"  @touchstart.stop="" > 
       <cube-slide  :data="items" :threshold="0.3"></cube-slide>
    </div>
      <div style="height: 1000px;background: skyblue;">
        <h1>{{msg}}</h1>
      <cube-button @click="showDefault">操作列表</cube-button>
      </div>
  </div>
</template>

<script>
import { routerTransitionMode } from "@/static/js/mixing";
import Scroll from '@/base/scroll'
export default {
  name: "home",
  mixins: [routerTransitionMode],
  data() {
    return {
      msg: "Welcome to Your Vue.js App this is Page home",
      toastTxt: "cube toast content",
       items: [
        {
          url: 'http://www.didichuxing.com/',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
        },
        {
          url: 'http://www.didichuxing.com/',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
        },
        {
          url: 'http://www.didichuxing.com/',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
        }
      ],
      startClientX: 0,
      EndClientX: 0,
      isMoving: false
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
     touchEnd(e) {
       if (!this.isMoving) {
         return
       }
      if (this.EndClientX - this.startClientX > 150) {
        this.openPage('/index/home')
      } else if (this.EndClientX - this.startClientX < -150){
       this.openPage('/index/like')
      } else {
        console.log('无操作')
      }
      this.isMoving = true
    },
    touchMove(e) {
      this.isMoving = true
       this.EndClientX = e.touches[0].clientX
      // console.info(e.touches[0],'Move')

    },
    touchStart(e) {
      this.startClientX = e.touches[0].clientX
      // console.info(e.touches[0],'start')
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
    },
    async getData() {
      const url = this.LocationUrl + '/'
      const data = (await this.axios.get(url)).data
      console.log(data)
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
.banner-warrper{
  height: 80px;
  width: 100%;
}
</style>
