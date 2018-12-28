<template>
  <el-menu-item :index="menu.path || uniqueId" v-if="showmenu(menu)">
    <i v-if="menu.icon" :class="`fa fa-${menu.icon}`"></i>
    <i v-if="menu.icon === undefined & !menu.iconSvg" class="fa fa-file-o"></i>
    <d2-icon-svg v-if="menu.iconSvg" :name="menu.iconSvg"/>
    <span slot="title">{{menu.title || '未命名菜单'}}</span>
  </el-menu-item>
</template>

<script>
import { uniqueId } from 'lodash'
import { mapState } from 'vuex'
export default {
  name: 'd2-layout-header-aside-menu-item',
  props: {
    menu: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
   computed: {
    ...mapState('d2admin/user', [
      'info'
    ])
  },
  methods: {
    showmenu (menu) {
      if (menu.meta) {
        return this.info.root == menu.meta.root
      } else {
        return true
      }
    }
  },
  data () {
    return {
      uniqueId: uniqueId('d2-menu-empty-')
    }
  }
}
</script>
