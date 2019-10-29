<template>
  <div class="home">
    <el-form size="small" v-if="isEdit">
      <el-form-item label="标题">
        <el-col :span="6">
          <el-input v-model="title"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <quill-editor
          class="edit-box"
          v-model="content"
          ref="myQuillEditor"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @change="onEditorChange($event)"
          style="white-space:pre"
        >
        </quill-editor>
      </el-form-item>
      <el-form-item>
        <el-button class="c" type="primary"  @click="save">保存</el-button>
        <el-button type="danger" @click="remove()" v-if="articleId">删除</el-button>
        <el-button class="c" type="warning" @click="cancle" >取消</el-button>
      </el-form-item>
    </el-form>
    <el-button size="mini" v-if="!isEdit" @click="add">添加</el-button>
    <el-table :data="list" v-if="!isEdit">
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="edit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="remove(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  name: "home",
  components: {
    "quill-editor":quillEditor
  },
  data() {
    return {
      title: "",
      content: "",
      isEdit: false,
      articleId: null,
      articleTitle: null,
      articleContent: null,
      list: [],
      editorOption: {
        // modules: {
        //   // toolbar: [
        //   //   ["bold", "italic", "underline", "strike"], // toggled buttons
        //   //   ["blockquote", "code-block"]
        //   // ]
        // }
      }
    };
  },
  async mounted() {
    this.initData();
  },
  methods: {
    onEditorBlur() {},
    onEditorFocus() {},
    onEditorChange() {},
    async initData() {
      let data = await this.$axios.get("/articles");
      this.list = data.data;
    },
    cancle() {
      this.articleId = null;
      this.isEdit = false;
      this.title = '';
      this.content = '';
      this.initData();
    },
    add() {
      this.isEdit = true;
    },
    edit(row) {
      this.articleId = row.id;
      this.title = row.title;
      this.content = row.content;
      this.isEdit = true;
    },
    async save() {
      if (!this.articleId) {
        await this.$axios.post("/articles", {
          title: this.title,
          content: this.content
        });
      } else {
        await this.$axios.put("/articles/" + this.articleId, {
          title: this.title,
          content: this.content
        });
      }
      this.cancle();
    },
    async remove(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          await this.$axios.delete("/articles/" + id || this.articleId);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.cancle();
          this.initData();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>
<style lang="less" scoped>
.edit-box {
  /* height: auto; */
  /* min-height: 500px; */
  // .ql-container {
  //   min-height: 500px;
  // }
}
// .ql-container {
//   min-height: 500px;
// }
.quill-editor {
  min-height: 400px;

  .ql-container {
    min-height: 300px;
  }
}
</style>

