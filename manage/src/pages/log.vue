<template>
	<div class="container">
		<h1>log</h1>
		<el-button type="primary" @click="getJSON()">点击获取数据</el-button>
	</div>
</template>
<script>
import axios from 'axios'
export default {
	name: 'log',
	props: {},
  data() {
    return {}
  },
  methods: {
  	getJSON(){
  		axios.get('/api/json')
			  .then(function(response){
			    console.log(response.data);

			  })
			  .catch(function(err){
			    console.log(err);
			  });
  	}
  }
}
</script>