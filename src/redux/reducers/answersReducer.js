export const SUBMIT_ANSWERS_SUCCESS = 'SUBMIT ANSWERS SUCCESS';
export const SUBMIT_ANSWERS_FAILURE = 'SUBMIT ANSWERS FAILURE';
export const GET_AVERAGE_ANSWERS_SUCCESS = 'GET AVERAGE ANSWERS SUCCESS';
export const GET_AVERAGE_ANSWERS_FAILURE = 'GET AVERAGE ANSWERS FAILURE';
export const DOWNLOAD_REPORT_SUCCESS = 'DOWNLOAD REPORT SUCCESS';
export const DOWNLOAD_REPORT_FAILURE = 'DOWNLOAD REPORT FAILURE';

export const defaultState = {
  submitAnswersSuccess: false,
  averageAnalysis: [],
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
    case GET_AVERAGE_ANSWERS_SUCCESS:
      return {
        ...state,
        getAverageAnalysisSuccess: true,
        averageAnalysis: action.payload,
      };
    case GET_AVERAGE_ANSWERS_FAILURE:
      return {
        ...state,
        getAverageAnalysisSuccess: false,
        averageAnalysis: [],
      };
    case DOWNLOAD_REPORT_SUCCESS:
      return {
        ...state,
        downloadReportSuccess: true,
      };
    case DOWNLOAD_REPORT_FAILURE:
      return {
        ...state,
        downloadReportSuccess: false,
      };
    default:
      return state;
  }
};

export default reducer;

export const selectAverageAnalysis = (state) =>
  state.answersReducer.averageAnalysis;
