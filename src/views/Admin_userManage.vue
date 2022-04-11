<template>
  <el-table
      :data="users"
      border
      style="width: 100%">
    <el-table-column
        prop="username"
        label="用户名"
        width="180">
    </el-table-column>
    <el-table-column
        prop="school"
        label="学校"
        width="300">
    </el-table-column>
    <el-table-column
        prop="stuid"
        label="学号"
        width="180">
    </el-table-column>
    <el-table-column
        prop="score"
        label="积分"
        width="180">
    </el-table-column>
    <el-table-column
        prop="telephone"
        label="电话"
        width="300">
    </el-table-column>

    <el-table-column
        label="操作"
        width="100">
        <el-button type="text" size="small">编辑</el-button>
    </el-table-column>

  </el-table>
</template>

<script>
export default {
  data() {
    return {
      users : [],
      // users : [{
      //   username:'aaa',
      //     school:'aa',
      //     stuid:'aaa',
      //     score:'aaa',
      //     telephone:'aaa',
      // }]
      // user : {
      //   username:'',
      //   school:'',
      //   stuid:'',
      //   score:'',
      //   telephone:'',
      // }
    }
    },
  methods: {
    getUser() {
      this.$http.get('/user/list').then((res) => {
        this.users = res.data.data
        console.log(this.user)
      })
    }
  },
  created() {
    this.getUser()
  }
}
</script>

<style scoped>

</style>