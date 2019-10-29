<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      params: [
        {
          group: "分组1",
          params: ["参数1", "参数2", "参数3", "参数4", "参数5"]
        },
        { group: "分组2", params: ["参数21", "参数22", "参数23", "参数24"] }
      ]
    };
  }
};
</script>

<style lang="less">
@import url(./assets/style/common.css);
@headerHeight: 60px;
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  .out-container {
    height: 100%;
  }
  .el-header {
    background-color: #313f58;
    color: #cbcfd4;
    height: @headerHeight;
    line-height: @headerHeight;
  }
  .main-container {
    height: calc(100% - @headerHeight);
  }
  .el-aside {
    .el-menu {
      padding: 20px 0;
      height: 100%;
    }
  }

  .el-main {
    display: flex;
    padding: 20px;
    .main-body {
      overflow: auto;
      flex: 1;
      background: #ffffff;
    }
  }
}
</style>
