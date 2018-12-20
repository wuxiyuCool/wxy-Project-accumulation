<template>
  <div class="hello">
    <div class="main">
      <router-view @openNav="openNav"></router-view>
    </div>
    <tabs></tabs>
    <transition enter-active-class="animated myfirstin" leave-active-class="animated myfirstout">
      <div
        v-show="isShowNav"
        class="slide-nav"
        @click="isShowNav = false"
      >
        <div class="nav"></div>
      </div>
    </transition>
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
      toastTxt: "cube toast content",
      isShowNav: false
    };
  },
  methods: {
    openNav(val) {
      this.isShowNav = val;
    },
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
@keyframes myfirstin {
  0% {
    background: rgba(0, 0, 0, 0);
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  25% {
    background: rgba(0, 0, 0, 0);
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  50% {
    background: rgba(0, 0, 0, 0);
    -webkit-transform: translate3d(-25%, 0, 0);
    transform: translate3d(-25%, 0, 0);
  }

  75% {
    background: rgba(0, 0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  85% {
    background: rgba(0, 0, 0, 0.1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    box-shadow: 0px 0px 0 0 ;
  }

  100% {
    background: rgba(0, 0, 0, 0.3);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    box-shadow: 0px 0px 15vw -5px inset;
  }
}

@keyframes myfirstout {
  0% {
    background: rgba(0, 0, 0, 0.3);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    box-shadow: 0px 0px 15vw -5px inset;
  }

  25% {
    background: rgba(0, 0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    box-shadow: 0px 0px 0 0;
  }

  50% {
    background: rgba(0, 0, 0, 0);
    -webkit-transform: translate3d(-25%, 0, 0);
    transform: translate3d(-25%, 0, 0);
  }

  75% {
    background: rgba(0, 0, 0, 0);
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }

  100% {
    background: rgba(0, 0, 0, 0);
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

.myfirstin {
  -webkit-animation-name: myfirstin;
  animation-name: myfirstin;
}

.myfirstout {
  -webkit-animation-name: myfirstout;
  animation-name: myfirstout;
}

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

  .slide-nav {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 11;
    background: rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 15vw -5px inset;
    transition: all 1s ease;

    .nav {
      height: 100%;
      width: 70%;
      background: #fff;
    }
  }
}
</style>

