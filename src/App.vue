<template>
  <div id="app">
    <KHeader></KHeader>
    <div class="vue_layout">
      <KSideBar></KSideBar >
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import KHeader from './components/common/KHeader.vue';
import KSideBar from './components/common/KSideBar.vue';

export default {
  name: 'App',
  components: {
    KHeader,
    KSideBar,
  },
  computed: {

  },
  data() {
    return {};
  },
};
</script>
<style lang="less">
  .vue_layout{
    display: flex;
    clear: both;
    background: #f5f7f9;
  }
  .vue_frame{
    width: 100%;
    background: #f5f7f9;
    .vue_layout{
      min-height: calc(~'100vh - 60px');
      .vue_content{
        height: 100%;
      }
    }
    .btn_add{
      border-color: #2d8cf0;
      color: #2d8cf0;
    }
    .vue-form-item{
      display: flex;
      margin: 0 10px;
    }
    .vue_card{
      min-height: 80vh;
      &:hover{
        box-shadow:none;
        background: #fff;
      }
    }
  }
</style>
