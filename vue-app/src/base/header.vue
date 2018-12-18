<template>
  <header class="header">
    <div>
      <i @click="back()" class="cubeic-back icon"></i>
    </div>
    <div class="header-title">{{this.title}}</div>
    <div>
      <i class="cubeic-more icon"></i>
    </div>
  </header>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  methods: {
    back() {
      this.Set_mode(false);
      this.$router.back();
    },
    ...mapMutations({
      Set_mode: "SET_PLAY_MODE"
    })
  }
};
</script>
<style lang="stylus" scoped>
.header 
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: skyblue;
  padding: 1vh;
  box-sizing: border-box;
  position fixed
  width 100%;
  .icon
    font-size 24px
  .header-title
    font-size 18px


</style>


