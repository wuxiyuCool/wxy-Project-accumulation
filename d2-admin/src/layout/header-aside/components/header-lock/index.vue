<template>
  <el-tooltip effect="dark" :content="'锁屏'" placement="bottom">
    <el-button class="d2-mr btn-text can-hover" type="text" @click="openLock">
      <d2-icon name="arrows-alt" style="font-size: 16px"/>
    </el-button>
  </el-tooltip>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations("d2admin/lock", ["setPassword", "set"]),
    openLock() {
      this.$prompt("请输入锁屏密码", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          this.setPassword(value)
          this.$router.push({
              name: 'home-index'
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    }
  }
};
</script>
