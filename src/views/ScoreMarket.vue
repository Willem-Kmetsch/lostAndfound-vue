<template>
  <el-row>
      <el-card :body-style="{ padding: '0px' }">
        <img src="https://pics0.baidu.com/feed/0d338744ebf81a4cc2baf3ab8c41545e242da6be.jpeg?token=b775db98875a06ceb7e4eaced60933eb" class="image">
        <div style="padding: 14px;">
          <span>可乐</span>
          <div class="bottom clearfix">
            <span>10积分</span>
            <el-button type="text" class="button">兑换</el-button>
          </div>
        </div>
      </el-card>
    <el-card :body-style="{ padding: '0px' }">
      <img src="https://pics0.baidu.com/feed/0d338744ebf81a4cc2baf3ab8c41545e242da6be.jpeg?token=b775db98875a06ceb7e4eaced60933eb" class="image">
      <div style="padding: 14px;">
        <span>可乐</span>
        <div class="bottom clearfix">
          <span>10积分</span>
          <el-button type="text" class="button">兑换</el-button>
        </div>
      </div>
    </el-card>
    <el-card :body-style="{ padding: '0px' }">
      <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgservice.suning.cn%2Fuimg1%2Fb2c%2Fimage%2FOtpj05tXmeEsu4q4wA6AiA.jpg_800w_800h_4e&refer=http%3A%2F%2Fimgservice.suning.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649154492&t=34f241e37b051b5f30014a9a8e575685" class="image">
      <div style="padding: 14px;">
        <span>薯片</span>
        <div class="bottom clearfix">
          <span>10积分</span>
          <el-button type="text" class="button">兑换</el-button>
        </div>
      </div>
    </el-card>
  </el-row>

</template>

<script>
export default {
  name: "ScoreMarket"
}
</script>

<style scoped>
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
  width: 200px;
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
</style>