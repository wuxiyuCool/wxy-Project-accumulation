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
  // 获取登录用户的信息
   computed: {
    ...mapState('d2admin/user', [
      'info'
    ])
  },
  methods: {
  // 定义是否显示该入口菜单
    showmenu (menu) {
	// 判断菜单定义时是否有meta属性
      if (menu.meta) {
	  // 判断用户权限和菜单定义的权限是否相同不同这不显示
        return this.info.root == menu.meta.root
      } else {
	  // 没有meta属性时为通用的菜单直接显示
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
