import axios from 'axios';

import { post, get, put, del } from '@/axios/api';
import {
  setAppLoadingState,
  unsetAppLoadingState,
} from './uiControlFlowActions';
import {
  GET_AVERAGE_ANSWERS_FAILURE,
  GET_AVERAGE_ANSWERS_SUCCESS,
  SUBMIT_ANSWERS_FAILURE,
  SUBMIT_ANSWERS_SUCCESS,
} from '../reducers/answersReducer';
import {
  selectMemberDetails,
  SUBMIT_MEMBER_ANSWERS_FAILURE,
  SUBMIT_MEMBER_ANSWERS_SUCCESS,
} from '../reducers/membersReducer';

export const submitAnswers =
  (memberGuid, answers) => async (dispatch, getState) => {
    try {
      dispatch(setAppLoadingState());
      const memberDetails = selectMemberDetails(getState());
      console.log('answers', answers);
      await post(`/answers/${memberGuid}`, answers);

      dispatch({
        type: SUBMIT_ANSWERS_SUCCESS,
      });

      dispatch({
        type: SUBMIT_MEMBER_ANSWERS_SUCCESS,
        payload: {
          id: memberDetails.id,
          name: memberDetails.name,
          email: memberDetails.email,
          has_answers: true,
        },
      });

      return {
        submitAnswersSuccessful: true,
      };
    } catch {
      dispatch({
        type: SUBMIT_ANSWERS_FAILURE,
      });

      dispatch({
        type: SUBMIT_MEMBER_ANSWERS_FAILURE,
      });

      return {
        submitAnswersSuccessful: false,
      };
    } finally {
      dispatch(unsetAppLoadingState());
    }
  };

export const getAnalysis = () => async (dispatch) => {
  try {
    dispatch(setAppLoadingState());
    const { data: analysis } = await get(`/answers/averages`);

    console.log('analysis action', analysis);

    dispatch({
      type: GET_AVERAGE_ANSWERS_SUCCESS,
      payload: analysis,
    });

    return {
      getAnalysisSuccessful: true,
    };
  } catch {
    dispatch({
      type: GET_AVERAGE_ANSWERS_FAILURE,
    });

    return {
      getAnalysisSuccessful: false,
    };
  } finally {
    dispatch(unsetAppLoadingState());
  }
};

export const downloadReport = () => async (dispatch) => {
  try {
    dispatch(setAppLoadingState());
    const response = await get('/answers/averages/report', {
      responseType: 'blob',
    });

    const blob = new Blob([response.data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'survey_report.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();

    return { downloadReportSuccessful: true };
  } catch (error) {
    console.error('Download failed:', error);
    return { downloadReportSuccessful: false };
  } finally {
    dispatch(unsetAppLoadingState());
  }
};
