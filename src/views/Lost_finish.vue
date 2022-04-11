<template>
  <div>
    <h3>已发布的寻物启事</h3>
    <div style="text-align: center">
      <el-button @click="weiwancheng();getlosts()">查看未完成</el-button><el-button @click="yiwancheng();getfinishedlosts()">查看已完成</el-button>
    </div>
    <el-row v-if="!finished">

      <!-- 未完成 -->
      <el-card :body-style="{ padding: '0px' ,marginRight:'10px'}" class="card"  v-for="(lost, index) in losts" :key="index">
        <!-- 图片 -->
        <div class="demo-image">
          <el-image
              style="width: 200px; height: 200px; text-align: center"
              :src = "getpic(lost.picture)"></el-image>
        </div>
        <!-- 描述 -->
        <div style="padding: 14px;">
          <div><h3>{{ lost.name }}</h3></div>
          <div class="bottom clearfix">
            <time class="time">{{ lost.losttime }}</time>
          </div>
          <div class="mypadding"><span>丢失地点：{{ lost.lostplace }}</span></div>
          <div class="mypadding"><span>描述：{{ lost.itemexplain }}</span></div>
          <div class="mypadding"><span>拾到者：{{ name[index] }}</span></div>
          <div class="mypadding"><el-button type="danger" @click="deleteLost(lost.id)">撤销</el-button><el-button type="primary" :disabled="lost.state==0" @click="finishLost(lost.id)">完成</el-button></div>
        </div>
      </el-card>
    </el-row>

    <!--   已完成-->
    <el-row v-if="finished">
      <el-card :body-style="{ padding: '0px' ,marginRight:'10px'}" class="card"  v-for="(lost, index) in lostfinish" :key="index">
        <!-- 图片 -->
        <div class="demo-image">
          <el-image
              style="width: 200px; height: 200px; text-align: center"
              :src = "getpic(lost.picture)"></el-image>
        </div>
        <!-- 描述 -->
        <div style="padding: 14px;">
          <div><h3>{{ lost.name }}</h3></div>
          <div class="bottom clearfix">
            <time class="time">{{ lost.finishtime }}</time>
          </div>
          <div class="mypadding"><span>丢失地点：{{ lost.lostplace }}</span></div>
          <div class="mypadding"><span>描述：{{ lost.itemexplain }}</span></div>
          <div class="mypadding"><span>拾到者：{{ name[index] }}</span></div>
          <div class="mypadding"><span>积分：{{lost.score == null ? 0 : lost.score}}</span></div>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Lost_finish",
  data() {
    return {
      userId : 1,
      losts: {},
      lostfinish:{},
      currentPage: 1,
      finished: false,
      name : [1,2,3,4,5,6,7,8,9,10]
    }
  },

  methods: {
    weiwancheng() {
      this.finished = false;
    },
    yiwancheng() {
      this.finished = true;
    },
    getlosts() {
      const _this = this
      this.$http.get('/lost/getFinishingLosts?userId=' + this.userId).then((res) => {
        _this.losts = res.data.data.losts
        _this.name = res.data.data.username
      })
    },
    getfinishedlosts() {
      const _this = this
      this.$http.get('/lost-finish/getFinishedLosts?userId=' + this.userId).then((res) => {
        _this.lostfinish = res.data.data.losts
        _this.name = res.data.data.username
        console.log(_this.name)
      })
    },
    // 图片
    getpic(id) {
      return "/static/lost/" + id
    },

    deleteLost(id) {
      const _this = this
      this.$http.get('/lost/deleteLost?id=' + id).then((res) => {
        console.log(res)
        alert(res.data.data)
        _this.getlosts()
      })

    },

    finishLost(id) {
      const _this = this
        this.$http.get('/lost/finishLost?id=' + id).then((res) => {
          console.log(res)
          alert(res.data.data)
          _this.getlosts()
        })
    },
  },

  created() {
    if (this.$store.getters.getUser) {
      this.userId = this.$store.getters.getUser.id
    }
    this.getlosts()
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