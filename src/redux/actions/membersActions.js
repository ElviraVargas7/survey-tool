import axios from 'axios';

import { post, get, put, del } from '@/axios/api';
import {
  setAppLoadingState,
  unsetAppLoadingState,
} from './uiControlFlowActions';
import {
  GET_MEMBERS_FAILURE,
  GET_MEMBERS_SUCCESS,
} from '../reducers/membersReducer';

export const getMembers = () => async (dispatch) => {
  try {
    dispatch(setAppLoadingState());
    const { data: members } = await get(`/members`);

    console.log('members action', members);

    dispatch({
      type: GET_MEMBERS_SUCCESS,
      payload: members,
    });

    return {
      getMembersSuccessful: true,
    };
  } catch {
    dispatch({
      type: GET_MEMBERS_FAILURE,
      payload: [],
    });

    return {
      getMembersSuccessful: false,
    };
  } finally {
    dispatch(unsetAppLoadingState());
  }
};
