<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr>
    <h2>直接调用显示结果：{{$store.state.count}}</h2>
    <!-- <h2>computed显示结果：{{count}}</h2> -->
    <h2>mapState显示结果：{{count}}</h2>
    <p>
      <button @click="$store.commit('add')">+1</button>
      <button @click="$store.commit('reduce')">-1</button>
    </p>
    <p>
      <button @click="add">mapMutations+1</button>
      <button @click="reduce">mapMutations-1</button>
    </p>
  </div>
</template>

<script>
import store from '@/vuexstore/store'
// import { mapState, mapMutations, mapGetters } from 'vuex'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello Vuex'
    }
  },
  computed: {
    ...mapState(['count'])
    // ...mapGetters(['count'])
    // count () {
    //   return this.$store.getters.count
    // }
  },
  methods: mapMutations(['add', 'reduce']),
  // two
  // computed: mapState({
  //   count:state=>state.count
  // }),
  // one
  // computed: {
  //   count () {
  //     return this.$store.state.count
  //   }
  // },
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
