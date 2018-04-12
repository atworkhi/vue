<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button @click="back">后退</button>
      <button @click="gogo">前进</button>
      <button @click="gohome">返回首页</button>
    </div>
    <br>
    <router-link to="/params/888/韩小星星/男">URL传参</router-link>|
    <router-link to="/back">重定向到首页</router-link>|
    <router-link to="/params/1111/我是参数/妹子">带参数的重定向</router-link>|
    <router-link to="/alias">原始名称</router-link>|
    <router-link to="/othername">别名的使用</router-link>|
    <transition name="fade" mode="out-in">
    <router-view></router-view>
    </transition>
    <router-view name="left"></router-view>
    <router-view name="right"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    back () {
      this.$router.go(-1)
    },
    gogo () {
      this.$router.go(1)
    },
    gohome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity 1s;
  }
  .fade-leave{
    opacity: 1;
  }
  .fade-leave-active{
    opacity: 0;
    transition: opacity 1s;
  }
</style>
