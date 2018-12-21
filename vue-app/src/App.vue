<template>
  <div id="app">
    <transition
      :enter-active-class="changeClass.enter"
      :leave-active-class="changeClass.leave"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { routerTransitionMode } from '@/static/js/mixing'
import axios from 'axios'
export default {
  name: "app",
  mixins: [ routerTransitionMode ],
  data() {
    return {
      isxx: true
    };
  },
  mounted(){
    const mykey = this.getLocalStorage('myKey', 1000*60*60)
    console.info('APP mykey',mykey)
    if (mykey) {
      axios.defaults.headers.common['Authorization'] = mykey
    }
  },
  computed: {
    changeClass() {
      //跳转下一页动画
      if (this.$store.state.mode) {
        return {
          enter: "animated slideInRight",
          leave: "animated slideOutLeft"
        };
      } else {
      // 回到上一页动画
        return {
          enter: "animated slideInLeft",
          leave: "animated slideOutRight"
        };
      }
    }
  },
  methods: {}
};
</script>

