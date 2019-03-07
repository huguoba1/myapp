<template>
  <div class="contact">
    <div class="card text-center">
  <div class="card-header">
    pizza店
  </div>
  <div class="card-body">
    <h5 class="card-title">联系我们</h5>
    <p class="card-text">这里有各种各样的pizza，欢迎来品尝我们的pizza</p>
    <router-link to="/address" class="btn btn-primary">联系地址</router-link>
    <router-link to="/tel" class="btn btn-primary">联系电话</router-link>
    <router-link to="/person" class="btn btn-primary">法人代表</router-link>
    <router-view></router-view>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>