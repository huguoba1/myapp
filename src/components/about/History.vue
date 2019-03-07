<template>
  <div class="history row">
<div class="card col-4" v-for="(item,index) in items" :key="index">
  <!-- <img class="card-img-top" src="../../assets/pizza.jpg" alt="Card image cap"> -->
  <div class="card-body">
    <h4 class="card-title ">{{item.title}}*{{item.num}}</h4>
    <p class="card-text text-success">{{item.text}}</p>
  </div>
</div>

  </div>
</template>

<script>
export default {
  name: 'History',
  data () {
    return {
       items:[
         {title:'意大利pizza',num:'4',text:'已完成支付'},
         {title:'榴莲pizza',num:'2',text:'已完成支付'},
         {title:'芝士pizza',num:'3',text:'已完成支付'}
         ]
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>