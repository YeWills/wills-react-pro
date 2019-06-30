import * as enzyme from 'enzyme';
import React from 'react';

const { shallow: enzymeShallow } = enzyme;

const getComponentFromHoc = warp => (warp.type && warp.type.WrappedComponent
  // eslint-disable-next-line react/react-in-jsx-scope
  ? <warp.type.WrappedComponent {...warp.props} /> : warp);

const shallow = warp => enzymeShallow(getComponentFromHoc(warp));

export default {
  store: {
    getState: () => {},
    subscribe: () => {},
    dispatch: () => {},
    replaceReducer: () => {},
  },
  shallow,
};
