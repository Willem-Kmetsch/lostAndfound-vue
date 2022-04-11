<template>
  <div class="m-container">
    <h3>失物招领管理</h3>
    <Admin_header></Admin_header>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="">
        <el-input v-model="formInline.school" placeholder="学校"></el-input>
      </el-form-item>
      <el-form-item label="物品类型">
        <el-select v-model="formInline.type" placeholder="物品类型">
          <el-option label="所有" value=""></el-option>
          <el-option label="卡/身份证" value="1"></el-option>
          <el-option label="数码产品" value="2"></el-option>
          <el-option label="钥匙" value="3"></el-option>
          <el-option label="书籍" value="4"></el-option>
          <el-option label="眼镜" value="5"></el-option>
          <el-option label="包" value="6"></el-option>
          <el-option label="其他" value="7"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="拾到地点">
        <el-select v-model="formInline.place" placeholder="拾到地点">
          <el-option label="所有" value=""></el-option>
          <el-option label="食堂" value="食堂"></el-option>
          <el-option label="操场" value="操场"></el-option>
          <el-option label="教室" value="教室"></el-option>
          <el-option label="其他" value="其他"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="block">
        <span class="demonstration">拾到时间</span>
        <el-date-picker
            v-model="formInline.beginDate"
            type="date"
            placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="page(currentPage)">查询</el-button>
      </el-form-item>
    </el-form>


    <el-row>
      <el-card :body-style="{ padding: '0px' ,marginRight:'10px'}" class="card"  v-for="found in founds">
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
          <div class="mypadding"><el-button type="danger" @click="deletefound(found.id)">删除</el-button></div>
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
      userId : 1,
      founds: {},
      currentPage: 1,
      total: 7,
      pageSize: 4,
      currentDate: new Date(),
      formInline: {
        school: '',
        type : '',
        place: '',
        beginDate : ''
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
      this.$http.post('/found/?page=' +  currentPage, this.formInline ).then((res) => {
        _this.founds = res.data.data.data
        _this.total = res.data.data.page
        console.log(_this.founds)
      })
    },
    // 图片
    getpic(id){
      return "/static/found/" + id
    },

    deletefound(id){
      this.$http.get('/found/deleteFound?id=' +  id ).then((res) => {
        alert(res.data.data)
        this.page(this.currentPage)
      })
    }
  },
  mounted() {
    this.page(1);
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
  height: 450px;
  text-align: center;
  padding-top: 10px
}
.mypadding{
  padding-top: 10px;
}

</style>