# vue-web-template

> vue-web-template是web端模版，使用iview作为组件库，kdutil作为工具库

## 开发规范

一. 组件命名规则

1.组件的文件名始终是单词大写开头 如：(PascalCase)

````
  export default {
    name: 'MyComponent',
    // ...
  }
  
  import MyComponent from './MyComponent.vue'
   
 ````
    
2.在声明 prop 的时候，其命名应该始终使用 驼峰命名法 如

````
    props: {
      greetingText: String
    }
    //必须规定type或者使用validator进行验证
````

3.组件名应该倾向于完整单词而不是缩写

4.指令缩写 (用 : 表示 v-bind: 、用 @ 表示 v-on: 和用 # 表示 v-slot:)



二.其他命名规范

1.css、less、scss的类型统一采用BEM定义

2.所有的js文件都需要在开头添加整个文件的相关注释

3.js中常量命名全部使用大写，用下划线分割单词

4.字符串用单引号，如 const name = 'Capt. Janeway';

5.运算符处换行时，运算符必须在新行的行首。

6. 用 === 不用 == 



三、VUE 使用规范

1.总是用 key 配合 v-for

2.永远不要把 v-if 和 v-for 同时用在同一个元素上。

3.Object.freeze 方法来冻结一个不会有任何改变的对象，减少组件初始化的时间

4.每个组件 export default {} 内的方法顺序一致，方便查找对应的方法。
  按照 data、props、钩子、watch、computed、components
 
5.props里加数据类型，是否必传，以及默认值，便于排查错误，让传值更严谨

6.使用定时器，要在beforeDestroy()生命周期内清除定时器



四、代码参考提交 commit message
 
 ```
feature: 开发新的功能
fix: 修复bug
refactor: 代码重构
docs: 文档修改
style: 代码格式修改, 注意不是 css 修改
test: 测试用例修改
perf: 改善性能
build: 变更项目构建或外部依赖（例如: webpack、package等）
revert: 代码回退
```

五、开发注意事项

1.项目提交前需跑 npm run eslint 来测试代码是不是符合eslint规范



## 构建脚本

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build

# 单元测试
npm run test

# 代码扫描
npm run lint
```
