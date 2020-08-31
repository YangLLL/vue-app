<template>
  <el-container>
    <el-header class="layout-header">
      <div>
        Header
      </div>
    </el-header>
    <el-container class="layout-main-container">
      <el-aside class="layout-sider">
        <el-menu>
          <el-menu-item  @click="gotoDetail('/home')" index="1">
            <span>首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <span>组件</span>
            </template>
            <el-menu-item @click="gotoDetail('/components/button')">按钮</el-menu-item>
            <el-menu-item @click="gotoDetail('/components/form')">表单</el-menu-item>
            <el-menu-item @click="gotoDetail('/components/nav')">导航</el-menu-item>
            <el-submenu>
               <template slot="title">
                <span>其他</span>
              </template>
              <el-menu-item @click="gotoDetail('/components/dialog')">弹框</el-menu-item>
              <el-menu-item @click="gotoDetail('/components/rich-text')">富文本</el-menu-item>
              <el-menu-item @click="gotoDetail('/components/echart')">图表</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <span slot="title">demo</span>
            </template>
            <el-menu-iitem-group>
              <el-menu-item @click="gotoDetail('/demo/cart')">
                购物车
              </el-menu-item>
              <el-menu-item @click="gotoDetail('/notes')">notes</el-menu-item>
            </el-menu-iitem-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="layout-main">
        <router-view></router-view>
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
    gotoDetail (path) {
      this.$router.push(path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.layout-header {
  position: fixed;
  width: 100%;
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
    padding: 0px;
}
.layout-sider {
  width: 200px;
  margin-left: 5px;
  min-height: 100vh;
  border-right: 1px solid rgb(230, 230, 230) ;
}
</style>
