<template>
  <div class="container">
    <el-row :gutter="12" type="flex" justify="space-between" class="postToolBar">
      <el-col :span="0">
        <router-link :to="{ path: '/post/add' }">
          <el-button type="primary" icon="edit">添加文章</el-button>
        </router-link>
        <router-link :to="{ path: '/tags' }">
          <el-button type="primary" icon="star-on">标签管理</el-button>
        </router-link>
        <router-link :to="{ path: '/category' }">
          <el-button type="primary" icon="menu">分类管理</el-button>
        </router-link>
      </el-col>
      <el-col :span="0">
        <el-row :gutter="12" type="flex">
          <el-col :span="0">
            <el-input
              placeholder="标题"
              v-model="title">
            </el-input>
          </el-col>
          <el-col :span="0">
            <el-date-picker
              v-model="datetime"
              type="daterange"
              align="right"
              style="width: 220px"
              :picker-options="pickerOptions"
              placeholder="选择日期范围"
              >
            </el-date-picker>
          </el-col>
          <el-col :span="0">
            <el-button type="primary" icon="search" @click="onSearch">查询</el-button>
            <el-button type="danger" @click="onReset">重置</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      v-loading.body="loading"
      style="width: 100%">
      <el-table-column
        type="index"
        width="60">
      </el-table-column>
      <el-table-column
        inline-template
        label="标题"
        prop="title"
        width="220">
        <div class="text-overflow" :title="row.title">
          {{row.title}}
        </div>
      </el-table-column>
      <el-table-column
        inline-template
        sortable
        prop="date"
        label="日期"
        width="145">
        <div>
          <el-icon name="time"></el-icon>
          <span style="margin-left: 10px">{{handleDate(row.data)}}</span>
        </div>
      </el-table-column>
      <el-table-column
        inline-template
        prop="category"
        label="分类"
        :filters="filterCatetoryList"
        :filter-method="filterCatetory"
        width="100">
        <div>
          <el-tag>{{row.categories}}</el-tag>
        </div>
      </el-table-column>
        <el-table-column
        prop="tag"
        label="标签"
        :filters="filterTagList"
        :filter-method="filterTag"
        min-width="220"
        inline-template>
        <div>
          <el-tag class="el-tag-custome" v-for="tag, index in row.tags" close-transition :key="index">{{tag}}</el-tag>
        </div>
      </el-table-column>
      <el-table-column
        prop="delivery"
        label="发布"
        width="100"
        :filters="[{text: '已发布', value: true}, {text: '未发布', value: false}]"
        :filter-method="filterDelivery"
        inline-template>
        <div>
          <el-switch on-color="#13ce66" off-color="#ff4949" v-model="row.delivery" @change="onChangeDelivery(row)"></el-switch>
        </div>
      </el-table-column>
      <el-table-column
        :context="_self"
        inline-template
        width="230"
        label="操作">
        <div>
          <el-button
            size="small"
            @click="handleEdit($index, row)">
            编辑
          </el-button>
           <el-button
            size="small"
            type="primary">
            详情
          </el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete($index, row)">
            删除
          </el-button>
        </div>
      </el-table-column>
    </el-table>
    <el-row type="flex" justify="center" class="row-page">
      <el-col :span="0">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="pageConfig.currentPage"
          :page-size="pageConfig.pageSize"
          layout="total, prev, pager, next"
          :total="pageConfig.total">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import moment from 'moment'
import {pickerOptions} from '../utils/date'
// import {posts} from '../utils/mock.js'
import { mapActions } from 'vuex'
export default {
  name: 'post',
  props: {},
  data() {
    return {
      loading: true,
      datetime: [],
      title: '',
      pickerOptions,
      tableData: [],
      pageConfig: {
        currentPage: 1,
        pageSize: 10,
        total: 50
      }
    }
  },
  mounted(){
    this.getAllPosts().then((data)=>{
      if (data) {
        this.tableData = this.$store.state.post.all
        this.loading = false
      }
      console.log(moment(data[0].date).format('YYYY/MM/DD'))
    })
  },
  computed: {
    filterCatetoryList() {
      let arr = []
      if (this.tableData && this.tableData.length) {
        this.tableData.forEach(x => {
          if (x.category && !arr.find(i => i.text === x.category)) {
            arr.push({
              text: x.category,
              value: x.category
            })
          }
        })            
      }
      return arr
    },
    filterTagList() {
      let arr = []
      if (this.tableData && this.tableData.length) {
        this.tableData.forEach(x => {
          if (x.tag && x.tag.length) {
            x.tag.forEach(t => {
              if (!arr.find(i => i.text === t)) {
                arr.push({
                  text: t,
                  value: t
                })
              }
            })
          }
        })            
      }
      return arr
    },
    filterDate(){
    }
  },
  methods: {
    fetchDate() {
        /*this.loading = true;
        let loadingStartTime = new Date()
        this.$api.get_post({
          pageSize: this.pageConfig.pageSize,
          currentPage: this.pageConfig.currentPage,
          startTime: this.datetime[0] ? moment(this.datetime[0]).add(-1, 'days').format('YYYY-MM-DD') : '',
          endTime: this.datetime[1] ?  moment(this.datetime[1]).format('YYYY-MM-DD') : '',
          title: this.title
        }).then(res => {
          setTimeout(() => {
            this.tableData = res.data.result || []
            this.pageConfig.total = res.data.total
            this.loading = false;
          }, Date.now() - loadingStartTime < 300 ? 300 : 0)
        })*/
    },
    onSearch() {
      /*this.pageConfig.currentPage = 1
      this.fetchDate()*/
    },
    onReset() {
      /*this.pageConfig.currentPage = 1
      this.title = ''
      this.datetime = []
      this.fetchDate()*/
    },
    handleDate(date){
      return moment(date).format('YYYY/MM/DD')
    },
    handleEdit(index, row) {
      // this.$router.push({path: '/post/' + row._id})
    },
    handleDelete(index, row) {
      /*this.$confirm('确定删除吗?', '提示', {
        cancelButtonText: '取消',
        confirmButtonText: '确定',
        type: 'warning'
      }).then(() => {
        this.$api.delete_post(row._id).then(res => {
          if(!res.data.error) {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.tableData.splice(index, 1)
          }
        })
      })*/
    },
    filterTag(value, row) {
      // return row.tag.indexOf(value) > -1
    },
    filterCatetory(value, row) {
      // return row.category === value
    },
    filterDelivery(value, row) {
      // return row.delivery === value
    },
    handleCurrentChange(currentPage) {
      /*this.pageConfig.currentPage = currentPage
      this.fetchDate()*/
    },
    onChangeDelivery(row) {
      /*this.$api.put_post(row).then(res => {
        if (!res.data.error) {
          this.$message({
            type: 'success',
            message: row.delivery ? '已发布!' : '已取消发布!'
          });
        }
      })
    }*/
    },
    ...mapActions('post',[
      'getAllPosts'
    ])
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding-top: 20px;
  font-size: 1.2rem;
}
.el-tag-custome {
  margin-right: 5px;
}
.el-icon-time {
  color: #18bc9c;
}
.postToolBar {
  margin-bottom: 20px;
}
.el-tag {
  background-color: #18bc9c;
  border-color: #18bc9c;
}
.row-page {
  margin-top: 5px;
}
</style>