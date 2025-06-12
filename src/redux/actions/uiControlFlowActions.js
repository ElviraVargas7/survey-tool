import {
  SET_BACKDROP_VISIBLE,
  SET_SNACKBAR_VISIBLE,
} from '../reducers/uiControlFlowReducer';

export const toastSnackBar = (message, type) => (dispatch) => {
  dispatch({
    type: SET_SNACKBAR_VISIBLE,
    payload: {
      message,
      type,
      visible: true,
    },
  });
  // Next line is to clear the toast message
  setTimeout(() => {
    dispatch({
      type: SET_SNACKBAR_VISIBLE,
      payload: {
        message: '',
        type: '',
        visible: false,
      },
    });
  }, 4000);
};

export const setAppLoadingState = () => (dispatch) => {
  dispatch({
    type: SET_BACKDROP_VISIBLE,
    payload: {
      visible: true,
    },
  });
};

export const unsetAppLoadingState = () => (dispatch) => {
  dispatch({
    type: SET_BACKDROP_VISIBLE,
    payload: {
      visible: false,
    },
  });
};
