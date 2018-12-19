<template>
  <div class="Page">
    <Vheader :title="title"></Vheader>
    <div class="scrollContaint">
        <Scroll ref="scroll" :data="data" >
            <slot></slot>
        </Scroll>
    </div>
  </div>
</template>
<script>
import Vheader from '@/base/header'
import Scroll from '@/base/scroll'
export default {
  props: {
    data: {
      type: Array,
      default: null
    },
    title: {
        type: String,
        default: ''    
    }
  },
  components: {
    Vheader,
    Scroll
  }
};
</script>

<style lang="stylus" scoped>
.Page 
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .scrollContaint
    margin-top 7vh 
    height (100vh - 7vh)
    width 100%

</style>


