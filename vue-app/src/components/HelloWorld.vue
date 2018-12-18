<template>
  <div class="hello">
    <div class="main">
        <router-view ></router-view>
    </div>
    <tabs></tabs>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import tabs from "@/base/tabs";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      toastTxt: "cube toast content"
    };
  },
  methods: {
    toPage() {
      this.Set_mode(true);
      this.$router.push({
        path: "/home"
      });
    },
    showToast() {
      this.$createToast({
        txt: this.toastTxt
      }).show();
    },
    ...mapMutations({
      Set_mode: "SET_PLAY_MODE"
    })
  },
  components: {
    tabs
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.hello {
  display: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  .main {
    height: 93vh;
    width: 100%;
  }
}
</style>

