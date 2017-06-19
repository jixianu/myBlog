<template>
  <div id="home">
    <div class="container">
      <ul class="nav">
        <li><router-link to='/article'>Blog</router-link></li>
        <li><router-link to='/detail'>Manage</router-link></li>
        <li><a href="https://github.com/jixianu">Github</a></li>
        <li><a href="http://weibo.com/u/1826413295">Weibo</a></li>
        <li><router-link to='/aboutme'>Me</router-link></li>
      </ul>
      <div class="manbox"></div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'home',
  data () {
    return {
    }
  },
}
</script>

<style lang='less' scoped>
#home {
  height: 100%;
  background-color:  #AEBD5B;
  position: relative;
  .container {
    height: 100%;
    padding-top: 70px;
    box-sizing: border-box;
    .nav {
      margin-right: 40px;
      margin-top: 40px;
      float: right;
      li {
        margin-top: 35px;
        a{
          color: #fff;
          font-size: 5rem;
        }
      }
    }
  }
  .manbox {
    width: 500px;
    height: 450px; 
    background: url('../assets/images/man.gif') no-repeat ;
    background-size: 100% 100%;
    margin: 0 auto;
    padding-top: 20px;
  }
}

@media screen and (max-width: 900px) {
  #home {
    .container {      
      text-align:center; 
      padding: 0;
      background: url('../assets/images/man.gif') no-repeat ;
      background-size: 100% 100%;
      .nav {
        display: inline-block;
        float: none;
        margin: 0px;
        li {
          float: left;
          margin-right: 8px;
          a{
            color: #fff;
            font-size: 1.6rem;
            font-weight: 700;
          }
        }
      }
    }
    .manbox {
      display: none;
    }
  }
}
</style>
