# react-boilerplate-pro

Inspired by [Ant Design Pro](https://pro.ant.design/).

Non-opinionated React Admin System boilerplate integrated with decentralized composable features.

## Features
* :globe_with_meridians: **Internationalization**: [react-intl-context](https://github.com/AlanWei/react-intl-context)
* :lock: **Access control list**: [react-acl-router](https://github.com/AlanWei/react-acl-router)
* :memo: **Nested menu**: [react-sider](https://github.com/AlanWei/react-sider)

## Usage
```bash
$ git clone https://github.com/AlanWei/react-boilerplate-pro.git
$ cd react-boilerplate-pro
$ yarn install
$ yarn mock:server    # start mock data server at http://localhost:3000, npm run mock:server also works
$ yarn dev            # start webpack-dev-server in another terminal window at http://localhost:8080, npm run dev also works
```

## Login Credentials
* Admin: username `admin` & password `123`, authorities is `'admin'`
* User: username `user` & password `123`, authorities is `'user'`

## 启动：
同时执行：
```
yarn mock:server
yarn dev
```
## build 编译
通过编译出来的文件，请加一个相对路径；这样就可以使用webstorm 启动起来了：
例如： <link rel="preload" href="./assets/css/1.52e5b7e0.css"  as="style">
原来是 <link rel="preload" href="assets/css/1.52e5b7e0.css"  as="style">
并且把这个标签给删除：<base href="/">
用webstorm打开时，请再根目录下，启动 yarn mock:server 服务

以下是作者自己封装的框架
- https://github.com/AlanWei/react-boilerplate-pro
- https://github.com/AlanWei/react-sider
- https://github.com/AlanWei/react-acl-router
- https://github.com/AlanWei/react-intl-context

