<template>
  <el-container class="layout">
    <el-header class="layout-header">
      <div>
        我的主页
      </div>
    </el-header>
    <el-container class="layout-main-container">
      <el-main class="layout-main">
        <router-view></router-view>
      </el-main>
      <el-aside class="layout-sider">
        <el-menu>
          <el-menu-item  @click="handleClickCart('/home')">
            <span>首页</span>
          </el-menu-item>
          <el-menu-item @click="handleClickCart('/notes')">
            <span>笔记</span>
          </el-menu-item>
          <el-submenu>
            <template slot="title">
              <span slot="title">demo</span>
            </template>
            <el-menu-iitem-group>
              <el-menu-item @click="handleClickCart('/demo/cart')">
                购物车
              </el-menu-item>
            </el-menu-iitem-group>
          </el-submenu>
        </el-menu>
      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Main'
    }
  },
  methods: {
    handleClickCart (path) {
      this.$router.push(path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.layout {
  max-width: 1300px;
  margin: auto;
}
.layout-header {
  position: fixed;
  width: 1300px;
  border-bottom: 1px solid #EBEEF5;
  line-height: 50px;
  background-color: #fff;
  z-index: 99;
}
.layout-main-container {
  margin-top: 70px;
}
.layout-main {
  background-color: #fff;
  height: 800px;
}
.layout-sider {
  width: 280px;
  margin-left: 5px;
}
</style>
