import Vue from 'vue';
import ViewUI from 'view-design';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store/index';
import 'view-design/dist/styles/iview.css';
import api from '@/service';
import globalMixins from '@/mixins/global';
import cacheKeys from '@/const/cacheKey';
import '@/icons';
import {
  http, localStorage, tools, sessionStorage,
} from 'kdutil';

// const Sentry = sentry.getInstance(Vue, { dsn: 'http://df718b2908704825bbf8b8572813b8b3@sentry.***.com:9000/4' });
http.init({ url: process.env.VUE_APP_URL });

Vue.use(ViewUI);
Vue.use(api);
Vue.mixin(globalMixins);
Vue.prototype.$cacheKeys = cacheKeys;
Vue.prototype.$axios = http;
Vue.prototype.$tools = tools;
Vue.prototype.$localStorage = localStorage;
Vue.prototype.$session = sessionStorage;
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});


window.vue = new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
