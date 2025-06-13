export const GET_MEMBERS_SUCCESS = 'GET MEMBERS SUCCESS';
export const GET_MEMBERS_FAILURE = 'GET MEMBERS FAILURE';
export const SET_NEW_MEMBER_SUCCESS = 'SET NEW MEMBER SUCCESS';
export const SET_NEW_MEMBER_FAILURE = 'SET NEW MEMBER FAILURE';
export const DELETE_MEMBER_SUCCESS = 'DELETE MEMBER SUCCESS';
export const DELETE_MEMBER_FAILURE = 'DELETE MEMBER FAILURE';

export const defaultState = {
  currentMembers: [],
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
    default:
      return state;
  }
};

export default reducer;

export const selectCurrentMembers = (state) =>
  state.membersReducer.currentMembers;
