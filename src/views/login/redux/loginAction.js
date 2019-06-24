import actionType from '../../../utils/actionType';

const resetLoginErrorMsg = () => ({
  type: actionType.APP_RESET_LOGIN_ERROR_MSG,
});

export default {
  resetLoginErrorMsg,
};
