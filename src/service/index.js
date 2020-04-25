/*
 * 挂载Api接口
 * @Author: tree
 * @Date: 2019-11-06 20:20:51
 * @Last Modified by: tree
 * @Last Modified time: 2019-11-06 20:20:51
 */

const apiContext = require.context('./modules/', true, /\.js$/);
const api = {};
apiContext.keys().forEach((key) => {
  const apiName = key
    .split('/')
    .pop()
    .replace(/\.\w+$/, '');
  api[apiName] = apiContext(key);
});

export default {
  install(Vue) {
    Vue.prototype.$api = api;
  },
};
