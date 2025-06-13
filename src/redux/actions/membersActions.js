import axios from 'axios';

import { post, get, put, del } from '@/axios/api';
import {
  setAppLoadingState,
  unsetAppLoadingState,
} from './uiControlFlowActions';
import {
  DELETE_MEMBER_FAILURE,
  DELETE_MEMBER_SUCCESS,
  GET_MEMBER_DETAILS_FAILURE,
  GET_MEMBER_DETAILS_SUCCESS,
  GET_MEMBERS_FAILURE,
  GET_MEMBERS_SUCCESS,
  selectCurrentMembers,
  SET_NEW_MEMBER_FAILURE,
  SET_NEW_MEMBER_SUCCESS,
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

export const getMemberDetails = (guid) => async (dispatch) => {
  try {
    dispatch(setAppLoadingState());
    const { data: member } = await get(`/members/${guid}`);

    console.log('member action', member);

    dispatch({
      type: GET_MEMBER_DETAILS_SUCCESS,
      payload: member,
    });

    return {
      getMemberDetailsSuccessful: true,
    };
  } catch {
    dispatch({
      type: GET_MEMBER_DETAILS_FAILURE,
      payload: {},
    });

    return {
      getMemberDetailsSuccessful: false,
    };
  } finally {
    dispatch(unsetAppLoadingState());
  }
};

export const createMember = (member) => async (dispatch, getState) => {
  try {
    dispatch(setAppLoadingState());
    const currentMembers = selectCurrentMembers(getState());
    const { data: newMember } = await post(`/members`, member);

    console.log('members action', newMember);

    dispatch({
      type: SET_NEW_MEMBER_SUCCESS,
      payload: [...currentMembers, newMember],
    });

    return {
      setNewMemberSuccessful: true,
    };
  } catch {
    dispatch({
      type: SET_NEW_MEMBER_FAILURE,
    });

    return {
      setNewMemberSuccessful: false,
    };
  } finally {
    dispatch(unsetAppLoadingState());
  }
};

export const deleteMember = (memberEmail) => async (dispatch, getState) => {
  try {
    dispatch(setAppLoadingState());
    const currentMembers = selectCurrentMembers(getState());
    await del(`/members/${memberEmail}`);

    const updatedMembers = currentMembers.filter(
      (member) => member.email !== memberEmail
    );

    dispatch({
      type: DELETE_MEMBER_SUCCESS,
      payload: updatedMembers,
    });

    return {
      deleteMemberSuccessful: true,
    };
  } catch {
    dispatch({
      type: DELETE_MEMBER_FAILURE,
    });

    return {
      deleteMemberSuccessful: false,
    };
  } finally {
    dispatch(unsetAppLoadingState());
  }
};
