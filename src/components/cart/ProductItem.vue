<template>
  <div class="item">
    <p>{{item.productName}} - {{item.price}}元</p>
    <p class="add-to-card" @click="addToCart(item)">加入购物车</p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },

  inject: ['addToCart'],

  methods: {
    // handleAdd(item) {
    //     this.addToCart(item)
    // }
  }
}
</script>

<style lang="scss" scoped>
    .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .add-to-card {
        color: #2973b7;
        text-decoration: underline;
    }
</style>
