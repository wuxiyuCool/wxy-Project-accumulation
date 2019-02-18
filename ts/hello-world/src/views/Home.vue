<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
	<p>{{ msg }}</p>
    <HelloWorld v-model:msg="msg" :count="count"  @reset="reset" />
	<button @click="count ++">11</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
	count = 0
	checked = false
	
	msg: string = "Welcome to Your Vue.js + TypeScript App" 
	reset(val: number) {
		console.log(val)
		this.count = 0
	}
	
    @Provide('bar')
	bar = {
		name: '123',
		age: '12'
	}
}
</script>
