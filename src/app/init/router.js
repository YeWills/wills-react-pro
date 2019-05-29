
import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from 'views/login';
//react-acl-router 带有权限控制的路由 参考：https://github.com/AlanWei/react-acl-router
//AclRouter 其实最终返回的是一个数组：
// <Switch>
//     <Route key={path} path="/dashboard/analysis/realtime" component={Page} />
// </Switch>
// import AclRouter from 'react-acl-router';
import AclRouter from 'src-acl-router';

// BasicLayout是一个容器，容器暴露了一个child子组件，用来写正文
import BasicLayout from 'layouts/BasicLayout';
import NormalLayout from 'layouts/NormalLayout';
//NotFound 404页面
import NotFound from 'views/notFound';
import { messages, buildConfig } from '../config/buildConfig';
//authorizedRoutes登录后根据用户权限进入的页面
//normalRoutes 登陆页 和 主页面Outlets Management 页面
import { authorizedRoutes, normalRoutes } from '../config/routes';


const { locale } = buildConfig;
// react-intl-context是雅虎的语言国际化开源项目FormatJS的一部分
// MultiIntlProvider 国际化 , 如果要国际化，就需要此标签进行包裹
// react-acl-router用于构建授权相关的路由，如登录？
// react-acl-router将覆盖render props。
const propTypes = {
  history: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const normalRoutes = [{
  path: '/',
  exact: true,
  redirect: '/outlets',
}, {
  path: '/login',
  exact: true,
  component: Login,
}];

const Router = ({ history, user }) => (
  <HashRouter >
    <Switch>
      <Route
          key="/"
          exact={true}
          redirect="/outlets"
          render={props => {}}
        />
        <Route
          key="/login"
          exact={true}
          render={props => (
            <Login />
          )}
        />
        {/* <Route
          key={path}
          {...omitRouteRenderProperties(route)}
          render={props => (
            <AuthorizedLayout {...props}>
              <Unauthorized {...props} />
            </AuthorizedLayout>
          )}
        />
        <Route
        render={props => (
          <NotFound {...props} />
        )}
      /> */}
      </Switch>
    {/* <AclRouter
          // 当前用户的权限
        authorities={user.authorities}
          //需要授权的路由////authorizedRoutes登录后根据用户权限进入的页面
        authorizedRoutes={authorizedRoutes}
          //所有授权路由的容器//----authorizedRoutes是authorizedLayout的子组件child
          //所有的authorizedRoutes组件都会被包含到authorizedLayout
        authorizedLayout={BasicLayout}
          //不需要授权的路由页面 //normalRoutes 登陆页 和 主页面Outlets Management 页面
        normalRoutes={normalRoutes}
          //不需要授权的路由容器//
        normalLayout={NormalLayout}
          //当路由不匹配时显示的页面//404页面
        notFound={NotFound}
      /> */}
  </HashRouter>
);

const mapStateToProps = state => ({
  user: state.app.user,
});

Router.propTypes = propTypes;
export default connect(mapStateToProps)(Router);
