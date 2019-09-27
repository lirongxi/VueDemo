<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div>
	    <Button size="large" type="primary">{{$t('home')}}</Button>
      <Button size="large" type="success">{{$t('refresh')}}</Button></br>
	    <Button size="large">{{url === 'development' ? '开发环境' : '生产环境'}}</Button>
      <Test :msg="test"></Test>
      <input type="calendar">
      <input type="search">
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Test from './test.vue'

export default {
  name: 'home',
  data(){
    return{
      test:"Hello Data1!",
      url:process.env.NODE_ENV
    }
  },
  components: {
    Test
  },
  created(){
    this.storeFun();
    // let array = [11,11,22,22,33,33,4,4];
    // var temp = []; //一个新的临时数组
    // for(var i = 0; i < array.length; i++){
    //     if(temp.indexOf(array[i]) == -1){
    //         console.log(array[i])
    //         temp.push(array[i]);
    //     }
    // }
    // console.log(temp)
  },
  methods:{
    storeFun(){
      this.$store.commit("increment","Hello Store");
      console.log(""+this.$store.state.count)
    }
  }
}
</script>
