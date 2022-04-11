<template>
  <el-table
      :data="form"
      border
      style="width: 100%">
    <el-table-column
        prop="user.username"
        label="用户名"
        width="180">
    </el-table-column>
    <el-table-column
        prop="user.school"
        label="学校"
        width="180">
    </el-table-column>
    <el-table-column
        prop="user.telephone"
        label="电话"
        width="180">
    </el-table-column>

    <el-table-column
        prop="goods.name"
        label="商品"
        width="180">
    </el-table-column>

    <el-table-column
        prop="exchangeGoods.number"
        label="数量"
        width="180">
    </el-table-column>

    <el-table-column
        prop="exchangeGoods.exchangetime"
        label="时间"
        width="180">
    </el-table-column>

    <el-table-column
        label="操作"
        width="100">
      <el-button type="text" size="small" @click="deleteExchange(exchangeGoods.id)">完成</el-button>
    </el-table-column>

  </el-table>
</template>

<script>
export default {
  data() {
    return {
      form:[]
    }
  },
  methods: {
    getList() {
      this.$http.get('/exchangeGoods/list').then((res) => {
        this.form = res.data.data
        console.log(this.res.data,data)
      })
    },
    deleteExchange(id){
      this.$http.get('/exchangeGoods/delete?id=' + id).then((res) => {
        this.form = res.data.data
        this.getList()
      })
    }
  },
  created() {
    this.getList()
  }
}
</script>

<style scoped>

</style>