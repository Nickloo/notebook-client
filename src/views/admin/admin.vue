<template>
  <div class="admin-wrapper">
    <el-container class="out-container">
      <el-header>数据录入系统</el-header>
      <el-container class="main-container">
        <el-aside :width="asideWidth">
          <el-menu router>
            <el-menu-item index="/admin/article">文章管理</el-menu-item>
            <el-menu-item index="/admin/password">密码管理</el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <el-card
            class="main-body"
            :body-style="{height:'100%'}"
          >
            <router-view></router-view>
          </el-card>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data(){
    return {
      asideWidth:"200px"
    }
  },
  mounted() {
    if(this.isMobile()){
      this.asideWidth = '100px'
    }
  },
  methods: {
    isMobile(){
      let rect = document.body.getBoundingClientRect()
      return rect.width - 3 < 1024
    }
  },
}
</script>
<style lang="less" scoped>
.admin-wrapper {
  height: 100%;
}
</style>
