<template>
  <div class="login-wrapper">
    <el-form class="form-box">
      <el-form-item label="用户名">
        <el-col :span="24"><el-input v-model="username"></el-input></el-col>
      </el-form-item>
      <el-form-item label="密码">
        <el-col :span="24"><el-input v-model="password" type="password"></el-input></el-col>
      </el-form-item>
      <el-button type="primary" @click="login">登陆</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  data(){
    return {
      username:"",
      password:""
    }
  },
  methods: {
    async login(){
      localStorage.username = this.username
      localStorage.password = this.password
      let res = await this.$store.dispatch('login',{username:this.username,password:this.password})
      if(res==1){
        this.$router.push('/admin/article')
      }else{
        this.$message("用户名密码错误")
      }
    }
  },
}
</script>
<style lang="less" scoped>
.login-wrapper{
  height: 100%;
  // background: #2d3a4b;
}
.form-box{
  width:520px;
  // position: absolute;
  margin: 120px auto;
}
</style>

