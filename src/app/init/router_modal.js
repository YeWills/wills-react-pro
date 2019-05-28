import {messages} from "../config/buildConfig";
import Outlets from 'views/outlets';//Outlets Management 页面
import React from "react";

const Page = props=>(
    <BasicLayout {...props}>
        <Outlets {...props} />
    </BasicLayout>
)

const Router = ({ history, user }) => (
    <ConnectedRouter history={history}>
        {/*MultiIntlProvider 国际化用的组件*/}
        <MultiIntlProvider defaultLocale={locale} messageMap={messages} >
            <Switch>
                <Route key={path} path="/dashboard/analysis/realtime" component={Page} />
            </Switch>
        </MultiIntlProvider>
    </ConnectedRouter>
);

/*
比如 BasicLayout 就采用了国际化 injectIntl 与 MultiIntlProvider 配合，
前者提供最新上下文API  React.createContext：Consumer  后者提供 Provider
如下BasicLayout：
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(injectIntl(BasicLayout));
*/
