<template>
  <div class="rich-text-container">
    <section class="section">
      <h3>富文本编辑器</h3>
      <vue-ueditor-wrap v-model="richText" :config="editorConfig"></vue-ueditor-wrap>
    </section>
  </div>
</template>

<script>
import VueUeditorWrap from 'vue-ueditor-wrap'
import editorConfig from '@/config/editorConfig'

export default {
  components: {
    VueUeditorWrap
  },

  data () {
    return {
      editorConfig,
      richText: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.rich-text-container {
  background-color: #f5f7f9;
}
.section {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 20px;
}
</style>
