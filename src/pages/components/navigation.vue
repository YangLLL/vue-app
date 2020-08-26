<template>
  <div class="container">
    <section class="section">
      <h3>下拉菜单</h3>
      <div>
       <el-dropdown class="dropdown">
        <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown trigger="click" class="dropdown">
        <span class="el-dropdown-link">
        click激活<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </div>
    </section>
    <section class="section">
      <h3>Tab 标签</h3>
      <el-tabs v-model="activeName" @tab-click="handleTabClick">
        <el-tab-pane label="标签一" name="tab-1">标签一</el-tab-pane>
        <el-tab-pane label="标签二" name="tab-2">标签二</el-tab-pane>
        <el-tab-pane label="标签三" name="tab-3">标签三</el-tab-pane>
      </el-tabs>
    </section>
    <section class="section">
      <h3>面包屑</h3>
      <el-breadcrumb>
        <el-breadcrumb-item>第一级</el-breadcrumb-item>
        <el-breadcrumb-item>第二级</el-breadcrumb-item>
        <el-breadcrumb-item>第三级</el-breadcrumb-item>
      </el-breadcrumb>
      <h5>图标分隔符</h5>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>第一级</el-breadcrumb-item>
        <el-breadcrumb-item>第二级</el-breadcrumb-item>
        <el-breadcrumb-item>第三级</el-breadcrumb-item>
      </el-breadcrumb>
    </section>
    <section class="section">
      <h3>步骤条</h3>
      <el-steps :active="activeStep" finish-status="success">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
      <el-steps :active="activeStep" simple style="margin-top: 20px">
        <el-step title="步骤 1" icon="el-icon-edit"></el-step>
        <el-step title="步骤 2" icon="el-icon-upload"></el-step>
        <el-step title="步骤 3" icon="el-icon-picture"></el-step>
      </el-steps>
      <el-button class="step-btn" @click="nextStep">下一步</el-button>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'tab-1',
      activeStep: 0
    }
  },
  methods: {
    handleTabClick (tab, event) {
      console.log(tab, event)
    },
    nextStep () {
      this.activeStep++
      if (this.activeStep > 2) this.activeStep = 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    background-color: #f5f7f9;
  }
  .section {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .dropdown {
    margin-right: 30px;
  }
  .step-btn {
    margin-top: 20px;
  }
</style>
