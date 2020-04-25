const Mock = require('mockjs');

Mock.mock(new RegExp('/user/info'), 'get', {
  code: 0,
  msg: 'success',
  data: {
    'content|15': [{
      startTime: "@date('yyyy-MM-dd')",
      createUser: '@cname', // 名字为随机中文名字
      endTime: "@date('yyyy-MM-dd')",
      'ago|18-28': 25, // 年龄为18-28之间的随机数字
      'sex|1': ['female', 'male'], // 返回数组中随机的一个
      ud: '@increment', // 自增
    }],
  },
});
