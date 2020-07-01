<template>
  <div class="item">
    <p>{{item.productName}} （数量{{item.quantity}}）</p>
    <p><span class="item-btn" @click="addQuantity(item)">增加</span> <span class="item-btn" @click="reduceQuantity(item)">减少</span></p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  inject: ['addQuantity', 'reduceQuantity']
}
</script>

<style lang="scss" scoped>
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .item-btn {
      color: #2973b7;
      text-decoration: underline;
      cursor: pointer;
    }
</style>
