/*
 * 将所有的页面的路由合并
 * @Author: tree
 * @Date: 2019-11-06 20:20:51
 */

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routeContext = require.context('./modules/', true, /\.js$/);
const routes = routeContext.keys().map((key) => routeContext(key).default);
const router = new Router({
  routes: [].concat(...routes),
});

export default router;
