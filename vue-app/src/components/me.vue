<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <cube-button @click="showDefault">操作列表</cube-button>
  </div>
</template>

<script>
import { routerTransitionMode } from '@/static/js/mixing'

export default {
  name: "me",
  mixins: [routerTransitionMode],
  data() {
    return {
      msg: "Welcome to Your Vue.js App this is page me ",
      toastTxt: "cube toast content"
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    showDefault() {
      this.$createActionSheet({
        title: "打开页面",
        data: [
          {
            content: "openPage1",
            align: "center"
          },
          {
            content: "openPage2",
            align: "center"
          },
          {
            content: "openPage3",
            align: "center"
          }
        ],
        onSelect: (item, index) => {
         switch (index) {
            case 0:
              this.openPage('/home')
              break;
            case 1:
              this.openPage('/iframe')
              break;
            case 2:
              this.openPage('/test2')
              console.log(3);
              break;
          }
        }
      }).show();
    },
    async getData() {
      const url = this.LocationUrl + '/hello'
      const data = (await this.axios.get(url)).data
      console.log(data)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
.hello{
  background: #42b983;
}
</style>
