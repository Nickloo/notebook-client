<template>
  <div class="article-box">
    <div v-html="content" style="white-space:pre-wrap">

    </div>
    <el-button size="mini" class="pre button-ab" @click="previous" :disabled="this.index>0?false:true">上一页</el-button>
    <el-button size="mini" class="catalog button-ab" @click="backCatalog">返回目录</el-button>
    <el-button size="mini" class="next button-ab" @click="next" :disabled="this.index<this.list.length-1?false:true">下一页</el-button>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      index:null,
    };
  },
  computed: {
    ...mapState({
      list: state => state.articleList
    }),
    content(){
      return this.list[this.index].content
    }
  },
  created() {
    this.index = parseInt(this.$route.params.index)
    // this.content = this.list[this.index].content
  },
  mounted() {
    // console.log(this.$route)
    // this.initData();
  },
  methods: {
    async initData() {
      this.$store.dispatch('getArticleList')
    },
    previous(){
      if(this.index>0) this.index--
      document.querySelector('.article-box').scrollTo(0,0)
    },
    next(){
      if(this.index<this.list.length-1) this.index++
      document.querySelector('.article-box').scrollTo(0,0)
    },
    backCatalog(){
      this.$router.push('/client/catalog')
    }
  }
};
</script>
<style lang="less" scoped>
.article-box {
  position: relative;
  background: #fefef2;
  height: 100%;
  padding: 10px;
  font-size: 16px;
  line-height: 30px;
  overflow: auto;
  .button-ab{
    position: fixed;
    bottom: 10px;
    z-index: 100;
  }
  .button-ab.pre{
    left: 10px;
  }
  .button-ab.next{
    right: 10px;
  }
  .button-ab.catalog{
    left: 50%;
    margin-left: -40px
  }
}
</style>
