<template>
  <div class="no">
    <h1>{{msg}}</h1>
    <hr>
    页面不存在！
  </div>
</template>

<script>
export default {
  name: 'no',
  data () {
    return {
      msg: '我是404页面'
    }
  }
}
</script>
