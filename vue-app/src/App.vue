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
export default {
  name: "app",
  data() {
    return {
      isxx: true
    };
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

