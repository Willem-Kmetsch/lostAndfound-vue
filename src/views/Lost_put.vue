<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="物品名称" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入物品名称" style="max-width: 200px"></el-input>
      </el-form-item>
      <el-form-item label="物品类型" prop="type">
        <el-select v-model="ruleForm.type" placeholder="请选择">
          <el-option label="卡/身份证" value=1></el-option>
          <el-option label="数码产品" value=2></el-option>
          <el-option label="钥匙" value=3></el-option>
          <el-option label="书籍" value=4></el-option>
          <el-option label="眼镜" value=5></el-option>
          <el-option label="包" value=6></el-option>
          <el-option label="其他" value=7></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="丢失地点" prop="place">
        <el-input v-model="ruleForm.place" placeholder="请输入内容" style="max-width: 200px"></el-input>
      </el-form-item>
      <el-form-item label="丢失时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="物品描述">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item label="悬赏积分">
        <el-input v-model="ruleForm.score" style="max-width: 200px"></el-input>
      </el-form-item>
      <el-form-item label="上传照片">
        <el-upload
            action="http://localhost:8080/lost/uploadImg"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-success="successPicture"
            :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        userId : 1,
        name : '',
        type : '',
        place: '',
        date1 : '',
        date2 : '',
        desc : '',
        score : '',
        picurl : '',
      },
      rules: {
        name: [
          { required: true, message: '请输入物品名称', trigger: 'blur' },
        ],
        type: [
          { required: true, message: '请选择物品类型', trigger: 'blur' },
        ],
        place: [
          { required: true, message: '请输入地点', trigger: 'blur' },
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      const _this = this
      this.ruleForm.userId = this.$store.getters.getUser.id
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post('/lost/addLost', this.ruleForm,{
            headers: {
              "Authorization": localStorage.getItem("token")
            },}).then(res =>{
            alert(res.data.data)
          });

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    successPicture(response, file, fileList){
      this.ruleForm.picurl = file.name
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>

</style>