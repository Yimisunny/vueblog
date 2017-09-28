<template>
 <div id="header" class="wrap">
  <div class="header">
    <!--<h1 class="logo">
    <router-link to="/">
    ![](../assets/logo.png)
    </router-link>
   </h1>-->
     <div class="top-nav">
       <div id="navList" class="navlist-wrap">
          <div class="navlist clearfix">
             <span class="nav-btn home">
              <router-link to="/" class="homep">首页</router-link>
             </span>
             <span class="nav-btn list">
              <router-link to="/list" class="listp">列表</router-link>
             </span>
             <span class="nav-btn about">
              <router-link to="/about" class="aboutp">关于</router-link>
             </span>
             <span class="nav-btn contact">
              <router-link to="/contact" class="contactp">联系方式</router-link>
             </span>
          </div>
       </div>
    </div>
  </div>
  
 </div>
</template>

<script>
 export default({
   name: 'header',
   data: function () {
     return {
       'nav-btn': 'nav-btn'
     }
   }
 })
</script>

<style scoped>
 .header{width:100%;margin:0 auto;height:60px;background-color:green;position:relative;*z-index:1}
 /* .header a{color:#fff;} */
 .header .logo{height:86px;width:256px;}
 .top-nav .navlist-wrap{width:1200px;margin:0 auto;position:relative}
 .top-nav .navlist .nav-btn{
  float:left;
  padding:0 20px;
  margin-right:5px;
  background-color: yellow;
  color:#666;
  line-height: 60px;
  font-size: 15px;
 }
 .top-nav .navlist .nav-btn:hover{background-color: green;}
  .top-nav .navlist .nav-btn:hover a{color:white;}
</style>
