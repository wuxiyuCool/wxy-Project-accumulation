<template>
  <cube-scroll ref="scroll" :data="data">
    <slot></slot>
  </cube-scroll>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: null
    },
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="stylus" scoped>
</style>


