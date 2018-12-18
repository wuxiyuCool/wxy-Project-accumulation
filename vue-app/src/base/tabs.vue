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
      selectedLabelDefault: "Home",
      tabs: [
        {
          label: "Home",
          icon: "cubeic-home"
        },
        {
          label: "Like",
          icon: "cubeic-like"
        },
        {
          label: "Vip",
          icon: "cubeic-vip"
        },
        {
          label: "Me",
          icon: "cubeic-person"
        }
      ]
    };
  },
  mounted() {
    // tabs组件绑定路由地址
    this.selectedLabelDefault = this.$route.path.split('/')[2]
  },
  methods: {
    clickHandler(label) {
      // if you clicked home tab, then print 'Home'
      console.log(label);
      this.$router.push({
          path: `/index/${label}`
      })
    },
    changeHandler(label) {
      // if you clicked different tab, this methods can be emitted
    }
  }
};
</script>

<style lang="stylus" scoped>
</style>

