<template>
  <div class="hello" style="background: skyblue">
      <h1>
          {{msg}}
      </h1>
    <cube-button @click="showDefault">操作列表</cube-button>
  </div>
</template>

<script>
import { routerTransitionMode } from '@/static/js/mixing'

export default {
  name: "vip",
  mixins: [routerTransitionMode],
  data() {
    return {
      msg: "Welcome to Your Vue.js App this is page vip",
      toastTxt: "cube toast content"
    };
  },
  methods: {
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
