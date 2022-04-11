<template>
<div>
  <h3>已发布的失物招领</h3>
  <div style="text-align: center">
  <el-button @click="weiwancheng();getfounds()">查看未完成</el-button><el-button @click="yiwancheng();getfinishedfounds()">查看已完成</el-button>
  </div>
  <el-row v-if="!finished">

    <!-- 未完成 -->
    <el-card :body-style="{ padding: '0px' ,marginRight:'10px'}" class="card"  v-for="(found,index) in founds" :key="index">
      <!-- 图片 -->
      <div class="demo-image">
        <el-image
            style="width: 200px; height: 200px; text-align: center"
            :src = "getpic(found.picture)"></el-image>
      </div>
      <!-- 描述 -->
      <div style="padding: 14px;">
        <div><h3>{{ found.name }}</h3></div>
        <div class="bottom clearfix">
          <time class="time">{{ found.foundtime }}</time>
        </div>
        <div class="mypadding"><span>拾到地点：{{ found.foundplace }}</span></div>
        <div class="mypadding"><span>描述：{{ found.itemexplain }}</span></div>
        <div class="mypadding"><span>认领者：{{ name[index] }}</span></div>
        <div class="mypadding"><span>积分：{{found.score == null ? 0 : found.score}}</span></div>
        <div class="mypadding"><el-button type="danger" @click="deleteFound(found.id)">撤销</el-button><el-button type="primary" :disabled="found.state==0" @click="finishFound(found.id)">完成</el-button></div>
      </div>
    </el-card>
  </el-row>

<!--   已完成-->
  <el-row v-if="finished">
    <el-card :body-style="{ padding: '0px' ,marginRight:'10px'}" class="card"  v-for="(found,index) in foundfinish" :key="index">
      <!-- 图片 -->
      <div class="demo-image">
        <el-image
            style="width: 200px; height: 200px; text-align: center"
            :src = "getpic(found.picture)"></el-image>
      </div>
      <!-- 描述 -->
      <div style="padding: 14px;">
        <div><h3>{{ found.name }}</h3></div>
        <div class="bottom clearfix">
          <time class="time">{{ found.finishtime }}</time>
        </div>
        <div class="mypadding"><span>拾到地点：{{ found.foundplace }}</span></div>
        <div class="mypadding"><span>描述：{{ found.itemexplain }}</span></div>
        <div class="mypadding"><span>认领者：{{ name[index] }}</span></div>
        <div class="mypadding"><span>积分：{{found.score == null ? 0 : found.score}}</span></div>
      </div>
    </el-card>
  </el-row>
</div>
</template>

<script>
export default {
  name: "Found_finish",
  data() {
    return {
      userId : 1,
      founds: {},
      foundfinish:{},
      currentPage: 1,
      finished: false,
      name : [1,2,3,4,5,6,7,8,9,10]
    }
  },

  methods:{
    weiwancheng(){
      this.finished = false;
    },
    yiwancheng(){
      this.finished = true;
    },
    getfounds(){
      const _this = this
      this.$http.get('/found/getFinishingFounds?userId=' + this.userId).then((res) => {
        _this.founds = res.data.data.founds
        _this.name = res.data.data.username
      })
    },
    getfinishedfounds(){
      const _this = this
      this.founds = {}
      this.$http.get('/found-finish/getFinishedFounds?userId=' + this.userId).then((res) => {
        _this.foundfinish = res.data.data.founds
        _this.name = res.data.data.username
      })
    },
    // 图片
    getpic(id){
      return "/static/found/" + id
    },

    deleteFound(id){
      const _this = this
      this.$http.get('/found/deleteFound?id=' + id).then((res) => {
        console.log(res)
        alert(res.data.data)
        _this.getfounds()
      })

    },

    finishFound(id){
      const _this = this
      this.$http.get('/found/finishFound?id=' + id).then((res) => {
        console.log(res)
        alert(res.data.data)
        _this.getfounds()
      })
    }

  },

  created() {
    if (this.$store.getters.getUser) {
      this.userId = this.$store.getters.getUser.id
    }
    this.getfounds()
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
  height: 450px;
  text-align: center;
  padding-top: 10px
}
.mypadding{
  padding-top: 10px;
}

</style>