<template>
<div>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="物品名称">
      <el-input v-model="ruleForm.name" placeholder="请输入物品名称" style="max-width: 200px"></el-input>
    </el-form-item>
    <el-form-item label="积分">
      <el-input v-model="ruleForm.score" placeholder="请输入积分" style="max-width: 200px"></el-input>
    </el-form-item>
    <el-form-item label="数量">
      <el-input v-model="ruleForm.number" placeholder="请输入数量" style="max-width: 200px"></el-input>
    </el-form-item>


    <el-form-item label="上传照片">
      <el-upload
          action="http://localhost:8080/goods/uploadImg"
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
        name:'',
        score:'',
        number:'',
        picture:''
      },
    };
  },
  methods: {
    submitForm(formName) {
      const _this = this
      this.ruleForm.userId = this.$store.getters.getUser.id
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post('/goods/addGoods', this.ruleForm,{
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
      this.ruleForm.picture = file.name
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>

</style>