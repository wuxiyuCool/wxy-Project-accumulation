<template>
  <d2-container :filename="filename" >
    <template slot="header">会议事项</template>
    metting
    <template slot="footer">Footer</template>
  </d2-container>
</template>

<script>
import menu from '@/menu/modules/demo-business'
export default {
  data () {
    return {
      filename: __filename,
    }
  }
}
</script>
