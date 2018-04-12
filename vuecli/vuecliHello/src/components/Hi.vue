<template>
  <div class="hi">
    <h1>{{ msg }}</h1>
    <h2>韩小星星</h2>
    <router-view></router-view>>
  </div>
</template>

<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: '我是新增的路由页面'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
