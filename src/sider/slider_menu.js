//这是sider 中菜单写好的，拿去直接运行就可以看到效果。
const renderSiderBody = function () {
    const { prefixCls, pathname, menuData } = this.props;
    const { openKeys } = this.state;
    const abc = this.selectedKeys(pathname, this.fullPathMenuData(menuData));
    const da = this.fullPathMenuData(menuData);
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
                <SubMenu
                    key="/dashboard"
                    title={
                        <span>
                            <Icon type="dashboard"/>
                            <span>Dashboard</span>
                          </span>
                    }>
                    <SubMenu
                        key="/dashboard/analysis"
                        title={
                            <span>
                                <Icon/>
                                <span>Analysis</span>
                              </span>
                        }>
                        <Menu.Item key="/dashboard/analysis/realtime">
                            <Link to="/dashboard/analysis/realtime" href="/dashboard/analysis/realtime">
                                <Icon/>
                                <span>Real-time</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/dashboard/analysis/offline">
                            <Link to="/dashboard/analysis/offline" href="/dashboard/analysis/offline">
                                <Icon/>
                                <span>Offline</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>

                    <Menu.Item key="/dashboard/workplace">
                        <Link to="/dashboard/workplace" href="/dashboard/workplace">
                            <Icon/>
                            <span>Workplace</span>
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="/outlets">
                    <Link to="/outlets" href="/outlets">
                        <Icon type="shop"/>
                        <span>Outlets Management</span>
                    </Link>
                </Menu.Item>
                <SubMenu
                    key="/exception"
                    title={
                        <span>
                            <Icon type="table"/>
                            <span>Exception</span>
                          </span>
                    }>
                    <Menu.Item key="/exception/403">
                        <Link to="/exception/403" href="/exception/403">
                            <Icon/>
                            <span>403 Forbidden</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/exception/404">
                        <Link to="/exception/404" href="/exception/404">
                            <Icon/>
                            <span>404 Not Found</span>
                        </Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    );
}


var numbers = [65, 44, 12, 4];

function getSum(total, num) {
    console.error(total)
    console.log(num)
    return total + num;
}