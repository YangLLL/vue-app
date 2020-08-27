<template>
  <div>
    <el-carousel trigger="click" height="400px" >
      <el-carousel-item v-for="item in 4" :key="item" class="carousel-item">
        <h3 class="small">{{ item }}</h3>
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
.carousel-item {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 400px;
  margin: 0;
  text-align: center;
}
.carousel-item:nth-child(2n) {
  background-color: #99a9bf;
}
.carousel-item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
