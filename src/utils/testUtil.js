import { shallow as enzymeShallow } from 'enzyme';
import React from 'react';

const getComponentFromHoc = warp => (warp.type && warp.type.WrappedComponent
  ? <warp.type.WrappedComponent {...warp.props} /> : warp);

export const shallow = warp => enzymeShallow(getComponentFromHoc(warp));

export const testPost = res => (url, data, options = {}) => {
  const { successHanlder, errorHandler } = options;
  if (res.success) {
    successHanlder && successHanlder(res);
  } else {
    errorHandler && errorHandler(res);
  }
};

export const store = {
  getState: () => {},
  subscribe: () => {},
  dispatch: () => {},
  replaceReducer: () => {},
};
