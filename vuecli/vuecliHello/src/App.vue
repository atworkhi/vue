<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">首页</router-link>|
      <router-link to="/hi">自定义页面</router-link>
      <br>
      <router-link to="/hi/hi1">子页面一</router-link>|
      <router-link :to="{name:'Hi/hi1',params:{username:'小星星亮晶晶',id:888}}">子页面传值</router-link>|
      <router-link to="/hi/hi2">子页面二</router-link>
    </div>
    <p>{{$route.name}}</p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
