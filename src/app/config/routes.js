
import Login from 'views/login';
import Outlets from 'views/outlets';//Outlets Management 页面
import OutletDetail from 'views/outletDetail'; //Outlets Management 页面 点击进入的详情页面
import W11orkInProgress from 'views/workInProgress'; //Dashboard（仪表盘）点击进入后的页面
import Unauthorized from 'views/unauthorized';//403或404页面

const authorizedRoutes = [{
  path: '/dashboard/analysis/realtime',
  exact: true,
  //permissions 权限
  permissions: ['admin', 'user'],
  //redirect 当没有权限时重定向到哪个路径
  redirect: '/login',
  component: W11orkInProgress,
  pageTitle: '',
}, {
  path: '/dashboard/analysis/offline',
  exact: true,
  permissions: ['admin', 'user'],
  redirect: '/login',
  component: W11orkInProgress,
  pageTitle: '',
}, {
  path: '/dashboard/workplace',
  exact: true,
  permissions: ['admin'],
  redirect: '/login',
  component: W11orkInProgress,
  pageTitle: '',
}, {
  path: '/outlets',
  exact: true,
  permissions: ['admin', 'user'],
  component: Outlets,
  unauthorized: Unauthorized,
  pageTitle: 'pageTitle_outlets',
  breadcrumb: ['/outlets'],
}, {
  path: '/outlets/:id',
  exact: true,
  permissions: ['admin', 'user'],
  component: OutletDetail,
  unauthorized: Unauthorized,
  pageTitle: 'pageTitle_outletDetail',
  breadcrumb: ['/outlets', '/outlets/:id'],
}, {
  path: '/exception/403',
  exact: true,
  permissions: ['god'],
  component: W11orkInProgress,
  unauthorized: Unauthorized,
}];

//这里需要定义两个路由？，绝对路径时，当登录后，重定向/outlets，
// 而/outlets是需要鉴权的页面，如果没有登录，会自动重定向到/login
//所以这里要定义/login，并且把登录页面指向到这个路由；如果不定义/login将指向404页面。
//所以这里必须要定义绝对路径和/login
const normalRoutes = [{
  path: '/',
  exact: true,
  redirect: '/outlets',
}, {
  path: '/login',
  exact: true,
  component: Login,
}];

const combineRoutes = [
  ...authorizedRoutes,
  ...normalRoutes,
];

export {
  authorizedRoutes,
  normalRoutes,
  combineRoutes,
};
