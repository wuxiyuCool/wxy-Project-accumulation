<template>
  <scroll :title="'test2'">
      <h1>{{msg}}</h1>
    <ul>
        <li><button @click="openPage('/home', {userName:　'ｘｘｘ'})">Page1</button></li>
        <li><button @click="openNamePage('iframe',{userName: 'xxx'}, {userId: '1231'})">Page2</button></li>
        <li><button @click="openPage('/test2')">Page3</button></li>
    </ul>
  </scroll>
</template>

<script>
import scroll from "@/base/pageChild";
import { routerTransitionMode } from "@/static/js/mixing"
export default {
  name: "test2",
  mixins: [ routerTransitionMode ],
  data() {
    return {
      msg: "test2",
      toastTxt: "cube toast content"
    };
  },
  components: {
    scroll
  },
  methods: {
    showToast() {
      this.$createToast({
        txt: this.toastTxt
      }).show();
    }
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
