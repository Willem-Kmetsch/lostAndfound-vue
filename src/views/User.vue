<template>
  <div>

    <el-descriptions title="个人中心" direction="horizontal" :column="1" border>
      <el-descriptions-item label="用户名">{{ user.username }}</el-descriptions-item>
      <el-descriptions-item label="手机号">{{ user.telephone }}</el-descriptions-item>
      <el-descriptions-item label="学校" >{{ user.school }}</el-descriptions-item>
      <el-descriptions-item label="学号" >{{ user.stuid }}</el-descriptions-item>
      <el-descriptions-item label="现有积分">{{user.score}}</el-descriptions-item>
    </el-descriptions>
    <el-row>
    <el-button type="primary">修改个人信息</el-button>
    <el-button type="primary">修改密码</el-button>&nbsp;&nbsp;
    <router-link to="/found_finish"><el-button type="primary">查看已发布的失物招领</el-button></router-link>&nbsp;&nbsp;
    <router-link to="/lost_finish"><el-button type="primary">查看已发布的寻物启事</el-button></router-link>
    </el-row>
  </div>
</template>

<script>
import picture from "../assets/img/img.jpg";

export default {
  name: "User",
  data() {
    return {
      userId:0,
      user : {}
    }
  },
  created() {
    const _this = this
    this.$http.get('/user/' + this.$store.getters.getUser.id).then((res) => {
      _this.user = res.data.data
    })
  },
}
</script>

<style scoped>

</style>