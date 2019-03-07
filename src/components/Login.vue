<template>
  <div class="login container text-center mt-5">
    
    <img src="../../static/logo.png" width="100" alt="">
    <h3>登陆</h3>
    <form>
  <div class="form-group">
    <input type="email" class="form-control" id="input1" v-model="username"  placeholder="请输入您的邮箱">
  </div>
  <div class="form-group">
    <input type="password" class="form-control" id="input2" v-model="password" placeholder="请输入您的密码">
  </div>
  <button type="submit" @click.prevent="onSubmit" class="btn btn-primary btn-block">Login</button>
</form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Login',
  data () {
    return {
      username:'',
      password:''
    }
  },
  methods:{
    onSubmit(){
      axios.get('./user-hjc.json')
      .then((res)=>{
        console.log(res.data)
        var result = [];
        for(var key in res.data){
          var user = res.data[key];
          result.push(user)
        };
        var trueUser = result.filter((item)=>{
          return item.username === this.username && item.password === this.password;
        });
        if(trueUser != null && trueUser.length>0 && trueUser != ''){
          alert('欢迎登陆');
          this.$router.push('/admin');
        }else{
          alert('账号或者密码输入错误');
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
