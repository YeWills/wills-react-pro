
import Login from 'views/login/Login';
import Outlets from 'views/outlets';//Outlets Management 页面
import Test from 'views/Test';//Outlets Management 页面
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
}, {
  path: '/test',
  exact: true,
  // permissions: ['admin', 'user'],
  component: Test,
  unauthorized: Unauthorized,
}];

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
