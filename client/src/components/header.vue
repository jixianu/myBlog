<template>
	<div id="header">
		<a id="logo"  href="/">
			<img src="../assets/images/logo.png" alt="xiaomengblog">
			<span class="title">xiaomengblog</span>
		</a>
		<a id="moblie_logo" href="javascript:;">
			<img src="../assets/images/logo.png" alt="xiaomengblog">
			<span class="title">xiaomengblog</span>
		</a>
		<div id="moblie_menu"></div>
		<ul id="nav">
			<li>
				<form id="search_from">
					<input type="text" class="search">
				</form>
			</li>
			<li><a href="javascript:;">文章</a></li>
			<li><a href="javascript:;">最新</a></li>
			<li><a href="javascript:;" class="hot">最热</a></li>
			<li><a href="javascript:;">打赏</a></li>
			<li><a href="javascript:;">登录/注册</a></li>
		</ul>
  </div>
</template>
	
<script>
export default {
	name: 'header',
	data() {
		return {}
	},
  created(){
      
  }
}
</script>

<style lang='less' scoped>
#header {
	width: 100%;
	font-size: 1.4rem;
  position: relative;
  border: 1px solid #CCC;
  background-color: #FCFCFC;
  border-radius: 25px;
  height: 82px;
  padding: 0px 5px;
  box-sizing: border-box;
  .title {
	  position: absolute;
	  top: 0px;
	  left: -3000px;
	}
}

#logo {
  display: inline-block;
  padding-left: 15px;
  width: 100px;
  img {
	  width: 100%;
	  height: 100%;
	}
}

#moblie_logo {
  display: none;
}

#nav {
  display: inline-block;
  position: absolute;
  right: 25px;
  top: 25px;
  li {
	  display: inline-block;
	  margin-right: 20px;
	  a {
	  	color : #42b983;
		}
		a.hot {
			color : #ED1C24;
		}
	}
}

#search_from .search{
  height: 30px;
  line-height: 30px;
  box-sizing: border-box;
  padding: 0 15px 0 30px;
  border: 1px solid #e3e3e3;
  color: #2c3e50;
  outline: none;
  border-radius: 15px;
  margin-right: 10px;
  background: #fff url('../assets/images/search.png') 8px 5px no-repeat;
  background-size: 20px;
  vertical-align: middle;
  &:focus{
  	border: 1px solid #42b983;
	}
}
@media screen and (max-width: 900px) {
	body {
    font-size: 1.4rem;
  }
  #nav {
    display: none;
  }
  #logo {
    display: none;
  }
  #header {
    text-align: center;
    height: 64px;
  }
  #moblie_logo {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  #moblie_menu {
    width: 35px;
    height: 40px;
    background: url(../assets/images/menu.png) 100% 100% no-repeat;
    position: absolute;
    top: 18px;
    left: 20px;
  }
}
/* header end */
</style>