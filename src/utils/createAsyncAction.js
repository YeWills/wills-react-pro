
const handlerDispatch = (dispatch, action, withDispatch) => {
  withDispatch && dispatch(action);
};

function createAsyncAction(name, callback, options = {}, meta = {}) {
  if (typeof callback !== 'function') {
    throw new Error('[createAsyncAction] callback should be a function');
  }

  const { successHanlder, errorHandler, withDispatch = true } = options;

  return (dispatch) => {
    dispatch({
      meta,
      type: `${name}_REQUEST`,
    });

    try {
      return callback()
        .then((value) => {
          //login 登陆的时候，value是{"id":1,"name":"Admin","authorities":"admin"}
          const action = {
            meta,
            type: `${name}_SUCCESS`,
            payload: value,
          };
          successHanlder && successHanlder(value);
          handlerDispatch(dispatch, action, withDispatch);
          return action;
        })
        .catch((err) => {
          console.error('axios error : ', err);
          errorHandler && errorHandler(err);
          const action = {
            meta,
            type: `${name}_ERROR`,
            payload: err,
            error: true,
          };
          handlerDispatch(dispatch, action, withDispatch);
          return action;
        });
    } catch (err) {
      console.error('js error : ', err);
      errorHandler && errorHandler(err);
      const action = {
        meta,
        type: `${name}_ERROR`,
        payload: err,
        error: true,
      };

      handlerDispatch(dispatch, action, withDispatch);
      return Promise.resolve(action);
    }
  };
}

export default createAsyncAction;
