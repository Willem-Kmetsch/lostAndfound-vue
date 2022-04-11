<template>
  <div>
    <h3 style="padding: 10px">积分商城管理</h3>
    <el-row>
      <el-card :body-style="{ padding: '0px' ,marginRight:'10px'}" class="card"  v-for="good in goods">
        <!-- 图片 -->
        <div class="demo-image">
          <el-image
              style="width: 200px; height: 200px; text-align: center"
              :src = "getpic(good.picture)"></el-image>
        </div>
        <!-- 描述 -->
        <div style="padding: 14px;">
          <div><h3>{{ good.name }}</h3></div>
          <div class="mypadding"><span>所需积分：{{ good.score }}</span></div>
          <div class="mypadding"><span>剩余数量：{{ good.number }}</span></div>
          <div class="mypadding"><el-button type="primary" @click="editorGoods(good.id);changedialogFormVisible()">编辑</el-button> <el-button type="danger" @click="deleteGoods(good.id)">删除</el-button></div>
        </div>
      </el-card>
    </el-row>

    <el-dialog title="商品信息" v-model="good" v-if="dialogFormVisible">
      <el-form :model="good">
        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-input v-model="good.name"></el-input>
        </el-form-item>
        <el-form-item label="商品积分" :label-width="formLabelWidth">
          <el-input v-model="good.score"></el-input>
        </el-form-item>
        <el-form-item label="商品数量" :label-width="formLabelWidth">
          <el-input v-model="good.number"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="changedialogFormVisible">取 消</el-button>
        <el-button type="primary" @click="changedialogFormVisible();changeGoods()">确 定</el-button>
      </div>
    </el-dialog>




  </div>
</template>

<script>
export default {
  name: "ScoreMarket",
  data() {
    return {
      dialogFormVisible: false,
      userId: 1,
      userScore:0,
      goods: {},
      currentDate: new Date(),
      good:{
        id:'',
        name:'',
        score:'',
        number:''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    getGoods() {
      const _this = this
      this.$http.get('/goods/').then((res) => {
        console.log(res.data)
        _this.goods = res.data.data
      })
    },
    changedialogFormVisible(){
      this.dialogFormVisible = !this.dialogFormVisible
    },

    getpic(id){
      return "/static/goods/" + id
    },
    editorGoods(id){
      this.$http.get('/goods/getGoods?goodsId=' + id).then((res) => {
        console.log(res.data.data)
        this.good = res.data.data
      })
    },
    deleteGoods(id){
      this.$http.get('/goods/deleteGoods?goodsId=' + id).then((res) => {
        alert(res.data.data)
      })
      this.getGoods()
    },
    changeGoods(){
      this.$http.post('/goods/updateGoods',this.good).then((res) => {
        alert(res.data.data)
      })
      this.getGoods()
    }
  },
  created() {
    if(this.$store.getters.getUser) {
      const _this = this
      this.userId = this.$store.getters.getUser.id
      this.$http.get('/user/' + this.$store.getters.getUser.id).then((res) => {
        _this.userScore = res.data.data.score
      })
    }
    this.getGoods();
  },
}
</script>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  max-width: 200px;
  max-height: 200px;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.mpage{
  max-width: max-content;
  margin: 0 auto;
}

.card{
  width: 300px;
  height: 400px;
  text-align: center;
  padding-top: 10px
}
.mypadding{
  padding-top: 10px;
}

</style>