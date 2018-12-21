import {
  mapMutations
} from 'vuex'
import localStorage from 'localStorage'
import qs from "qs";
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
    // exp 为过期时间1000位1秒 1000*60 为1分钟 1000*60*60 1小时
    getLocalStorage(key, exp) {
      const date = Number(localStorage.getItem('Date'))
      console.log(new Date().getTime() - date)
      if (new Date().getTime() - date < exp) {
        return localStorage.getItem(key)
      } else {
        localStorage.removeItem(key)
        return false
      }
    },
    setLocalStorage(key, value, date) {
      localStorage.setItem(key, value)
      localStorage.setItem('Date', date)
    },
    ...mapMutations({
      Set_mode: "SET_PLAY_MODE",
      Set_label: 'SET_LABEL_DEFAULT'
    }),
  }
}
export const jwt = {
  methods: {
    async verifyJwt (auth) {
      const url = this.LocationUrl + "/token?user=wxy";
    let parmas = {
      userName: "222"
    };
    const data = (await this.axios.get(url)).data;
    console.log(data);
    return data
    },
    async getjwt () {
      const url = this.LocationUrl + "/token";
      let postData = qs.stringify({
        name: "wxy"
      });
      const data = (await this.axios.post(url, postData)).data;
      this.axios.defaults.headers.common['Authorization'] = data.token
      console.log(data);
      return data
    }
  }
}
