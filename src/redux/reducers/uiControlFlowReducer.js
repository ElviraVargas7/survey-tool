export const SET_SNACKBAR_VISIBLE = 'SET_SNACKBAR_VISIBLE';
export const SET_BACKDROP_VISIBLE = 'SET_BACKDROP_VISIBLE';

export const defaultState = {
  snackBar: {
    visible: false,
    message: '',
    type: 'error',
  },
  backdrop: {
    visible: false,
  },
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SNACKBAR_VISIBLE:
      return {
        ...state,
        snackBar: {
          ...action.payload,
        },
      };
    case SET_BACKDROP_VISIBLE:
      return {
        ...state,
        backdrop: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;

export const selectSnackBarState = (state) =>
  state.uiControlFlowReducer.snackBar;
export const selectBackDropState = (state) =>
  state.uiControlFlowReducer.backdrop;
