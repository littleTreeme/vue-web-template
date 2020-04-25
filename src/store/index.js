import Vue from 'vue';
import Vuex from 'vuex';
import { localStorage } from 'kdutil';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {},
  },
  getters: {
    GET_USERINFO(state) {
      let { userInfo } = state;
      // 如果 state 里面获取不到，那么从localStorage里面获取
      if (!userInfo.userName) {
        userInfo = JSON.parse(localStorage.get('userInfo') || '{}');
      }
      return userInfo;
    },
  },
  mutations: {
    SET_USERINFO(state, data) {
      state.userInfo = data;
    },
  },
  actions: {
    async setUserInfo({ commit }, data) {
      const vm = window.vue;
      await vm.$api.user.getCurrentUser(data).then((res) => {
        commit('SET_USERINFO', res.data);
        localStorage.set('userId', res.data.id);
        localStorage.set('userInfo', JSON.stringify(res.data));
        return res.data;
      });
    },
    async getUserInfo({ state, commit }, data) {
      return new Promise((resolve, reject) => {
        if (!state.userInfo) {
          const vm = window.vue;
          vm.$api.user.getCurrentUser(data).then((res) => {
            commit('SET_USERINFO', res.data);
            resolve(res);
          }).catch((err) => {
            reject(err);
          });
        } else {
          resolve(state.userInfo);
        }
      });
    },
  },
});
