<template>
  <ul v-if="choosedList.length">
    <li v-for="item in choosedList" :key="item.id">
      <ChoosedItem :item="item"/>
    </li>
  </ul>
</template>

<script>
import ChoosedItem from './ChoosedItem'

export default {
  components: {
    ChoosedItem
  },
  props: {
    choosedList: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
    ul {
        list-style-type: none;
    }
</style>
