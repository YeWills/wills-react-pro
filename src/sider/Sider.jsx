/**
* // 要十分注意的是，每次切换菜单，页面右边切换页面时，sider都会重置一次；
//记录几个现象：
//1..menu.onOpenChange 每次会自动给参数openKeys push菜单元素；
//2..因为sider切换页面pathname路径时，通常会重置，此时必须要通过pathname 算好openKeys 然后赋值给menu，这样就可以看到menu的开合；
//3..memoize缓存技术非常好，在sider没有重置前都可以起到缓存不重置执行，当sider重置时，会重新计算。但前者已经保证了在同一个页面内，操作流畅；
//4..本示例sider要实现三点需求：
      4.1 点击父级菜单，进行开合展示
      4.2点击无子集的子级菜单（下称子级），其他无关父级菜单闭合；
      4.3选中的子级菜单 高亮显示；
     4.1 实现方案：menu自带4.1的功能，不过要配置menu.onOpenChange和menu.openKeys即可；
     4.2 实现方案：以上的2来实现
     4.3 实现方案：menu自带功能，配置menu.selectedKeys即可实现
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import memoize from 'memoize-one';
import map from 'lodash/map';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import 'antd/lib/menu/style';
import 'antd/lib/icon/style';
import formatMenuPath from './utils/formatMenuPath';
import getFlatMenuKeys from './utils/getFlatMenuKeys';
import getMeunMatchKeys from './utils/getMeunMatchKeys';
import urlToList from './utils/urlToList';

const { SubMenu } = Menu;

const propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    appName: PropTypes.string,
    appLogo: PropTypes.string,
    appBaseUrl: PropTypes.string,
    width: PropTypes.number,
    menuData: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        path: PropTypes.string,
        icon: PropTypes.string,
        children: PropTypes.array,
    })),
    pathname: PropTypes.string,
};

const defaultProps = {
    prefixCls: 'react-sider',
    className: '',
    style: {},
    appName: '',
    appLogo: '',
    appBaseUrl: '/',
    width: 256,
    menuData: [],
    pathname: '/',
};

class Sider extends Component {
    constructor(props) {
        super(props);
        //memoize只是用做缓存技术的，如果不用的话直接去掉即可。
        //formatMenuPath的作用是把path:dashboard 改成path:/dashboard
        this.fullPathMenuData = memoize(menuData => {
            // console.log('fullPathMenuData---memoize1');
            return formatMenuPath(menuData)
        });

        //selectedKeys的作用是将 /exception/403 从菜单列表中，返回 ["/exception", "/exception/403"]
        this.selectedKeys = memoize((pathname, fullPathMenu) => {
            //getFlatMenuKeys(fullPathMenu)::["/dashboard", "/dashboard/analysis", "/dashboard/analysis/realtime", "/dashboard/analysis/offline", "/dashboard/workplace", "/outlets", "/exception", "/exception/403", "/exception/404"]
            //urlToList作用：：/exception/403 变成["/exception", "/exception/403"]
            //getMeunMatchKeys的作用是匹配：：如从全路径中，匹配["/exception", "/exception/403"] 最后返回["/exception", "/exception/403"]
           return getMeunMatchKeys(getFlatMenuKeys(fullPathMenu), urlToList(pathname))
    });
        this.handleOpenChange = this.handleOpenChange.bind(this);
        const { pathname, menuData } = props;

        this.state = {
            openKeys: this.selectedKeys(pathname, this.fullPathMenuData(menuData)),
        };
    }

    handleOpenChange(openKeys){
        this.setState({
            openKeys,
        });
    }

    renderMenu(data){
       return map(data, (item) => {
            if (item.children) {
                return (
                    <SubMenu
                        key={item.path}
                        title={
                            <span>
                                <Icon type={item.icon}/>
                                <span>{item.name}</span>
                              </span>
                        }>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                );
            }
            return (
                <Menu.Item key={item.path}>
                    <Link to={item.path} href={item.path}>
                        <Icon type={item.icon}/>
                        <span>{item.name}</span>
                    </Link>
                </Menu.Item>
            );
        })
    }

    renderSiderHeader(){
        const {
            appBaseUrl,
            prefixCls,
            appLogo,
            appName,
        } = this.props;

        return (
            <Link to={appBaseUrl} href={appBaseUrl}>
                <div className={`${prefixCls}-header`}>
                    <img
                        className={`${prefixCls}-logo`}
                        src={appLogo}
                        alt="logo"
                    />
                    <div className={`${prefixCls}-appName`}>
                        {appName}
                    </div>
                </div>
            </Link>
        );
    }

    renderSiderBody(){
        const { prefixCls, pathname, menuData } = this.props;
        const { openKeys } = this.state;
        const abc = this.selectedKeys(pathname, this.fullPathMenuData(menuData));
        //openKeys 当前展开的 SubMenu 菜单项 key 数组
        //selectedKeys 当前选中的菜单项 key 数组
        //要做一个，点击子集菜单后，关闭其他父级菜单，那么就必须设置openKeys和onOpenChange
        //要做到选中的子集菜单，高亮显示，则必须要设置selectedKeys，且要获取到父级、子级菜单path的数组；
        //经过试验，selectedKeys目前是[/dashboard,/dashboard/analysis,/dashboard/analysis/realtime];
        //其实也可以是[/dashboard/analysis/realtime]

        return (
            <div className={`${prefixCls}-body`}>
                <Menu
                    style={{padding: '16px 0', width: '100%'}}
                    mode="inline"
                    theme="dark"
                    openKeys={openKeys}
                    selectedKeys={abc}
                    onOpenChange={this.handleOpenChange}
                >
                    {this.renderMenu(this.fullPathMenuData(menuData))}
                </Menu>
            </div>
        );
    }

    render() {
        const {
            prefixCls,
            className,
            style,
            width,
        } = this.props;

        const classes = `${prefixCls} ${className}`;
        const styles = {
            ...style,
            width,
        };

        return (
            <div className={classes} style={styles}>
                {this.renderSiderHeader()}
                {this.renderSiderBody()}
            </div>
        );
    }
}
Sider.propTypes = propTypes;
Sider.defaultProps = defaultProps;
export default Sider;
