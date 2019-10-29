<template>
  <div class="home">
    <el-form label-width="100px" size="mini">
      <el-form-item label="用户名">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="原密码">
        <el-input v-model="passwordOld" type="password"></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input v-model="passwordNew" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submit">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      username:"",
      passwordOld:"",
      passwordNew:"",
    };
  },
  async mounted() {
    
  },
  methods: {
    async submit(){
      let res = await this.$axios.post('/editPassword',{username:"root",passwordOld:this.passwordOld,passwordNew:this.passwordNew})
      if(res.data==1){
        this.$message('修改成功')
      }else{
        this.$message('用户名密码错误')
      }
    }
  }
};
</script>
<style lang="less" scoped>

</style>

