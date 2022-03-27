<template>
  <div>
  <h3 style="padding: 10px">积分商城</h3>
  <el-row>
    <el-card :body-style="{ padding: '0px' ,marginRight:'10px'}" class="card">
      <!-- 图片 -->
      <div class="demo-image">
        <el-image
            style="width: 200px; height: 200px; text-align: center"
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0925%2Ff604a42cj00qzyy820011d200m800m8g00m800m8.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650464415&t=8de71f61b83f844d0acc1e2d0a86d06a"></el-image>
      </div>
      <!-- 描述 -->
      <div style="padding: 14px;">
        <div><h3>可乐</h3></div>
        <div class="mypadding"><span><b>所需积分: </b>5</span></div>
        <div class="mypadding"><span><b>剩余数量: </b>100</span></div>
        <div class="mypadding"><el-button type="primary">兑换</el-button></div>
      </div>
    </el-card>
    <el-card :body-style="{ padding: '0px' ,marginRight:'10px'}" class="card">
      <!-- 图片 -->
      <div class="demo-image">
        <el-image
            style="width: 200px; height: 200px; text-align: center"
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fm.360buyimg.com%2Fn12%2Fjfs%2Ft2794%2F239%2F1541556015%2F80947%2F41439bb3%2F574266b4Nef524caf.jpg%21q70.jpg&refer=http%3A%2F%2Fm.360buyimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650464679&t=b99787e33f2a24566ace1b10c31a2045"></el-image>
      </div>
      <!-- 描述 -->
      <div style="padding: 14px;">
        <div><h3>薯片</h3></div>
        <div class="mypadding"><span><b>所需积分: </b>5</span></div>
        <div class="mypadding"><span><b>剩余数量: </b>100</span></div>
        <div class="mypadding"><el-button type="primary">兑换</el-button></div>
      </div>
    </el-card>
    <el-card :body-style="{ padding: '0px' ,marginRight:'10px'}" class="card">
      <!-- 图片 -->
      <div class="demo-image">
        <el-image
            style="width: 200px; height: 200px; text-align: center"
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F012bbc5e90ccb2a8012165182ea354.jpg%403000w_1l_0o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650464756&t=4e121bf8c48d62557a383c9f8348f358"></el-image>
      </div>
      <!-- 描述 -->
      <div style="padding: 14px;">
        <div><h3>橙汁</h3></div>
        <div class="mypadding"><span><b>所需积分: </b>5</span></div>
        <div class="mypadding"><span><b>剩余数量: </b>100</span></div>
        <div class="mypadding"><el-button type="primary">兑换</el-button></div>
      </div>
    </el-card>
    <el-card :body-style="{ padding: '0px' ,marginRight:'10px'}" class="card">
      <!-- 图片 -->
      <div class="demo-image">
        <el-image
            style="width: 200px; height: 200px; text-align: center"
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgservice.suning.cn%2Fuimg1%2Fb2c%2Fimage%2FFuNTviuKVDLDhuQFChp7rw.jpg_800w_800h_4e&refer=http%3A%2F%2Fimgservice.suning.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650464837&t=abfda56baac7342a768c9c07fc7618a8"></el-image>
      </div>
      <!-- 描述 -->
      <div style="padding: 14px;">
        <div><h3>方便面</h3></div>
        <div class="mypadding"><span><b>所需积分: </b>5</span></div>
        <div class="mypadding"><span><b>剩余数量: </b>100</span></div>
        <div class="mypadding"><el-button type="primary">兑换</el-button></div>
      </div>
    </el-card>

  </el-row>
    <el-pagination class="mpage"
                   background
                   layout="prev, pager, next"
                   :current-page=currentPage
                   :page-size=pageSize
                   @current-change=page
                   :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "ScoreMarket",
  data() {
    return {
      currentPage: 1,
      total: 0,
      pageSize: 10,
      currentDate: new Date(),
      formInline: {
        place: '',
        region: '',
      },
    }
  },
    methods: {
      page(currentPage) {
        const _this = this
        this.$http.get('/lost/?page=' + currentPage).then((res) => {
          console.log(res.data)
          _this.founds = res.data
          _this.currentPage = 1
          _this.total = 1
          _this.pageSize = 10
        })
      }
  }
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