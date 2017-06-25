<template>
  <div>
    <el-form ref="ruleForm" :rules="rules" :model="handlePost" label-width="100px"  class="post_info">
      <el-form-item label="文章标题" prop="title">
          <el-input v-model="handlePost.title"   placeholder="请选择文章标题"></el-input>
      </el-form-item>
      <el-form-item label="文章描述" prop="description">
          <el-input v-model="handlePost.description"   placeholder="请选择文章描述"></el-input>
      </el-form-item>
      <el-form-item label="选择分类" prop="category">
        <el-select v-model="handlePost.category" placeholder="请选择文章分类">
          <el-option 
          v-for="(category,index) in categories" 
          :label="category.text" 
          :value="category.text"
          :key="index">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选择标签">
          <el-select
              v-model="handlePost.tag"
              multiple
              filterable
              allow-create
              :multiple-limit="3"
              placeholder="请选择文章标签">
                  <el-option
                  v-for="(item,index) in suggestions"
                  :label="item.text"
                  :value="item.text"
                   :key="index">
                  </el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="选择时间">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="立即发布">
          <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {getDate} from '../utils/date.js'
export default {
  name: 'postInfo',
  props: ['post'],
  data() {
    return {
      postData: this.post,
      form: {
        title: '',
        date: getDate(),
        content: '',
        body: '',
        description:'',
        category: '',
        tag: [],
        delivery: false,
        author: 'xiaomeng'
      },
      rules: {
          title: [
               { required: true, message: '请输入文章标题', trigger: 'blur' }
          ],
          description: [
              { required: true, message: '请输入文章描述', trigger: 'blur' }
          ],
          category: [
              { required: true, message: '请选择分类', trigger: 'change' }
          ]
      },
      state: '',
      suggestions: [],
      categories: []
    }
  },
  computed: {
    handlePost() {
      return typeof  this.postData == 'undefined' ? this.form : this.postData;
    }
  },
  methods: {
      querySearch(queryString, cb) {
          /*var suggestions = this.suggestions;
          var results = queryString ? suggestions.filter(x => x.text.indexOf(queryString) > -1) : suggestions;
          cb(results);*/
      },
      handleSelect(item) {
          // if (!this.form.tag.find(x => x === item.value)) {
          //     this.form.tag.push(item.value);
          // }
          // this.state = ''
      },
      handleClose(tag) {
          // this.form.tag.splice(this.form.tag.indexOf(tag), 1)
      },
      onSubmit() {
          /*this.$refs.ruleForm.validate((valid) => {
              if (valid) {
                  this.form.html = this.$refs.editor.getHtml()
                  let req = this.form._id ? this.$api.put_post(this.form) : this.$api.post_post(this.form)
                  req.then(res => {
                      this.$router.push({path: '/post'})
                      this.$message({
                          type: 'success',
                          message: '保存成功!'
                      });
                  })
              } else {
                 
              }
          })*/
          /*let mdContent = this.form.content;
          console.log(mdContent);
          console.log(typeof mdContent);*/
      },
      onCancel() {
          // this.$router.go(-1)
      }
  }
}
   
</script>
<style lang='less' scoped>
.post_content {
      height: 500px;
      overflow: auto;
      font-size:  1.4rem;
      .markdown-editor {
        background-color: #FCFCFC;
      }
  }
  .post_info {
      /*background-color: #FCFCFC;*/
  }
</style>