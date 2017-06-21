<template>
<div id="content" >
  <div v-for="(article, index) in list.articleList"  :key="index" class="article">
    <a href="javascript:;" class="article-img">
      <!-- <img src="../assets/images/2012122607300070.jpg"> -->
      <img :src="article.url">
    </a>
    <div class="mobile-article-header">
      <h6><a href="javascript:;">{{article.title}}</a></h6>
    </div>
    <div class="article-content">
      <h6 class="article-header"><a href="javascript:;">{{article.title}}</a></h6>
      <div class="description">{{article.description}}</div>
      <div class="tags-container">
        <div class="extra"  v-for="tag in article.tags" >
          <tag tagClass="#icon-biaoqian" :tagContent="tag.text" tagTarget="javascript:;"/>
        </div>
      </div>
      <div class="info">
        <tag tagClass="#icon-touxiang-copy" tagContent="less" tagTarget="javascript:;"/>
        <tag tagClass="#icon-tubiao" tagContent="less" tagTarget="javascript:;"/>
        <tag tagClass="#icon-guankan" tagContent="less" tagTarget="javascript:;"/>
        <a href="javascript:;" class="more">Get More</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data(){
      return {
        list: this.dataList
      }
    },
    props: ['data-list']
  }
</script>

<style lang='less' scoped>
  #content {
    width: 74%;
    float: left;
    border: 1px solid #CCC;
    background-color: #FCFCFC;
    border-radius: 20px;
    box-sizing: border-box;
    .mobile-article-header {
      display: none;
    }
    .article {
      margin: 10px 15px;
      padding-bottom: 10px;
      border-bottom: 1px solid #CCC;
      .article-img {
        display: inline-block;
        width: 20%;
        max-width: 150px;
        height: 150px;
        vertical-align: middle;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .article-content {
        display: inline-block;
        vertical-align: middle;
        margin-left: 10px;
        width: 75%;
        .article-header {
          font-size: 1.8rem;
          margin-bottom: 10px;
          line-height: 26px;
          a {
            color: #34495e;
            font-size: 1.2em;
            display: inline-block;
            font-weight: 400;
            transition: all 0.3s;
            &:hover {
              color: #18bc9c;
              transition: all 0.3s;
            }
          }
        }
        .description {
          font-size: 1.6rem;
          margin-bottom: 10px;
          color: #7f8c8d;
          line-height: 20px;
        }
        .tags-container {
          margin-bottom: 10px;
          .extra {
            display: inline-block;
            a {
              margin: 0 5px;
              background-color: #e8e8e8;
              color: #5C5C5C;
              margin-bottom: 10px;
            }
          }
        }
        .info {
          padding-right: 10px;
          a {
            color: #5C5C5C;
          }
          .more {
            display: inline-block;
            color: #18bc9c;
            font-size: 1.8rem;
            float: right;
          }
        }
      }
    }
  }
  
  @media screen and (max-width: 900px) {
    #content {
      width: 100%;
      padding: 0 5px;
    }
  }
  @media screen and (max-width: 640px) {
    #content {
      .article {
        margin: 10px 15px;
        padding-bottom: 10px;
        border-bottom: 1px solid #CCC;
        .article-header{
          display: none
        }
        .mobile-article-header{
          display: inline-block;
          vertical-align: middle;
          width: 75%;
          line-height: 2.0rem;
          font-size: 1.8rem;
          margin-left: 10px;
          a {
            color: #34495e;
            font-size: 1.2em;
            display: inline-block;
            font-weight: 400;
          }
        }
        .description {
          margin-top: 5px;
        }
        .article-img {
          width: 20%;
          max-width: 75px;
          height: 75px;
        }
        .article-content {
          margin-left: 0px;
          width: 100%;
        }
      }
    }
  }

</style>