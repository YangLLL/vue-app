<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <router-link to="/cart">toCart</router-link>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Main'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
