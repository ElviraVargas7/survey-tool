export const GET_MEMBERS_SUCCESS = 'GET MEMBERS SUCCESS';
export const GET_MEMBERS_FAILURE = 'GET MEMBERS FAILURE';
export const SET_NEW_MEMBER_SUCCESS = 'SET NEW MEMBER SUCCESS';
export const SET_NEW_MEMBER_FAILURE = 'SET NEW MEMBER FAILURE';
export const DELETE_MEMBER_SUCCESS = 'DELETE MEMBER SUCCESS';
export const DELETE_MEMBER_FAILURE = 'DELETE MEMBER FAILURE';
export const GET_MEMBER_DETAILS_SUCCESS = 'GET MEMBER DETAILS SUCCESS';
export const GET_MEMBER_DETAILS_FAILURE = 'GET MEMBER DETAILS FAILURE';
export const SUBMIT_MEMBER_ANSWERS_SUCCESS = 'SUBMIT MEMBER ANSWERS SUCCESS';
export const SUBMIT_MEMBER_ANSWERS_FAILURE = 'SUBMIT MEMBER ANSWERS FAILURE';

export const defaultState = {
  currentMembers: [],
  memberDetails: {},
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_MEMBERS_SUCCESS:
      return {
        ...state,
        getMembersSuccessful: true,
        currentMembers: action.payload,
      };
    case GET_MEMBERS_FAILURE:
      return {
        ...state,
        getMembersSuccessful: false,
        currentMembers: action.payload,
      };
    case SET_NEW_MEMBER_SUCCESS:
      return {
        ...state,
        setNewMemberSuccessful: true,
        currentMembers: action.payload,
      };
    case SET_NEW_MEMBER_FAILURE:
      return {
        ...state,
        setNewMemberSuccessful: false,
      };
    case DELETE_MEMBER_SUCCESS:
      return {
        ...state,
        deleteMemberSuccessful: true,
        currentMembers: action.payload,
      };
    case DELETE_MEMBER_FAILURE:
      return {
        ...state,
        deleteMemberSuccessful: false,
      };
    case GET_MEMBER_DETAILS_SUCCESS:
      return {
        ...state,
        getMemberDetailsSuccessful: true,
        memberDetails: action.payload,
      };
    case GET_MEMBER_DETAILS_FAILURE:
      return {
        ...state,
        getMemberDetailsSuccessful: false,
        memberDetails: action.payload,
      };
    case SUBMIT_MEMBER_ANSWERS_SUCCESS:
      return {
        ...state,
        submitMembersAnswerSuccessful: true,
        memberDetails: action.payload,
      };
    case SUBMIT_MEMBER_ANSWERS_FAILURE:
      return {
        ...state,
        submitMembersAnswerSuccessful: false,
      };
    default:
      return state;
  }
};

export default reducer;

export const selectCurrentMembers = (state) =>
  state.membersReducer.currentMembers;

export const selectMemberDetails = (state) =>
  state.membersReducer.memberDetails;
