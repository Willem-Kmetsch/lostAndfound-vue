import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        redirect : 'found'
    },
    {
        path: "/aaa",
        name: "aaa",
        component: () => import ( /* webpackChunkName: "aaa" */ "../views/aaa.vue")
    },
     {
        path: "/index",
        name: "Home",
        component: Home,
        children: [
            {
                path: "/found",
                name: "found",
                meta: {
                    title: '失物招领'
                },
                component: () => import ( /* webpackChunkName: "Found" */ "../views/Found.vue")
            },{
                path: "/found_put",
                name: "found_put",
                meta: {
                    title: '失物招领发布'
                },
                component: () => import ( /* webpackChunkName: "Found_put" */ "../views/Found_put.vue")
            },{
                path: "/lost",
                name: "lost",
                meta: {
                    title: '寻物启事'
                },
                component: () => import ( /* webpackChunkName: "Lost" */ "../views/Lost.vue")
            },{
                path: "/lost_put",
                name: "lost_put",
                meta: {
                    title: '寻物启事发布'
                },
                component: () => import ( /* webpackChunkName: "Lost_put" */ "../views/Lost_put.vue")
            },{
                path: '/404',
                name: '404',
                meta: {
                    title: '找不到页面'
                },
                component: () => import (/* webpackChunkName: "404" */ '../views/404.vue')
            }, {
                path: '/403',
                name: '403',
                meta: {
                    title: '没有权限'
                },
                component: () => import (/* webpackChunkName: "403" */ '../views/403.vue')
            },{
                path: '/user',
                name: 'user',
                meta: {
                    title: '个人中心'
                },
                component: () => import (/* webpackChunkName: "user" */ '../views/User.vue')
            },{
                path: '/scoreMarket',
                name: 'scoreMarket',
                meta: {
                    title: '积分商城'
                },
                component: () => import (/* webpackChunkName: "ScoreMarket" */ '../views/ScoreMarket.vue')
            },
            {
                path: "/found_finish",
                name: "Found_finish",
                meta: {
                    title: '已发布的失物招领'
                },
                component: () => import ( /* webpackChunkName: "login" */ "../views/Found_finish.vue")
            },
            {
                path: "/lost_finish",
                name: "Lost_finish",
                meta: {
                    title: '已发布的寻物启事'
                },
                component: () => import ( /* webpackChunkName: "login" */ "../views/Lost_finish.vue")
            },
        ]
    },{
        path: "/login",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: () => import ( /* webpackChunkName: "login" */ "../views/Login.vue")
    },



];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

// router.beforeEach((to, from, next) => {
//     document.title = `${to.meta.title} | vue-manage-system`;
//     const role = localStorage.getItem('ms_username');
//     if (!role && to.path !== '/login') {
//         next('/login');
//     } else if (to.meta.permission) {
//         // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
//         role === 'admin'
//             ? next()
//             : next('/403');
//     } else {
//         next();
//     }
// });

export default router;