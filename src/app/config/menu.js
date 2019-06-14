//定义侧边栏菜单的目录:
//分为三大模块：dashboard、outlets、exception
//对以上三大模块配置子目录
//每个菜单主要配置属性，icon\name\path\children (图标、名字、路径、子目录)
const menuData = [{
  name: 'siderMenu_dashboard',
  icon: 'dashboard',
  path: 'dashboard',
  children: [{
    name: 'siderMenu_analysis',
    path: 'analysis',
    children: [{
      name: 'siderMenu_realtime',
      path: 'realtime',
    }, {
      name: 'siderMenu_offline',
      path: 'offline',
    }],
  },
  {
    name: 'siderMenu_workplace',
    path: 'workplace',
  }],
}, {
  name: 'siderMenu_outlets',
  icon: 'shop',
  path: 'outlets',
}, {
  name: 'siderMenu_exception',
  icon: 'table',
  path: 'exception',
  children: [{
    name: 'siderMenu_403',
    path: '403',
  }, {
    name: 'siderMenu_404',
    path: '404',
  }],
}];

export default menuData;
