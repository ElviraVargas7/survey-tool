export const GET_QUESTIONS_SUCCESS = 'GET QUESTIONS SUCCESS';
export const GET_QUESTIONS_FAILURE = 'GET QUESTIONS FAILURE';

export const defaultState = {
  questions: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        getQuestionsSuccessful: true,
        questions: action.payload,
      };
    case GET_QUESTIONS_FAILURE:
      return {
        ...state,
        getQuestionsSuccessful: false,
        questions: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

export const selectQuestions = (state) => state.questionsReducer.questions;
