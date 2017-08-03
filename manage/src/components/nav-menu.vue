<template>
  <div id="nav-menu">
  <!-- 默认的第一个得根据路由参数 -->
    <el-menu 
    :default-active="$route.path" 
    class="el-menu-nav container"
    mode="horizontal" 
    router 
    >
      <el-menu-item index="/" :route="{path: '/'}">首页</el-menu-item>
      <el-menu-item index="/post" :route="{path: '/post'}">文章管理</el-menu-item>
      <el-menu-item index="/tags" :route="{path: '/tags'}">标签管理</el-menu-item>
      <el-menu-item index="/categories" :route="{path: '/categories'}">分类管理</el-menu-item>
      <el-menu-item index="/data" :route="{path: '/data'}">数据分析</el-menu-item>
      <el-menu-item index="/log" :route="{path: '/log'}">日志记录</el-menu-item>
      <div class="el-menu-userinfo">
        <el-submenu index="7">
          <template slot="title" index="7-1" v-if="user.username != ''">{{user.username}}</template>
          <template slot="title" index="7-1" v-else>尚未登录</template>
          <el-menu-item index="7-2" @click="login">登录</el-menu-item>
          <el-menu-item index="" @click="logout" :route="{path: '/'}">退出</el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  export default {
    computed: mapState({
      user: state => state.user,
      active(){
        return '2'
      }
    }),
    methods: {
      login(){
        this.$router.push({path: '/login'})
      },
      ...mapActions('user',[
        'logout'
      ])
    }
  }
</script>

<style scoped>
  #nav-menu {
    padding-top: 5px;
  }

  .el-menu-nav {
    border-radius: 25px;
    background-color: #FCFCFC;
    margin: 0 auto;
    border: 1px solid #CCC;
    padding-left: 30px;
    box-sizing: border-box;
  }
  .el-menu-userinfo {
    float: right;
    padding-right:  15px;
  }
  .el-menu-item {
    text-align: center;
  }
</style>