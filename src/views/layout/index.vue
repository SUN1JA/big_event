<!-- 主页面 -->
<template>
  <el-container class="main">
    <!-- header -->
    <el-header class="header_box">
      <el-menu :default-active="activeIndex2" class="el-menu-demo header" mode="horizontal" @select="handleSelect"
        background-color="#23272f" text-color="#fff" active-text-color="#ffd04b">
        <img src="@/assets/images/logo.png" alt="">
        <div class="direction">
          <el-submenu index="1" class="individual">
            <template slot="title">
              <div class="individual_box">
                <span class="avatar"></span>
                个人中心
              </div>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="2"><i class="el-icon-switch-button"></i>退出</el-menu-item>
        </div>
      </el-menu>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-row class="tac">
          <el-col>
            <h5>自定义颜色</h5>
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
              background-color="#23272f" text-color="#fff" active-text-color="#5d84c4 ">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'main_layout',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
}

.header_box {
  padding: 0;
}

.direction {
  float: right;
  display: flex;
  justify-content: right;

  .individual {
    display: flex;
    width: 150px;
  }

  .individual_box {
    width: 120px;
  }
}

.avatar {
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
}
</style>
