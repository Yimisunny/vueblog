<template>
  <div id="right" class="right">
    <div class="radiuscont">
        <div class="radius" v-on:click="about">
           <!-- <img v-bind:src="logo">-->
        </div>
        <div class="sideview">
            <div v-if="title">{{welcome}}</div>
            <div class="licont">
                <nav>
                   <span class="navsrc" v-for="item in items">
                    <router-link :to="item.navsrc" class="srcp">{{item.nav}}</router-link>   <!-- 对象就用to -->
                   </span>
                  
                </nav>
            </div>
        </div>
    </div>
    <div class="seam">
        
    </div>
  </div>
</template>
<script>
 export default({
   name: 'right',
   data(){
     return {
       logo: '/static/logo.png',
       title: true,
       welcome: '欢迎来到我的个人站',
       items:[
         {nav: '首页',navsrc: '/'},
         {nav: '列表',navsrc: '/list'},
         {nav: '关于',navsrc: '/about'},
         {nav: '联系方式',navsrc: '/contact'}
       ]
     }
   },
   methods:{
    about:function(){
        //this.$router.push({path:'/about'})  //也可以跳转页面
         this.$router.replace({ path: '/about'})
      }
   }

})

</script>

<style scoped>
 #right{width:20%;height:645px;float:left;background-color:#40b24f;}
 .radiuscont{width:100%;height:150px;background-color:white;padding-top: 5px;border-radius:0 0 55% 55%;}
 .radius{width:150px;height:150px;background-color:green;margin:0 auto;border-radius: 50%;}
 .right .seam{width:100%;height:345px;background-color:#40b24f;}
 .right img{width:125px;height:120px;margin-top: 30px;}
 .sideview{margin-top: 50px}
 .sideview>div{color:yellow;}
 .sideview .licont{margin-top: 30px;}
 .sideview .licont .navsrc .srcp{display: inline-block;margin:0 8px;color:white;}
 .sideview .licont .navsrc .srcp:hover{color:yellow;}
</style>