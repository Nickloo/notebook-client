<template>
  <div class="main-box">
    <router-view></router-view>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      article:{},
      isCatalog:true
    };
  },
  computed: {
    ...mapState({
      list: state => state.articleList
    })
  },
  mounted() {
    this.initData();
  },
  methods: {
    async initData() {
      this.$store.dispatch('getArticleList')
    },
    showArticle(index){
      this.article = this.list[index]
      this.isCatalog = false
    }
  }
}
</script>
<style lang="less" scoped>
.main-box{
  background: #ffffff;
  height: 100%;
  overflow: hidden;
}
.title{
  text-align: center
}
.list {
  padding: 20px;
  font-size: 18px;
  li {
    margin-top: 10px;
  }
}
</style>
