<template>
 <div id="contact">
    <div class="left">
      
    </div>
    <demo-right></demo-right>
 </div>
</template>

<script>
 import DemoRight from '@/components/DemoRight'
 export default({
   name: 'contact',
   mounted () {
        document.querySelector('.contact').setAttribute('style', 'background:green');
        document.querySelector('.contactp').setAttribute('style', 'color:white;')
    },
    beforeDestroy () {
        document.querySelector('.contact').setAttribute('style', '');
        document.querySelector('.contactp').setAttribute('style', '')
    },
    components: {DemoRight}   //局部引用组件
 })
</script>

<style scoped>
.content{color:white;}
 #contact{
  width: 1200px;
  height: 500px;
  margin: 0 auto;
  background-color: lightskyblue;
 }
 .left{width:80%;height:500px;float:left;}
</style>