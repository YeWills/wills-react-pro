/**
 * BasicLayout 是一个包含：
 * 1、页面顶层（头部）布局（铃铛通知、用户登出设置等）、
 * 2、页面头部（面包屑式页面路径、页面标题）、
 * 3、页面底部 （Copyright © 2018）
 * 以及提供了 子组件childen，来存放内容
 *
 * 因此BasicLayout 是一种高阶写法，以函数为子组件，页面的正文内容为child子组件，页面的头、顶层、页尾部 为父级组件的公共部分
 * 所以，我们称为BasicLayout是一个容器，容器暴露了一个child子组件，用来写正文
* */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
// import { injectIntl } from 'react-intl-context';
import { injectIntl } from 'src-intl-context';
import { Link } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import get from 'lodash/get';
import map from 'lodash/map';
import head from 'lodash/head';
import isEmpty from 'lodash/isEmpty';
import { Avatar, Dropdown, Menu, Icon, Breadcrumb, Popover } from 'antd';
// import Sider from 'react-sider';
import Sider from 'sider/index';
import 'react-sider/lib/index.css';
//menuData 定义侧边栏菜单的目录
import menuData from 'app/config/menu';
//combineRoutes 所有路由（含鉴权的和不鉴权的---需要权限登陆才能显示的和不需要权限显示的）
import { combineRoutes } from 'app/config/routes';
//reducer相关的action
import appAction from 'app/action';
import getFirstChar from 'utils/getFirstChar';
//generate(生成)Breadcrumb(面包屑)
import generateBreadcrumb from 'utils/generateBreadcrumb';
import LoginChecker from 'hoc/LoginChecker';
//Notification通知、公告
import Notification from 'components/notification';
import logo from 'assets/logo.svg';
import './BasicLayout.scss';



const propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  location: PropTypes.object.isRequired,
  isLogin: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  notices: PropTypes.array.isRequired,
  logout: PropTypes.func.isRequired,
  deleteNotice: PropTypes.func.isRequired,
  notification: PropTypes.object.isRequired,
  resetNotification: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

const defaultProps = {
  prefixCls: 'basicLayout',
  className: '',
};

class BasicLayout extends Component {
  constructor(props) {
    super(props);
    this.menuData = this.formatMenuData(menuData);
  }

  formatMenuData = menu => (
    map(menu, (item) => {
      const result = {
        ...item,
        name: this.props.intl.formatMessage({ id: item.name }),
      };

      if (item.children) {
        result.children = this.formatMenuData(item.children);
      }

      return result;
    })
  );

  renderHeader = () => {
    const {
      logout,
      prefixCls,
      user,
      notices,
      deleteNotice,
      intl,
    } = this.props;

    const noticeMenu = isEmpty(notices) ? (
      <div className={`${prefixCls}-noticeEmpty`}>
        {intl.formatMessage({ id: 'basicLayout_readall_notice' })}
      </div>
    )
      :
      map(notices, notice => (
        <div
          key={notice.id}
          className={`${prefixCls}-noticeItem`}
          onClick={() => deleteNotice(notice.id)}
          role="presentation"
        >
          <div className={`${prefixCls}-noticeTitle`}>{notice.title}</div>
          <div className={`${prefixCls}-noticeMessage`}>{notice.message}</div>
        </div>
      ));


    //userMenu是登录后首页面 右上角的提示A，当鼠标浮动于上方时的下拉菜单
    const userMenu = (
      <Menu>
        <Menu.Item disabled className={`${prefixCls}-userMenuItem`}>
          <Icon type="user" className={`${prefixCls}-userMenuIcon`} />
          <span>{intl.formatMessage({ id: 'basicLayout_profile' })}</span>
        </Menu.Item>
        <Menu.Item disabled className={`${prefixCls}-userMenuItem`}>
          <Icon type="setting" className={`${prefixCls}-userMenuIcon`} />
          <span>{intl.formatMessage({ id: 'basicLayout_setting' })}</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item className={`${prefixCls}-userMenuItem`}>
          <div
            onClick={logout}
            role="presentation"
          >
            <Icon type="logout" className={`${prefixCls}-userMenuIcon`} />
            <span>{intl.formatMessage({ id: 'basicLayout_logout' })}</span>
          </div>
        </Menu.Item>
      </Menu>
    );

    return (
      <div className={`${prefixCls}-header rrr`}>
        <div className={`${prefixCls}-notice`}>
          {/*提示框*/}
          <Popover
            placement="bottomRight"
            arrowPointAtCenter
            trigger="click"
            content={noticeMenu}
          >
            <Icon className={`${prefixCls}-noticeIcon`} type="bell" />
          </Popover>
        </div>
        <Dropdown overlay={userMenu} placement="bottomRight">
          <div className={`${prefixCls}-avatarContainer`}>
            <Avatar className={`${prefixCls}-avatar`}>
              {getFirstChar(user.name)}
            </Avatar>
          </div>
        </Dropdown>
      </div>
    );
  }

