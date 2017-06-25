<template>
<div>
  <div class="container">
    <el-row :gutter="20" >
      <el-col :span="16"   class="post_content">
        <!-- <markdown-editor v-model="form.content"  preview-class="markdown-body"  :configs="configs" /> -->
      <md-editor :content="form.content"/>
      </el-col>
      <el-col :span="8">
         <post-info :post="form"/>
      </el-col>
    </el-row>
  </div>

</div>

    
</template>

<script>
import mdEditor from '../components/md-editor.vue'
import postInfo from '../components//post-info.vue'
import {getDate} from '../utils/date.js'

export default {
    name: 'post',
    props: {},
    data() {
        // const username = this.$store.state.userinfo.username 
        const username = '小猛';
        return {
            form: {
                title: '123',
                date: getDate(),
                content: '321',
                body: '',
                description:'fdsafd',
                category: 'cdcd',
                tag: ['abab','bcbc'],
                delivery: false,
                author: username
            }
        }
    },
    components: {
      mdEditor,
      postInfo
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
            let mdContent = this.form.content;
            console.log(mdContent);
            console.log(typeof mdContent);
        },
        onCancel() {
            // this.$router.go(-1)
        }
    },
    mounted() {
        /*let id = this.$route.params.id
        if (id) {
            this.$api.getById_post(id).then(res => {
                this.form = res.data.result
            })
        }
        this.$api.get_tag().then(res => {
            this.suggestions = res.data.result
        })
        this.$api.get_category().then(res => {
            this.categories = res.data.result
        })*/
    }
}
</script>

<style scoped lang='less'>
.container {
    margin: 0 auto;
    padding-top: 20px;
}
</style>