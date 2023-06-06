<!-- 登录 -->
<template>
  <div class="box">
    <div class="login" validate="verify">
      <div class="image"><img src="@/assets/images/login_title.png" alt=""></div>
      <el-form ref="form" :model="form" :rules="rulesObj">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-button type="primary" @click="onSubmit" class="btn">登录</el-button>
        <el-link @click="$router.push('/reg')" type="info" :underline="false" class="gotoLogin">去注册</el-link>
      </el-form>
    </div>
  </div>
</template>

<script>
import { loginAPI } from '@/api/channel'
import { mapMutations } from 'vuex'
export default {
  name: 'my-login',
  data () {
    return {
      form: { // 表单数据
        username: '',
        password: ''
      },
      rulesObj: { // 表单规则
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { pattern: /^[A-Za-z0-9]{1,10}$/, message: '用户名必须是1-10的大小写字母数字', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { pattern: /^\S{6,15}$/, message: '密码必须是6-15的非空字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapMutations(['updateToken']),
    onSubmit () {
      // 表单校验 valid:true/false=>验证成功，验证失败
      this.$refs.form.validate(async valid => {
        console.log(valid)
        if (valid) {
          const { data: res } = await loginAPI(this.form)
          if (res.code !== 0) return this.$message.error(res.message)
          this.$message.success(res.message)
          this.updateToken(res.token)
          this.$router.push('/layout')
        }
        return false
      })
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  background-image: url(@/assets/images/login_bg.jpg);
}

.login {
  position: relative;
  top: 50%;
  margin: 0 auto;
  padding: 5px 30px;
  width: 400px;
  height: 280px;
  background-color: #fff;
  transform: translateY(-50%);
}

.image {
  margin: 10px 0;
  text-align: center;
}

form {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 70%;
}

.btn {
  width: 100%;
}

.gotoLogin {
  justify-content: left;
  margin-top: 10px;
}
</style>