  //做一个面包屑的页面头
  renderBreadcrumb = () => {
    const { route: { breadcrumb }, intl, prefixCls } = this.props;
    const breadcrumbData = generateBreadcrumb(breadcrumb);

    return (
      <Breadcrumb className={`${prefixCls}-breadcrumb`}>
        {map(breadcrumbData, (item, idx) => (
          idx === breadcrumbData.length - 1 ?
            <Breadcrumb.Item key={item.href}>
              {intl.formatMessage({ id: item.text })}
            </Breadcrumb.Item>
            :
            <Breadcrumb.Item key={item.href}>
              <Link href={item.href} to={item.href}>
                {intl.formatMessage({ id: item.text })}
              </Link>
            </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    );
  }
  //页面头信息，如页面路径、页面名称
  renderPageHeader = () => {
    const { prefixCls, route: { pageTitle }, intl } = this.props;

    if (isEmpty(pageTitle)) {
      return null;
    }

    const pageTitleStr = intl.formatMessage({ id: pageTitle });
    return (
      <div className={`${prefixCls}-pageHeader`}>
        {/*this.renderBreadcrumb值如为 Home/Outlets Management*/}
        {this.renderBreadcrumb()}
        {/*pageTitleStr值如为 Outlets Management*/}
        <div className={`${prefixCls}-pageTitle`}>{pageTitleStr}</div>
      </div>
    );
  }

  renderFooter = () => (
    <div className={`${this.props.prefixCls}-footer`}>
      Copyright © 2018
    </div>
  )

  renderNotification = () => {
    const { notification: { title, content }, resetNotification } = this.props;
    if (isEmpty(title) && isEmpty(content)) {
      return null;
    }
    return (
      <Notification title={title} content={content} onDismiss={resetNotification} />
    );
  }

  render() {
    const {
      prefixCls,
      className,
      intl,
      isLogin,
      location,
      children,
    } = this.props;

    const classes = classnames({
      [prefixCls]: true,
      [className]: true,
    });
    // console.log('///location.pathname///////'+location.pathname)

    return (
        /*LoginChecker判断是否登录，如果登录，history.push('/login'),否则显示child*/
      <LoginChecker isLogin={isLogin}>
        <div className={classes}>
          <Sider
            appName={intl.formatMessage({ id: 'appName' })}
            appLogo={logo}
            menuData={this.menuData}
            pathname={location.pathname}
          />
          <div className={`${prefixCls}-content`}>
            {/*页面顶层头（铃铛、字母A）*/}
            {this.renderHeader()}
              {/*页面头信息，如页面路径、页面名称*/}
            {this.renderPageHeader()}
            <div className={`${prefixCls}-mainContent`}>
              {children}
            </div>
            {this.renderFooter()}
          </div>
        </div>
        {this.renderNotification()}
      </LoginChecker>
    );
  }
}

const mapStateToProps = (state) => {
  const pathname = get(state, 'router.location.pathname', '');
    // console.log(state)
    // console.log(pathname)
    // console.log(combineRoutes)
  const abc = matchRoutes(combineRoutes, pathname)
    // console.log(abc)
    // console.log(JSON.stringify(abc))
    const o2 = [{
        "route": {
            "path": "/outlets",
            "exact": true,
            "permissions": ["admin", "user"],
            "pageTitle": "pageTitle_outlets",
            "breadcrumb": ["/outlets"]
        }, "match": {"path": "/outlets", "url": "/outlets", "isExact": true, "params": {}}
    }]
  const { route } = head(abc);
    const obj1 = {
        "path": "/outlets",
        "exact": true,
        "permissions": ["admin", "user"],
        "pageTitle": "pageTitle_outlets",
        "breadcrumb": ["/outlets"]
    }
  return {
    isLogin: state.app.isLogin,
    user: state.app.user,
    route,
    notices: state.app.notices,
    notification: state.app.notification,
  };
};

const mapDispatchToProps = {
  logout: appAction.logout,
  deleteNotice: appAction.deleteNotice,
  resetNotification: appAction.resetNotification,
};

BasicLayout.propTypes = propTypes;
BasicLayout.defaultProps = defaultProps;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(injectIntl(BasicLayout));
