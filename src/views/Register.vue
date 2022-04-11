<template>
  <div>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="用户名">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item label="学校">
      <el-input v-model="form.school"></el-input>
    </el-form-item>
    <el-form-item label="学号">
      <el-input v-model="form.stuid"></el-input>
    </el-form-item>
    <el-form-item label="电话">
      <el-input v-model="form.telephone"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
        school: '',
        stuid: '',
        telephone: '',
      }
    }
  },
  methods:{
    onSubmit(){
      this.$http.post('/user/register',this.form).then(res=>{
        alert(res.data.data)
        this.$router.push('/login')
      })
    },
    cancel(){
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

</style>