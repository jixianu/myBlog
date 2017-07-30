<template>
  <div class="login-wrap">
    <div class="ms-title">后台管理系统</div>
    <div class="ms-login">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
        <!-- <p style="font-size:12px;line-height:30px;color:#999;">第三方登录: 还没有做</p> -->
        <p v-show="isLoginErr">{{errMessage}}</p>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import loginApi from '../api/login'
import md5 from 'md5'

export default {
  data: function(){
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      isLoginErr: false,
      errMessage: ''
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
            // 调用创建token
            this.createToken({
              name: this.ruleForm.username, 
              password: md5(this.ruleForm.password).toUpperCase()
            }).then(res => {
              if (res.success) {
                const query = this.$route.query.redirect;
                this.login(res.data)
                if ( query ) {
                  this.$router.push(`${query}`)   // 返回上一页
                } else {
                  this.$router.go(-1) // 返回上一页
                }
              } else {
                this.isLoginErr = true
                this.errMessage = res.err.message
              }
            })
        } else {
          console.log('error submit!!')
          return false;
        }
      });
    },
    ...mapActions('user',[
      'createToken',
      'login'
    ])
  }
}
</script>

<style scoped>
.login-wrap{
  position: relative;
  width:100%;
  height:100%;
}
.ms-title{
  position: absolute;
  top:50%;
  width:100%;
  margin-top: -230px;
  text-align: center;
  font-size:30px;
  color: #18bc9c;
}
.ms-login{
  position: absolute;
  left:50%;
  top:50%;
  width:300px;
  height:160px;
  margin:-150px 0 0 -190px;
  padding:40px;
  border-radius: 5px;
  background: #fff;
}
.login-btn{
  text-align: center;
}
.login-btn button{
  width:100%;
  height:36px;
}
</style>