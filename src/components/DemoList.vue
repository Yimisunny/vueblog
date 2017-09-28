<template>
 <div id="list">
    <div class="left">
      <ul>
        <li v-for="item in items">{{item.li}}</li>
      </ul>
    </div>
    <demo-right></demo-right>
 </div>
</template>

<script>
 import DemoRight from '@/components/DemoRight'
 export default({
   name: 'list',
   data (){
      return {
        items:[
          {li: '列表1'},
          {li: '列表2'},
          {li: '列表3'}
       ]
      }
   },
   mounted () {
        document.querySelector('.list').setAttribute('style', 'background:green');
        document.querySelector('.listp').setAttribute('style', 'color:white;')
    },
    beforeDestroy () {
        document.querySelector('.list').setAttribute('style', '');
        document.querySelector('.listp').setAttribute('style', '')
    },
    components: {DemoRight}
 })
</script>

<style scoped>
.list{color:white;}
 #list{
  width: 1200px;
  height: 500px;
  margin: 0 auto;
  background-color: lightskyblue;
 }
 .left{width:80%;height:500px;float:left;}
 .left li{width:100%;height:50px;}
 .left li:nth-child(even){background-color:#eee}
</style>