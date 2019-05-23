# wills-react-pro
react前端工程项目

工程项目分几个阶段
先起一个简单页面
首先搞定webpack
- 基础配置
- 代码模块分割
- eslint配置
- jest配置
- hot reloader
逐渐展开

心路历程：
刚开始着手做项目，无从开始
先从配置webpack开始，
先写一个简单页面，
将上面配置写好后
然后再深入前端技术栈
redux 封装
ajax 封装
router 封装
懒加载
预加载

明天先参照 之前写的webpack-code项目，配置基础的，并做笔记。
目前的想法是，先写一个简单的页面，不考虑react技术的页面，让webpack运行起来，
然后按上面的步骤，展开。

认识到 这些 webpack 入门 ：
```
"scripts": {
    "start": "webpack-dev-server --config webpack.dev.js"
  },
```
**webpack-dev-server --config webpack.dev.js**

前期不考虑使用koa进行中转；
前期先做不考虑跨域问题的配置工程；