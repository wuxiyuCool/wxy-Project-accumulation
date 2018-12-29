<template>
  <transition>
    <div class="lock-container pull-height">
      <div class="lock-form animated bounceInDown">
        <div class="animated">
          <h3 class="text-white">{{userName.name}}</h3>
          <el-input placeholder="请输入登录密码" type="password" class="input-with-select" v-model="value">
            <el-button slot="append" @click="unlock">
              <d2-icon-svg style="width:25px;height: 25px;" name="unLock"/>
            </el-button>

            <el-button slot="append" @click="backLogin">
              <d2-icon-svg style="width:25px;height: 25px;" name="login"/>
            </el-button>
          </el-input>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "lock",
  data() {
    return {
      value: ""
    };
  },
  mounted() {
    this.set(true);
  },
  computed: {
    ...mapState("d2admin", {
      lockPassword: state => state.lock.lockPassword,
      userName: state => state.user.info
    })
  },
  methods: {
    // 解锁
    unlock() {
      if (this.lockPassword == this.value) {
        this.set(false);
        this.$router.push({
          name: "index"
        });
      } else {
        this.$message.error("错了哦，密码输入错误");
      }
    },
    // 不解锁跳转回登录
    backLogin() {
         this.$confirm('确定要退出吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.set(false);
             this.logout({
              vm: this,
              confirm: false
            })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
    },
    ...mapMutations("d2admin/lock", ["set"]),
    ...mapActions('d2admin/account', [
      'logout'
    ]),
  }
};
</script>

<style lang="scss">
.lock-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  position: relative;
  height: 100%;
}
.lock-container::before {
  z-index: -999;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("./img/bg.jpg");
  background-size: cover;
}
.lock-form {
  width: 300px;
}
</style>
