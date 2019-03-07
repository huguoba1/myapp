<template>
  <div class="about container row mt-5">
    <div class="col-4">
        <router-link to="contact" class="list-group-item list-group-item-success mb-3">联系我们</router-link>
        <router-link to="delievry" class="list-group-item list-group-item-danger mb-3">快递信息</router-link>
        <router-link to="history" class="list-group-item list-group-item-warning mb-3">历史订单</router-link>
        <router-link to="activity" class="list-group-item list-group-item-info mb-3">热门活动</router-link>
    </div>
    <div class="col-8">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
