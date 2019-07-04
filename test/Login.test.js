
import React from 'react';
import { shallow, store, testPost } from '../src/utils/testUtil';
import Login from '../src/views/login/Login';


describe('test Login', () => {
  let wrap;
  let warpInstance;
  beforeEach(() => {
    wrap = shallow(<Login
      prefixCls="view-login"
      intl={{
        formatMessage: () => {},
      }}
      errorMsg=""
      isLogin={false}
      loginUser={() => {}}
      history={{
        push: () => {},
      }}
      store={store}
      app={{}}
    />);
    warpInstance = wrap.instance();
  });

  it('should Login render normally ', () => {
    expect(wrap.exists('.view-login')).toBeTruthy();
    expect(wrap.exists('.view-login-loginPanel')).toBeTruthy();
    expect(wrap.exists('.view-login-intlSwitch')).toBeTruthy();
  });

  it('should [componentDidMount] perform normally ', () => {
    const mockPush = jest.fn();
    wrap.setProps({ app: { isLogin: true }, history: { push: mockPush } });
    warpInstance.componentDidMount();
    expect(mockPush).toBeCalled();
  });

  it('should [componentDidUpdate] perform normally ', () => {
    const mockPush = jest.fn();
    wrap.setProps({ app: { isLogin: true }, history: { push: mockPush } });
    warpInstance.componentDidUpdate();
    expect(mockPush).toBeCalled();
  });

  it('should [onInputChange] perform normally ', () => {
    warpInstance.onInputChange({ target: { value: 'test' } }, 'name');
    expect(wrap.state().name).toEqual('test');
  });

  it('when post success,should [handleLogin] perform normally ', () => {
    const mockPost = jest.fn(testPost({ success: true }));
    const appAction = {
      post: mockPost
    };
    wrap.setProps({ appAction });
    warpInstance.handleLogin();
    expect(mockPost).toHaveBeenCalledTimes(2);
  });
  it('when post faild,should [handleLogin] perform normally ', () => {
    const mockPost = jest.fn(testPost({ success: false }));

    const mockResetLoginErrorMsg = jest.fn();
    const appAction = {
      post: mockPost,
      resetLoginErrorMsg: mockResetLoginErrorMsg
    };
    wrap.setProps({ appAction });
    warpInstance.handleLogin();
    expect(mockPost).toHaveBeenCalledTimes(1);
    expect(mockResetLoginErrorMsg).toBeCalled();
  });

  it('should [updateLocale] perform normally ', () => {
    const mockUpdateLocale = jest.fn();
    const intl = {
      updateLocale: mockUpdateLocale,
      formatMessage: jest.fn(),
    };
    wrap.setProps({ intl });
    warpInstance.updateLocale();
    expect(mockUpdateLocale).toBeCalled();
  });

  it('should [renderErrorMsg] perform normally ', () => {
    const result = warpInstance.renderErrorMsg();
    expect(result).toEqual(null);

    wrap.setProps({ errorMsg: 'show error' });
    const ErrorComponent = warpInstance.renderErrorMsg();
    const errorWrap = shallow(ErrorComponent);
    expect(errorWrap.exists('.view-login-errorMsg')).toBeTruthy();
  });

  it('should [renderLoginPanel] perform normally ', () => {
    const mockRenderErrorMsg = jest.fn();
    warpInstance.renderErrorMsg = mockRenderErrorMsg;
    const ResultComponent = warpInstance.renderLoginPanel();
    const resultWrap = shallow(ResultComponent);
    expect(resultWrap.exists('.view-login-loginPanel')).toBeTruthy();
    expect(resultWrap.exists('.view-login-loginInput')).toBeTruthy();
    expect(resultWrap.exists('.view-login-loginBtn')).toBeTruthy();
    expect(mockRenderErrorMsg).toBeCalled();
  });

  it('should [renderIntlSwitch] perform normally ', () => {
    const ResultComponent = warpInstance.renderIntlSwitch();
    const resultWrap = shallow(ResultComponent);
    expect(resultWrap.exists('.view-login-intlSwitch')).toBeTruthy();
    expect(resultWrap.exists('.view-login-intlSwitchSeparator')).toBeTruthy();
  });
});
