<template>
  <div>

    <el-descriptions title="个人中心" direction="horizontal" :column="1" border>
      <el-descriptions-item label="用户名">admin</el-descriptions-item>
      <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
      <el-descriptions-item label="学校" >中山大学</el-descriptions-item>
      <el-descriptions-item label="学号" >315720</el-descriptions-item>
      <el-descriptions-item label="现有积分">10</el-descriptions-item>
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
export default {
  name: "User"
}
</script>

<style scoped>

</style>