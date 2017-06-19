<template>
<div id="content" >
  <div v-for="article in articles.articleList">
    <a href="javascript:;" class="content-left">
      <!-- <img src="../assets/images/2012122607300070.jpg"> -->
      <img :src="article.url">
    </a>
    <div class="article">
      <h6 class="article-header">{{article.title}}</h6>
      <div class="description">{{article.description}}</div>
        <div  class="extra"  v-for="tag in article.tags" >
          <tag  tagClass="#icon-biaoqian" :tagContent="tag.text" tagTarget="javascript:;"/>
        </div>
        <div class="info">
          <tag  tagClass="#icon-touxiang-copy" tagContent="less" tagTarget="javascript:;"/>
          <tag  tagClass="#icon-tubiao" tagContent="less" tagTarget="javascript:;"/>
          <tag  tagClass="#icon-guankan" tagContent="less" tagTarget="javascript:;"/>
          <a href="javascript:;">more</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import {articles} from '../utils/mock.js'
  console.log(articles)
  export default {
    data(){
      return {
        articles
      }
    }
  }
</script>

<style lang='less' scoped>
  #content {
    width: 74%;
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