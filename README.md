# wills-react-pro

本项目基于 [AlanWei 的 react-boilerplate-pro](https://github.com/AlanWei/react-boilerplate-pro)修改而来，在此表示感谢。

## 技术栈
react16.4 + redux + redux-thunk + webpack4 + react-hot-loader + jest + enzyme

## 主要内容
- connect封装
- 异步请求封装
- redux相关设计
- 路由设计
- jest + enzyme

## 实现功能
- 热更新（需要运行 npm run dev 启动，如果使用npm start启动 不具有此功能）

## Usage
```
$ npm install
$ npm start //方式一
$ npm run dev ； npm run mock:server //方式二 可使用热更新

浏览器运行： http://127.0.0.1:8089
```

## Login Credentials
* Admin: username `admin` & password `123`, authorities is `'admin'`
* User: username `user` & password `123`, authorities is `'user'`

## 项目搭建博客
[wills-react-pro项目笔记](https://yewills.github.io/categories/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B/)

## FAQ
### 去掉登录验证
修改这里：
```
/Users/js/Desktop/work/git/wills-react-pro/src/app/reducer.js
isLogin 设置为 true
```
### 增加页面
设置如下页面：
```
src/app/config/menu.js
src/app/config/routes.js
src/i18n/locale.json
```


