<script>
 import DemoRight from '@/components/DemoRight'
 import news from '@/vuex/modules/news'
 import { mapGetters } from 'vuex'
 import Pagination from './pagination'

 export default({
   components: {DemoRight,Pagination},
   name: 'home',
    created() {
      this.$store.dispatch('getAllNewsAction')
    },
    beforeMount(){   //载入前
        document.querySelector('.home').setAttribute('style', 'background:green;');
    },
    mounted(){   //载入后
        document.querySelector('.home').setAttribute('style', 'background:green;');
        document.querySelector('.homep').setAttribute('style', 'color:white;')
    },
    beforeDestroy(){    //销毁前
        document.querySelector('.home').setAttribute('style', '');
        document.querySelector('.homep').setAttribute('style', '') 
    },

    computed: {

    ...mapGetters(['getNewsPaginationInfo', 'getNewsCurrentPage', 'getAllNews' ])
    },

  methods: {
    clickPageButton(page) {
      this.$store.dispatch('getAllNewsAction', page);
      }
    }
  
 })
</script>

<template>
 <div id="home">
  <div class="left">
    <div class="personalCenter-news">

  <div class="personalCenter-news-CardWrap" >

    <div class="newsCard-item" v-for="item in getAllNews">
      <img class="avater" :src="item.avater">
      <div class="item-content">
        <h4>{{ item.name }}</h4>
        <p>{{ item.message }}<a href="javascript:void(0)">查看详情 >></a></p>

     <!--   <img v-if="item.images" v-for="image in item.images" :src="image">-->

      </div>
      <div class="item-info clearfix">
        <em>评论 ( <i>{{ item.reply }}</i> )</em><span>{{ item.time }}</span>
      </div>
    </div>

  </div>

  <div class="pagination" id="Pagination-wrap">
    <Pagination
      @clickPageButton="clickPageButton"
      :currentPage="getNewsCurrentPage"
      :totalPage="parseInt(getNewsPaginationInfo.totalPage)"
    ></Pagination>
  </div>

</div>
  </div>
  <demo-right></demo-right>
 </div>
</template>



<style scoped>
 .home{color:white;}
 #home{width: 1200px;height: 800px;margin: 0 auto;background-color: khaki;}
 .left{width:80%;height:500px;float:left;}

  .personalCenter-news-nav li.active {color: #019ce4}
 .newsCard-item{width:90%;position: relative;
    min-height: 80px;
    padding: 20px 30px;
    margin: 10px auto 10px auto;
    background-color: #fff;}
  .newsCard-item .avater{position: absolute;
    top: 15px;
    left: 30px;
    width: 96px;
    height: 96px;
    border: 2px solid #eee;
    }
  .newsCard-item .item-content{margin: 10px 0 15px 120px;}
  .item-content h4{color:blue;}
  .item-content p,.item-content h4{text-align:left;}
  .item-info span,.item-info em{float:right;}
</style>
