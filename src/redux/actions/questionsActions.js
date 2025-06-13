import axios from 'axios';

import { post, get, put, del } from '@/axios/api';
import {
  setAppLoadingState,
  unsetAppLoadingState,
} from './uiControlFlowActions';
import {
  GET_QUESTIONS_FAILURE,
  GET_QUESTIONS_SUCCESS,
} from '../reducers/questionsReducer';

export const getQuestions = () => async (dispatch) => {
  try {
    dispatch(setAppLoadingState());
    const { data: questions } = await get(`/questions`);

    console.log('questions action', questions);

    dispatch({
      type: GET_QUESTIONS_SUCCESS,
      payload: questions,
    });

    return {
      getQuestionsSuccessful: true,
    };
  } catch {
    dispatch({
      type: GET_QUESTIONS_FAILURE,
      payload: [],
    });

    return {
      getQuestionsSuccessful: false,
    };
  } finally {
    dispatch(unsetAppLoadingState());
  }
};
