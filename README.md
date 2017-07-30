# blog

> A Vue.js blog

## Build Setup

``` bash
# install dependencies
npm install

# client serve with hot reload at localhost:8000
npm run cd

# build client for production with minification
npm run cb

# manage serve with hot reload at localhost:8001
npm run md

# build manage for production with minification
npm run mb

# connect mongoDB
mongod --dbpath 数据库路径

# run server at localhost:8008
npm run sd

# 数据库查询
1.mongo 连接数据库
2.show dbs 查看库列表
3.use 库名
4.db.skills.find() 查询所有，这里用复数
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#edit history
1.config/index.js dev.port 修改为8000  
2.修改router  
4.配置favicon路径  
5.8000-blog，8001-manage ， 8008 server
6.全局安装koa-generator 生成server, koa2版本需要node7.6以上
7.配置proxyTable代理, /api 代理到8008服務器端口
8.修改chunkFilename 配置router按需加载

#todList
.服务器开发 - post模型已出
.数据库MongoDB开发 - MongoDB模型已出
3.等域名下来 备注七牛，研究图标上传  http://blog.csdn.net/lupeng0206/article/details/71175767
2.jwt token 操作令牌 kov-blog中用了这个技术
1.vuex开发 -> 整理方法
mongoDB 多表查询
4.增加权限控制
5.除了特殊功能 都可以完成了

5.网站統計数据来源 
6.如何获取登录人的资料 
7.第三方登录 
8.网站pv统计 
9.是否考虑做登录后留言功能 

#Built With
- vue-highcharts  
- vue-simplemde markdown highlight 语法高亮 
- 

#坑坑洼洼 
1.element自定义主题不带图标需要手动添加 
2.koa 需要node>=7.6.0 支持async与await 
3.mongoose 存数据时类型验证不是很严格，不报错也不存储数据，在schemas存数据时需要细心  
4.管理页接口想用async/await 但由于嵌套太多，需要写很多async/await，其实已经实现了，但还是改成了axios().then()
5.token生成应该是login中的操作，但为了理解token原理，把token从login中抽离


#有关 
http://www.jianshu.com/p/df464b26ae58 axios

图片：https://dribbble.com/colors/93C943
