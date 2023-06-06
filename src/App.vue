<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// 导入
export default {
  name: 'APP'
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

input {
  outline: none;
}

button {
  border: 0px;
}

#app {
  width: 100%;
  height: 100%;
}
</style>
