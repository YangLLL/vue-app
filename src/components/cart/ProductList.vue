<template>
  <ul v-if="productList.length" class="product-list">
    <li v-for="item in productList" :key="item.id">
        <ProductItem :item="item" />
    </li>
  </ul>
</template>

<script>
import ProductItem from './ProductItem'

export default {
  components: {
    ProductItem
  },
  props: {
    productList: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
    .product-list {
        border-bottom: 1px solid #aaa;
    }
</style>
