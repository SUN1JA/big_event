<!-- 主页面 -->
<template>
  <el-container class="main">
    <!-- 导航栏 -->
    <el-header class="header_box">
      <el-menu :default-active="activeIndex2" class="el-menu-demo header" mode="horizontal" @select="handleSelect"
        background-color="#23272f" text-color="#fff" active-text-color="#ffd04b">
        <img src="@/assets/images/logo.png" alt="">
        <div class="nav">
          <el-submenu index="1" class="individual">
            <template slot="title">
              <div class="individual_box">
                <img class="avatar" :src="suer_pic" v-if="suer_pic">
                <img class="avatar" src="@/assets/images/img.png" v-else>
                个人中心
              </div>
            </template>
            <el-menu-item index="1-1"><i class="el-icon-s-operation"></i>基本资料</el-menu-item>
            <el-menu-item index="1-2"><i class="el-icon-camera"></i>更换头像</el-menu-item>
            <el-menu-item index="1-3"><i class="el-icon-key"></i>重置密码</el-menu-item>
          </el-submenu>
          <el-menu-item index="2" @click.native="quitFn"><i class="el-icon-switch-button"></i>退出</el-menu-item>
        </div>
      </el-menu>
    </el-header>
    <!-- 侧边栏 -->
    <el-container>
      <el-aside width="200px" class="aside">
        <el-row class="tac">
          <el-col>
            <!-- 用户信息 -->
            <h5 class="user">
              <img class="avatar" :src="suer_pic" v-if="suer_pic">
              <img class="avatar" src="@/assets/images/img.png" v-else>
              <span>欢迎 {{ nickname || username }}</span>
            </h5>
            <!-- 导航栏 -->
            <el-menu default-active="/home" class="el-menu-vertical-demo container" unique-opened @open="handleOpen"
              @close="handleClose" background-color="#23272f" text-color="#fff" active-text-color="#3a99ff " router>
              <!-- 首页 -->
              <template v-for="item in menus">
                <el-menu-item :index="item.indexPath" v-if="!item.children" :key="item.indexPath">
                  <i :class="item.icon"></i>
                  <span>{{ item.title }}</span>
                </el-menu-item>
                <el-submenu :index="item.indexPath" v-else :key="item.indexPath">
                  <template slot="title">
                    <i :class="item.icon"></i>
                    <span>{{ item.title }}</span>
                  </template>
                  <el-menu-item v-for="i in item.children" :key="i.indexPath" :index="i.indexPath">
                    <i :class="i.icon"></i>
                    <span slot="title">{{ i.title }}</span>
                  </el-menu-item>
                </el-submenu>
              </template>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-main>
          <router-link></router-link>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'
import { getMenusAPI } from '@/api/channel'
export default {
  name: 'main_layout',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      menus: []
    }
  },
  computed: {
    // vuex用户数据
    ...mapGetters(['nickname', 'username', 'suer_pic'])
  },
  created () {
    this.getMenusListFn()
  },
  methods: {
    // 退出
    quitFn () {
      this.$confirm('确认退出吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.commit('updateToken', '')
        this.$store.commit('updateUserInfo', {})
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
        this.$router.push('/login')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
      })
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    // 获取侧边栏
    async getMenusListFn () {
      const { data: res } = await getMenusAPI()
      this.menus = res.data
    }
  },

  beforeRouteEnter (to, from, next) {
    store.dispatch('initUserInfo')
    next()
  }
}
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
}

//快捷导航
.header_box {
  padding: 0;
  border: 0;

  .header {
    border: 0;
  }
}

.nav {
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

// 个人中心头像
.avatar {
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
}

// 侧边栏
.aside {
  height: 100%;
  background-color: #23272f;
}

// 侧边栏用户信息
.user {
  display: flex;
  align-items: center;
  padding: 0 30px;
  height: 70px;
  background-color: #23272f;
  border: 1px solid #000;
  border-width: 1px 0;

  span {
    margin-left: 10px;
    color: #fff;
  }
}

// 侧边导航
.container {
  height: 100%;
  border: 0;
}
</style>
