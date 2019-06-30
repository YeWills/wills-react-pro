import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import Cookie from 'js-cookie';
import { Input, Icon, Button } from 'antd';
import logo from 'assets/logo.svg';
import loginAction from './redux/loginAction';
import './index.scss';
import {messages,buildConfig, } from '../../app/config/buildConfig';
import connectWills from '../../utils/connectWills';

const propTypes = {
  prefixCls: PropTypes.string,
  intl: PropTypes.object,
  errorMsg: PropTypes.string,
  isLogin: PropTypes.bool,
  loginUser: PropTypes.func,
  history: PropTypes.object,
};

const defaultProps = {
  prefixCls: 'view-login',
};

const componentName = 'app';

@connectWills(componentName, loginAction, {isInjectIntl:true, iswithRouter:true})
export default class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  componentDidMount() {
    const { history } = this.props;
    const { isLogin } = this.props[componentName];
    
    if (isLogin) {
      //实现页面跳转，参考：https://segmentfault.com/a/1190000011137828
      history.push('/');
    }
  }

  componentDidUpdate() {
    const { history } = this.props;
    const { isLogin } = this.props[componentName];
    if (isLogin) {
      history.push('/');
    }
  }

  onInputChange = (e, key) => {
    this.setState({ [key]: e.target.value });
  }

  handleLogin = () => {
    const { post } = this.props.appAction;
    const { username, password } = this.state;
    post('APP_LOGIN', { username, password }, {
      successHanlder: res=>{
        Cookie.set('user', JSON.stringify(res));
        post('notices');
      },
      errorHandler: err=>{
        console.error(err);
        this.props.appAction.resetLoginErrorMsg()
      }
    })
  }

  updateLocale = (locale) => {
    const { intl } = this.props;
    intl.updateLocale(locale);
  }

  renderErrorMsg = () => {
    const { errorMsg, prefixCls } = this.props;
    const show = !isEmpty(errorMsg);
    if (show) {
      return (
        <div className={`${prefixCls}-errorMsg`}>
          {errorMsg}
        </div>
      );
    }
    return null;
  };

  renderLoginPanel = () => {
    const { prefixCls, intl } = this.props;
    const { username, password } = this.state;
    return (
      <div className={`${prefixCls}-loginPanel`}>
        <div className={`${prefixCls}-appInfo`}>
          <img className={`${prefixCls}-appLogo`} src={logo} alt="logo" />
          <span className={`${prefixCls}-appName`}>
            {intl.formatMessage({ id: 'appName' })}
          </span>
        </div>
        <div className={`${prefixCls}-appDesc`}>
          {intl.formatMessage({ id: 'login_appDesc' })}
        </div>
        <Input
          className={`${prefixCls}-loginInput`}
          style={{ height: 40, marginBottom: 24 }}
          placeholder={intl.formatMessage({ id: 'login_usernameInput_placeholder' })}
          type="text"
          prefix={<Icon type="user" style={{ color: 'rgba(0, 0, 0, .25)' }} />}
          value={username}
          onChange={e => this.onInputChange(e, 'username')}
          //onPressEnter 当光标在输入框内时，然后敲回车键就会触发
          onPressEnter={this.handleLogin}
        />
        <Input
          className={`${prefixCls}-loginInput`}
          placeholder={intl.formatMessage({ id: 'login_passwordInput_placeholder' })}
          type="password"
          prefix={<Icon type="lock" style={{ color: 'rgba(0, 0, 0, .25)' }} />}
          value={password}
          onChange={e => this.onInputChange(e, 'password')}
          onPressEnter={this.handleLogin}
        />
        <Button
          className={`${prefixCls}-loginBtn`}
          type="primary"
          onClick={this.handleLogin}
        >
          {intl.formatMessage({ id: 'login_login_btn' })}
        </Button>
        <div>
          {this.renderErrorMsg()}
        </div>
      </div>
    );
  }

  renderIntlSwitch = () => {
    const { prefixCls, intl ,history} = this.props;
    const { locale } = buildConfig;

    return (
      <div className={`${prefixCls}-intlSwitch`}>
        <span
          className={classnames({
            [`${prefixCls}-intlItem`]: true,
            [`${prefixCls}-intlItem-active`]: intl.locale === 'en-us',
          })}
          onClick={() => this.updateLocale('en-us')}
          role="presentation"
        >
          English
        </span>
        <span className={`${prefixCls}-intlSwitchSeparator`}>
          |
        </span>
        <span
          className={classnames({
            [`${prefixCls}-intlItem`]: true,
            [`${prefixCls}-intlItem-active`]: intl.locale === 'zh-cn',
          })}
          onClick={() => this.updateLocale('zh-cn')}
          role="presentation"
        >
          中文
        </span>
        <div onClick={()=>{
          // console.log(JSON.stringify(messages));
          // console.log(JSON.stringify(locale));
          console.log(this.props.loginUser);
          // history.push('/kkkkk')
        }}>oooooooooo</div>
        <Acv></Acv>
      </div>

    );
  }

  render() {
    const { prefixCls } = this.props;
    console.log(this.props)
    console.log(this.props.appAction)
    return (
      <div className={prefixCls}>
        {this.renderLoginPanel()}
        {this.renderIntlSwitch()}
      </div>
    );
  }
}


const Acv = ({aaa})=>{
  return (<div>{aaa}</div>)
}
Acv.defaultProps={aaa:999889}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;