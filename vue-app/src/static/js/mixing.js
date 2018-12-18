import {
  mapMutations
} from 'vuex'

export const routerTransitionMode = {

  methods: {
    openPage(url, data) {
      this.Set_mode(true);
      this.$router.push({
        path: url,
        query: data
      })
    },
    openNamePage(...data) {
      let [url, params, query] = data
      this.Set_mode(true);
      this.$router.push({
        name: url,
        params,
        query
      })
    },
    backPage() {
      this.Set_mode(false);
      this.$router.back()
    },
    ...mapMutations({
      Set_mode: "SET_PLAY_MODE",
      Set_label: 'SET_LABEL_DEFAULT'
    })
  }
}
