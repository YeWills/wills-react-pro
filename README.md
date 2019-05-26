## wills-react-pro v0.01

### 版本介绍
此版本是一个最简单的工程配置版本，指包含一个简单界面和项目最基本的html js css webpack处理。

### 如何开始从0启动一个webpack项目
#### 注重 webpack 入口 ：
```
"scripts": {
    "start": "webpack-dev-server --config webpack.dev.js"
  },
```
#### 项目最基本配置：
一个项目无非围绕 html，css，js，图片，axios进行，因此对应的配置如下，本版本下的package.json配置的依赖都是基于以下最基本的配置：
##### html
html模版插件
##### css
scss、css、图片 loader
css、图片与html分离
css3加兼容性前缀
##### js
es6、es7编译成es5
es6、es7的api(如Promise等等)运行profill
一些es6等相关的babel js插件
##### webpack
##### axios
##### 小结
webpack无非就是对html css js 图片文件的打包，因为又多了babel对js的打包，可以说工程项目中对js的打包是最丰富的。






