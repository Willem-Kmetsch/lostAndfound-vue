<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
             text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template #title>{{ subItem.title }}</template>
                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
                  {{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { computed, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  setup() {
    const items = [
      {
        icon: "el-icon-star-on",
        index: "1",
        title: "失物招领",
        subs: [
          {
            index: "/admin_found",
            title: "失物招领",
          },
        ],
      },

      {
        icon: "el-icon-star-off",
        index: "2",
        title: "寻物启事",
        subs: [
          {
            index: "/admin_lost",
            title: "寻物启事",
          },
        ],
      },
      {
        icon: "el-icon-goods",
        index: "3",
        title: "积分商城",
        subs: [
          {
            index: "/admin_scoreMarket",
            title: "积分商城",
          },
          {
            index:"admin_addGoods",
            title: "增加商品"
          }
        ],
      },
      {
        icon: "el-icon-user",
        index: "4",
        title: "用户管理",
        subs: [
          {
            index: "/admin_userManage",
            title: "用户信息",
          },
          {
            index: "/admin_exchangeGoods",
            title: "兑换信息",
          },
        ],
      },


    ];

    const route = useRoute();

    const onRoutes = computed(() => {
      return route.path;
    });

    const store = useStore();
    const collapse = computed(() => store.state.collapse);

    return {
      items,
      onRoutes,
      collapse,
    };
  },
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
