<template>
  <div id="aside">
  </div>
</template>

<style lang='less' scoped>
	
  #aside {
    width: 25%;
    display: inline-block;
    float: right;
    border: 1px solid #CCC;
    background-color: #FCFCFC;
    border-radius: 25px;
    height: 50px;
  }
  @media screen and (max-width: 900px) {
    #aside {
      display: none;
    }
  }
</style>