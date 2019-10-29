<template>
  <div class="catalog-box">
    <h1 class="title">目录</h1>
    <div class="list">
      <ul>
        <li v-for="(item, index) in list" :key="index" @click="showArticle(index)">{{item.title}}</li>
      </ul>
    </div>
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
      // this.article = this.list[index]
      this.$router.push('/client/article/'+index)
    }
  }
}
</script>
<style lang="less" scoped>
.catalog-box{
  background: #fefef2;
  height: 100%;
  overflow: auto;
}
.title{
  text-align: center
}
.list {
  padding: 0 20px;
  font-size: 18px;
  li {
    margin-top: 10px;
    font-weight: 600;
  }
}
</style>
