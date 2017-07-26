<template>
	<div class="container">
		<h1>log</h1>
		<ul v-loading="loading">
			<li v-for="item in allPosts">
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
	</div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
	name: 'log',
	props: {},
  data() {
    return {
    	loading: true,
    }
  },
  computed: {
    allPosts () {
      return this.$store.state.post.all
    }
  },
  mounted(){
		/*axios.get('/api/post/getAll')
		  .then(res=>{
		    this.data = res.data
		    this.loading = false
		  })
		  .catch(function(err){
		    console.log(err);
		  });*/
		this.getAllPosts().then(()=>{
			this.loading = false
		}).catch(err=>console.log(err))
  },
  methods: {
  	...mapActions('post',[
    	'getAllPosts'
  	])
  }
}
</script>