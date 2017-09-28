<template>
  <div id="hello">
    <div id="header">
      <ul>
        <a href="#" v-for="site in sites"><li>{{site.name}}</li></a>
        <a v-bind:href="url"><li>test</li></a>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      sites: [
        {name: '导航一'},
        {name: '导航二'},
        {name: '导航三'},
        {name: '导航四'},
        {name: '导航五'}
      ],
      url: '../static/test.html'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{margin:0;padding:0;}
#header {
  height:60px;
  width:100%;
  background-color:yellow;
  color:red;
}
ul li{display: inline-block;margin-left: 20px;line-height: 60px}
</style>
