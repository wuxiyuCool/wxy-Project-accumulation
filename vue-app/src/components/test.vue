<template>
  <scroll :title="'test'">
    <button @click="openPage()"></button>
    <div class="hello" style="height: 1500px; background: #eee;">
      <h2>i am test</h2>
      <ul>
        <li>
          <a href="https://vuejs.org" target="_blank">Core Docs</a>
        </li>
        <li>
          <a href="https://forum.vuejs.org" target="_blank">Forum</a>
        </li>
        <li>
          <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
        </li>
        <li>
          <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
        </li>
        <br>
        <li>
          <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
        </li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li>
          <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
        </li>
        <li>
          <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
        </li>
        <li>
          <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
        </li>
        <li>
          <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
        </li>
      </ul>
    </div>
  </scroll>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import scroll from "@/base/pageChild";
export default {
  name: "test1",
  data() {
    return {
      msg: "test1",
      toastTxt: "cube toast content"
    };
  },
  mounted () {
    let qurey = this.$route.query;
    let params = this.$route.params;
    console.info('这是router--query参数',qurey)
    console.info('这是router--parmas参数',params)
  },
  components: {
    scroll
  },
  methods: {
    showToast() {
      this.$createToast({
        txt: this.toastTxt
      }).show();
    },
    openPage() {
      this.Set_mode(true)
      this.$router.push({
        path: '/home'
      })
    },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  background: #42b983;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
