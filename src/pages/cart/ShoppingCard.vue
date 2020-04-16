<template>
    <div class="container">
        <p class="title">购物车</p>
        <hr />
        <div class="main">
            <ProductList :productList="productList" />
            <ChoosedList :choosedList="choosedList" />
            <p>总价：{{getTotalPrice}} 元</p>
        </div>
    </div>
</template>
<script>
import ProductList from '../../components/cart/ProductList'
import ChoosedList from '../../components/cart/ChoosedList'

export default {
  components: {
    ProductList,
    ChoosedList
  },
  data () {
    return {
      productList: [{
        id: 1,
        productName: '商品1',
        price: 10
      }, {
        id: 2,
        productName: '商品2',
        price: 15
      }, {
        id: 3,
        productName: '商品3',
        price: 20
      }],
      choosedList: [{
        id: 1,
        productName: '商品1',
        price: 10,
        quantity: 1
      }]
    }
  },
  provide () {
    return {
      addToCart: this.addToCart,
      addQuantity: this.addQuantity,
      reduceQuantity: this.reduceQuantity
    }
  },
  computed: {
    getTotalPrice () {
      let totalPrice = 0
      this.choosedList.forEach(item => {
        totalPrice = totalPrice + item.price * item.quantity
      })
      return totalPrice
    }
  },
  methods: {
    addToCart (item) {
      const currentItemIndex = this.choosedList.findIndex(chooseItem => chooseItem.id === item.id)
      if (currentItemIndex !== -1) {
        this.choosedList[currentItemIndex].quantity = this.choosedList[currentItemIndex].quantity + 1
      } else {
        const newItem = {...item, quantity: 1}
        this.choosedList.unshift(newItem)
      }
    },
    addQuantity (item) {
      const newChooseList = this.choosedList.map(chooseItem => {
        if (chooseItem.id === item.id) {
          return {
            ...chooseItem,
            quantity: item.quantity + 1
          }
        }
        return chooseItem
      })
      this.choosedList = newChooseList
    },
    reduceQuantity (item) {
      let newChooseList = JSON.parse(JSON.stringify(this.choosedList)) // 数组深拷贝
      const currentItemIndex = this.choosedList.findIndex(chooseItem => chooseItem.id === item.id)
      if (item.quantity <= 1) {
        newChooseList.splice(currentItemIndex, 1)
      } else {
        newChooseList[currentItemIndex] = {
          ...item,
          quantity: item.quantity - 1
        }
      }
      this.choosedList = newChooseList
    }
  }
}
</script>

<style lang="scss">
.container {
    margin-top: 30px;
    margin-left: 30px;
    border: 1px solid #aaa;
    width: 500px;
}
.title {
    margin-left: 20px;
}
.main {
    padding: 0 20px;
}
</style>
