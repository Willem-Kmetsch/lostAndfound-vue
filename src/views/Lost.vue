<template>
  <div class="m-container">
    <h3>寻物启事</h3>
    <Header></Header>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="物品类型">
        <el-select v-model="formInline.region" placeholder="物品类型">
          <el-option label="学生卡" value="学生卡"></el-option>
          <el-option label="身份证" value="身份证"></el-option>
          <el-option label="钥匙" value="钥匙"></el-option>
          <el-option label="其他" value="其他"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="丢失地点">
        <el-select v-model="formInline.place" placeholder="丢失地点">
          <el-option label="食堂" value="食堂"></el-option>
          <el-option label="操场" value="操场"></el-option>
          <el-option label="教室" value="教室"></el-option>
          <el-option label="其他" value="其他"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="block">
        <span class="demonstration">丢失时间</span>
        <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <!--    <div class="block">-->
    <!--      <el-timeline>-->
    <!--        <el-timeline-item v-bind:timestamp="found.id" placement="top" v-for="found in founds">-->
    <!--          <el-card>-->
    <!--            <h4>{{found.name}}</h4>-->
    <!--            <p>{{found.losttime}}</p>-->
    <!--            <p>{{found.lostplace}}</p>-->
    <!--            <p>{{found.ownerid}}</p>-->
    <!--            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">-->
    <!--            <p>{{found.itemexplain}}</p>-->
    <!--            <p>{{found.score}}</p>-->
    <!--          </el-card>-->
    <!--        </el-timeline-item>-->
    <!--      </el-timeline>-->


    <el-row>
      <el-card :body-style="{ padding: '0px' ,marginLeft:'10px'}" class="card">
        <!-- 图片 -->
        <div class="demo-image">
          <el-image
              style="width: 200px; height: 200px; text-align: center"
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic17.997788.com%2F_pic_search%2F00%2F08%2F25%2F11%2F8251198a.jpg&refer=http%3A%2F%2Fpic17.997788.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649148378&t=73c21a3e0155eae4c859afeca0c7eec9"></el-image>
        </div>
        <!-- 描述 -->
        <div style="padding: 14px;">
          <div><h3>学生卡</h3></div>
          <div class="bottom clearfix">
            <time class="time">2022/02/01</time>
          </div>
          <div class="mypadding"><span>丢失地：食堂</span></div>
          <div class="mypadding"><span>描述：学生卡122222</span></div>
          <div class="mypadding"><span>积分悬赏：5</span></div>
          <div class="mypadding"><el-button type="primary">拾到</el-button></div>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' ,marginLeft:'10px'}" class="card">
        <!-- 图片 -->
        <div class="demo-image">
          <el-image
              style="width: 200px; height: 200px; text-align: center"
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi05.c.aliimg.com%2Fimg%2Fibank%2F2012%2F647%2F614%2F656416746_1229097843.jpg&refer=http%3A%2F%2Fi05.c.aliimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649148287&t=5a27d73d21ce7fb81c974bbf434e6c13"></el-image>
        </div>
        <!-- 描述 -->
        <div style="padding: 14px;">
          <div><h3>钥匙</h3></div>
          <div class="bottom clearfix">
            <time class="time">2022/02/01</time>
          </div>
          <div class="mypadding"><span>丢失地：食堂</span></div>
          <div class="mypadding"><span>描述：钥匙</span></div>
          <div class="mypadding"><span>积分悬赏：2</span></div>
          <div class="mypadding"><el-button type="primary">拾到</el-button></div>
        </div>
      </el-card>
      <el-card :body-style="{ padding: '0px' ,marginLeft:'10px'}" class="card">
        <!-- 图片 -->
        <div class="demo-image">
          <el-image
              style="width: 200px; height: 200px; text-align: center"
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic17.997788.com%2F_pic_search%2F00%2F08%2F25%2F11%2F8251198a.jpg&refer=http%3A%2F%2Fpic17.997788.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649148378&t=73c21a3e0155eae4c859afeca0c7eec9"></el-image>
        </div>
        <!-- 描述 -->
        <div style="padding: 14px;">
          <div><h3>学生卡</h3></div>
          <div class="bottom clearfix">
            <time class="time">2022/02/01</time>
          </div>
          <div class="mypadding"><span>丢失地：食堂</span></div>
          <div class="mypadding"><span>描述：学生卡122222</span></div>
          <div class="mypadding"><span>积分悬赏：5</span></div>
          <div class="mypadding"><el-button type="primary">拾到</el-button></div>
        </div>
      </el-card>
      <el-card :body-style="{ padding: '0px' ,marginLeft:'10px'}" class="card">
        <!-- 图片 -->
        <div class="demo-image">
          <el-image
              style="width: 200px; height: 200px; text-align: center"
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic17.997788.com%2F_pic_search%2F00%2F08%2F25%2F11%2F8251198a.jpg&refer=http%3A%2F%2Fpic17.997788.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649148378&t=73c21a3e0155eae4c859afeca0c7eec9"></el-image>
        </div>
        <!-- 描述 -->
        <div style="padding: 14px;">
          <div><h3>学生卡</h3></div>
          <div class="bottom clearfix">
            <time class="time">2022/02/01</time>
          </div>
          <div class="mypadding"><span>丢失地：食堂</span></div>
          <div class="mypadding"><span>描述：学生卡122222</span></div>
          <div class="mypadding"><span>积分悬赏：5</span></div>
          <div class="mypadding"><el-button type="primary">拾到</el-button></div>
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
  data() {
    return {
     founds: {},
      currentPage: 1,
      total: 0,
      pageSize: 10,
      currentDate: new Date(),
      formInline: {
        place: '',
        region: '',
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      value1: '',
      value2: '',
    };
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
  },
  mounted () {
    this.page(1);
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
