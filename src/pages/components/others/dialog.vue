<template>
  <div class="dialog-container">
    <section class="section">
      <h3>文字弹框</h3>
      <el-button type="text" @click="showTextDialog">打开文字弹框</el-button>
      <el-dialog
        title="提示"
        :visible.sync="textDialog"
        width="30%"
        :before-close="hideTextDialog">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-after">
          <el-button @click="hideTextDialog">取消</el-button>
          <el-button @click="hideTextDialog">确定</el-button>
        </span>
      </el-dialog>
    </section>
    <section class="section">
      <h3>嵌套的弹框</h3>
      <el-button type="text" @click="outerVisible = true">打开嵌套的弹框</el-button>
      <el-dialog title="外层 Dialog" :visible.sync="outerVisible">
        <el-dialog
          width="30%"
          title="内层 Dialog"
          :visible.sync="innerVisible"
          append-to-body>
        </el-dialog>
        <div slot="footer" class="dialog-footer">
          <el-button @click="outerVisible = false">取 消</el-button>
          <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
        </div>
      </el-dialog>
    </section>
  </div>
</template>

<script>

export default {
  data () {
    return {
      textDialog: false,
      outerVisible: false,
      innerVisible: false
    }
  },
  methods: {
    showTextDialog () {
      this.textDialog = true
    },
    hideTextDialog () {
      this.textDialog = false
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog-container {
  background-color: #f5f7f9;
}
.section {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 20px;
}
</style>
