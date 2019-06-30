
import React from 'react';
import testUtil from '../src/utils/testUtil';
import Login from '../src/views/login/Login';

const { shallow, store } = testUtil;

describe('<Login />', () => {
  it('renders without crashing', () => {
    const wrap = shallow(<Login
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
    expect(wrap.find('.view-login-loginPanel').length).toBeTruthy();
  });
});
