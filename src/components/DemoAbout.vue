<template>
 <div id="about">
    <div class="left">
      
    </div>
    <demo-right></demo-right>
 </div>
</template>

<script>
 import DemoRight from '@/components/DemoRight'
 export default({
   name: 'about',
   mounted () {
        document.querySelector('.about').setAttribute('style', 'background:green');
        document.querySelector('.aboutp').setAttribute('style', 'color:white;')
    },
    beforeDestroy () {
        document.querySelector('.about').setAttribute('style', '');
        document.querySelector('.aboutp').setAttribute('style', '')
    },
    components: {DemoRight}
 })
</script>

<style scoped>
.about{color:white;}
#about{
 width: 1200px;
 height: 500px;
 margin: 0 auto;
 background-color: antiquewhite;
}
.left{width:80%;height:500px;float:left;}
</style>