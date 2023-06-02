<template>
  <div id="app">
    <el-button>123</el-button>
  </div>
</template>

<script>
// 导入
import { registerAPI } from '@/api/channel'
export default {
  name: 'APP',
  // 异步操作
  async created () {
    const res = await registerAPI()
    console.log(res)
  }
}
</script>

<style lang="less" scoped></style>
