<template>
  <div id="nav-menu">
  <!-- 默认的第一个得根据路由参数 -->
    <el-menu 
    default-active="1" 
    :router="true" 
    class="el-menu-nav container"
    mode="horizontal" 
    @select="handleSelect">
      <el-menu-item index="1" :route="{path: '/'}">首页</el-menu-item>
      <el-menu-item index="2" :route="{path: '/post'}">文章管理</el-menu-item>
      <el-menu-item index="3" :route="{path: '/tags'}">标签管理</el-menu-item>
      <el-menu-item index="4" :route="{path: '/data'}">数据分析</el-menu-item>
      <el-menu-item index="5" :route="{path: '/log'}">日志记录</el-menu-item>
      <div class="el-menu-userinfo">
        <el-submenu index="6">
          <template slot="title" index="6-1">用户信息与用户名</template>
          <el-menu-item index="6-2"  :route="{path: '/login'}">登录</el-menu-item>
          <el-menu-item index="6-3" @click.native="logout">退出</el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
  export default {
    methods: {
      logout() {
        /*this.$api.get_user_logout().then(res => {
          this.$message({
              type: 'success',
              message: '已退出'
          })
          this.$store.dispatch('setUser', null)
          this.$router.push({name: 'login'})
        })*/
      },
      handleSelect(key, keyPath) {
        
      }
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
  }
</style>