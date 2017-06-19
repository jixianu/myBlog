<template>
  <div id="content">
    <a href="javascript:;">
      <img src="../assets/images/2012122607300070.jpg">
    </a>
    <div class="article">
      <h6 class="article-header"></h6>
      <div class="description"></div>
      <div class="extra">
        <a href="javascript:;">javascript</a>
        <a href="javascript:;">vue</a>
        <a href="javascript:;">css</a>
        <div class="info">
          <!-- <i class="iconfont">&#xe600;</i> -->
          <tag tagClass="#icon-biaoqian" tagText="fafa"></tag>
          <i>2月前</i>
          <i>341</i>
          <a href="javascript:;">more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {comments} from '../utils/mock.js'

  console.log(comments)
  export default {
    data(){
      return {
        comments
      }
    }
  }
</script>

<style lang='less' scoped>
  #content {
    width: 70%;
    display: inline-block;
    border: 1px solid #CCC;
    background-color: #FCFCFC;
    border-radius: 25px;
    height: 50px;
  }

  @media screen and (max-width: 900px) {
    #content {
      width: 100%;
      padding: 0 5px;
    }
  }
</style>