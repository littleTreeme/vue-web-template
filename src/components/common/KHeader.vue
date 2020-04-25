<template>
  <Menu mode="horizontal" :theme="theme" active-name="1" class='vue-header'>
    <div class="vue-header-logo" @click="$router.push('/home')">
      <div class="logo"  alt=""></div>
      <span class="title">项目名称</span>
    </div>
    <div class="vue-header-nav">
      <MenuItem name="3">
        测试
      </MenuItem>
      <div class='logout'>
        <Submenu name="4" class='MenuItem_4'>
          <template slot="title">
            <svg-icon icon-name="logout"></svg-icon>
            小春
          </template>
          <MenuItem name="3-1">账号信息</MenuItem>
          <MenuItem name="3-2">退出</MenuItem>
        </Submenu>
      </div>
    </div>
  </Menu>
</template>

<script>
export default {
  name: 'KHeader',
  data() {
    return {
      theme: 'light',
    };
  },
  methods: {

  },
  mounted() {
  },
};
</script>
<style scoped lang="less">
  .vue-header{
    height: auto;
    .vue-header-logo {
      width: 200px;
      height: 30px;
      display: flex;
      align-items: center;
      float: left;
      justify-content: center;
      position: relative;
      top: 15px;
      left: 20px;
      span.title{
        font-size: 18px;
        margin-left: 10px;
      }
      .logo {
        width: 100px;
        height: 40px;
        background: #eee;
      }
    }
    .vue-header-nav{
      padding-left: 250px;
      margin-right: 20px;
    }
    .logout{
      display: flex;
      justify-content: flex-end;
    }
  }
  .ivu-menu-dark.ivu-menu-horizontal .MenuItem_2{
    color: #030852;
    margin-left: -25px;
  }
  .ivu-form-item{
    margin: 0 10px;
  }
</style>
