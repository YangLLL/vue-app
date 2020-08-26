<template>
  <div>
    <el-carousel trigger="click" height="500px" >
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <img :src="item.image" alt="轮播图" class="img-item"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgList: [{
        image: require('../assets/img/background-1.jpg')
      }, {
        image: require('../assets/img/background-1.jpg')
      }, {
        image: require('../assets/img/background-1.jpg')
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.img-item {
  width: 100%;
  object-fit: cover;
}
</style>
