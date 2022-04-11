<template>
  <div>
  <h3 style="padding: 10px">积分商城</h3>
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
          <div class="mypadding"><el-button type="primary" @click="exchange(good.id,good.score,good.number)">兑换</el-button></div>
        </div>
      </el-card>

    </el-row>

  </div>
</template>

<script>
export default {
  name: "ScoreMarket",
  data() {
    return {
      userId: 1,
      userScore:0,
      goods: {},
      currentDate: new Date()
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

      getpic(id){
        return "/static/goods/" + id
      },

      exchange(id,score,number) {
        const _this = this
        this.$prompt('请输入数量', '兑换', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({value}) => {
          if(value == null){
            return;
          }
          if (number < value) {
            alert("数量超出限制")
            // throw ("")
            return;
          }
          if (value * score > this.userScore) {
            alert("积分不足！")
            return;
          }
          _this.$http.get('/goods/exchange?userId=' + this.userId + '&goodsId=' + id + '&number=' + value,
              {headers: {
            "Authorization": localStorage.getItem("token")
          }
              }).then(res => {
            alert(res.data.data)
            _this.getGoods()
          });
        }).catch(() => {
          _this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
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