<template>
  <el-container class="layout">
    <el-header class="layout-header">
      <div>
        Header
      </div>
    </el-header>
    <el-container class="layout-main-container">
      <el-aside class="layout-sider">
        <el-menu>
          <el-menu-item  @click="handleClickCart('/home')" index="1">
            <span>首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <span>组件</span>
            </template>
            <el-menu-item @click="handleClickCart('/components/button')">button</el-menu-item>
            <el-menu-item @click="handleClickCart('/components/form')">form</el-menu-item>
            <el-menu-item @click="handleClickCart('/components/nav')">navigation</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <span slot="title">demo</span>
            </template>
            <el-menu-iitem-group>
              <el-menu-item @click="handleClickCart('/demo/cart')">
                购物车
              </el-menu-item>
              <el-menu-item @click="handleClickCart('/notes')">notes</el-menu-item>
            </el-menu-iitem-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="layout-main">
        <el-breadcrumb class="bread-crumb">
          <el-breadcrumb-item>一</el-breadcrumb-item>
          <el-breadcrumb-item>二</el-breadcrumb-item>
        </el-breadcrumb>
        <div>
          <router-view></router-view>
        </div>
      </el-main>
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
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  z-index: 99;
}
.layout-main-container {
  padding-top: 60px;
}
.layout-main {
  background-color: #f5f5f7;
  margin: 0;
  padding: 0;
  padding: 10px;
}
.layout-sider {
  width: 200px;
  margin-left: 5px;
  min-height: 100vh;
  border-right: 1px solid rgb(230, 230, 230) ;
}
.bread-crumb {
  padding-bottom: 15px;
}
</style>
