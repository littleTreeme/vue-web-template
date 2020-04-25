<template>
  <div class="layout vue_frame">
    <Layout class="vue_layout">
      <Content :style="{padding: '0 16px 0px'}">
        <Breadcrumb :style="{margin: '10px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
        </Breadcrumb>
        <Card class="vue_card" :bordered="false">
        </Card>
      </Content>
    </Layout>
  </div>
</template>
<script>

export default {
  name: 'home',
  components: {},
  computed: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped>

</style>
