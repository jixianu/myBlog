<template>
	<div class="container">
		<h1>log</h1>
		<ul v-loading="loading">
			<li v-for="item in data">
				<span>_id: {{item._id}}</span>
				<span>date: {{item.date}}</span>
				<span>categories: {{item.categories}}</span>
				<span v-for="tag,index in item.tags">{{tag}},</span>
				<span>url: {{item.imgUrl}}</span>
				<span>content: {{item.content}}</span>
				<span>description: {{item.description}}</span>
				<span>delivery: {{item.delivery}}</span>
				<hr>
			</li>
		</ul>
		<!-- <el-button type="primary" @click="getJSON()">点击获取数据</el-button> -->
	</div>
</template>
<script>
import axios from 'axios'
export default {
	name: 'log',
	props: {},
  data() {
    return {
    	loading: true,
    	data: null
    }
  },
  mounted(){
		axios.get('/api/post/getAll')
		  .then(res=>{
		    this.data = res.data
		    this.loading = false
		  })
		  .catch(function(err){
		    console.log(err);
		  });
  }
}
</script>