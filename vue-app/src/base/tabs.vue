<template>
  <div class="tabs">
    <cube-tab-bar
      v-model="selectedLabelDefault"
      :data="tabs"
      showSlider
      useTransition
      @click="clickHandler"
      @change="changeHandler"
      style="height: 7vh;"
    ></cube-tab-bar>
  </div>
</template>
<script>
export default {
  name: "tabs",
  data() {
    return {
      selectedLabelDefault: "home",
      tabs: [
        {
          label: "home",
          icon: "cubeic-home"
        },
        {
          label: "like",
          icon: "cubeic-like"
        },
        {
          label: "vip",
          icon: "cubeic-vip"
        },
        {
          label: "me",
          icon: "cubeic-person"
        }
      ]
    };
  },
  watch: {
    routerPath(val, old) {
      this.selectedLabelDefault = val
    }
  },
  computed: {
    routerPath() {
      const path = this.$route.path.split("/")[2];
      return path;
    }
  },
  mounted() {
    // tabs组件绑定路由地址
    this.selectedLabelDefault = this.routerPath;
  },
  methods: {
    clickHandler(label) {
      // if you clicked home tab, then print 'Home'
      console.log(label);
      this.$router.push({
        path: `/index/${label}`
      });
    },
    changeHandler(label) {
      // if you clicked different tab, this methods can be emitted
    }
  }
};
</script>

<style lang="stylus" scoped>
</style>

