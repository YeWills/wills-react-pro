import createReducer from 'utils/createReducer';

const defaultState = () => ({
  outlets: [],
});

const getSuccess = (state, action) => {
  return ({
    ...state,
    outlets: action.payload,
  });
};

export default createReducer(defaultState, {
  OUTLETS_GET_SUCCESS: getSuccess,
});
