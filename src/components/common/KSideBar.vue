<template>
  <Sider :collapsed-width="78" class='vue_sider'>
      <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
        <MenuItem name="1" :to="{name: 'index'}">
          <Icon type="ios-navigate"></Icon>
          首页
        </MenuItem>
        <Submenu :name="items.name" v-for="(items,indexs) in menuItem" :key='indexs'>
          <template slot="title">
            <Icon :type="items.icon"></Icon>
            {{items.name}}
          </template>
          <MenuItem :name="item.name" :to="{name: item.urlName}" v-for="(item,index) in items.data" :key='index'>{{item.name}}</MenuItem>
        </Submenu>
      </Menu>
  </Sider>
</template>

<script>
export default {
  name: 'KSideBar',
  data() {
    return {
      theme1: 'light',
      menuItem: [
        {
          name: '菜单配置',
          icon: 'ios-navigate',
          data: [
            {
              name: '模拟数据',
              urlName: 'home',
            },
            {
              name: '模拟数据',
              urlName: 'home',
            },
          ],
        },
        {
          name: '手动配置',
          icon: 'ios-keypad',
          data: [
            {
              name: '配置',
              urlName: 'home',
            },
          ],
        },
      ],
    };
  },
  methods: {

  },
  mounted() {

  },
};
</script>
<style scoped lang="less">
  .vue_sider{
    background: #fff;
    min-height: calc(~'100vh - 60px');
  }
  /deep/ .ivu-menu-vertical.ivu-menu-light:after{
    background: none;
  }
</style>
