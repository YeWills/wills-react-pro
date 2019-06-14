# react-boilerplate-pro

本demo基于 [AlanWei 的 react-boilerplate-pro](https://github.com/AlanWei/react-boilerplate-pro)，感谢 AlanWei 贡献了一个如此好的企业级工程项目。
此项目是接触react至今，见到过的最好的，最完整，最精简的企业级工程项目，没有之一。
此项目为react的进阶乃至高阶运用，非常值得细看。
项目的介绍和使用，点击原项目查看。

本demo的特色在于，在原项目的基础上，将原项目核心部分的 src-acl-router路由封装 、 国际化封装 src-intl-context 和 侧边栏sider 从node_module内拿出来 直接放到src中，让研究项目理解思想更加容易。能搞出这一波操作，真是不服自己都不行。


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

以下是作者自己封装的框架
- https://github.com/AlanWei/react-boilerplate-pro
- https://github.com/AlanWei/react-sider
- https://github.com/AlanWei/react-acl-router
- https://github.com/AlanWei/react-intl-context

## 版本信息：
版本号v1.1，在原项目基础上做了小bug修改，此版本为最大限度保存了原项目的完整性。如果要回归原始版本，以此版本比较好。