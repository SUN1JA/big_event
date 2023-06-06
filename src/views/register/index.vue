<!-- 注册 -->
<template>
  <div class="box">
    <div class="register" validate="verify">
      <div class="image"><img src="@/assets/images/login_title.png" alt=""></div>
      <el-form ref="form" :model="form" :rules="rulesObj">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input type="password" v-model="form.repassword" placeholder="请在此确认密码"></el-input>
        </el-form-item>
        <el-button type="primary" @click="onSubmit" class="btn">立即创建</el-button>
        <el-link @click="$router.push('/login')" type="info" :underline="false" class="gotoLogin">去登陆</el-link>
      </el-form>
    </div>
  </div>
</template>

<script>
import { registerAPI } from '@/api/channel'
export default {
  name: 'my-register',
  data () {
    const samePwd = (rule, value, callback) => {
      if (value !== this.form.password) {
        callback(new Error('两次输入的密码不一致！'))
      } else {
        callback()
      }
    }
    return {
      form: { // 表单数据
        username: '',
        password: '',
        repassword: ''
      },
      rulesObj: { // 表单规则
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { pattern: /^[A-Za-z0-9]{1,10}$/, message: '用户名必须是1-10的大小写字母数字', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { pattern: /^\S{6,15}$/, message: '密码必须是6-15的非空字符', trigger: 'blur' }
        ],
        repassword: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { parent: /^\S{6,15}$/, message: '密码必须是6-15的非空字符', trigger: 'blur' },
          { validator: samePwd, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate(async valid => {
        if (valid) {
          console.log(this.form)
          // 发送请求
          // 接口会返回一个promise对象
          const { data: res } = await registerAPI(this.form)
          console.log(res)
          // elementUI给vue添加了message属性（弹窗）
          if (res.code !== 0) {
            // 错误弹窗
            return this.$message.error(res.message)
          }
          // 3.成功弹窗
          this.$message.success(res.message)
          // 跳转到登陆页面
          this.$router.push('/login')
        } else {
          return false
        }
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

.register {
  position: relative;
  top: 50%;
  margin: 0 auto;
  padding: 5px 30px;
  width: 400px;
  height: 335px;
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
