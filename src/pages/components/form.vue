<template>
  <main class="container">
    <section class="section">
      <h3>单选框</h3>
      <div>
        <el-radio v-model="radio" label="1">选项一</el-radio>
        <el-radio v-model="radio" label="2">选项二</el-radio>
      </div>
    </section>
    <section class="section">
      <h3>复选框</h3>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 B"></el-checkbox>
          <el-checkbox label="复选框 C"></el-checkbox>
        </el-checkbox-group>
    </section>
    <section class="section">
      <h3>输入框</h3>
      <el-input v-model="input" placeholder="请输入内容" class="input"></el-input>
      <p>{{input}}</p><br/>
      <el-input v-model="password" placeholder="请输入密码" show-password class="input"></el-input><br/>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        class="input"
        v-model="textarea">
    </el-input>
    </section>
     <section class="section">
      <h3>InputNumber 计数器</h3>
      <el-input-number v-model="num" :min="1" :max="10"></el-input-number>
    </section>
    <section class="section">
      <h3>Select 选择器</h3>
      <el-select v-model="selectValue" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </section>
    <section class="section">
      <h3>文件上传</h3>
      <el-upload
        class="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        :file-list="fileList"
      >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="upload-tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </section>
      <section class="section">
      <h3>form 表单</h3>
      <el-form :model="form" label-width="60px">
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="生日">
          <el-date-picker v-model="form.birthday" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="form.phoneNumber" type="tel"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email" type="email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </section>
  </main>
</template>
<script>
export default {
  data () {
    return {
      radio: '1',
      checkList: ['复选框 A'],
      input: '',
      password: '',
      textarea: '',
      num: 1,
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      selectValue: '',
      fileList: [{
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }, {
        name: 'food2.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }],
      form: {
        name: '',
        birthday: '',
        phoneNumber: '',
        email: ''
      }
    }
  },
  methods: {
    onSubmit (e) {
      console.log('submit!', this.form)
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
.input {
  width: 200px;
}
</style>
