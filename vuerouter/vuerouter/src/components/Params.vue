<template>
  <div class="params">
    <h1>{{msg}}</h1>
    <hr>
    用户ID:{{$route.params.userId}}
    <br>
    姓名:{{$route.params.username}}
    <br>
    密码:{{$route.params.usersex}}
  </div>
</template>

<script>
export default {
  name: 'params',
  data () {
    return {
      msg: '我需要通过URL传入参数'
    }
  }
}
</script>
