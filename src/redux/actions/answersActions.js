import axios from 'axios';

import { post, get, put, del } from '@/axios/api';
import {
  setAppLoadingState,
  unsetAppLoadingState,
} from './uiControlFlowActions';
import {
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
