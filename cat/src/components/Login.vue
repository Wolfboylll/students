<template>

  <div class="login">
    <el-card class="box-card">
      <div class="clearfix">
          <span class="tou">Login</span>
        </div>
        <div  class="text item">
          <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="username">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="password">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>

</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: '',
        passsword: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style>
.login{
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #def2de;
}
.login .box-card{
  width: 520px;
  margin: 280px auto;
}
.login .box-card .el-button {
  width: 100%;
  background-color: #97cc85;
  border-color: #97cc85;
}
.tou{
  line-height: 50px;
}
</style>
