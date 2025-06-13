export const SUBMIT_ANSWERS_SUCCESS = 'SUBMIT ANSWERS SUCCESS';
export const SUBMIT_ANSWERS_FAILURE = 'SUBMIT ANSWERS FAILURE';

export const defaultState = {
  submitAnswersSuccess: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SUBMIT_ANSWERS_SUCCESS:
      return {
        ...state,
        submitAnswersSuccess: true,
      };
    case SUBMIT_ANSWERS_FAILURE:
      return {
        ...state,
        submitAnswersSuccess: false,
      };
    default:
      return state;
  }
};

export default reducer;
