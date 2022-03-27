<template>
<div>
  <h3>已发布的失物招领</h3>
  <div style="text-align: center">
  <el-button>查看未完成</el-button><el-button >查看已完成</el-button>
  </div>
  <el-row>
    <el-card :body-style="{ padding: '0px' ,marginRight:'10px'}" class="card">
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
        <div class="mypadding"><span>拾到地点：食堂</span></div>
        <div class="mypadding"><span>描述：学生卡122222</span></div>
        <div class="mypadding"><span>认领者：无</span></div>
        <div class="mypadding"><el-button type="danger">撤销</el-button><el-button type="primary" disabled>完成</el-button></div>
      </div>
    </el-card>
  </el-row>
</div>
</template>

<script>
export default {
  name: "Found_finish"
}
</script>

<style scoped>

</style>