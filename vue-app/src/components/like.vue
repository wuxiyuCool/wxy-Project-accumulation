<template>
  <div class="hello" @touchstart="touchStart" @touchmove="touchMove" @touchend.stop="touchEnd">
      <h1>
          {{msg}}
      </h1>
    <cube-button @click="showDefault">操作列表</cube-button>
  </div>
</template>

<script>
import { routerTransitionMode } from '@/static/js/mixing'
export default {
  name: "like",
  mixins: [routerTransitionMode],
  data() {
    return {
      msg: "Welcome to Your Vue.js App this is page like",
      toastTxt: "cube toast content",
      EndClientX: '',
      startClientX: '',
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
      if (this.EndClientX - this.startClientX > 100) {
        this.openPage('/index/home')
      } else if (this.EndClientX - this.startClientX < -100){
       this.openPage('/index/vip')
      } else {
        console.log('无操作')
      }
      this.isMoving =false
    },
    touchMove(e) {
      this.isMoving = true
      this.EndClientX = e.touches[0].clientX
      // console.info(e.touches[0].clientX,'Move')

    },
    touchStart(e) {
     this.startClientX = e.touches[0].clientX
      // console.info(e.touches[0].clientX,'start')
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
              this.openPage('/home')
              break;
            case 1:
              this.openPage('/iframe')
              break;
            case 2:
              this.openPage('/test2')
              console.log(3);
              break;
          }
        }
      }).show();
    },
    async getData() {
      const url = this.LocationUrl + '/about'
      const data = (await this.axios.get(url)).data
      console.log(data)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background: yellowgreen;
}
</style>
